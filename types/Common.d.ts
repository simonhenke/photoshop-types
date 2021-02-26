export enum BlendMode {
  normal = 'normal',
  dissolve = 'dissolve',
  darken = 'darken',
  multiply = 'multiply',
  colorBurn = 'colorBurn',
  linearBurn = 'linearBurn',
  darkerColor = 'darkerColor',
  lighten = 'lighten',
  screen = 'screen',
  colorDodge = 'colorDodge',
  linearDodge = 'linearDodge',
  lighterColor = 'lighterColor',
  overlay = 'overlay',
  softLight = 'softLight',
  hardLight = 'hardLight',
  vividLight = 'vividLight',
  linearLight = 'linearLight',
  pinLight = 'pinLight',
  hardMix = 'hardMix',
  difference = 'difference',
  exclusion = 'exclusion',
  subtract = 'blendSubtraction',
  divide = 'blendDivide',
  hue = 'hue',
  saturation = 'saturation',
  color = 'color',
  luminosity = 'luminosity',


  // Headling Tools
  replace = 'replace',

  // Brush Tools
  behind = 'behind',
  clearEnum = 'clearEnum',

  // Dodge & Burn Tools
  dodgeS = 'dodgeS',
  dodgeM = 'dodgeM',
  dodgeH = 'dodgeH',

  // Saturation Tool
  desaturate = 'desaturate',
  saturate = 'saturate',
}

export interface BlendModeEnum {
  _enum: 'blendMode'
  _value: BlendMode
}