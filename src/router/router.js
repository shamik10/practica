import {createRouter, createWebHistory} from "vue-router";
import Main  from "@/pages/Main";
import PostPage  from "@/pages/PostPage";
import PostForm  from "@/components/PostForm";
import PostIdPage  from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore"
import PostPageCompositionApi from "@/pages/PostPageCompositionApi"


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/postForm',
    component: PostForm
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostPageWithStore
  },
  {
    path: '/composition',
    component: PostPageCompositionApi
  }
]


const router = createRouter({
  routes,
  history: createWebHistory(process.env.Base_URL)
})

export default router;