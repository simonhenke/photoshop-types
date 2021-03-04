export type BlendMode = 
  'normal' |
  'dissolve' |
  'darken' |
  'multiply' |
  'colorBurn' |
  'linearBurn' |
  'darkerColor' |
  'lighten' |
  'screen' |
  'colorDodge' |
  'linearDodge' |
  'lighterColor' |
  'overlay' |
  'softLight' |
  'hardLight' |
  'vividLight' |
  'linearLight' |
  'pinLight' |
  'hardMix' |
  'difference' |
  'exclusion' |
  'blendSubtraction' |
  'blendDivide' |
  'hue' |
  'saturation' |
  'color' |
  'luminosity' |
  // Healing Tools
  'replace' |
  // Brush Tools
  'behind' |
  'clearEnum' |
  // Dodge & Burn Tools
  'dodgeS' |
  'dodgeM' |
  'dodgeH' |
  // Saturation Tool
  'desaturate' |
  'saturate'

export interface BlendModeEnum {
  _enum: 'blendMode'
  _value: BlendMode
}