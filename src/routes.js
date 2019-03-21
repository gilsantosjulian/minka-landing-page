import { mount, route } from 'navi'

export default mount({
  '/': route({
    title: 'Home',
    getView: () => import('./views/public/Home.jsx')
  }),
    
  '/another': route({
    title: 'Another',
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))

      return import('./views/public/Another.mdx')
    }
  }),
})