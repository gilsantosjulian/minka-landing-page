import { mount, route } from 'navi'

import publicViews from 'config/publicViews';

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const upperCamelCaseToLowerCamelCase = (word) => {
  return word.replace(/([A-Z])/g, (match, another, index) => index === 0 ? match.toLowerCase() : match);
}

const getPublicViews = async () => {
  const routes = {};

  await asyncForEach(publicViews, async (publicView) => {
    const specifiConfiguration = await import(`views/public/config/${upperCamelCaseToLowerCamelCase(publicView.name)}`);
    
    routes[publicView.path] = route({
      ...specifiConfiguration.default,
      title: publicView.name,
      getView: () => import(`views/public/${publicView.name}.${publicView.extension}`),
    });
  });

  return {...routes};
}

export default async () => mount(await getPublicViews());