<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1">
        <TopBar />
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-4">Profile Page</h2>
          <p>Profile details go here...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  import TopBar from '@/components/TopBar.vue';
  
  export default {
    name: 'Profile',
    components: {
      Sidebar,
      TopBar
    }
  };
  </script>
  
  <style scoped>
  </style>