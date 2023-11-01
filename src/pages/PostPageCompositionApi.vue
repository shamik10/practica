<template>
  <div>
    <h1>страница с постами</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск...."
    />
    <div class="app__btns">
      <my-button
      >
        создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
    />
    </my-dialog>
    <post-list
      :posts="sortedAndSerchedPosts"
      v-if="!isPostsLodaing"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>


<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import axios from 'axios'
import {ref} from 'vue'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ],

    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPost,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }

}
</script>



<style scoped>



  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 ;
  }

  .page {
    display: flex;
    margin-top: 15px;
  }

  .page__wrapper {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }

  .current__page {
    border: 2px solid teal;
  }

  .observer {
    height: 30px;
    background: teal;

  }

</style>