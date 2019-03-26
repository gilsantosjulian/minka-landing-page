import { useState, useEffect } from 'react';

const COMPONENTS = ['home', 'about'];
let subscriptions = [];

export default () => {
  const [componentInViewPort, setComponentInViewPort] = useState('home');
  const options = { threshold: 1 };

  const onComponentInViewPort = (entries) => {
    const { isIntersecting, target: { id }} = entries[0];

    if (isIntersecting)
      setComponentInViewPort(id);
  }
  
  useEffect(() => {
    COMPONENTS.forEach((component) => {
      component = document.getElementById(component);
      const observer = new IntersectionObserver(onComponentInViewPort, options);
      observer.observe(component);
      subscriptions.push({ observer, component });
    });

    return () => {
      subscriptions.forEach(({ observer, component }) => {
        observer.unobserve(component);
      });
      subscriptions = [];
    };
  }, [componentInViewPort])

  return componentInViewPort;
}