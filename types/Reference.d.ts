export interface Reference {
  _ref: string
}

export interface PropertyReference<Property extends string = ''> {
  _ref: 'property'
  _property: Property
}

export interface TargetEnum {
  _enum: 'ordinal'
  _value: 'targetEnum'
}

export interface _idKey {
  _id: number
}

export interface _indexKey {
  _index: number
}

export interface _nameKey {
  _name: string
}

export interface DocumentReference {
  _ref: 'document'
}

export interface FileReference {
  _path: string
  _kind: FileReferenceKind
}

export type FileReferenceKind = 'local' | 'cloud'

export interface DocumentTargetReference extends DocumentReference, TargetEnum {}
export interface DocumentIdReference extends DocumentReference, _idKey {}
export interface DocumentIndexReference extends DocumentReference, _indexKey {}
export interface DocumentNameReference extends DocumentReference, _nameKey {}

export interface LayerReference {
  _ref: 'layer'
}

export interface LayerTargetReference extends LayerReference, TargetEnum {}
export interface LayerIdReference extends LayerReference, _idKey {}
export interface LayerIndexReference extends LayerIdReference, _indexKey {}
export interface LayerNameReference extends LayerIdReference, _nameKey {}

export type TargetProperty = _indexKey | _nameKey | _idKey
export interface _offsetKey {
  _offset: number
}
export type HistoryStateTargetProperty = TargetProperty | _offsetKey