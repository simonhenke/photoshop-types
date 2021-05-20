import { ChannelEnum, ChannelReference } from "./Channel";
import { ColorNameEnum, PsColor } from "./Color";
import { BlendModeEnum } from "./Common";
import { PointDescriptor, TopRightBottomLeft, UVRectangleDescriptor, UVTopRightBottomLeft } from "./Geometry";
import { GradientDescriptor, GradientType } from "./Gradient";
import { LayerEffectsDescriptor } from "./LayerEffects";
import { SmartObjectDescriptor, SmartObjectMore } from "./SmartObject";
import { TextKeyDescriptor } from "./TextKey";
import { TransformMatrixDescriptor } from "./Transform";
import { AngleValue, PixelValue } from "./Unit";

export type LayerKind =
  0 | // any
  1 | // pixel
  2 | // adjustment
  3 | // text
  4 | // vector
  5 | // smartObject
  6 | // video
  7 | // group
  8 | // threeD
  9 | // gradient
  10 | // pattern
  11 | // solidColor
  12 | // background
  13  // groupEnd


export interface LayerDescriptor {
  name: string
  color: ColorNameEnum
  visible: boolean
  mode: BlendModeEnum
  opacity: number
  linkedLayerIDs?: number[]
  layerID: number
  itemIndex: number
  count: number
  preserveTransparency: boolean
  layerFXVisible: boolean
  layerEffects?: LayerEffectsDescriptor
  globalAngle: number
  background: boolean
  layerSection: LayerSectionTypeEnum
  layerLocking: LayerLockingDescriptor
  group: boolean
  layerSectionExpanded?: boolean
  targetChannels: ChannelReference[]
  visibleChannels: ChannelReference[]
  channelRestrictions: ChannelEnum[]
  fillOpacity: number
  hasUserMask: boolean
  hasVectorMask: boolean
  proportionalScaling: boolean
  layerKind: number
  hasFilterMask: boolean
  userMaskDensity: number
  userMaskFeather: number
  vectorMaskDensity: number
  vectorMaskFeather: number
  boundingBox?:UVRectangleDescriptor<PixelValue> 
  bounds: UVRectangleDescriptor<PixelValue>
  boundsNoEffects: UVRectangleDescriptor<PixelValue>
  boundsNoMask: UVRectangleDescriptor<PixelValue>
  useAlignedRendering: boolean
  generatorSettings: GeneratorSettingsDescriptor
  keyOriginType: KeyOriginType[]
  fillEnabled: boolean
  animationProtection: AnimationProtectionDescriptor
  artboard: ArtboardDescriptor
  artboardEnabled: boolean
  vectorMaskEnabled: boolean
  vectorMaskEmpty: boolean
  textWarningLevel: number
  textKey?: TextKeyDescriptor
  parentLayerID: number
  layerSVGdata?: string
  pathBounds?:PathBoundsDescriptor

  // --- Smart Object Layer
  smartObject?: SmartObjectDescriptor
  smartObjectMore?: SmartObjectMore
  // TODO: SmartFilters

  // --- Pattern Layer
  userMaskEnabled?: boolean
  userMaskLinked?: boolean

  // --- Adjustment Layer
  adjustment: Adjustment[]
}

export interface PathBoundsDescriptor {
  _obj: "rectangle",
  pathBounds: FloatRectDescriptor
}

export interface PatternDescriptor {
  _obj: 'pattern'
  name: string
  ID: string // UUID
}

export interface LayerSectionTypeEnum {
  _enum: 'layerSectionType',
  _value: LayerSectionType,
}

export type LayerSectionType = 'layerSectionContent' | 'layerSectionStart' | 'layerSectionEnd'

export interface LayerLockingDescriptor {
  _obj: 'layerLocking'
  protectNone: boolean
  protectAll: boolean
  protectTransparency: boolean
  protectComposite: boolean
  protectPosition: boolean
  protectArtboardAutonest: boolean
}

export interface GeneratorSettingsDescriptor {
  _obj: 'generatorSettings'
}

export interface AnimationProtectionDescriptor {
  _obj: 'animationProtection'
  animationUnifyPosition: boolean
  animationUnifyEffects: boolean
  animationUnifyVisibility: boolean
  animationPropagate: boolean
}

