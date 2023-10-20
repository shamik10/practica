<template>
  <form @submit.prevent action="">
      <h4>Создание поста </h4>
      <my-input
        v-focus
        v-model="post.title"
        type="text" placeholder="название"
      />
      <my-input
        v-model="post.body"
        type="text" placeholder="описание"/>

      <my-button class="btn"
        @click="createPost">
        создать
      </my-button>
    </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
  watch: {

  }

}
</script>


<style>
  form {
    display: flex;
    flex-direction: column;
  }


  .btn {
    align-self: flex-end;
    margin: 15px 0 ;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;

  }
</style>
