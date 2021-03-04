import { PsColor } from './Color'
import { FileReference } from './SmartObject'
import {
  AngleValue,
  DistanceValue,
  PercentValue,

  RulerUnitsEnum
} from './Unit'

export interface InterpolationMethodEnum {
  _enum: 'interpolationType'
  _value: InterpolationType
}

export type InterpolationType = 'bicubic' | 'bicubicAutomatic' | 'bicubicSmoother' | 'bicubicSharper' | 'bilinear' | 'preserveDetailsUpscale' | 'deepUpscale' | 'nearestNeighbor'

export interface CursorKindEnum {
  _enum: 'cursorKind'
  _value: CursorKind
}

export type CursorKind = 'brushSize' | 'precise' | 'standard'

export interface InterfaceColorDescriptor {
  _obj: 'interfaceColor'
  interfaceColorRed32: number
  interfaceColorGreen32: number
  interfaceColorBlue32: number
  interfaceColorRed2: number
  interfaceColorGreen2: number
  interfaceColorBlue2: number
}

export interface HistoryPreferencesDescriptor {
  _obj: 'historyPrefsClass'
  maximumStates: number
  snapshotInitial: boolean
  nonLinear: boolean
}

export interface VersionDescriptor {
  _obj: 'version'
  versionMajor: number
  versionMinor: number
  versionFix: number
}

export interface EyeDropperSampleTypeEnum {
  _enum: 'eyeDropperSampleType'
  _value: EyeDropperSampleType
}

export type EyeDropperSampleSize = 5 | 15 | 25 | 50

export type EyeDropperSampleType = 'samplePoint' | 'sample3x3' | 'sample5x5'

export interface ColorPickerPrefsDescriptor {
  _obj: 'colorPickerPrefsClass'
  pickerKind: PickerKindTypeEnum
  pickerID?: string
}

export interface PickerKindTypeEnum {
  _enum: 'pickerKindType'
  _value: PickerKindType
}

export type PickerKindType = 'photoshopPicker' // TODO: more?

export interface GlobalAngleDescriptor {
  _obj: 'globalAngle'
  globalLightingAngle: AngleValue
  globalAltitude: AngleValue
}

export interface SaveHistoryToTypeEnum {
  _enum: 'saveHistoryToType'
  _value: SaveHistoryToType
}

export type SaveHistoryToType = 'metadata' | 'textFile' | 'both'

export interface EditLogItemsTypeEnum {
  _enum: 'editLogItemsType'
  _value: EditLogItemsType
}

export type EditLogItemsType = 'session' | 'concise' | 'detailed'

export interface GeneralPreferencesDescriptor {
  _obj: 'generalPreferences'
  colorPickerPrefs: ColorPickerPrefsDescriptor
  interpolationMethod: InterpolationMethodEnum
  historyLog: boolean
  showToolTips: boolean
  resizeWindowsOnZoom: boolean
  dynamicColorSliders: boolean
  shiftKeyToolSwitch: boolean
  saveHistoryTo: SaveHistoryToTypeEnum
  log: boolean
  file?: FileReference
  editLogItems: EditLogItemsTypeEnum
  exportClipboard: boolean
  beepWhenDone: boolean
  autoShowHomeScreen: boolean
  extensionsOn: boolean
  autoUpdateFiles: boolean
  resizePastePlace: boolean
  placeRasterSmartObject: boolean
  skipTransformSOFromLibrary: boolean
  legacyPathDrag: boolean
  modernFreeTransform: boolean
  legacyFreeTransform: boolean
  vectorSelectionModifiesLayerSelection: boolean
  useClassicFileNewDialog: boolean
}

export interface CanvasScreenModeEnum {
  _enum: 'canvasScreenMode'
  _value: CanvasScreenMode
}

export type CanvasScreenMode = 'screenModeArtboard' | 'screenModeFullScreen' | 'screenModeFullScreenWithMenubar' | 'screenModeStandard'

export interface CanvasColorTypeEnum {
  _enum: 'canvasColorType'
  _value: CanvasColorType
}

export type CanvasColorType = 'defaultGray' | 'darkGray' | 'lightGray' | 'black' | 'mediumGray' | 'custom'

export interface CanvasFrameStyleEnum {
  _enum: 'canvasFrameStyle'
  _value: CanvasFrameStyle
}

export type CanvasFrameStyle = 'dropShadow' | 'line' | 'none' 

export interface CanvasAttributesDescriptor {
  _obj: 'canvasAttributes'
  screenMode: CanvasScreenModeEnum
  color: PsColor
  canvasColorMode: CanvasColorTypeEnum
  canvasFrame: CanvasFrameStyleEnum
}

