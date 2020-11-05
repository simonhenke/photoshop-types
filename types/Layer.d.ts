import { ChannelEnum, ChannelReference } from "./Channel";
import { PsColor, ColorNameEnum } from "./Color";
import { BlendModeEnum } from "./Common";
import { PointDescriptor, TopRightBottomleft, UVRectangleDescriptor, UVTopRightBottomLeft } from "./Geometry";
import { GradientDescriptor, GradientType } from "./Gradient";
import { LayerEffectsDescriptor, PatternDescriptor } from "./LayerEffects";
import { SmartObjectDescriptor, SmartObjectMore } from "./SmartObject";
import { TransformMatrixDescriptor } from "./Transform";
import { AngleValue, PixelValue } from "./Unit";

export enum LayerKind {
  any = 0,
  pixel = 1,
  adjustment = 2,
  text = 3,
  vector = 4,
  smartObject = 5,
  video = 6,
  group = 7,
  threeD = 8,
  gradient = 9,
  pattern = 10,
  solidColor = 11,
  background = 12,
  groupEnd = 13
}


export interface LayerDescriptor {
  name: string
  color: ColorNameEnum
  visible: boolean
  mode: BlendModeEnum
  opacity: number
  layerID: number
  itemIndex: number
  count: number
  preserveTransparency: boolean
  layerFXVisible: boolean
  layerEffects: LayerEffectsDescriptor
  globalAngle: number
  background: boolean
  layerSection: LayerSectionTypeEnum
  layerLocking: LayerLockingDescriptor
  group: boolean
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
  parentLayerID: number

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

export interface LayerSectionTypeEnum {
  _enum: 'layerSectionType',
  _value: LayerSectionType,
}

export enum LayerSectionType {
  layerSectionContent = 'layerSectionContent',
  layerSectionStart = 'layerSectionStart',
  layerSectionEnd = 'layerSectionEnd',
}

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

export interface FloatRectDescriptor extends TopRightBottomleft {
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