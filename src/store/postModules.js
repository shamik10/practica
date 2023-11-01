import { compile } from "vue";

export const postModule = {
  state: () => ({
    posts: [],
      isPostsLodaing: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
    },
    sortedAndSerchedPosts(state, getters) {
      return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLocaleLowerCase()))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true);
        this.isPostsLodaing = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        }

        );
        this.posts = response.data;
        commit('setTotalPages'. Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setPosts', response.data)
      }
      catch(e) {
        console.log('Ошибка:', e)
      }
      finally{
        commit('setLoading', false);

      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page + 1)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        }

        );
        commit( 'setTotalPages',  Math.ceil(response.headers['x-total-count'] / state.limit));
        commit ('setPosts', [...state.posts, ...response.data]);
      }
      catch(e) {
        console.log('Ошибка:', e)
      }

    }
  },
  namespaced: true
}