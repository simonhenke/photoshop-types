import { UVPointDescriptor } from "./Geometry";

export interface PathDescriptor {
  ID: number
  count: number
  itemIndex: number
  kind: PathKindEnum
  pathContents: PathContentsDescriptor
  pathName: string
  targetPath: boolean
}

export interface PathKindEnum {
  _enum: 'pathKind',
  _value: PathKind
}

export type PathKind = 'vectorMask' | 'workPath' | 'clippingPath' | 'normalPath' 

export interface PathContentsDescriptor {
  _obj: 'pathClass',
  pathComponents: PathComponentDescriptor[]
}

export interface ShapeOperationEnum {
  _enum: 'shapeOperation',
  _value: ShapeOperation
}

export type ShapeOperation = 'add' | 'subtract' | 'intersect' | 'interfaceIconFrameDimmed' | 'xor'

export interface PathComponentDescriptor {
  _obj: 'pathComponent'
  shapeOperation: ShapeOperationEnum
  subpathListKey: SubpathDescriptor[]
  windingFill?: boolean
}

export interface SubpathDescriptor {
  _obj: 'subpathsList'
  closedSubpath: boolean
  points: PathPointDescriptor[]
}

export interface PathPointDescriptor {
  _obj: 'pathPoint'
  anchor: UVPointDescriptor
  backward?: UVPointDescriptor
  forward?: UVPointDescriptor
  smooth?: boolean
}