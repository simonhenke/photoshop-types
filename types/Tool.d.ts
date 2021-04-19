import { PsColor } from './Color'
import { BlendModeEnum } from './Common'
import { Orientation } from './Geometry'
import { GradientDescriptor, GradientTypeNumeric } from './Gradient'
import { RadiiDescriptor, SolidColorLayerDescriptor } from './Layer'
import { PatternDescriptor } from './LayerEffects'
import { ParagraphStyleDescriptor, TextGriddingEnum, TextStyleDescriptor } from './TextKey'
import {
  AngleValue,
  NoneValue,
  PercentValue,
  PixelValue,
  PointValue
} from './Unit'

interface CTODesc {
  _obj: 'currentToolOptions'
}

export interface MoveToolOptionsDescriptor extends CTODesc {
  $AtSl: boolean
  $ASGr: boolean
  $Abbx: boolean
}

export interface ArtboardInformationDescriptor {
  _obj: '$AbtC'
  $AbdW: number
  $AbdH: number
  $AbWU: number
  $AbHU: number
  $AbPN: string
  $AbBC: PsColor
  $AbFT: number
}

export interface ArtboardToolOptionsDescriptor extends CTODesc {
  $AbtI: ArtboardInformationDescriptor
}

export interface MarqueeDescriptor {
  _obj: '$MrqC'
  $MrqM: number
  $AspV: number
  $AspH: number
  $FxdW: number
  $FxdH: number
  $FxWU: number
  $FxHU: number
}

export type SelectionModeString = 'set' | 'subtractFrom' | 'addTo' | 'interfaceWhite'

export type SelectionMode =
  1 | // new
  2 | // add
  3 | // subtract
  4   // intersect

export interface SelectionToolOptionsDescriptor extends CTODesc {
  contiguous: boolean
  selectionEnum: SelectionMode
}

export interface MarqueeToolOptionsDescriptor
  extends SelectionToolOptionsDescriptor {
  $MrqI: MarqueeDescriptor
  $MrqF: PixelValue
  $MrqA: boolean
}

export interface LassoToolOptionsDescriptor
  extends SelectionToolOptionsDescriptor {
  $DrwR: PixelValue
  $DrwA: boolean
}

export interface MagneticLassoToolOptionsDescriptor
  extends LassoToolOptionsDescriptor {
  $MgLP: boolean
  $MgEd: number
  $MgCl: number
  $MgWd: number
  $MgSS: number
  $MgSn: number
}

export interface MagicLassoToolOptionsDescriptor
  extends SelectionToolOptionsDescriptor {
  $DrwR: PixelValue
  $DrwA: boolean
  magicLassoAutoEnhance: boolean
  sampleAllLayers: boolean
  smartSubtract: boolean
  objectSelectionMode: number
}

export interface BrVrDescriptor {
  _obj: '$brVr'
  $bVTy: number
  $fStp: number
  jitter: PercentValue
  minimum: PercentValue
}

export interface ComputedBrushDescriptor {
  _obj: 'computedBrush'
  diameter: PixelValue
  hardness: PercentValue
  angle: AngleValue
  roundness: PercentValue
  spacing: PercentValue
  interfaceIconFrameDimmed: boolean
  flipX: boolean
  flipY: boolean
}

export interface QuickSelectToolOptionsDescriptor extends BrushOptions, CTODesc {
  quickSelectMode: number
  quickSelectBrushSize: number
  quickSelectSampleAllLayers: boolean
  autoEnhance: boolean
  quickSelectSpread: number
  quickSelectStickiness: number
}

export interface MagicWandToolOptionsDescriptor
  extends SelectionToolOptionsDescriptor {
  eyeDropperSample: number
  $WndT: number
  $WndA: boolean
  windowsSystem: boolean
}

export interface CropAspectRatioModeEnum {
  _enum: 'cropAspectRatioModeClass'
  _value: CropAspectRatioMode
}

export type CropAspectRatioMode = 'pureAspectRatio' | 'targetSize' | 'originalProportions'

