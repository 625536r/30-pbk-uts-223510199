<template>
  <div class="q-pa-none">
    <q-layout>
      <q-header elevated class="bg-dark">
        <q-toolbar inset></q-toolbar>
        <q-toolbar>
          <q-toolbar-title>
            <strong>TUGAS</strong> PBK TEORI
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar inset><navbar-tabs /></q-toolbar>
      </q-header>

      <q-page-container>
        <q-page>
          <router-view></router-view>
        </q-page>
      </q-page-container>

      <q-footer class="bg-dark text-white q-pa-md">
        <div class="text-center">
          © 2024 Rakhyan Naufhal Ardhana. TUGAS Besar.
        </div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import NavbarTabs from './components/NavbarTabs.vue';


export default {
  name: 'App',
  components: {
    NavbarTabs,
   
  },
};
</script>
