<template>
  <div class="post">
    <div class="">
      <div>Название: <strong>{{ post.title }}</strong></div>
      <div>Описание: <strong>{{ post.body }}</strong></div>
    </div>
    <div class="post__btns">
      <my-button
      @click="$router.push(`/posts/${post.id}`)"
      >открыть
      </my-button>
      <my-button
      @click="$emit('remove', post)"
      >удалить
      </my-button>
    </div>
  </div>

</template>

<script>
// import  from ''

  export default {
  components: {  },
    data() {
      return {
        id: 0
      }
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      deletePost() {
        this.id = post.id
      }
    }
  }
</script>

<style  scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post__btns {
    display: flex;
  }

</style>
