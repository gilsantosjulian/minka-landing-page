import { mount, route } from 'navi'

import publicViews from 'config/publicViews';

const getPublicViews = () => {
  const routes = {};

  publicViews.forEach(publicView => {
    routes[publicView.path] = route({
      title: publicView.name,
      getView: () => import(`views/public/${publicView.name}.${publicView.extension}`),
    });
  });

  return routes;
}

console.log({...getPublicViews()});


export default mount({
  ...getPublicViews(),
});