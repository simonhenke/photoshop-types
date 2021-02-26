export enum Unit {
  angleUnit = 'angleUnit',
  densityUnit = 'densityUnit',
  distanceUnit = 'distanceUnit',
  percentUnit = 'percentUnit',
  pixelsUnit = 'pixelsUnit',
  pointsUnit = 'pointsUnit',
  millimetersUnit = 'millimetersUnit',
  centimetersUnit = 'centimetersUnit',
  inchesUnit = 'inchesUnit',
  picasUnit = 'picasUnit',
  noneUnit = 'noneUnit',
}

export enum RulerUnit {
  rulerPixels = 'rulerPixels',
  rulerPoints = 'rulerPoints',
  rulerInches = 'rulerInches',
  rulerCm = 'rulerCm',
  rulerMm = 'rulerMm',
  rulerPercent = 'rulerPercent',
  rulerPicas = 'rulerPicas',
}

export interface RulerUnitsEnum { 
  _enum: 'rulerUnits'
  _value: RulerUnit
}

export interface Fraction {
  numerator: number
  denominator: number
}

export interface UnitValue {
  _unit: Unit
  _value: number
}

export interface AngleValue extends UnitValue {
  _unit: Unit.angleUnit
}

export interface DensityValue extends UnitValue {
  _unit: Unit.densityUnit
}

export interface DistanceValue extends UnitValue {
  _unit: Unit.distanceUnit
}

export interface PercentValue extends UnitValue {
  _unit: Unit.percentUnit
}

export interface PixelValue extends UnitValue {
  _unit: Unit.pixelsUnit
}

export interface PointValue extends UnitValue {
  _unit: Unit.pointsUnit
}

export interface MillimeterValue extends UnitValue {
  _unit: Unit.millimetersUnit
}

export interface CentimeterValue extends UnitValue {
  _unit: Unit.centimetersUnit
}

export interface InchValue extends UnitValue {
  _unit: Unit.inchesUnit
}

export interface PicaValue extends UnitValue {
  _unit: Unit.picasUnit
}

export interface NoneValue extends UnitValue {
  _unit: Unit.noneUnit
}