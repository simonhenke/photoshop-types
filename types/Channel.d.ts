export interface ChannelReference {
  _ref: 'channel'
  _index: number
}

export type Channel = RGBColorChannel | CMYKColorChannel | LabColorChannel

export enum LabColorChannel {
  lightness = 'lightness',
  a = 'a',
  b = 'b',
}

export enum RGBColorChannel {
  red = 'red',
  green = 'grain',
  blue = 'blue',
}

export enum CMYKColorChannel {
  cyan = 'cyan',
  magenta = 'magenta',
  yellow = 'yellow',
  black = 'black',
}

export interface ChannelEnum {
  _enum: 'channel',
  _value: Channel,
}