export interface CropOptionsDescriptor {
  _obj: '$CrOC'
  cropAspectRatioModeKey: CropAspectRatioModeEnum
  aspectWidth: number
  aspectHeight: number
  $CrWV: number
  $CrWS: number
  $CrHV: number
  $CrHS: number
  $CrRV: number
  $CrRS: number
  cropOverlay: number
  CropOptionsShowOverlay: number
  orientation: number
  cropShieldColorMode: number
  cropColor: PsColor
  cropOpacity: number
  cropAutoLightenShield: boolean
  cropShowShield: boolean
  preview: boolean
  cropAutoCenterCropBox: boolean
  cropShowCroppedArea: boolean
  hides: boolean
  AutoFillOnCrop: boolean
}

export interface CropToolOptionsDescriptor extends CTODesc {
  $CrpO: CropOptionsDescriptor
}

export interface PerspectiveCropOptionsDescriptor {
  _obj: '$PcOC'
  $CrWV: number
  $CrWS: number
  $CrHV: number
  $CrHS: number
  $CrRV: number
  $CrRS: number
  cropOverlay: number
}

export interface PerspectiveCropToolOptionsDescriptor extends CTODesc {
  $PCrO: PerspectiveCropOptionsDescriptor
}

export interface SliceToolOptionsDescriptor extends CTODesc {
  $MrqI: MarqueeDescriptor
}

export interface FramedGroupShapeEnum {
  _enum: '$FgSt'
  _value: FramedGroupShape
}

export type FramedGroupShape = '$Rect' | '$Oval'

export interface FpoCDescriptor {
  _obj: '$FpoC'
  $FgSh: FramedGroupShapeEnum
}

export interface FramedGroupToolOptionsDescriptor extends CTODesc {
  $FpoI: FpoCDescriptor
}

export interface EyedropperToolOptionsDescriptor extends CTODesc {
  eyeDropperSample: number
  eyeDropperSampleSheet: number
  eyeDropperHUD: boolean
}

export interface ColorSamplerToolOptionsDescriptor extends CTODesc {
  eyeDropperSample: number
}

export interface TextAnnotToolOptionsDescriptor extends CTODesc {
  $aath: string
  color: PsColor
}

export interface SpotHealingMethodEnum {
  _enum: '$SmmT'
  _value: SpotHealingMethod
}

export type SpotHealingMethod = 
  '$CntW' | // contentAware
  '$CrtT' | // createTexture
  '$PrxM'   // proximityMatch

export interface SmpTEnum {
  _enum: '$SmpT'
  _value: SmpT
}

export type SmpT = '$SrcN'  // TODO: more?

export interface SpotHealingBrushToolOptionsDescriptor
  extends MagicStampToolOptionsDescriptor {
  $SmmS: SpotHealingMethodEnum
}

export interface MagicStampToolOptionsDescriptor extends BrushOptions, CTODesc {
  flow: number
  $StmS: boolean
  $StmB: boolean
  $StmI: boolean
  $StmA: boolean
  impressionist: boolean
  $SmpS: SmpTEnum
  healSmoothFactor: number
}

export interface HealingDirectionEnum {
  _enum: 'healingDirection'
  _value: HealingDirection
}

export type HealingDirection = 'healFromDest2Src' | 'healFromSrc2Dest'

export interface PatchSelectionOptionsDescriptor extends CTODesc {
  pattern: PatternDescriptor
  healingDirection: HealingDirectionEnum
  transparency: boolean
  selectionMode: number
  contentAware: boolean
  reshuffle: boolean
  clone: boolean
  move: boolean
  sampleAllLayers: boolean
  patchStructureAdapt: number
  patchColorAdaptation: number
  healSmoothFactor: number
}

export interface RecomposeSelectionOptionsDescriptor extends CTODesc {
  recomposeMode: number
  selectionMode: number
  patchStructureAdapt: number
  patchColorAdaptation: number
  sampleAllLayers: boolean
  transformOnDrop: boolean
}

export interface RedEyeToolOptionsDescriptor extends CTODesc {
  radius: number
  darken: number
}

export interface SampledBrushDescriptor {
  _obj: 'sampledBrush'
  diameter: PixelValue
  angle: AngleValue
  roundness: PercentValue
  name: string
  spacing: PercentValue
  interfaceIconFrameDimmed: boolean
  flipX: boolean
  flipY: boolean
  sampledData: string
}

export interface DualBrushDescriptor {
  _obj: 'dualBrush'
  useDualBrush: boolean
  flip?: boolean
  brush?: SampledBrushDescriptor
  blendMode?: BlendModeEnum
  useScatter: boolean
  spacing: PercentValue
  count?: number
  bothAxes?: boolean
  countDynamics: BrVrDescriptor
  scatterDynamics?: BrVrDescriptor
}

