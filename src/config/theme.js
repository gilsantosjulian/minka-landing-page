import {
  base
} from 'grommet/themes';

export default {
  ...base,
  global: {
    ...base.global,
    colors: {
      ...base.global.colors,
      'accent-1': '#FFD16A',
      'accent-2': '#5ABFED',
      'accent-3': '#435688',
      'brand': '#2E416D',
      'dark-1': '#29344E',
      'dark-2': '#2E416D',
      'dark-3': '#534b77',
      'dark-4': '#4C5D8E',
      'light-1': '#FFFFFF',
    },
    focus: {
      border: {
        color: 'focus'
      }
    },
    breakpoints: {
      ...base.global.breakpoints,
      xsmall: {
        value: 400,
      },
      small: {
        value: 576,
      },
      medium: {
        value: 768,
      },
      large: {
        value: 1110,
      },
      xlarge: {
        value: 1200,
      },
    },
    deviceBreakpoints: {
      phone: null,
      tablet: null,
      computer: null,
    }
  },
  paragraph: {
    xsmall: {
      size: '16px',
    },
    small: {
      size: '16px',
    },
    medium: {
      size: '20px',
    },
    large: {
      size: '20px',
    },
    xlarge: {
      size: '20px',
    },
    extend: {
      fontFamily: 'Foundry',
      maxWidth: '100%',
    },
  },
  text: {
    xsmall: {
      size: '16px',
    },
    small: {
      size: '16px',
    },
    medium: {
      size: '20px',
    },
    large: {
      size: '20px',
    },
    xlarge: {
      size: '20px',
    },
    extend: {
      fontFamily: 'Foundry',
      fontWeight: 600,
    },
  },
  heading: {
    extend: {
      fontFamily: 'Foundry',
    },
    level: {
      1: {
        xsmall: {
          size: '40px',
        },
        small: {
          size: '40px',
        },
        medium: {
          size: '60px',
        },
        large: {
          size: '60px',
        },
        xlarge: {
          size: '60px',
        },
      },
      2: {
        xsmall: {
          size: '40px',
        },
        small: {
          size: '40px',
        },
        medium: {
          size: '40px',
        },
        large: {
          size: '40px',
        },
        xlarge: {
          size: '40px',
        },
      },
      3: {
        xsmall: {
          size: '30px',
        },
        small: {
          size: '30px',
        },
        medium: {
          size: '25px',
        },
        large: {
          size: '25px',
        },
        xlarge: {
          size: '25px',
        },
      },
      4: {
        xsmall: {
          size: '20px',
        },
        small: {
          size: '20px',
        },
        medium: {
          size: '16px',
        },
        large: {
          size: '16px',
        },
        xlarge: {
          size: '16px',
        },
      },
    },
  },
  box: {
    xsmall: {
      size: '16px',
    },
    small: {
      size: '16px',
    },
    medium: {
      size: '20px',
    },
    large: {
      size: '20px',
    },
    xlarge: {
      size: '20px',
    },
    extend: {
      fontFamily: 'Foundry',
    },
  },
  anchor: {
    hover: {
      textDecoration: 'none',
    },
  },
  button: {
    border: {
      radius: '6px',
    },
  },
  table: {
    body: {
      align: 'center',
      border: 'bottom',
      fill: true,
    },
    header: {
      align: 'center',
      border: 'bottom',
      pad: {
        horizontal: 'large',
        vertical: 'xsmall'
      },
      verticalAlign: 'bottom',
      background: {
        color: '#435688',
        opacity: 'strong'
      }
    }
  }
};