export type PresetManager = [
  BrushPresetsDescriptor,
  ColorPresetsDescriptor,
  GradientPresetsDescriptor,
  StylePresetsDescriptor,
  PatternPresetsDescriptor,
  ShapeCurvePresetsDescriptor,
  CustomShapePresetsDescriptor,
  ToolPresetsDescriptor
]

export interface PresetsDescriptor<ObjectKey extends string> {
  _obj: ObjectKey
  name: string[]
}

export type BrushPresetsDescriptor = PresetsDescriptor<'brush'>
export type ColorPresetsDescriptor = PresetsDescriptor<'color'>
export type GradientPresetsDescriptor = PresetsDescriptor<'gradientClassEvent'>
export type StylePresetsDescriptor = PresetsDescriptor<'styleClass'>
export type PatternPresetsDescriptor = PresetsDescriptor<'$PttR'>
export type ShapeCurvePresetsDescriptor = PresetsDescriptor<'shapeCurve'>
export type CustomShapePresetsDescriptor = PresetsDescriptor<'customShape'>
export interface ToolPresetsDescriptor extends PresetsDescriptor<'toolPreset'> {
  title: string[]
  class: ClassObject[]
}

export interface FontListDescriptor {
  _obj: 'fontList'
  fontName: string[]
  fontPostScriptName: string[]
  fontFamilyName: string[]
  fontStyleName: string[]
}

export interface PanelListDescriptor {
  _obj: 'panelList'
  name: string
  ID: string
  visible: boolean
  obscured: boolean
}

export interface WorkspaceDescriptor {
  _obj: 'workspace'
  displayName: string
  name: string
  user: boolean
}

export interface SizeEnum {
  _enum: 'size'
  _value: Size
}

export enum Size {
  none = 'none',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface LocaleInfo {
  decimalPoint: ',' | '.'
}

export interface ClassObject {
  _class: string
}
