<template>
    <div class="border p-4 rounded shadow hover:shadow-lg transition">
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Post',
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>