export interface BrushShapeDynamicsOptions {
  useTipDynamics: boolean
  $szVr?: BrVrDescriptor
  angleDynamics?: BrVrDescriptor
  flipX?: boolean
  flipY?: boolean
  brushProjection?: boolean
  minimumDiameter?: PercentValue
  minimumRoundness?: PercentValue
  tiltScale?: PercentValue
  roundnessDynamics?: BrVrDescriptor
}

export interface BrushScatteringOptions {
  useScatter: boolean
  count?: number
  bothAxes?: boolean
  countDynamics?: BrVrDescriptor
  scatterDynamics?: BrVrDescriptor
}

export interface BrushTextureOptions {
  useTexture: boolean
  texture?: PatternDescriptor
  textureScale?: PercentValue
  invertTexture?: boolean
  textureBrightness?: number
  textureContrast?: number
  textureBlendMode?: BlendModeEnum
  textureDepth?: PercentValue
  minimumDepth?: PercentValue
  textureDepthDynamics?: BrVrDescriptor
}

export interface DualBrushOptions {
  dualBrush: DualBrushDescriptor
}

export interface BrushColorDynamicsOptions {
  useColorDynamics: boolean
  $clVr?: BrVrDescriptor
  backgroundColor?: PsColor
  brightness?: PercentValue
  colorDynamicsPerTip?: boolean
  hue?: PercentValue
  purity?: PercentValue
  saturation?: PercentValue
}

export interface BrushTransferOptions {
  usePaintDynamics: boolean
  $opVr?: BrVrDescriptor
  $prVr?: BrVrDescriptor
}

export interface BrushPoseOptions {
  useBrushPose: boolean
  overridePoseAngle?: boolean
  overridePoseTiltX?: boolean
  overridePoseTiltY?: boolean
  overridePosePressure?: boolean
  brushPosePressure?: PercentValue
  brushPoseTiltX?: number
  brushPoseTiltY?: number
  brushPoseAngle?: number
}

export interface BrushSmoothingOptions {
  smoothing: boolean
  smoothingValue: number
  smoothingRadiusMode: boolean
  smoothingCatchup: boolean
  smoothingCatchupAtEnd: boolean
  smoothingZoomCompensation: boolean
  pressureSmoothing: boolean
}

export interface BrushOptions
  extends BrushShapeDynamicsOptions,
    BrushScatteringOptions,
    BrushTextureOptions,
    DualBrushOptions,
    BrushColorDynamicsOptions,
    BrushTransferOptions,
    BrushPoseOptions,
    BrushSmoothingOptions {
  smooth?: number
  mode: BlendModeEnum
  brush: ComputedBrushDescriptor
  opacity?: number
  noise?: boolean
  wetEdges?: boolean
  repeat?: boolean
  protectTexture?: boolean
  foregroundColor?: PsColor
  usePressureOverridesSize: boolean
  usePressureOverridesOpacity: boolean
  useLegacy: boolean
}

export interface PaintBrushToolOptionsDescriptor
  extends BrushOptions, CTODesc {
  flow: number
}

export interface PencilToolOptionsDescriptor
  extends BrushOptions, CTODesc {
  $PncA: boolean
}

export interface ColorReplacementBrushToolOptionsDescriptor
  extends BrushOptions, CTODesc {
  tolerance: number
  $CRSm: number
  $CRCg: number
  $CRAl: boolean
  $CRRc: PsColor
  $CRTc: PsColor
  $CRTm: BlendModeEnum
}

export interface WetBrushToolOptionsDescriptor
  extends BrushOptions, CTODesc {
  flow: number
  wetness: number
  dryness: number
  mix: number
  $wtVr: BrVrDescriptor
  $mxVr: BrVrDescriptor
  textClickPoint: number
  interpretation: number
  autoFill: boolean
  autoClean: boolean
  loadSolidColorOnly: boolean
  sampleAllLayers: boolean
  reservoirState: number
}

export interface StampToolOptionsDescriptor
  extends BrushOptions, CTODesc {
  flow: number
  textClickPoint: number
  interpretation: number
  $StmS: boolean
  $StmB: boolean
  $StmI: boolean
  $StmA: boolean
  impressionist: boolean
}

export interface HistoryBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
  $HstI: boolean
}

