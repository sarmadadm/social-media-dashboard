<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <TopBar />
      <Feed />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TopBar from '@/components/TopBar.vue';
import Feed from '@/components/Feed.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    TopBar,
    Feed
  }
};
</script>

<style scoped>
</style>