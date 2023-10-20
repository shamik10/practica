<template>
  <div class="s">
    <div>{{ posts.id }}</div>
    <div v-if="posts.length > 0">
      <h3>Список пользователей</h3>
      <transition-group name="user-list">
        <post-item class="post"
          v-for="post in posts" :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: red">
      список пользователей пуст
    </h2>

  </div>
</template>

<script>
  import PostItem from "@/components/PostItem"
  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }

</script>


<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }
  .user-list-item {
    display: inline=block;
    margin-right: 10px;
  }

  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 0.5s ease;
  }

  .user-list-enter-from,
  .user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .user-list-move {
    transition: transform 0.5ms ease;
  }
</style>