export interface FloatRectDescriptor extends TopRightBottomLeft {
  _obj: 'classFloatRect'
}

export interface ArtboardDescriptor {
  _obj: 'artboard'
  artboardRect: FloatRectDescriptor
  guideIDs: number[]
  artboardPresetName: string
  color: PsColor
  artboardBackgroundType: number
}

export interface RadiiDescriptor {
  _obj: 'radii'
  unitValueQuadVersion: number
  topRight: PixelValue
  topLeft: PixelValue
  bottomLeft: PixelValue
  bottomRight: PixelValue
}

export interface UnitRectDescriptor extends UVTopRightBottomLeft<PixelValue> {
  _obj: 'unitRect'
  unitValueQuadVersion: number
}

export interface OriginBoxCorners {
  rectangleCornerA: PointDescriptor
  rectangleCornerB: PointDescriptor
  rectangleCornerC: PointDescriptor
  rectangleCornerD: PointDescriptor
}

export interface KeyOriginType {
  keyOriginType: number
  keyOriginRRectRadii: RadiiDescriptor
  keyOriginResolution: number
  keyOriginShapeBBox: UnitRectDescriptor
  keyOriginBoxCorners: OriginBoxCorners
  transform: TransformMatrixDescriptor
  keyActionMode: number
}

export type Adjustment =
  SolidColorLayerDescriptor |
  PatternDescriptor |
  GradientLayerDescriptor |
  BrightnessAndContrastDescriptor |
  LevelsDescriptor |
  CurvesDescriptor |
  ExposureDescriptor |
  VibranceDescriptor |
  HueSaturationDescriptor |
  ColorBalanceDescriptor |
  BlackAndWhiteDescriptor |
  PhotoFilterDescriptor |
  ChannelMixerDescriptor |
  ColorLookupDescriptor |
  InvertDescriptor |
  PosterizationDescriptor |
  ThresholdDescriptor |
  GradientMapDescriptor |
  SelectiveColorDescriptor

export interface SolidColorLayerDescriptor {
  _obj: 'solidColorLayer'
  color: PsColor
}

export interface PatternLayerDescriptor {
  _obj: 'patternLayer'
  pattern: PatternDescriptor
}

export interface LegacyContentData {
  legacyContentData: ArrayBuffer
}

export interface BrightnessAndContrastDescriptor extends LegacyContentData {
  _obj: 'brightnessEvent'
}

export interface LevelsDescriptor extends LegacyContentData {
  _obj: 'levels'
}

export interface CurvesDescriptor extends LegacyContentData {
  _obj: 'curves'
}

export interface ExposureDescriptor extends LegacyContentData {
  _obj: 'exposure'
}

export interface VibranceDescriptor extends LegacyContentData {
  _obj: 'vibrance'
}

export interface HueSaturationDescriptor extends LegacyContentData {
  _obj: 'hueSaturation'
}

export interface ColorBalanceDescriptor extends LegacyContentData {
  _obj: 'colorBalance'
}

export interface BlackAndWhiteDescriptor extends LegacyContentData {
  _obj: 'blackAndWhite'
}

export interface PhotoFilterDescriptor extends LegacyContentData {
  _obj: 'photoFilter'
}

export interface ChannelMixerDescriptor extends LegacyContentData {
  _obj: 'channelMixer'
}

export interface ColorLookupDescriptor extends LegacyContentData {
  _obj: 'colorLookup'
}

export interface InvertDescriptor {
  _obj: 'invert'
}

export interface PosterizationDescriptor extends LegacyContentData {
  _obj: 'posterization'
}

export interface ThresholdDescriptor extends LegacyContentData {
  _obj: 'thresholdClassEvent'
}

export interface GradientMapDescriptor extends LegacyContentData {
  _obj: 'gradientMapClass'
}

export interface SelectiveColorDescriptor extends LegacyContentData {
  _obj: 'selectiveColor'
}

export interface GradientLayerDescriptor {
  _obj: 'gradientLayer'
  angle: AngleValue
  type: GradientType
  gradient: GradientDescriptor
}