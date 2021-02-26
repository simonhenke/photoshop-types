import { PsColor, ColorSpaceEnum } from "./Color";
import { PercentValue } from "./Unit";

export interface GradientFormEnum {
  _enum: 'gradientForm'
  _value: GradientForm
}

export enum GradientForm {
  customStops = 'customStops',
  colorNoise = 'colorNoise',
}

export interface ColorStopTypeEnum {
  _enum: 'colorStopType'
  _value: ColorStopType
}

export enum ColorStopType {
  userStop = 'userStop',
  foregroundColor = 'foregroundColor',
  backgroundColor = 'backgroundColor',
}

export interface ColorStopDescriptor {
  _obj: 'colorStop',
  color: PsColor,
  type: ColorStopTypeEnum,
  location: number,
  midpoint: number,
}

export interface TransparencyStopDescriptor {
  _obj: 'transferSpec',
  opacity: PercentValue,
  location: number,
  midpoint: number,
}

export type GradientDescriptor = CustomStopGradientDescriptor | NoiseGradientDescriptor

export interface GenericGradientProperties {
  _obj: 'gradientClassEvent'
  name: string
  gradientForm: GradientFormEnum
}

export interface NoiseGradientDescriptor extends GenericGradientProperties{
  gradientForm: {
    _enum: 'gradientForm'
    _value: GradientForm.colorNoise
  }
  showTransparency?: boolean
  vectorColor?: boolean
  colorSpace?: ColorSpaceEnum
  randomSeed?: number
  smoothness?: number
  minimum?: [number, number, number, number]
  maximum?: [number, number, number, number]
}

export interface CustomStopGradientDescriptor extends GenericGradientProperties {
  gradientForm: {
    _enum: 'gradientForm'
    _value: GradientForm.customStops
  }
  interfaceIconFrameDimmed?: number
  colors?: ColorStopDescriptor[]
  transparency?: TransparencyStopDescriptor[]
}

export interface GradientTypeEnum {
  _enum: 'gradientType',
  _value: GradientType,
}

export enum GradientType {
  linear = 'linear',
  radial = 'radial',
  angle = 'angle',
  reflected = 'reflected',
  diamond = 'diamond',
}

export enum GradientTypeNumeric {
  linear = 0,
  radial = 1,
  angle = 2,
  reflected = 3,
  diamond = 4,
}