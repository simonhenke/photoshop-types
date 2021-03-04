import { PsColor } from "./Color";
import { AlignmentEnum, OrientationEnum, RectangleDescriptor, UVPointDescriptor, UVTopRightBottomLeft } from "./Geometry";
import { TransformMatrixDescriptor, WarpDescriptor } from "./Transform";
import { PercentValue, PointValue } from "./Unit";
import { PathContentsDescriptor } from "./Path";

export interface TextKeyDescriptor {
  _obj: 'textLayer'
  antiAlias: {
    _enum: 'antiAliasType'
    _value: antiAliasType
  }
  boundingBox: BoundingBoxDescriptor
  bounds: BoundsDescriptor
  kerningRange: KerningRangeDescriptor[]
  orientation: OrientationEnum
  paragraphStyleRange: ParagraphStyleRangeDescriptor[]
  textClickPoint: UVPointDescriptor<PercentValue>
  textGridding: TextGriddingEnum
  textKey: string
  textShape: TextShapeDescriptor[]
  textStyleRange: TextStyleRangeDescriptor[]
  warp: WarpDescriptor
  transform?: TransformMatrixDescriptor
}

export interface TextStyleRangeDescriptor extends RangePartial {
  _obj: 'textStyleRange'
  textStyle: TextStyleDescriptor
}

export interface FontCapsEnum {
  _enum: 'fontCaps',
  _value: FontCaps,
}

export type FontCaps = 'normal' | 'smallCaps' | 'allCaps'

export interface DigiSetEnum {
  _enum: 'digitSet',
  _value: DigiSet,
}

export type DigiSet = 'defaultDigits' | 'arabicDigits' | 'farsiDigits' | 'hindiDigits'

export interface KashidasEnum {
  _enum: 'kashidas',
  _value: Kashidas,
}

export type Kashidas = 'kashidaDefault' // TODO: more?

export interface BaselineEnum {
  _enum: 'baseline',
  _value: Baseline,
}

export type Baseline = 'normal' | 'superScript' | 'subScript'

export interface OtBaselineEnum {
  _enum: 'otbaseline',
  _value: OtBaseline,
}

export type OtBaseline = 'normal' | 'superScript' | 'subScript' | 'numerator' | 'denominator'

export interface StrikeThroughEnum {
  _enum: 'strikethrough',
  _value: StrikeThrough,
}

export type StrikeThrough = 'xHeightStrikethroughOn' | 'xHeightStrikethroughOff'

export interface UnderlineEnum {
  _enum: 'underline',
  _value: Underline,
}

export type Underline = 'underlineOnLeftInVertical' | 'underlineOnRightInVertical' | 'underlineOff'

export interface FigureStyleEnum {
  _enum: 'figureStyle',
  _value: FigureStyle,
}

export type FigureStyle = 'normal' | 'tabularLining' | 'proportionalOldStyle' | 'proportionalLining' | 'tabularOldStyle'

export interface BaselineDirectionEnum {
  _enum: 'baselineDirection',
  _value: BaselineDirection,
}

export type BaselineDirection = 'withStream' // TODO: more?

export interface TextLanguageEnum {
  _enum: 'textLanguage',
  _value: TextLanguage,
}

export type TextLanguage =
  'oldGermanLanguage' |
  'greekLanguage' |
  'hungarianLanguage' |
  'icelandicLanguage' |
  'italianLanguage' |
  'japaneseLanguage' |
  'croatianLanguage' |
  'latvianLanguage' |
  'lithuanianLanguage' |
  'nynorskNorwegianLanguage' |
  'polishLanguage' |
  'romanianLanguage' |
  'rumanianLanguage' |
  'russianLanguage' |
  'serbianLanguage' |
  'slovakLanguage' |
  'slovenianLanguage' |
  'spanishLanguage' |
  'standardFrenchLanguage' |
  'standardGermanLanguage' |
  'germanLanguageReformed1996' |
  'standardPortugueseLanguage' |
  'swedishLanguage' |
  'swissGermanLanguage' |
  'swissGermanLanguageOldRules' |
  'turkishLanguage' |
  'ukenglishLanguage' |
  'ukranianLanguage' |
  'arabicLanguage' |
  'hebrewLanguage' |
  'bokmalNorwegianLanguage' |
  'brazilianPortugueseLanguage' |
  'bulgarianLanguage' |
  'canadianFrenchLanguage' |
  'canadianEnglishLanguage' |
  'catalanLanguage' |
  'chineseLanguage' |
  'czechLanguage' |
  'danishLanguage' |
  'dutchLanguage' |
  'kdutchLanguageOldRules' |
  'englishLanguage' |
  'estonianLanguage' |
  'finnishLanguage'

export interface JapaneseAlternateEnum {
  _enum: 'japaneseAlternate'
  _value: JapaneseAlternate
}

