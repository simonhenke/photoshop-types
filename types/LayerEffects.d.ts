import { PsColor } from "./Color";
import { BlendModeEnum } from "./Common";
import { PointDescriptor, UVPointDescriptor } from "./Geometry";
import { GradientDescriptor, GradientTypeEnum } from "./Gradient";
import { AngleValue, PercentValue, PixelValue } from "./Unit";

export interface LayerEffectsDescriptor {
  _obj?: "layerEffects",
  scale: PercentValue
  dropShadow?: DropShadowDescriptor
  dropShadowMulti?: DropShadowDescriptor[]
  innerShadow?: InnerShadowDescriptor
  innerShadowMulti?: InnerShadowDescriptor[]
  outerGlow?: OuterGlowDescriptor
  solidFill?: SolidFillDescriptor
  solidFillMulti?: SolidFillDescriptor[]
  gradientFill?: GradientFillDesriptor
  gradientFillMulti?: GradientFillDesriptor[]
  patterFill?: PatternFillDescriptor
  frameFX?: FrameFXDescriptor
  frameFXMulti?: FrameFXDescriptor[]
  innerGlow?: InnerGlowDescriptor
  bevelEmboss?: BevelEmbossDescriptor
  chromeFX?: ChromeFXDescriptor
}

export interface LayerFxGenericProperties {
  enabled: boolean
  present: boolean
  showInDialog: boolean
  mode: BlendModeEnum
  opacity: PercentValue
}

export interface ChromeFXDescriptor extends LayerFxGenericProperties {
  _obj: 'chromeFX'
  color: PsColor
  antiAlias: boolean
  invert: boolean
  localLightingAngle: AngleValue
  distance: PixelValue
  blur: PixelValue
  mappingShape: ShapeCurveTypeDescriptor
}

export interface BevelTechniqueEnum {
  _enum: 'bevelTechnique'
  _value: BevelTechnique
}

export type BevelTechnique = 'softMatte' | 'preciseMatte' | 'slopeLimitMatte' 

export interface BevelEmbossStyleEnum {
  _enum: 'bevelEmbossStyle'
  _value: BevelEmbossStyle
}

export type BevelEmbossStyle = 'innerBevel' | 'outerBevel' | 'emboss' | 'pillowEmboss' | 'strokeEmboss'

export interface BevelEmbossStampStyleEnum {
  _enum: 'bevelEmbossStampStyle'
  _value: BevelEmbossStampStyle
}

export type BevelEmbossStampStyle = 'stampOut' | 'in'

export interface BevelEmbossDescriptor {
  _obj: 'bevelEmboss'
  enabled: boolean
  present: boolean
  showInDialog: boolean
  highlightMode: BlendModeEnum
  highlightColor: PsColor
  highlightOpacity: PercentValue
  shadowMode: BlendModeEnum
  shadowColor: PsColor
  shadowOpacity: PercentValue
  bevelTechnique: BevelTechniqueEnum
  bevelStyle: BevelEmbossStyleEnum
  useGlobalAngle: boolean
  localLightingAngle: AngleValue
  localLightingAltitude: AngleValue
  strengthRatio: PercentValue
  blur: PixelValue
  bevelDirection: BevelEmbossStampStyleEnum
  transferSpec: ShapeCurveTypeDescriptor
  antialiasGloss: boolean
  softness: PixelValue
  useShape: boolean
  useTexture: boolean
  // with Shape
  mappingShape?: ShapeCurveTypeDescriptor
  antiAlias?: boolean
  inputRange?: PercentValue
  // with Texture
  invertTexture?: boolean
  align?: boolean
  scale?: PercentValue
  textureDepth?: PercentValue
  pattern?: PatternDescriptor
  phase?: PointDescriptor
}

export interface InnerGlowDescriptor extends LayerFxGenericProperties {
  _obj: 'innerGlow'
  color: PsColor
  glowTechnique: MatteTechniqueEnum
  chokeMatte: PixelValue
  blur: PixelValue
  noise: PercentValue
  shadingNoise: PercentValue
  antiAlias: boolean
  transferSpec: ShapeCurveTypeDescriptor
  inputRange: PercentValue
  innerGlowSource: InnerGlowSourceTypeEnum
}

export interface InnerGlowSourceTypeEnum {
  _enum: 'innerGlowSourceType'
  _value: InnerGlowSourceType
}

export type InnerGlowSourceType = 'edgeGlow' | 'centerGlow'

export interface FrameFXSolidFillDescriptor extends FrameFXDescriptorBase {
  paintType: FrameFillEnum<'solidFill'>
}

export interface FrameFXGradientFillDescriptor extends FrameFXDescriptorBase, GradientFillProperties {
  paintType: FrameFillEnum<'gradientFill'>
}

