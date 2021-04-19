import { IntentEnum } from "./Document";
import { PolicyEnum } from "./Preferences";
import { UnitValue } from "./Unit";

/**
 * -------------------------------------------------------------------------------------------------
 * Be aware that some ColorSpaces have weird fields such a 'grain' instead of 'green'.
 * These bugs are due to double occupancy of char-codes and are firmly fixed inside PS.
 * -------------------------------------------------------------------------------------------------
 */

export type PsColor =
  | PsRGBColorSpace
  | PsCMYKColorSpace
  | PsHSBColorSpace
  | LabColorSpace
  | GrayscaleColorSpace
  | OpacityColorSpace
  | BookColorSpace;

export type ColorSpaceKeys =
  | "RGBColor"
  | "HSBColorClass"
  | "CMYKColorClass"
  | "labColor"
  | "grayscale"
  | "opacityClass"
  | "bookColor";

export interface ColorSpace extends BookColorProperties {
  _obj: ColorSpaceKeys;
}

export interface BookColorProperties {
  book?: string;
  name?: string;
  bookID?: number;
  bookKey?: any;
}

export interface BookColorSpace extends ColorSpace {
  _obj: "bookColor";
}

export interface ColorSpaceEnum {
  _enum: "colorSpace";
  _value: ColorSpaceKeys;
}

export interface ColorSpaceModeEnum {
  _enum: 'colorSpace'
  _value: ColorSpaceMode
}

export type ColorSpaceMode =
  | "bitmap"
  | "grayScale"
  | "duotone"
  | "indexedColor"
  | "RGBColor"
  | "CMYKColorEnum"
  | "labColor"
  | "multichannel"
  | "useICCProfile";

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

export type ColorName =
  | "none"
  | "yellowColor"
  | "red"
  | "orange"
  | "green"
  | "blue"
  | "violet"
  | "gray"
  | "black";

export interface ColorNameEnum {
  _enum: "color";
  _value: ColorName;
}

export interface PsRGBColorSpace extends ColorSpace {
  _obj: "RGBColor";
  red: number;
  grain: number;
  blue: number;
}

export interface PsCMYKColorSpace extends ColorSpace {
  _obj: "CMYKColorClass";
  cyan: number;
  magenta: number;
  yellowColor: number;
  black: number;
}

export interface PsHSBColorSpace extends ColorSpace {
  _obj: "HSBColorClass";
  hue: UnitValue;
  saturation: number;
  brightness: number;
}

export type CanvasExtensionColorType =
  | "foregroundColor"
  | "backgroundColor"
  | "white"
  | "black"
  | "grey"
  | "color";

export interface ColorSettingsDescriptor {
  _obj: "colorSettings";
  name: string;
  workingRGB: string;
  workingCMYK: string;
  workingGray: string;
  workingSpot: string;
  policyRGB: PolicyEnum;
  policyCMYK: PolicyEnum;
  policyGray: PolicyEnum;
  askMismatchOpening: boolean;
  askMismatchPasting: boolean;
  askMissing: boolean;
  engine: string;
  intent: IntentEnum;
  mapBlack: boolean;
  dither: boolean;
  renderSceneReferred: boolean;
  monitorCompression: boolean;
  RGBBlendGamma: boolean;
  TextBlendGamma: number;
}

/**
 * -------------------------------------------------------------------------------------------------
 * The ColorSpaces below have a more reasonable structure, that differs from the PsColors however
 * -------------------------------------------------------------------------------------------------
 */

export type Color =
  | RGBColorSpace
  | HSBColorSpace
  | CMYKColorSpace
  | LabColorSpace
  | GrayscaleColorSpace
  | OpacityColorSpace;

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
