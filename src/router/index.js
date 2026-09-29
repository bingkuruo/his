import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/visit-record'
  },
  {
    path: '/visit-record',
    name: 'VisitRecordList',
    component: () => import('@/views/VisitRecordList.vue'),
    meta: { title: '就诊记录' }
  },
  {
    path: '/visit-record/:id',
    name: 'VisitRecordDetail',
    component: () => import('@/views/VisitRecordDetail.vue'),
    meta: { title: '就诊详情' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
