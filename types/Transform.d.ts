import { OrientationEnum } from "./Geometry";
import { FloatRectDescriptor } from "./Layer";
import { Unit } from "./Unit";

export interface TransformMatrixDescriptor {
  _obj: 'transform'
  tx: number,
  ty: number,
  xx: number,
  xy: number,
  yx: number,
  yy: number,
}

export interface WarpDescriptor {
  _obj: 'warp'
  warpPerspective: number
  warpPerspectiveOther: number
  warpRotate: OrientationEnum
  warpStyle: WarpStyleEnum
  warpValue: number
}

export interface WarpStyleEnum {
  _enum: 'warpStyle'
  _value: WarpStyle
}

export type WarpStyle =
  'warpNone' |
  'warpArc' |
  'warpArcLower' |
  'warpArcUpper' |
  'warpArch' |
  'warpBulge' |
  'warpShellLower' |
  'warpShellUpper' |
  'warpFlag' |
  'warpRave' |
  'warpFish' |
  'warpRize' |
  'warpFisheye' |
  'warpInflate' |
  'warpSqueeze' |
  'warpTwist'

export interface RationalPointList {
  _objList: 'rationalPoint'
  horizontal: {
    list: number[]
    _unit: Unit
  },
  vertical: {
    list: number[]
    _unit: Unit
  },
}

export interface CustomEnvelopeWarpDescriptor {
  _obj: 'customEnvelopeWarp'
  meshPoints: RationalPointList
}

export interface WarpDescriptorExtended extends WarpDescriptor {
  bounds: FloatRectDescriptor
  uOrder: number
  vOrder: number
  customEnvelopeWarp: CustomEnvelopeWarpDescriptor
}