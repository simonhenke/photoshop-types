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

export enum BevelTechnique {
  softMatte = 'softMatte',
  preciseMatte = 'preciseMatte',
  slopeLimitMatte = 'slopeLimitMatte',
}

export interface BevelEmbossStyleEnum {
  _enum: 'bevelEmbossStyle'
  _value: BevelEmbossStyle
}

export enum BevelEmbossStyle {
  innerBevel = 'innerBevel',
  outerBevel = 'outerBevel',
  emboss = 'emboss',
  pillowEmboss = 'pillowEmboss',
  strokeEmboss = 'strokeEmboss',
}

export interface BevelEmbossStampStyleEnum {
  _enum: 'bevelEmbossStampStyle'
  _value: BevelEmbossStampStyle
}

export enum BevelEmbossStampStyle {
  stampOut = 'stampOut',
  in = 'in',
}

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

export enum InnerGlowSourceType {
  edgeGlow = 'edgeGlow',
  centerGlow = 'centerGlow',
}

export interface FrameFXSolidFillDescriptor extends FrameFXDescriptorBase {
  paintType: FrameFillEnum<FrameFill.solidFill>
}

export interface FrameFXGradientFillDescriptor extends FrameFXDescriptorBase, GradientFillProperties {
  paintType: FrameFillEnum<FrameFill.gradientFill>
}

export interface FrameFXPatternFillDescriptor extends FrameFXDescriptorBase, PatternFillProperties {
  paintType: FrameFillEnum<FrameFill.pattern>
}

export interface FrameFillEnum<FF extends FrameFill = FrameFill> {
  _enum: 'frameFill'
  _value: FF
}

export enum FrameFill {
  solidFill = 'solidFill',
  gradientFill = 'gradientFill',
  pattern = 'pattern',
}

export interface FrameStyleEnum {
  _enum: 'frameStyle'
  _value: FrameStyle
}

export enum FrameStyle {
  insetFrame = 'insetFrame',
  outsetFrame = 'outsetFrame',
  centeredFrame = 'centeredFrame',
}

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

export enum MatteTechnique {
  softMatte = 'softMatte',
  preciseMatte = 'preciseMatte',
}

export interface ShapeCurveTypeDescriptor {
  _obj: 'shapeCurveType'
  name?: ShapeCurveName
  curve?: CurvePointDescriptor[]
}

export enum ShapeCurveName {
  Linear = 'Linear',
  Cone = '$$$/Contours/Defaults/Cone=Cone',
  ConeInverted = '$$$/Contours/Defaults/ConeInverted=Cone - Inverted',
  CoveDeep = '$$$/Contours/Defaults/CoveDeep=Cove - Deep',
  CoveShallow = '$$$/Contours/Defaults/CoveShallow=Cove - Shallow',
  Gaussian = '$$$/Contours/Defaults/Gaussian=Gaussian',
  HalfRound = '$$$/Contours/Defaults/HalfRound=Half Round',
  Ring = '$$$/Contours/Defaults/Ring=Ring',
  RingDouble = '$$$/Contours/Defaults/DoubleRing=Ring - Double',
  RollingSlopeDescending = '$$$/Contours/Defaults/RollingSlopeDescending=Rolling Slope - Descending',
  RoundedSteps = '$$$/Contours/Defaults/RoundedSteps=Rounded Steps',
  SawTooth1 = '$$$/Contours/Defaults/Sawtooth1=Sawtooth 1',
}

export interface CurvePointDescriptor {
  _obj: 'curvePoint',
  horizontal: number,
  vertical: number,
  continuity: boolean,
}