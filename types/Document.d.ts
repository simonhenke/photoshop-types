import { ColorSpaceModeEnum, PsColor } from './Color'
import { PointDescriptor, TopRightBottomLeft, UVPointDescriptor, UVPointDescriptorXY, UVTopRightBottomLeft } from './Geometry'
import { GeneratorSettingsDescriptor } from './Layer'
import {
  DocumentTargetReference,
  FileReference,
  LayerIdReference,
  LayerIndexReference,
  PropertyReference
} from './Reference'
import {
  DensityValue,
  DistanceValue,
  NoneValue,
  PercentValue,
  PixelValue
} from './Unit'

export interface DocumentDescriptor {
  mode: ColorSpaceModeEnum;
  bigNudgeH: number;
  bigNudgeV: number;
  rulerOriginH: number;
  rulerOriginV: number;
  width: DistanceValue;
  height: DistanceValue;
  resolution: DensityValue;
  title: string;
  fileInfo: FileInfo;
  numberOfPaths: number;
  numberOfChannels: number;
  numberOfLayers: number;
  numberOfGuides?: number;
  targetPathIndex: number;
  workPathIndex: number;
  clippingPathInfo: ClippingPathInfo;
  depth: 8 | 16 | 32;
  fileReference: FileReference;
  documentID: number;
  copyright: boolean;
  watermark: boolean;
  isDirty: boolean;
  count: number;
  itemIndex: number;
  colorSamplerList?: ColorSamplerDescriptor[];
  manage: ManageEnum;
  format?: Format;
  quickMask: boolean;
  histogram: number[];
  EXIF: string;
  pixelScaleFactor: NoneValue;
  XMPMetadataAsUTF8: string;
  compsList?: CompsClassDescriptor[];
  measurementScale: MeasurementScaleDescriptor;
  countClass?: CountClassDescriptor[];
  targetLayers: LayerIndexReference[];
  targetLayersIDs: LayerIdReference[];
  targetLayersIndexes: LayerIndexReference[];
  zoom: PercentValue;
  printCopies: number;
  printCurrentPrinter: string;
  printerList: string[];
  printColorHandling: PrintColorHandlingEnum;
  printOutputOptions: PrintOutputOptionsDescriptor;
  printOutput: PrintOutputDescriptor;
  selectionEdgesVisible: boolean;
  selection?: SelectionRectangle;
  center: UVPointDescriptor<DistanceValue>;
  hasBackgroundLayer: boolean;
  generatorSettings: GeneratorSettingsDescriptor;
  visible: boolean;
  targetPathVisibility: boolean;
  guidesVisibility: boolean;
  smartGuidesVisibility: boolean;
  rulersVisibility: boolean;
  slices: Slices;
  patternPreviewMode: boolean;
  artboards?: ArtboardsDescriptor;
  globalAngle?: number;
  json?: string;
  slicesVisibility?: boolean;
  viewTransform?: number[];
  pageSetup?: any; // TODO: ??
  printSettings?: any; // TODO: ??
  points?: UVPointDescriptorXY<DistanceValue>[]
}

export interface ArtboardsDescriptor {
  _obj: "artboards";
  list: Artboard[];
  autoExpandOffset: PointDescriptor;
  origin: PointDescriptor;
  autoExpandEnabled: boolean;
  autoNestEnabled: boolean;
  autoPositionEnabled: boolean;
  shrinkwrapOnSaveEnabled: boolean;
  docDefaultNewArtboardBackgroundColor: PsColor;
  docDefaultNewArtboardBackgroundType: number;
}

export interface Artboard {
  top: number;
  bottom: number;
  layerID: number;
}

export interface CountClassDescriptor {
  _obj: "countClass"
  x: DistanceValue
  y: DistanceValue
  group: number
  itemIndex: number
}

export interface CompsClassDescriptor {
  _obj: "compsClass"
  title: string
  itemIndex: number
  ID: number
  selection: boolean
  useVisibility: boolean
  usePosition: boolean
  useAppearance: boolean
  useChildLayerCompState: boolean
}

export interface ColorSamplerDescriptor {
  _obj: "colorSampler"
  position: UVPointDescriptor
  colorSpace: ColorSpaceModeEnum
}

export interface SelectionRectangle extends UVTopRightBottomLeft {
  _obj: 'rectangle',
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

export type Manage = 'none'
  // TODO: more?

export type Format =
  'Photoshop' |
  'Large Document Format' |
  'Cineon' |
  'DICOM' |
  'IFF' |
  'JPEG' |
  'JPEG 2000' |
  'Photoshop PDF' |
  'Photoshop Raw' |
  'PNG' |
  'Portable Bit Map' |
  'TIFF' |
  'Generic EPS' |
  'SVG' |
  'GIF' |
  'Video' 


export interface PrintColorHandlingEnum {
  _enum: 'printColorHandling'
  _value: PrintColorHandling
}

export type PrintColorHandling = 'printerManaged' | 'photoshopManaged'

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

export type PagePosition = 'pagePosCentered' | 'pagePosTopLeft'

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

export type Intent = 'colorimetric' | 'image' | 'graphics' | 'absColorimetric'

export interface builtinProofEnum {
  _enum: 'builtinProof'
  _value: Proof
}

export type Proof = 'proofBlack' | 'proofCMYK' | 'proofCMY' | 'proofCustom' | 'proofCyan' | 'proofDeuteranopia' | 'proofInkBlack' | 'proofMacintosh' | 'proofMagenta' | 'proofMonitor' | 'proofPaperWhite' | 'proofProtanopia' | 'proofWindows' | 'proofYellow'

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

export type ESliceOrigin = 'autoGenerated'

export interface ESliceTypeEnum {
  _enum: 'ESliceType'
  _value: ESliceType
}

export type ESliceType = 'image' // TODO: more?

export interface ESliceHorzAlignEnum {
  _enum: 'ESliceHorzAlign'
  _value: ESliceAlign
}

export type ESliceAlign = 'default' // TODO: more?

export interface ESliceVertAlignEnum {
  _enum: 'ESliceVertAlign'
  _value: ESliceAlign
}


export interface ESliceBGColorTypeEnum {
  _enum: 'ESliceBGColorType'
  _value: ESliceBGColorType
}

export type ESliceBGColorType = 'none' // TODO: more?

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