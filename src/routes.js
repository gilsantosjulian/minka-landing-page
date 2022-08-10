import {
  mount,
  route
} from 'navi'

export default mount({
  '/': route({
    title: 'Minka',
    getView: () => import(`views/public/Minka.jsx`),
  }),
  '/hackathon': route({
    title: 'Hackathon',
    getView: () => import(`views/public/Hackathon.jsx`),
  }),
  '/exporter': route({
    title: 'Exporter',
    getView: () => import(`views/public/Exporter.jsx`),
  }),
  '/form': route({
    title: 'Form',
    getView: () => import(`views/public/QRForm.jsx`),
  })
});