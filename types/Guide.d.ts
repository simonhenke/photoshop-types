import { OrientationEnum } from "./Geometry";
import { UnitValue } from "./Unit";

export interface GuideDescriptor {
  itemIndex: number;
  count: number;
  position: UnitValue;
  orientation: OrientationEnum;
  layerID: number; // identifies artboard
  kind: GuideKindEnum;
  ID: number;
}

export interface GuideKindEnum {
  _enum: "kind";
  _value: GuideKind;
}

export type GuideKind = "document" | "artboard";
