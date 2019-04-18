import {
  useState,
  useEffect
} from 'react';

const OPTIONS = [{
    component: 'home',
    options: {
      threshold: 1
    },
  },
  {
    component: 'about',
    options: {
      threshold: 1
    },
  },
  {
    component: 'who',
    options: {
      threshold: 0.5
    },
  },
  {
    component: 'challenges',
    options: {
      threshold: 0.5
    },
  },
  {
    component: 'mentors',
    options: {
      threshold: 0.5
    },
  },
  {
    component: 'agenda',
    options: {
      threshold: 0.5
    },
  },
];
let subscriptions = [];

export default () => {
  const [componentInViewPort, setComponentInViewPort] = useState('home');

  const onComponentInViewPort = (entries) => {
    const {
      isIntersecting,
      target: {
        id
      }
    } = entries[0];

    if (isIntersecting)
      setComponentInViewPort(id);
  }

  useEffect(() => {
    OPTIONS.forEach(({
      component,
      options
    }) => {
      component = document.getElementById(component);
      if (component) {
        const observer = new IntersectionObserver(onComponentInViewPort, options);
        observer.observe(component);
        subscriptions.push({
          observer,
          component
        });
      }
    });

    return () => {
      subscriptions.forEach(({
        observer,
        component
      }) => {
        observer.unobserve(component);
      });
      subscriptions = [];
    };
  }, [componentInViewPort])

  return componentInViewPort;
}