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
        <div v-else>
          <q-item clickable v-ripple v-for="photo in photos" :key="photo.id" @click="viewPhoto(photo.url)">
            <q-item-section thumbnail>
              <img :src="photo.thumbnailUrl" :alt="photo.title">
            </q-item-section>
            <q-item-section>{{ photo.title }}</q-item-section>
          </q-item>
        </div>
      </q-list>
    </div>
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

    onMounted(() => {
      setTimeout(() => {
        albumsStore.fetchPhotos(albumId.value);
        loading.value = false;
      }, 1000);
    });

    const viewPhoto = (url) => {
      window.open(url, '_blank');
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
      goBack
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
</style>