export interface ArtBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
  $AHBs: number
  $AHBt: number
  $AHBc: number
}

export interface EraserToolOptionsDescriptor extends BrushOptions, CTODesc {
  $MgcE: boolean
  $ErsB: number
}

export interface BackgroundEraserToolOptionsDescriptor extends BrushOptions, CTODesc {
  $BECn: number
  $BEPr: boolean
  $BESm: number
}

export interface MagicEraserToolOptionsDescriptor extends CTODesc {
  mode: BlendModeEnum
  opacity: number
  $BckT: number
  $BckA: boolean
  $BckS: boolean
  contiguous: boolean
  $BckF: boolean
}

export interface GradientToolOptionsDescriptor extends CTODesc {
  mode: BlendModeEnum
  opacity: number
  gradient: GradientDescriptor
  gradientType: GradientTypeNumeric
  $GrdD: number
  $GrdU: number
  $GrdR: number
}

export interface BucketToolOptionsDescriptor extends CTODesc {
  mode: BlendModeEnum
  opacity: number
  $BckT: number
  $BckA: boolean
  $BckS: boolean
  contiguous: boolean
  $BckF: boolean
  pattern: PatternDescriptor
}

export interface BlurToolOptionsDescriptor extends BrushOptions, CTODesc { 
  flow: number
  $BlrS: boolean
}

export interface SharpenToolOptionsDescriptor extends BlurToolOptionsDescriptor { 
  detailBoost: boolean
}

export interface SmudgeToolOptionsDescriptor extends BrushOptions, CTODesc {
  pressure: number
  $SmdF: boolean
  smudgeStick: boolean
}

export interface DodgeBurnToolOptionsDescriptor extends BrushOptions, CTODesc {
  exposure: number
}

export interface SaturationToolOptionsDescriptor extends BrushOptions, CTODesc {
  flow: number
}

export interface GeometryToolModeEnum {
  _enum: 'geometryToolMode'
  _value: GeometryToolMode
}

export type GeometryToolMode = 'path' | 'shape' | 'pixels'

export interface StrokeStyleLineCapTypeEnum {
  _enum: 'strokeStyleLineCapType'
  _value: StrokeStyleLineCapType
}

export type StrokeStyleLineCapType = 'strokeStyleRoundCap' | 'strokeStyleButtCap' | 'strokeStyleSquareCap'

export interface StrokeStyleLineJoinTypeEnum {
  _enum: 'strokeStyleLineJoinType'
  _value: StrokeStyleLineJoinType
}

export type StrokeStyleLineJoinType = 'strokeStyleBevelJoin' | 'strokeStyleMiterJoin' | 'strokeStyleRoundJoin'

export interface StrokeStyleLineAlignmentEnum {
  _enum: 'strokeStyleLineAlignment'
  _value: StrokeStyleLineAlignment
}

export type StrokeStyleLineAlignment = 'strokeStyleAlignOutside' | 'strokeStyleAlignInside' | 'strokeStyleAlignCenter'

export interface StrokStyleDescriptor {
  _obj: 'strokeStyle'
  strokeStyleVersion: number
  strokeEnabled: boolean
  fillEnabled: boolean
  strokeStyleLineWidth: PointValue
  strokeStyleLineDashOffset: PointValue
  strokeStyleMiterLimit: number
  strokeStyleLineCapType: StrokeStyleLineCapTypeEnum
  strokeStyleLineJoinType: StrokeStyleLineJoinTypeEnum
  strokeStyleLineAlignment: StrokeStyleLineAlignmentEnum
  strokeStyleScaleLock: boolean
  strokeStyleStrokeAdjust: boolean
  strokeStyleLineDashSet: NoneValue[]
  strokeStyleBlendMode: BlendModeEnum
  strokeStyleOpacity: PercentValue
  strokeStyleContent: SolidColorLayerDescriptor
  strokeStyleResolution: number
}

export interface ShapeStyleDescriptor {
  _obj: 'shapeStyle'
  strokeStyle: StrokStyleDescriptor
  fillContents: SolidColorLayerDescriptor
}

export interface PathToolOptions {
  geometryToolMode: GeometryToolModeEnum
  makeShapeLayers?: boolean
  useAlignedRendering?: boolean
  shapeStyle?: ShapeStyleDescriptor
}

export interface PenToolOptionsDescriptor extends PathToolOptions, CTODesc {
  $AAdd: boolean
  $MspT: boolean
}

