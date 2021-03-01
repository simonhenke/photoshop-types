import { ColorSpaceEnum, ColorSpaceKeys, PsColor } from './Color'
import { TopRightBottomLeft, UVPointDescriptor } from './Geometry'
import { GeneratorSettingsDescriptor } from './Layer'
import {
  DocumentTargetReference,
  LayerIdReference,
  LayerIndexReference,
  PropertyReference,
} from './Reference'
import { FileReference } from './SmartObject'
import {
  DensityValue,
  DistanceValue,
  NoneValue,
  PercentValue,
  PixelValue,
} from './Unit'

export interface DocumentDescriptor {
  mode: ColorSpaceEnum
  bigNudgeH: number
  bigNudgeV: number
  rulerOriginH: number
  rulerOriginV: number
  width: DistanceValue
  height: DistanceValue
  resolution: DensityValue
  title: string
  fileInfo: FileInfo
  numberOfPaths: number
  numberOfChannels: number
  numberOfLayers: number
  targetPathIndex: number
  workPathIndex: number
  clippingPathInfo: ClippingPathInfo
  depth: 8 | 16 | 32
  fileReference: FileReference
  documentID: number
  copyright: boolean
  watermark: boolean
  isDirty: boolean
  count: number
  itemIndex: number
  manage: ManageEnum
  format?: Format
  quickMask: boolean
  histogram: number[]
  EXIF: string
  pixelScaleFactor: NoneValue
  XMPMetadataAsUTF8: string
  measurementScale: MeasurementScaleDescriptor
  targetLayers: LayerIndexReference[]
  targetLayersIDs: LayerIdReference[]
  targetLayersIndexes: LayerIndexReference[]
  zoom: PercentValue
  printCopies: number
  printCurrentPrinter: string
  printerList: string[]
  printColorHandling: PrintColorHandlingEnum
  printOutputOptions: PrintOutputOptionsDescriptor
  printOutput: PrintOutputDescriptor
  selectionEdgesVisible: boolean
  center: UVPointDescriptor<DistanceValue>
  hasBackgroundLayer: boolean
  generatorSettings: GeneratorSettingsDescriptor
  visible: boolean
  targetPathVisibility: boolean
  guidesVisibility: boolean
  smartGuidesVisibility: boolean
  rulersVisibility: boolean
  slices: Slices
  patternPreviewMode: boolean
}

export interface FileInfo {
  _obj: 'fileInfo'
  // TODO ...
}

export interface ClippingPathInfo {
  _obj: 'clippingInfo'
  clippingPathIndex: number
  clippingPathFlatness: number
}

export interface ManageEnum {
  _enum: 'manage'
  _value: Manage
}

export enum Manage {
  none = 'none',
  // TODO ...
}

export enum Format {
  Photoshop = 'Photoshop',
  LargeDocumentFormat = 'Large Document Format',
  Cineon = 'Cineon',
  DICOM = 'DICOM',
  IFF = 'IFF',
  JPEG = 'JPEG',
  JPEG2000 = 'JPEG 2000',
  PhotoshopPDF = 'Photoshop PDF',
  PhotoshopRaw = 'Photoshop Raw',
  PNG = 'PNG',
  PortableBitMap = 'Portable Bit Map',
  TIFF = 'TIFF',
  GenericEPS = 'Generic EPS',
  SVG = 'SVG',
  GIF = 'GIF',
  Video = 'Video',
  //TODO ... (https://helpx.adobe.com/photoshop/using/supported-file-formats-photoshop-cs6.html)
}

export interface PrintColorHandlingEnum {
  _enum: 'printColorHandling'
  _value: PrintColorHandling
}

export enum PrintColorHandling {
  printerManaged = 'printerManaged',
  photoshopManaged = 'photoshopManaged',
}

export interface MeasurementScaleDescriptor {
  _obj: 'measurementScale'
  _target: [PropertyReference<'measurementScale'>, DocumentTargetReference]
  to: {
    _obj: 'measurementScale'
    pixelLength: number
    logicalLength: number
    logicalUnits: 'pixels'
  }
}

