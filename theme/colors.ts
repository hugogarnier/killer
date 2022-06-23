const palette = {
  dark100: '#000000',
  dark200: '#1D1D1D',
  dark300: '#282828',
  grey100: '#4F4F4F',
  grey200: '#828282',
  grey300: '#BDBDBD',
  grey350: '#C8C8C8',
  grey400: '#E0E0E0',
  grey500: '#EFEFEF',
  light: '#FFFFFF',
} as const;

const preColors = {
  ...palette,
  primary: '#222831',
  primaryInverted: '#F2F5FF',
  secondary: '#8292a8',
  tertiary: '#c8cdef',
  success: '#27AE60',
  warning: '#E2B93B',
  error: '#EB5757',
  disabled: palette.grey350,
  background: '#F6F7FB',
  text: palette.dark100,
  contrastText: palette.light,
} as const;

const specialColors = {
  transparent: 'transparent',
} as const;

const opacities = [
  {label: 10, decimal: 25.5, hex: '20'},
  {label: 20, decimal: 51, hex: '33'},
  {label: 30, decimal: 76.5, hex: '4D'},
  {label: 40, decimal: 102, hex: '66'},
  {label: 50, decimal: 127.5, hex: '80'},
  {label: 60, decimal: 153, hex: '99'},
  {label: 70, decimal: 178.5, hex: 'B3'},
  {label: 80, decimal: 204, hex: 'CC'},
  {label: 90, decimal: 229.5, hex: 'E6'},
] as const;

const getOpacityColors = <T, S extends string>(colorsList: T) => {
  const preColorsKeys = Object.entries(colorsList) as [
    keyof typeof colorsList,
    typeof colorsList[keyof typeof colorsList],
  ][];

  return preColorsKeys.reduce((acc, item) => {
    const currentColor = new Array(9).fill(true).reduce((accOpacity, currentOpacity, index) => {
      const cId = index + 1;
      const cColorField = `${item[0]}-${cId * 10}`;
      const cColor = {[cColorField]: `${item[1]}${opacities[index].hex}`};

      return {...accOpacity, ...cColor};
    }, {});

    return {
      ...acc,
      ...currentColor,
    };
  }, {} as Record<`${S}-${typeof opacities[number]['label']}`, string>);
};

export const colors = {
  ...specialColors,
  ...preColors,
  ...getOpacityColors<typeof preColors, keyof typeof preColors>(preColors),
};