export interface FrameFXPatternFillDescriptor extends FrameFXDescriptorBase, PatternFillProperties {
  paintType: FrameFillEnum<'pattern'>
}

export interface FrameFillEnum<FF extends FrameFill = FrameFill> {
  _enum: 'frameFill'
  _value: FF
}

export type FrameFill = 'solidFill' | 'gradientFill' | 'pattern' 

export interface FrameStyleEnum {
  _enum: 'frameStyle'
  _value: FrameStyle
}

export type FrameStyle = 'insetFrame' | 'outsetFrame' | 'centeredFrame' 

export type FrameFXDescriptor =
  FrameFXSolidFillDescriptor |
  FrameFXGradientFillDescriptor |
  FrameFXPatternFillDescriptor

export interface FrameFXDescriptorBase extends LayerFxGenericProperties {
  _obj: 'frameFX',
  style: FrameStyleEnum,
  paintType: FrameFillEnum,
  overprint: boolean,
  size: PixelValue,
  color: PsColor,
}

export interface PatternDescriptor {
  _obj: 'pattern'
  name: string
  ID: string // UUID
}

export interface PatternFillProperties {
  pattern: PatternDescriptor
  angle: AngleValue
  scale: PercentValue
  align: boolean
  phase: PointDescriptor
}

export interface PatternFillDescriptor extends LayerFxGenericProperties, PatternFillProperties {
  _obj: 'patternFill'
}

export interface InnerShadowDescriptor extends LayerFxGenericProperties {
  _obj: 'innerShadow'
  color: PsColor
  useGlobalAngle: boolean
  localLightingAngle: AngleValue
  distance: PixelValue
  chokeMatte: PixelValue
  blur: PixelValue
  noise: PercentValue
  antiAlias: boolean
  transferSpec: ShapeCurveTypeDescriptor
}

export interface DropShadowDescriptor extends LayerFxGenericProperties {
  _obj: 'dropShadow'
  color: PsColor
  useGlobalAngle: boolean
  localLightingAngle: AngleValue
  distance: PixelValue
  chokeMatte: PixelValue
  blur: PixelValue
  noise: PercentValue
  antiAlias: boolean
  transferSpec: ShapeCurveTypeDescriptor
  layerConceals: boolean
}

export interface OuterGlowDescriptor extends LayerFxGenericProperties {
  _obj: 'outerGlow'
  color: PsColor
  glowTechnique: MatteTechniqueEnum
  chokeMatte: PixelValue
  blur: PixelValue
  noise: PercentValue
  shadingNoise: PercentValue
  antiAlias: boolean
  transferSpec: ShapeCurveTypeDescriptor
  inputRange: PercentValue
}

export interface SolidFillDescriptor extends LayerFxGenericProperties {
  _obj: 'solidFill'
  color: PsColor
}

export interface GradientFillProperties {
  gradient: GradientDescriptor
  angle: AngleValue
  type: GradientTypeEnum
  reverse: boolean
  dither: boolean
  align: boolean
  scale: PercentValue
  offset: UVPointDescriptor<PercentValue>
}

export interface GradientFillDesriptor extends LayerFxGenericProperties, GradientFillProperties {
  _obj: 'gradientFill'
}

export interface MatteTechniqueEnum {
  _enum: 'matteTechnique',
  _value: MatteTechnique
}

export type MatteTechnique = 'softMatte' | 'preciseMatte'

export interface ShapeCurveTypeDescriptor {
  _obj: 'shapeCurveType'
  name?: ShapeCurveName
  curve?: CurvePointDescriptor[]
}

export type ShapeCurveName =
  'Linear' |
  '$$$/Contours/Defaults/Cone=Cone' |
  '$$$/Contours/Defaults/ConeInverted=Cone - Inverted' |
  '$$$/Contours/Defaults/CoveDeep=Cove - Deep' |
  '$$$/Contours/Defaults/CoveShallow=Cove - Shallow' |
  '$$$/Contours/Defaults/Gaussian=Gaussian' |
  '$$$/Contours/Defaults/HalfRound=Half Round' |
  '$$$/Contours/Defaults/Ring=Ring' |
  '$$$/Contours/Defaults/DoubleRing=Ring - Double' | 
  '$$$/Contours/Defaults/RollingSlopeDescending=Rolling Slope - Descending' | 
  '$$$/Contours/Defaults/RoundedSteps=Rounded Steps' |
  '$$$/Contours/Defaults/Sawtooth1=Sawtooth 1' 

export interface CurvePointDescriptor {
  _obj: 'curvePoint',
  horizontal: number,
  vertical: number,
  continuity: boolean,
}