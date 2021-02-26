import { UnitValue } from "./Unit";

export interface AlignmentEnum {
  _enum: 'alignmentType'
  _value: Alignment
}

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
  justifyLeft = 'justifyLeft',
  justifyCenter = 'justifyCenter',
  justifyRight = 'justifyRight',
  justifyAll = 'justifyAll',
}

export enum Direction {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export interface UVRectangleDescriptor<UV extends UnitValue = UnitValue> extends UVTopRightBottomLeft<UV> {
  _obj: 'rectangle'
  width: UV
  height: UV
}

export interface PointDescriptor {
  _obj: 'paint' | 'point'
  horizontal: number
  vertical: number
}

export interface UVPointDescriptor<UV extends UnitValue = UnitValue> {
  _obj: 'paint' | 'point'
  horizontal: UV
  vertical: UV
}

export interface TopRightBottomLeft {
  top: number
  right: number
  bottom: number
  left: number
}

export interface UVTopRightBottomLeft<UV extends UnitValue = UnitValue> {
  top: UV
  right: UV
  bottom: UV
  left: UV
}

export interface OrientationEnum {
  _enum: 'orientation'
  _value: Orientation
}

export enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export interface RectangleDescriptor extends TopRightBottomLeft {
  _obj: 'rectangle'
}

export interface PointDescriptorWidthHeight {
  _obj: 'paint'
  width: number
  height: number
}

export type CornersArray = [
  // [x1,y1,x2,y2,x3,y3,x4,y4]
  number, number, number, number,
  number, number, number, number
]

export enum HorizontalLocation {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum VerticalLocation {
  top = 'top',
  center = 'center',
  bottomEnum = 'bottomEnum',
}

