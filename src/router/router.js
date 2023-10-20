import {createRouter, createWebHistory} from "vue-router";
import Main  from "@/pages/Main";
import PostPage  from "@/pages/PostPage";
import PostForm  from "@/components/PostForm";
import PostIdPage  from "@/pages/PostIdPage";



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
  }
]


const router = createRouter({
  routes,
  history: createWebHistory(process.env.Base_URL)
})

export default router;