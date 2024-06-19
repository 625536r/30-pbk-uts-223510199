<template>
  <div>
    <h3 class="text-center">ALBUM</h3>
    <div class="q-pa-none q-gutter-md">
      <div class="spinner-container" v-if="loading">
        <q-spinner-ios color="dark" size="3em" />
        <q-tooltip :offset="[0, 8]">Loading...</q-tooltip>
      </div>
      <div v-else>
        <q-list bordered padding class="rounded-borders" style="max-width: auto">
          <q-item clickable v-ripple v-for="album in albums" :key="album.id" @click="viewAlbum(album)">
            <q-item-section avatar top>
              <q-avatar icon="photo_library" color="dark" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ album.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
import { useAlbumsStore } from '../store/albums';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Album',
  setup() {
    const albumsStore = useAlbumsStore();
    const router = useRouter();
    const loading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        albumsStore.fetchAlbums();
        loading.value = false;
      }, 1000);
    });

    const viewAlbum = (album) => {
      albumsStore.setSelectedAlbum(album);
      router.push(`/albums/${album.id}`);
    };

    return {
      albums: computed(() => albumsStore.albums),
      loading,
      viewAlbum
    };
  }
};
</script>

<style scoped>
.jk {
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
