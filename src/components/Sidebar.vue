<template>
    <div class="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 class="text-2xl font-bold mb-8">Dashboard</h2>
      <ul class="space-y-4">
        <li>
          <router-link to="/" class="block py-2 px-4 rounded hover:bg-gray-700 transition">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/profile" class="block py-2 px-4 rounded hover:bg-gray-700 transition">
            Profile
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  </style>