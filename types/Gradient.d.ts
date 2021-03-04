import { PsColor, ColorSpaceEnum } from "./Color";
import { PercentValue } from "./Unit";

export interface GradientFormEnum {
  _enum: 'gradientForm'
  _value: GradientForm
}

export type GradientForm = 'customStops' | 'colorNoise'

export interface ColorStopTypeEnum {
  _enum: 'colorStopType'
  _value: ColorStopType
}

export type ColorStopType = 'userStop' | 'foregroundColor' | 'backgroundColor'

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
    _value: 'colorNoise'
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
    _value: 'customStops'
  }
  interfaceIconFrameDimmed?: number
  colors?: ColorStopDescriptor[]
  transparency?: TransparencyStopDescriptor[]
}

export interface GradientTypeEnum {
  _enum: 'gradientType',
  _value: GradientType,
}

export type GradientType = 'linear' | 'radial' | 'angle' | 'reflected' | 'diamond'

export type GradientTypeNumeric = 0 | 1 | 2 | 3 | 4