export interface PaletteFontTypeEnum {
  _enum: 'paletteFontType'
  _value: PaletteFontType
}

export type PaletteFontType = 'preferTinyPaletteFontType' | 'preferSmallPaletteFontType' | 'preferMediumPaletteFontType' | 'preferLargePaletteFontType'

export interface UiBrightnessLevelEnum {
  _enum: 'uiBrightnessLevelEnumType'
  _value: UiBrightnessLevel
}

export type UiBrightnessLevel = 'kPanelBrightnessDarkGray' | 'kPanelBrightnessMediumGray' | 'kPanelBrightnessLightGray' | 'kPanelBrightnessOriginal'

export interface HighlightColorOptionEnum {
  _enum: 'highlightColorOptionEnumType'
  _value: HighlightColorOption
}

export type HighlightColorOption = 'uiDefaultHighlightColor' | 'uiBlueHighlightColor'

export interface InterfacePrefsDescriptor {
  _obj: 'interfacePrefs'
  colorChannels: boolean
  canvasBackgroundColors: CanvasAttributesDescriptor[]
  showMenuColors: boolean
  paletteEnhancedFontTypeKey: PaletteFontTypeEnum
  paletteUIScaledTypeKey: boolean
  uiLanguageKey: string
  kuiBrightnessLevel: UiBrightnessLevelEnum
  highlightColorOption: HighlightColorOptionEnum
  dynamicColorSliders: boolean
}

export interface WorkspacePreferencesDescriptor {
  _obj: 'workspacePreferences'
  enableNarrowOptionBar: boolean
  autoCollapseDrawers: boolean
  enableLargeTabs: boolean
  autoShowRevealStrips: boolean
  openNewDocsAsTabs: boolean
  enableFloatingDocDocking: boolean
  useOSMenuAlignment: boolean
}

export interface ShowHUDStateEnum {
  _enum: 'showHUDState'
  _value: ShowHUDState
}

export type ShowHUDState = 'showHUDNever' | 'showHUDTopLeft' | 'showHUDTopRight' | 'showHUDBottomLeft' | 'showHUDBottomRight'

export interface ToolsPreferencesDescriptor {
  _obj: 'toolsPreferences'
  showToolTips: boolean
  useRichToolTips: boolean
  enableGestures: boolean
  overscrollEnabled: boolean
  resizeWindowsOnZoom: boolean
  zoom: boolean
  zoomWithScrollWheel: boolean
  animationKey: boolean
  verticalMovementsBrushHUD: boolean
  arrowKeysRotateBrushTip: boolean
  shiftKeyToolSwitch: boolean
  flick: boolean
  transformsSnapToPixels: boolean
  showTransformReferencePoint: boolean
  doubleClickLayerMaskLaunchSelectionLab: boolean
  showHUD: ShowHUDStateEnum
}

export interface HistoryLogPreferencesDescriptor {
  _obj: 'historyLogPreferences'
  historyLog: boolean
  saveHistoryTo: SaveHistoryToTypeEnum
  log: boolean
  editLogItems: EditLogItemsTypeEnum
}

export interface QueryStateEnum {
  _enum: 'queryState'
  _value: QueryState
}

export type QueryState = 'queryAlways' | 'queryAsk' | 'queryNever'

export interface FileSavePrefsDescriptor {
  _obj: 'fileSavePrefsClass'
  previewsQuery: QueryStateEnum
  previewWinThumbnail: boolean
  extensionsQuery: QueryStateEnum
  lowerCase: boolean
  cameraRaw: boolean
  preferACRForHDRToning: boolean
  EXIF: boolean
  ignoreRotationMetadata: boolean
  FileSaveToOriginalFolder: boolean
  fileSaveInBackground: boolean
  fileAutoSaveEnabled: boolean
  fileAutoSaveInterval: number
  askLayeredTIFF: boolean
  clipboardTIFFTransparencyPref: boolean
  disablePSDCompression: boolean
  maximizeCompatibility: QueryStateEnum
  cloudWorkareaCustom: boolean
  cloudWorkareaDirectory: FileReference
  recentFiles: number
}

export type ExportFileType = 'PNG' | 'JPG' | 'GIF' | 'SVG'

export interface ExportAssetsPrefsDescriptor {
  _obj: 'exportAssetsPrefs'
  exportFileType: ExportFileType
  exportFilePath: string
  exportAssetsJPGQuality: number
  exportAssetsLocationSetting: number
  exportAsLocationSetting: number
  exportPNGTransparency: boolean
  exportMetaData: number
  exportConvertToSRGB: boolean
}

