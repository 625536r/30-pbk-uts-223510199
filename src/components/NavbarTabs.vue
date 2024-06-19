<template>
  <q-toolbar>
    <q-tabs align-text="left">
      <q-route-tab to="/" label="Todos" />
      <q-route-tab to="/post" label="Post" />
      <q-route-tab to="/album" label="Album" />
    </q-tabs>
  </q-toolbar>
</template>

<script>
export default {
  name: 'NavbarTabs',
};
</script>

