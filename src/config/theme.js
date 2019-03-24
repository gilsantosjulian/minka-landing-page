import { base } from 'grommet/themes';

export default {
  ...base,
  global: {
    ...base.global,
    colors: {
      ...base.global.colors,
      'accent-1': '#FFD16A',
      'accent-2': '#5ABFED',
      'brand': '#5ABFED',
      'dark-1': '#29344E',
      'dark-2': '#2E416D',
      'dark-3': '#534b77',
      'dark-4': '#4C5D8E',
    },
    breakpoints: {
      ...base.global.breakpoints,
      xsmall: {
        value: 200,
      },
    },
  },
  paragraph: {
    extend: {
      fontFamily: 'Foundry'
    },
  },
  text: {
    extend: {
      fontFamily: 'Foundry'
    },
  },
  heading: {
    extend: {
      fontFamily: 'Foundry'
    },
  },
  box: {
    extend: {
      fontFamily: 'Foundry'
    },
  },
};
