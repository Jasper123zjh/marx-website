import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Article1 from '../views/Article1.vue';
import Article2 from '../views/Article2.vue';
import Article3 from '../views/Article3.vue';
import Walk from '../views/Walk.vue';
import Town from '../views/Town.vue';
import Folk from '../views/Folk.vue';
import Character from '../views/Character.vue';
import Economics from '../views/Economics.vue';
import Tour from '../views/Tour.vue';
import Location from '../components/Location.vue';
import Source from '../components/Source.vue';
import History from '../components/History.vue';
import Economic from '../components/Economic.vue';
import Folk2 from '../components/Folk2.vue';
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home }, // 首页
  { path: '/article1', component: Article1 }, // 文章详情页
  { path: '/article2', component: Article2 },
  { path: '/article3', component: Article3 },
  { path: '/walk', component: Walk },  // 走进云州页面
  { path: '/town', component: Town },  // 黄花之乡页面
  { path: '/folk', component: Folk },  // 民俗民生页面
  { path: '/character', component: Character },  // 特色产业页面
  { path: '/economics', component: Economics },  // 经济发展页面
  { path: '/tour', component: Tour },  // 旅游观光页面
  { path: '/location', component: Location },
  { path: '/source', component: Source },
  { path: '/history', component: History },
  { path: '/economic', component: Economic },
  { path: '/folk2', component: Folk2 },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
