<template>
  <div>
    <!-- <h1>{{ $store.state.isAuth ? "Пользователь авторизован" : "Авторизуйтесь, чтобы войти" }}</h1>
    <h1> {{ $store.getters.doubleLikes }}</h1>
    <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
    <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button> -->
     <h1>страница с постами</h1>
    <my-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSeaerchQuery"
      placeholder="Поиск...."
    />
    <div class="app__btns">
      <my-button
        @click="showDialog"
      >
        создать пост
      </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="sortedAndSerchedPosts"
      @remove="removePost"
      v-if="!isPostsLodaing"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer" ref="observer"></div>
    <div class="page">
      <div class="page__wrapper"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'current__page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>


<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import axios from 'axios'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      // isPostsLodaing: false,
      // selectedSort: '',
      // searchQuery: '',
      // page: 1,
      // limit: 10,
      // totalPages: 0,
      // sortOptions: [
      //   {value: 'title', name: 'По названию'},
      //   {value: 'body', name: 'По содержимому'}
      // ],

    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSeaerchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

    // createPost(post) {
    //   this.posts.push(post);
    //   this.dialogVisible = false;
    // },
    // removePost(post) {
    //   this.posts = this.posts.filter(p => p.id !== post.id)
    // },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  //   async fetchPosts() {
  //     try {
  //       this.isPostsLodaing = true;
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
  //         params: {
  //           _page: this.page,
  //           _limit: this.limit
  //         }
  //       }

  //       );
  //       this.posts = response.data;
  //       this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
  //     }
  //     catch(e) {
  //       alert('Ошибка:', e)
  //     }
  //     finally{
  //       this.isPostsLodaing = false;

  //     }
  //   },
  //   async loadMorePosts() {
  //     try {
  //       this.page += 1;
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
  //         params: {
  //           _page: this.page,
  //           _limit: this.limit
  //         }
  //       }

  //       );
  //       this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
  //       this.posts = [...this.posts, ...response.data];
  //     }
  //     catch(e) {
  //       alert('Ошибка:', e)
  //     }
  //   }
  // },
  mounted() {
    this.fetchPosts();
  },
  computed: {
  ...mapState({
    posts: state => state.post.posts,
    isPostsLodaing: state => state.post.isPostsLodaing,
    selectedSort: state => state.post.selectedSort,
    searchQuery: state => state.post.searchQuery,
    page: state => state.post.page,
    limit: state => state.post.limit,
    totalPages: state => state.post.totalPages,
    sortOptions: state => state.post.sortOptions
  }),
  ...mapGetters({
    sortedAndSerchedPosts: 'post/sortedAndSerchedPosts',
    sortedPosts: 'post/sortedPosts'
  })
  //   sortedPosts() {
  //     return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
  //   },
  //   sortedAndSerchedPosts() {
  //     return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase()))
  }
  },
  watch: {
    // page() {
    //   this.fetchPosts();

    // }
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