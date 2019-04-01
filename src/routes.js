import { mount, route } from 'navi'

export default mount({
  '/': route({
    title: 'Minka',
    getView: () => import(`views/public/Minka.jsx`),
  }),
  '/exporter': route({
    title: 'Exporter',
    getView: () => import(`views/public/Exporter.jsx`),
  })
});