export interface FreeformPenToolOptionsDescriptor extends PathToolOptions, CTODesc {
  $AAdd: boolean
  $MspT: boolean
  $FrPT: number
  contiguous: boolean
  selectionEnum: number
  $DrwR: PixelValue
  $DrwA: boolean
  $MgLP: boolean
  $MgEd: number
  $MgCl: number
  $MgWd: number
  $MgSS: number
  $MgSn: number
  $UsKn: boolean
  magnitude: boolean
}

export type KnotToolOptionsDescriptor = PathToolOptions & CTODesc

export interface TextToolParagraphOptions {
  paragraphStyle: ParagraphStyleDescriptor
  orientation: Orientation
}

export interface TextToolCharacterOptions {
  textStyle: TextStyleDescriptor
  textGridding: TextGriddingEnum
}

export interface FontListPresetDescriptor<ObjectClass extends string = 'favoriteFontList'> {
  _obj: ObjectClass
  fontPostScriptName: string[]
}

export interface TextToolOptionsDescriptor {
  _obj: 'textToolOptions'
  textNewTextOrientation: 0
  favoriteFontList: FontListPresetDescriptor
  recentFontList:FontListPresetDescriptor<'recentFontList'>
}

export interface TypeToolOptionsDescriptor extends CTODesc {
  textToolParagraphOptions: TextToolParagraphOptions
  textToolCharacterOptions: TextToolCharacterOptions
  textToolOptions: TextToolOptionsDescriptor
}

export interface PathComponentSelectToolOptionsDescriptor extends PathToolOptions, CTODesc {
  $Pbbx: boolean
}

export type DirectSelectToolOptionsDescriptor = PathToolOptions & CTODesc

export interface RectangleToolOptionsDescriptor extends PathToolOptions, CTODesc {
  width: number
  widthUnit: number
  height: number
  heightUnit: number
  proportionalHeight: number
  proportionalWidth: number
  radius: number
  cornerRadiusUnit: number
}

export interface EllipseToolOptionsDescriptor extends PathToolOptions, CTODesc {
  proportionalHeight: number
  proportionalWidth: number
}

export interface RoundedRectangleToolOptionsDescriptor extends EllipseToolOptionsDescriptor {
  radii: RadiiDescriptor
  radius: number
  cornerRadiusUnit: number
}

export interface TriangleToolOptionsDescriptor extends EllipseToolOptionsDescriptor {
  sides: number
  starRatio: PercentValue
  polygonCornerRadius: number
  polygonCornerRadiusUnit: number
}

export interface PolygonToolOptionsDescriptor extends TriangleToolOptionsDescriptor {
  smoothIndents: boolean
}

export interface LineToolOptionsDescriptor extends PathToolOptions, CTODesc {
  $LiVR: number
  $LnWd: number
  $LiWS: number
  $LnAW: number
  $ArWU: number
  $LnAL: number
  $ArLU: number
  $LnAC: number
  $LnAS: boolean
  $LnAE: boolean
}

export interface CustomShapeDescriptor {
  _obj: "customShape"
  name: string
  ID: string
}

export interface CustomShapeToolOptionsDescriptor extends PathToolOptions, CTODesc {
  customShape: CustomShapeDescriptor
}

export interface HandToolOptionsDescriptor extends CTODesc {
  $Hgng: boolean
}

export interface RotateToolOptionsDescriptor extends CTODesc {
  angle: number
  rotateAll: boolean
}

export interface ZoomToolOptionsDescriptor extends CTODesc {
  $ZTIP: boolean
  $Zgng: boolean
  $ZmRs: boolean
  zoomIn: boolean
  scrubbyZoom: boolean
}

