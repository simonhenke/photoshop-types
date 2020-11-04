import { UnitValue } from "./Unit";

export declare type Color = RGBColorSpace | HSBColorSpace | CMYKColorSpace | LabColorSpace | GrayscaleColorSpace | OpacityColorSpace;
interface ColorSpace {
    _obj: ColorSpaceKeys;
}
export declare type ColorSpaceKeys = "RGBColor" | "HSBColorClass" | "CMYKColorClass" | "labColor" | "grayscale" | "opacityClass";
export interface ColorSpaceEnum {
    _enum: "colorSpace";
    _value: ColorSpaceKeys;
}
export interface RGBColorSpace extends ColorSpace {
    _obj: "RGBColor";
    red: number;
    green: number;
    blue: number;
}
export interface HSBColorSpace extends ColorSpace {
    _obj: "HSBColorClass";
    hue: number;
    saturation: number;
    brightness: number;
}
export interface CMYKColorSpace extends ColorSpace {
    _obj: "CMYKColorClass";
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
}
export interface LabColorSpace extends ColorSpace {
    _obj: "labColor";
    luminance: number;
    a: number;
    b: number;
}
export interface GrayscaleColorSpace extends ColorSpace {
    _obj: "grayscale";
    gray: number;
}
export interface OpacityColorSpace extends ColorSpace {
    _obj: "opacityClass";
    opacity: number;
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

// ---------------- Bugged / Alternative ColorSpaces

export type BuggedColor = BuggedRGB | BuggedCMYK | BuggedHSB | LabColorSpace | GrayscaleColorSpace | OpacityColorSpace

export interface BuggedRGB {
  _obj: "RGBColor"
  red: number
  grain: number
  blue: number
}

export interface BuggedCMYK {
  _obj: "CMYKColorClass"
  cyan: number
  magenta: number
  yellowColor: number
  black: number
}

export interface BuggedHSB {
  _obj: "HSBColorClass"
  hue: UnitValue
  saturation: number
  brightness: number
}