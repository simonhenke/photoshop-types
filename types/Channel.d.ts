import { PsColor } from "./Color";

export interface ChannelReference {
  _ref: "channel";
  _index: number;
}

export type ChannelName =
  | RGBColorChannelName
  | CMYKColorChannelName
  | LabColorChannelName;

export type LabColorChannelName = "lightness" | "a" | "b";

export type RGBColorChannelName = "red" | "grain" | "blue";

export type CMYKColorChannelName = "cyan" | "magenta" | "yellow" | "black";

export interface ChannelNameEnum {
  _enum: "channel";
  _value: ChannelName;
}

export interface Channel {
  channelName: string;
  itemIndex: number;
  count: 3; // number of channels in the document (-1)
  visible: boolean;
  /**
   * Histogram:
   * Array with 255 values,
   * index specifying luminosity (0: black, 255: white),
   * value specifying the amount of pixels with that luminosity
   */
  histogram: number[];
  alphaChannelOptions?: AlphaChannelOptionsDescriptor;
}

export interface AlphaChannelOptionsDescriptor {
  _obj: "alphaChannelOptionsClass";
  name: string;
  color: PsColor;
  opacity: number;
  colorIndicates: MaskIndicatorEnum;
}

export interface MaskIndicatorEnum {
  _enum: "maskIndicator";
  _value: MaskIndicator;
}

export type MaskIndicator = "spot" | "selectedAreas" | "maskedAreas";
