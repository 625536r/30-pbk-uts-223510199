<template>
  <div>
    <h4>{{ albumTitle }}</h4>
    <q-btn label="Back To Album" @click="goBack" color="dark" class="q-mb-md" />
    <div class="q-pa-none" style="max-width: auto">
      <q-list bordered>
        <div class="spinner-container" v-if="loading">
          <q-spinner-ios color="dark" size="3em" />
          <q-tooltip :offset="[0, 8]">Loading...</q-tooltip>
        </div>
        <div v-else class="q-gutter-md row items-start q-pa-md">
          <q-card 
            v-for="photo in photos" 
            :key="photo.id" 
            class="my-card col-12 col-sm-6 col-md-4 col-lg-3" 
            @click="viewPhoto(photo.url)"
          >
            <q-img 
              :src="photo.thumbnailUrl" 
              class="fixed-img"
            >
              
            </q-img>
            <q-card-section class="card-description">
              {{ photo.title }}
            </q-card-section>
          </q-card>
        </div>
      </q-list>
    </div>

    <q-dialog v-model="photoDialog" persistent>
      <q-card>
        <q-card-section>
          <img :src="currentPhotoUrl" alt="Photo" style="width: 100%;">
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" @click="photoDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useAlbumsStore } from '../store/albums';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'AlbumDetail',
  setup() {
    const albumsStore = useAlbumsStore();
    const route = useRoute();
    const router = useRouter();

    const albumId = computed(() => route.params.id);
    const loading = ref(true);
    const photoDialog = ref(false);
    const currentPhotoUrl = ref('');

    onMounted(() => {
      setTimeout(() => {
        albumsStore.fetchPhotos(albumId.value);
        loading.value = false;
      }, 1000);
    });

    const viewPhoto = (url) => {
      currentPhotoUrl.value = url;
      photoDialog.value = true;
    };

    const goBack = () => {
      router.push('/album');
    };

    return {
      photos: computed(() => albumsStore.photos),
      loading,
      albumTitle: computed(() => {
        const album = albumsStore.albums.find(a => a.id == albumId.value);
        return album ? album.title : 'Album';
      }),
      viewPhoto,
      goBack,
      photoDialog,
      currentPhotoUrl
    };
  }
};
</script>

<style scoped>
.q-mb-md {
  margin-bottom: 16px;
  margin-left: 16px;
}

h4 {
  text-align: center;
}

.spinner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-card {
  cursor: pointer;
  margin: 16px;
  width: 250px; /* Fixed width for uniform size */
}

.fixed-img {
  height: 200px; /* Fixed height for uniform size */
  object-fit: cover;
}

.card-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.q-gutter-md > .col {
  padding: 8px;
}

.q-pa-md {
  padding: 16px;
  margin-left: 50px;
  margin-right: 50;
}
</style>
