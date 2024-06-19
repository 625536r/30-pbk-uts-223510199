import { defineStore } from 'pinia';
import axios from 'axios';

export const useAlbumsStore = defineStore('albums', {
  state: () => ({
    albums: [],
    photos: [],
    loading: false,
    selectedAlbum: null
  }),
  actions: {
    fetchAlbums() {
      this.loading = true;
      axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          this.albums = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching albums:', error);
          this.loading = false;
        });
    },
    fetchPhotos(albumId) {
      this.loading = true;
      axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => {
          this.photos = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
          this.loading = false;
        });
    },
    setSelectedAlbum(album) {
      this.selectedAlbum = album;
    }
  }
});
