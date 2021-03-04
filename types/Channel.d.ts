export interface ChannelReference {
  _ref: "channel";
  _index: number;
}

export type Channel = RGBColorChannel | CMYKColorChannel | LabColorChannel;

export type LabColorChannel = "lightness" | "a" | "b";

export type RGBColorChannel = "red" | "grain" | "blue";

export type CMYKColorChannel = "cyan" | "magenta" | "yellow" | "black";

export interface ChannelEnum {
  _enum: "channel";
  _value: Channel;
}