export interface GpuModeEnum {
  _enum: 'gpuMode'
  _value: GpuMode
}

export type GpuMode = 'safe' | 'advanced' | 'performance' // order is basic, normal, advanced

export interface OpenglAdvancedDescriptor {
  _obj: 'openglAdvanced'
  openglD2SEnabled: boolean
  openglVBLSyncEnabled: boolean
  GLCompute: boolean
  CLCompute: boolean
  nativeGPU: boolean
  deepMonitor: boolean
  glAdvancedEnabled: boolean
  openglAdvAntiAliasEnabled: boolean
  openglBilerpEnabled: boolean
  openglmode: GpuModeEnum
}

export interface CachePrefsDescriptor {
  _obj: 'cachePrefs'
  historyStates: number
  numberOfCacheLevels: number
  numberOfCacheLevels64: number
  tileSize: number
  tileSize64: number
  memoryUsagePercent: PercentValue
  openglEnabled: boolean
  openglAdvanced: OpenglAdvancedDescriptor
  expFeatureCompCore: boolean
  expFeatureCompCoreGPU: boolean
  expFeatureCompCoreThreads: boolean
  FeatureDynamicMaxPyramidLevel: boolean
}

export interface ScratchDiskPreferencesDescriptor {
  _obj: 'scratchDiskPreferences'
  scratchDisks: string[]
}

export interface CursorShapeEnum {
  _enum: 'cursorShape'
  _value: CursorShape
}

export type CursorShape = 'normal' | 'fullSize'

export interface DisplayPrefsDescriptor {
  _obj: 'displayPrefs'
  paintingCursors: CursorKindEnum
  otherCursors: CursorKindEnum
  cursorShape: CursorShapeEnum
  cursorCrosshair: boolean
  cursorCrosshairWhileStroking: boolean
  cursorStrokeRope: boolean
  cursorStrokeRopeColor: PsColor
  brush: PsColor
  colorChannels: boolean
}

export interface TransparencyGamutPreferencesEnum {
  _enum: 'transparencyGamutPreferences'
  _value: TransparencyGamutPreferences
}

export type TransparencyGamutPreferences = 'none' | 'small' | 'medium' | 'large'

export interface TransparencyGridColorsTypeEnum {
  _enum: 'transparencyGridColorsType'
  _value: TransparencyGridColorsType
}

export type TransparencyGridColorsType = 'light' | 'medium' | 'dark' | 'red' | 'orange' | 'grain' | 'blue' | 'purple' | 'customEnum'

export interface TransparencyPrefsDescriptor {
  _obj: 'transparencyPrefs'
  transparencyGamutPreferences: TransparencyGamutPreferencesEnum
  transparencyGridColors: TransparencyGridColorsTypeEnum
  gamutWarning: PsColor
  opacity: PercentValue
  foregroundColor?: PsColor
  backgroundColor?: PsColor
}

export interface UnitsPrefsDescriptor {
  _obj: 'unitsPrefs'
  rulerUnits: RulerUnitsEnum
  typeUnits: RulerUnitsEnum
  columnWidth: DistanceValue
  gutterWidth: DistanceValue
  newDocPresetPrintResolution: DistanceValue
  newDocPresetScreenResolution: DistanceValue
  exactPoints: boolean
}

export interface GuideGridColorEnum {
  _enum: 'guideGridColor'
  _value: GuideGridColor
}

export type GuideGridColor = 'lightBlue' | 'lightRed' | 'grain' | 'mediumBlue' | 'yellow' | 'magenta' | 'cyan' | 'lightGray' | 'black' | 'customEnum'

export interface GuideGridStyleEnum {
  _enum: 'guideGridStyle'
  _value: GuideGridStyle
}

export type GuideGridStyle = 'lens' | 'dashedLine' | 'dots'

export interface ControlColorChartreuseEnum {
  _enum: 'controlColorChartreuse'
  _value: ControlColorChartreuse
}

export type ControlColorChartreuse =
  'controlColorClassic' |
  'controlColorDefault' |
  'controlColorGreen' |
  'controlColorChartreuse' |
  'controlColorYellow' |
  'controlColorOrange' |
  'controlColorRed' |
  'controlColorMagenta' |
  'controlColorPurple' |
  'controlColorIndigo' |
  'controlColorFuchsia' |
  'controlColorSeaFoam' |
  'controlColorWhite' |
  'controlColorBlack' 


