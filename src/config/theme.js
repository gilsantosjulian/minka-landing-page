import { base } from 'grommet/themes';

export default {
  ...base,
  global: {
    ...base.global,
    colors: {
      ...base.global.colors,
    },
    breakpoints: {
      ...base.global.breakpoints,
      xsmall: {
        value: 200,
      },
    },
  },
};
