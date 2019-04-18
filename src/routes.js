import { mount, route } from 'navi'

export default mount({
  '/hackathon': route({
    title: 'Hackathon',
    getView: () => import(`views/public/Hackathon.jsx`),
  }),
  '/exporter': route({
    title: 'Exporter',
    getView: () => import(`views/public/Exporter.jsx`),
  })
});