export interface GuidesPrefsDescriptor {
  _obj: 'guidesPrefs'
  guidesColor: GuideGridColorEnum
  guidesCustomColor?: PsColor
  guidesStyle: GuideGridStyleEnum
  activeArtboardGuidesColor: GuideGridColorEnum
  activeArtboardGuidesCustomColor?: PsColor
  activeArtboardGuidesStyle: GuideGridStyleEnum
  nonActiveArtboardGuidesColor: GuideGridColorEnum
  nonActiveArtboardGuidesCustomColor?: PsColor
  nonActiveArtboardGuidesStyle: GuideGridStyleEnum
  smartGuidesColor: GuideGridColorEnum
  smartGuidesCustomColor?: PsColor
  gridColor: GuideGridColorEnum
  gridCustomColor?: PsColor
  gridStyle: GuideGridStyleEnum
  gridMajor: number
  gridUnits: RulerUnitsEnum
  gradientClassEvent: number
  sliceColor: GuideGridColorEnum
  sliceCustomColor?: PsColor
  showSliceNumbers: boolean
  showInactiveArtboardGuides: boolean
  controlColor: ControlColorChartreuseEnum
}

export interface PluginPickerDescriptor {
  _obj: 'pluginPicker'
  showAllFilterGalleryEntries: boolean
  enablePluginDeveloperMode: boolean
  generatorEnabled: boolean
}

export interface TextCompModeEnum {
  _enum: 'textCompMode'
  _value: TextCompMode
}

export type TextCompMode = 'defaultTextInterface' | 'advancedAsianInterface' | 'middleEasternInterface'

export interface FontPreviewsSizeEnum {
  _enum: 'fontPreviewsSize'
  _value: FontPreviewsSize
}

export type FontPreviewsSize = 'small' | 'medium' | 'large'

export interface TypePreferencesDescriptor {
  _obj: 'typePreferences'
  smartQuotes: boolean
  textComposerChoice: TextCompModeEnum
  enableFontFallback: boolean
  enableGlyphAlternate: boolean
  enablePlaceHolderText: boolean
  enableMENATextEngine: number
  showEnglishFontNames: boolean
  showFontPreviews: boolean
  fontPreviewsSize: FontPreviewsSizeEnum
  textToolTreatsESCAsCommit: boolean
}

export interface Z3DPrefsDescriptor {
  _obj: 'z3DPrefs'
  Z3DPrefDrawProgressiveRenderingOverlay: boolean
  Z3DPrefDropToGL: boolean
  Z3DPrefGLDirectToScreen: boolean
  Z3DPrefGLAutoHideLayers: boolean
  Z3DPrefsGLUseVRAMPercentage: number
  Z3DPrefFileLoadingLightThreshold: number
  Z3DPrefFileLoadingTextureThreshold: number
  Z3DPrefColorMeshSelection: PsColor
  Z3DPrefColorMaterialSelection: PsColor
  Z3DPrefColorLightsourceSelection: PsColor
  Z3DPrefColorLightsourceDisplay: PsColor
  Z3DPrefColorConstraintSelection: PsColor
  Z3DPrefColorConstraintDisplay: PsColor
  Z3DPrefColorProgressiveRenderingTilesDisplay: PsColor
  Z3DPrefColorGroundPlaneDisplay: PsColor
  Z3DPrefGroundPlaneSize: number
  Z3DPrefGroundPlaneSpacing: number
  Z3DPrefShadowQuality: number
  Z3DPrefRenderTileSize: number
  Z3DPrefOnCanvasAxisWidgetScale: number
  Z3DPrefHighQualityErrorThreshold: number
  Z3DPrefShowRichCursorsOnHover: boolean
  Z3DPrefShowRichCursorsOnInteraction: boolean
  Z3DPrefInvertCameraControlYAxis: boolean
  Z3DPrefHideAxisWidgetControlsDependingOnCurrent3DTool: boolean
  Z3DPrefShowLightingEffectsControlsOnTheGroundPlane: boolean
}

export interface ExperimentalFeaturesDescriptor {
  _obj: 'experimentalFeatures'
  expFeatureModifierPalette: boolean
  expFeatureDeepUpscale: boolean
  expFeatureContentAwareTracing: boolean
  expFeatureUXPExportAs: boolean
}

export interface PrivacyPrefsDescriptor {
  _obj: 'privacyPrefs'
}

export interface CheckerboardSizeEnum {
  _enum: 'checkerboardSize'
  _value: CheckerboardSize
}

export type CheckerboardSize = 'checkerboardNone' | 'checkerboardSmall' | 'checkerboardMedium' | 'checkerboardLarge'

export interface PolicyEnum {
  _enum: 'policy'
  _value: Policy
}

export type Policy = 'off' | 'preserve' | 'convert'
