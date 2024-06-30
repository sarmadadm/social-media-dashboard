<template>
    <div class="p-4 space-y-4">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import Post from './Post.vue';
  
  export default {
    name: 'Feed',
    components: {
      Post
    },
    data() {
      return {
        posts: [
          { id: 1, content: 'This is the first post' },
          { id: 2, content: 'This is the second post' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>