export type CurrentToolOptionsDescriptor = 
CTODesc |
MoveToolOptionsDescriptor |
ArtboardToolOptionsDescriptor |
SelectionToolOptionsDescriptor |
MarqueeToolOptionsDescriptor |
LassoToolOptionsDescriptor |
MagneticLassoToolOptionsDescriptor |
MagicLassoToolOptionsDescriptor |
QuickSelectToolOptionsDescriptor |
MagicWandToolOptionsDescriptor |
CropToolOptionsDescriptor |
PerspectiveCropToolOptionsDescriptor |
SliceToolOptionsDescriptor |
FramedGroupToolOptionsDescriptor |
EyedropperToolOptionsDescriptor |
ColorSamplerToolOptionsDescriptor |
TextAnnotToolOptionsDescriptor |
SpotHealingBrushToolOptionsDescriptor |
MagicStampToolOptionsDescriptor |
PatchSelectionOptionsDescriptor |
RecomposeSelectionOptionsDescriptor |
RedEyeToolOptionsDescriptor |
PaintBrushToolOptionsDescriptor |
PencilToolOptionsDescriptor |
ColorReplacementBrushToolOptionsDescriptor |
WetBrushToolOptionsDescriptor |
StampToolOptionsDescriptor |
HistoryBrushToolOptionsDescriptor |
ArtBrushToolOptionsDescriptor |
EraserToolOptionsDescriptor |
BackgroundEraserToolOptionsDescriptor |
MagicEraserToolOptionsDescriptor |
GradientToolOptionsDescriptor |
BucketToolOptionsDescriptor |
BlurToolOptionsDescriptor |
SharpenToolOptionsDescriptor |
SmudgeToolOptionsDescriptor |
DodgeBurnToolOptionsDescriptor |
SaturationToolOptionsDescriptor |
PenToolOptionsDescriptor |
FreeformPenToolOptionsDescriptor |
KnotToolOptionsDescriptor |
TypeToolOptionsDescriptor |
PathComponentSelectToolOptionsDescriptor |
DirectSelectToolOptionsDescriptor |
RectangleToolOptionsDescriptor |
EllipseToolOptionsDescriptor |
RoundedRectangleToolOptionsDescriptor |
TriangleToolOptionsDescriptor |
PolygonToolOptionsDescriptor |
LineToolOptionsDescriptor |
CustomShapeToolOptionsDescriptor |
HandToolOptionsDescriptor |
RotateToolOptionsDescriptor |
ZoomToolOptionsDescriptor

export interface ToolEnum {
  _enum: Tool
  _value: 'targetEnum'
}

export type Tool =
  'moveTool' |
  'artboardTool' |
  'marqueeRectTool' |
  'marqueeEllipTool' |
  'marqueeSingleRowTool' |
  'marqueeSingleColumnTool' |
  'polySelTool' |
  'lassoTool' |
  'magneticLassoTool' |
  'quickSelectTool' |
  'magicLassoTool' |
  'magicWandTool' |
  'cropTool' |
  'perspectiveCropTool' |
  'sliceTool' |
  'sliceSelectTool' |
  'framedGroupTool' |
  'eyedropperTool' |
  '3DMaterialSelectTool' |
  'colorSamplerTool' |
  'rulerTool' |
  'textAnnotTool' |
  'countTool' |
  'patchSelection' |
  'spotHealingBrushTool' |
  'magicStampTool' |
  'recomposeSelection' |
  'redEyeTool' |
  'paintbrushTool' |
  'pencilTool' |
  'colorReplacementBrushTool' |
  'wetBrushTool' |
  'cloneStampTool' |
  'patternStampTool' |
  'historyBrushTool' |
  'artBrushTool' |
  'eraserTool' |
  'backgroundEraserTool' |
  'magicEraserTool' |
  'gradientTool' |
  'bucketTool' |
  '3DMaterialDropTool' |
  'blurTool' |
  'sharpenTool' |
  'smudgeTool' |
  'dodgeTool' |
  'burnInTool' |
  'saturationTool' |
  'penTool' |
  'freeformPenTool' |
  'curvaturePenTool' |
  'addKnotTool' |
  'deleteKnotTool' |
  'convertKnotTool' |
  'typeCreateOrEditTool' |
  'typeVerticalCreateOrEditTool' |
  'typeVerticalCreateMaskTool' |
  'typeCreateMaskTool' |
  'pathComponentSelectTool' |
  'directSelectTool' |
  'rectangleTool' |
  'roundedRectangleTool' |
  'ellipseTool' |
  'triangleTool' |
  'polygonTool' |
  'lineTool' |
  'customShapeTool' |
  'handTool' |
  'rotateTool' |
  'zoomTool' |
  'editToolbar'

export interface VectorToolSettingsDescriptor {
  _obj: 'toolPreset'
  toolUserSelectionRecencyRank: number
  mode: BlendModeEnum
  opacity: number
  proportionalHeight: number
  proportionalWidth: number
  radii: RadiiDescriptor
  radius: number
  cornerRadiusUnit: number
}