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

export interface PlacedContentTypeEnum {
  _enum: 'placed'
  _value: PlacedContentType
}

export enum PlacedContentType {
  rasterizeContent = 'rasterizeContent',
  vectorData = 'vectorData',
}

export interface SmartObjectGenericProperties {
  _obj: 'smartObject'
  placed: PlacedContentTypeEnum
  documentID: string
  compsList: {
    compID: number
    originalCompID: number
  },
  linked: boolean
  fileReference: string | FileReference
}

export interface LinkedSmartObjectDescriptor extends SmartObjectGenericProperties {
  link: FileReference
  linkMissing: boolean
  linkChanged: boolean
}

export interface FileReference {
  _path: string
  _kind: FileReferenceKind
}

export enum FileReferenceKind {
  local = 'local',
  cloud = 'cloud',
}

export interface CloudLinkDescriptor {
  _obj: 'ccLibrariesElement'
  adobeStockId: string
  adobeStockLiceneseState: AdobeStockLiceneseStateEnum
  dateModified: number
  elementReference: string
  libraryName: string
  name: string
}

export interface AdobeStockLiceneseStateEnum {
  _enum: 'adobeStockLiceneseState'
  _value: AdobeStockLiceneseState
}

export enum AdobeStockLiceneseState {
  licensed = 'licensed',
  unlicensed = 'unlicensed',
}

export type SmartObjectDescriptor = SmartObjectGenericProperties | LinkedSmartObjectDescriptor
