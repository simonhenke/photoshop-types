import { CornersArray, PointDescriptor, PointDescriptorWidthHeight } from "./Geometry";
import { WarpDescriptorExtended } from "./Transform";
import { DensityValue, Fraction } from "./Unit";

export interface SmartObjectMore {
  ID: string // UUID
  placed: string // UUID
  pageNumber: number
  totalPages: number
  crop: number
  frameStep: Fraction
  duration: Fraction
  frameCount: number
  antiAliasType: number
  type: number
  transform: CornersArray
  nonAffineTransform: CornersArray
  warp: WarpDescriptorExtended
  x: PointDescriptor
  size: PointDescriptorWidthHeight
  resolution: DensityValue
  comp: number
  compInfo: {
    compID: number
    originalCompID: number
  }
}

export interface SmartObjectGenericProperties {
  _obj: 'smartObject'
  placed: {
    _enum: 'placed'
    _value: 'rasterizeContent' // TODO: more?
  },
  documentID: string,
  compsList: {
    compID: number,
    originalCompID: number,
  },
  linked: boolean,
  fileReference: string,
}

export interface LinkedSmartObjectDescriptor extends SmartObjectGenericProperties {
  link: {
    _path: string
    _kind: 'local' | string // TODO: more?
  }
  linkMissing: boolean
  linkChanged: boolean
}

export type SmartObjectDescriptor = SmartObjectGenericProperties | LinkedSmartObjectDescriptor