export type JapaneseAlternate =
  'defaultForm' |
  'traditionalForm' |
  'expertForm' |
  'JIS78Form' |
  'JIS83Form' |
  'halfWidthForm' |
  'thirdWidthForm' |
  'quarterWidthForm' |
  'fullWidthForm' |
  'proportionalWidthForm'
  // expertForm?
  // traditionalForm?
  // TODO: more?

export interface GridAlignmentEnum {
  _enum: 'gridAlignment'
  _value: GridAlignment
}

export type GridAlignment =
  'roman' |
  'bottom' |
  'icfbottom' |
  'center' |
  'icftop' |
  'top'

export interface TextStyleDescriptor {
  _obj: "textStyle"
  styleSheetHasParent: boolean
  fontPostScriptName: string
  fontName: string
  fontStyleName: string
  fontScript: number
  fontTechnology: number
  fontAvailable: boolean
  size: PointValue
  impliedFontSize: PointValue
  horizontalScale: number
  verticalScale: number
  syntheticBold: boolean
  syntheticItalic: boolean
  autoLeading: boolean
  leading?: PointValue
  impliedLeading?: PointValue
  tracking: number
  baselineShift: PointValue
  impliedBaselineShift: PointValue
  fontCaps: FontCapsEnum
  digitSet: DigiSetEnum
  kashidas: KashidasEnum
  diacXOffset: PointValue
  diacYOffset: PointValue
  markYDistFromBaseline: PointValue
  baseline: BaselineEnum
  otbaseline: OtBaselineEnum
  strikethrough: StrikeThroughEnum
  underline: UnderlineEnum
  ligature: boolean
  altligature: boolean
  contextualLigatures: boolean
  fractions: boolean
  ordinals: boolean
  swash: boolean
  titling: boolean
  connectionForms: boolean
  stylisticAlternates: boolean
  stylisticSets: number
  ornaments: boolean
  justificationAlternates: boolean
  figureStyle: FigureStyleEnum
  proportionalMetrics: boolean
  kana: boolean
  italics: boolean
  baselineDirection: BaselineDirectionEnum
  textLanguage: TextLanguageEnum
  japaneseAlternate: JapaneseAlternateEnum
  mojiZume: number
  gridAlignment: GridAlignmentEnum
  noBreak: boolean
  color: PsColor
  strokeColor: PsColor
  baseParentStyle: BaseParentTextStyleDescriptor
}

export interface AutoKernEnum {
  _enum: 'autoKern'
  _value: AutoKern
}

export type AutoKern = 'metricsKern' | 'opticalKern' | 'manual'

export interface DirOverrideEnum {
  _enum: 'dirOverride'
  _value: DirOverride
}

export type DirOverride = 'dirOverrideDefault' | 'dirOverrideLTR' | 'dirOverrideRTL'

export interface DiacVPosEnum {
  _enum: 'diacVPos'
  _value: DiacVPos
}

export type DiacVPos = 'diacVPosOpenType' | 'diacVPosOff' | 'diacVPosLoose' | 'diacVPosMedium' | 'diacVPosTight'

export interface WariChuJustificationEnum {
  _enum: 'wariChuJustification'
  _value: WariChuJustification
}

export type WariChuJustification =
  'wariChuAutoJustify' |
  'wariChuCenterJustify' |
  'wariChuFullJustifyLastLineCenter' |
  'wariChuFullJustifyLastLineFull' |
  'wariChuFullJustifyLastLineLeft' |
  'wariChuFullJustifyLastLineRight' |
  'wariChuLeftJustify' |
  'wariChuRightJustify'

export interface LineCapEnum {
  _enum: 'lineCap'
  _value: LineCap
}

export type LineCap = 'buttCap' | 'roundCap' | 'squareCap'

export interface LineJoinEnum {
  _enum: 'lineJoin'
  _value: LineJoin
}

export type LineJoin = 'miterJoin' | 'roundJoin' | 'bevelJoin'

export interface BaseParentTextStyleDescriptor extends TextStyleDescriptor {
  characterRotation: number
  autoKern: AutoKernEnum
  dirOverride: DirOverrideEnum
  diacVPos: DiacVPosEnum
  underlineOffset: PointValue
  alternateLigatures: boolean
  oldStyle: boolean
  ruby: boolean
  enableWariChu: boolean
  wariChuCount: number
  wariChuLineGap: number
  wariChuScale: number
  wariChuWidow: number
  wariChuOrphan: number
  wariChuJustification: WariChuJustificationEnum
  tcyUpDown: number
  tcyLeftRight: number
  leftAki: number
  rightAki: number
  jiDori: number
  fill: boolean,
  stroke: boolean,
  fillFirst: boolean,
  fillOverPrint: boolean,
  strokeOverPrint: boolean,
  lineCap: LineCapEnum,
  lineJoin: LineJoinEnum,
  lineWidth: PointValue,
  miterLimit: PointValue,
  lineDashoffset: number,
}

