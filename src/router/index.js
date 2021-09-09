import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      children:[
        {
          path: 'Download/Setup',
          name: 'Download_Setup',
          component: require('@/components/downloads/Download_Setup').default
    
        },
        {
          path: 'Download/InitFile',
          name: 'Download_InitFile',
          component: require('@/components/downloads/Download_InitFile').default
        },
      ]
    },
  ]
})