export interface PagePositionEnum {
  _enum: 'pagePosition'
  _value: PagePosition
}

export enum PagePosition {
  pagePosCentered = 'pagePosCentered',
  pagePosTopLeft = 'pagePosTopLeft',
}

export interface PrintOutputOptionsDescriptor {
  _obj: 'printOutputOptions'
  caption: boolean
  calibrationBars: boolean
  registrationMarks: boolean
  cornerCropMarks: boolean
  centerCropMarks: boolean
  labels: boolean
  negative: boolean
  emulsionDown: boolean
  interfaceIconFrameDimmed: boolean
  background: PsColor
  borderThickness: DistanceValue
  bleed: DistanceValue
  resolution: PixelValue
  vectorData: boolean
  pagePosition: PagePositionEnum
  left: DistanceValue
  top: DistanceValue
  scale: PercentValue
  cropWhenPrinting: boolean
  cropRectBottom: number
  cropRectLeft: number
  cropRectRight: number
  cropRectTop: number
}

export interface IntentEnum {
  _enum: 'intent'
  _value: Intent
}

export enum Intent {
  colorimetric = 'colorimetric',
  image = 'image',
  graphics = 'graphics',
  absColorimetric = 'absColorimetric',
}

export interface builtinProofEnum {
  _enum: 'builtinProof'
  _value: Proof
}

export enum Proof {
  proofBlack = 'proofBlack',
  proofCMYK = 'proofCMYK',
  proofCMY = 'proofCMY',
  proofCustom = 'proofCustom',
  proofCyan = 'proofCyan',
  proofDeuteranopia = 'proofDeuteranopia',
  proofInkBlack = 'proofInkBlack',
  proofMacintosh = 'proofMacintosh',
  proofMagenta = 'proofMagenta',
  proofMonitor = 'proofMonitor',
  proofPaperWhite = 'proofPaperWhite',
  proofProtanopia = 'proofProtanopia',
  proofWindows = 'proofWindows',
  proofYellow = 'proofYellow',
}

export interface PrintProofSetupDescriptor {
  _obj: 'proofSetup'
  builtin: builtinProofEnum
}

export interface PrintOutputDescriptor {
  _obj: 'printOutput'
  postScriptColor: boolean
  intent: IntentEnum
  printSixteenBit: boolean
  printerName: string
  printProofSetup: PrintProofSetupDescriptor
}

export interface Rect16Descriptor extends TopRightBottomLeft {
  _obj: 'rect16'
}

export interface ESliceOriginEnum {
  _enum: 'ESliceOrigin'
  _value: ESliceOrigin
}

export enum ESliceOrigin {
  autoGenerated = 'autoGenerated'
}

export interface ESliceTypeEnum {
  _enum: 'ESliceType'
  _value: ESliceType
}

export enum ESliceType {
  image = 'image'
}

export interface ESliceHorzAlignEnum {
  _enum: 'ESliceHorzAlign'
  _value: ESliceAlign
}

export enum ESliceAlign{
  default = 'default'
  // TODO ...
}

export interface ESliceVertAlignEnum {
  _enum: 'ESliceVertAlign'
  _value: ESliceAlign
}


export interface ESliceBGColorTypeEnum {
  _enum: 'ESliceBGColorType'
  _value: ESliceBGColorType
}

export enum ESliceBGColorType {
  none = 'none'
  // TODO ...
}

export interface SliceDescriptor {
  _obj: 'slice'
  sliceID: number
  groupID: number
  origin: ESliceOriginEnum
  type: ESliceTypeEnum
  bounds: Rect16Descriptor
  url: string
  null: string
  message: string
  altTag: string
  cellTextIsHTML: boolean
  cellText: string
  horzAlign: ESliceHorzAlignEnum
  vertAlign: ESliceVertAlignEnum
  bgColorType: ESliceBGColorTypeEnum
  topOutset: number
  leftOutset: number
  bottomOutset: number
  rightOutset: number
}

export interface Slices {
  bounds: Rect16Descriptor
  slices: SliceDescriptor[]
}