export type TextShapeDescriptor = TextShapeGenericProperties | TextShapeOnPathDescriptor

export interface TextShapeGenericProperties {
  _obj: 'textShape'
  bounds: RectangleDescriptor
  char: CharEnum
  columnCount: number
  columnGutter: PointValue
  firstBaselineMinimum: PointValue
  frameBaselineAlignment: FramBaselineAlignmentEnum
  orientation: OrientationEnum
  rowCount: number
  rowGutter: PointValue
  rowMajorOrder: boolean
  spacing: PointValue
  transform: TransformMatrixDescriptor
}

export interface TextShapeOnPathDescriptor extends TextShapeGenericProperties {
  flip: boolean
  path: PathContentsDescriptor
  pathTypeAlignTo: PathTypeAlignToEnum
  pathTypeAlignment: PathTypeAlignmentEnum
  pathTypeEffect: PathTypeEffectEnum
  pathTypeSpacing: number
  tRange: TRangeDescriptor
}

export interface TRangeDescriptor {
  _obj: 'range'
  end: number
  saturation: number
}

export interface PathTypeEffectEnum {
  _enum: 'pathTypeEffect'
  _value: PathTypeEffect
}

export type PathTypeEffect = 'rainbowEffect'  // TODO: more?

export interface PathTypeAlignmentEnum {
  _enum: 'pathTypeAlignment'
  _value: PathTypeAlignment
}

export type PathTypeAlignment = 'baselineAlignment' | 'centerAlignment'

export interface PathTypeAlignToEnum {
  _enum: 'pathTypeAlignTo'
  _value: PathTypeAlignTo
}

export type PathTypeAlignTo = 'toPathTop' | 'toPathBottom' | 'toPathCenter'

export interface FramBaselineAlignmentEnum {
  _enum: 'frameBaselineAlignment'
  _value: FramBaselineAlignment
}

export type FramBaselineAlignment =
  'alignByAscent' |
  'alignByCapHeight' |
  'alignByLeading' |
  'alignByMinimumValueRoman' |
  'alignByMinimumValueAsian' |
  'alignByXHeight'


export interface CharEnum {
  _enum: 'char'
  _value: Char
}

export type Char = 'box' | 'paint'

export interface TextGriddingEnum {
  _enum: 'textGridding'
  _value: TextGridding
}

export type TextGridding = 'none' | 'round' | 'systemMetrics'

export interface ParagraphStyleRangeDescriptor extends RangePartial {
  _obj: 'paragraphStyleRange'
  paragraphStyle: ParagraphStyleDescriptor
}

export interface ParagraphStyleDescriptor {
  _obj: 'paragraphStyle'
  styleSheetHasParent: true
  align?: AlignmentEnum
  endIndent?: PointValue
  firstLineIndent?: PointValue
  hyphenate?: boolean
  impliedEndIndent?: PointValue
  impliedFirstLineIndent?: PointValue
  impliedSpaceAfter?: PointValue
  impliedSpaceBefore?: PointValue
  impliedStartIndent?: PointValue
  spaceAfter?: PointValue
  spaceBefore?: PointValue
  startIndent?: PointValue
  burasagari?: BurasagariEnum
  kinsokuSetName?: KinsokuSetNameEnum,
  textEveryLineComposer?: boolean
  mojiKumiName?: MojiKumiNameEnum
}

export interface BurasagariEnum {
  _enum: 'burasagari',
  _value: Burasagari
}

export type Burasagari = 'burasagariNone' | 'burasagariStandard' | 'burasagariStrong' 

export interface KinsokuSetNameEnum {
  _enum: 'kinsokuSetName'
  _value: KinsokuSetName
}

export type KinsokuSetName = 'None' | 'Hard' | 'Soft'

export interface MojiKumiNameEnum {
  _enum: 'mojiKumiName',
  _value: MojiKumiName
}

export type MojiKumiName =
  'Photoshop6MojiKumiNone' |
  'Photoshop6MojiKumiSet1' |
  'Photoshop6MojiKumiSet2' |
  'Photoshop6MojiKumiSet3' |
  'Photoshop6MojiKumiSet4'

export type antiAliasType =
  'antiAliasNone' |
  'antiAliasSharp' |
  'antiAliasCrisp' |
  'antiAliasStrong' |
  'antiAliasSmooth' |
  'antiAliasPlatformLCD' |
  'antiAliasPlatformGray'


export interface BoundingBoxDescriptor extends UVTopRightBottomLeft {
  _obj: 'boundingBox'
}

export interface BoundsDescriptor extends UVTopRightBottomLeft {
  _obj: 'bounds'
}

export interface RangePartial {
  from: number
  to: number
}

export interface KerningRangeDescriptor extends RangePartial {
  _obj: 'kerningRange'
  kerning: number
}

