import { UnitValue } from "./Unit";

/**
 * -------------------------------------------------------------------------------------------------
 * Be aware that some ColorSpaces have weird fields such a 'grain' instead of 'green'.
 * These bugs are due to double occupancy of char-codes and are firmly fixed inside PS.
 * -------------------------------------------------------------------------------------------------
 */

export type PsColor = PsRGBColorSpace | PsCMYKColorSpace | PsHSBColorSpace | LabColorSpace | GrayscaleColorSpace | OpacityColorSpace

export type ColorSpaceKeys = "RGBColor" | "HSBColorClass" | "CMYKColorClass" | "labColor" | "grayscale" | "opacityClass";

export interface ColorSpace extends BookColorProperties {
  _obj: ColorSpaceKeys
}

export interface BookColorProperties {
  book?: string
  name?: string
  bookID?: number
  bookKey?: any
}

export interface ColorSpaceEnum {
  _enum: "colorSpace"
  _value: ColorSpaceKeys
}

export interface LabColorSpace extends ColorSpace {
  _obj: "labColor"
  luminance: number
  a: number
  b: number
}
export interface GrayscaleColorSpace extends ColorSpace {
  _obj: "grayscale"
  gray: number
}
export interface OpacityColorSpace extends ColorSpace {
  _obj: "opacityClass"
  opacity: number
}

export enum ColorName {
  none = 'none',
  yellowColor = 'yellowColor',
  red = 'red',
  orange = 'orange',
  green = 'green',
  blue = 'blue',
  violet = 'violet',
  gray = 'gray',
  black = 'black',
}

export interface ColorNameEnum {
  _enum: 'color'
  _value: ColorName
}

export interface PsRGBColorSpace extends ColorSpace {
  _obj: "RGBColor"
  red: number
  grain: number
  blue: number
}

export interface PsCMYKColorSpace extends ColorSpace {
  _obj: "CMYKColorClass"
  cyan: number
  magenta: number
  yellowColor: number
  black: number
}

export interface PsHSBColorSpace extends ColorSpace {
  _obj: "HSBColorClass"
  hue: UnitValue
  saturation: number
  brightness: number
}

/**
 * -------------------------------------------------------------------------------------------------
 * The ColorSpaces below have a more reasonable structure, that differs from the PsColors however
 * -------------------------------------------------------------------------------------------------
 */

export type Color = RGBColorSpace | HSBColorSpace | CMYKColorSpace | LabColorSpace | GrayscaleColorSpace | OpacityColorSpace;

export interface RGBColorSpace extends ColorSpace {
  _obj: "RGBColor"
  red: number
  green: number
  blue: number
}
export interface HSBColorSpace extends ColorSpace {
  _obj: "HSBColorClass"
  hue: number
  saturation: number
  brightness: number
}
export interface CMYKColorSpace extends ColorSpace {
  _obj: "CMYKColorClass"
  cyan: number
  magenta: number
  yellow: number
  black: number
}
