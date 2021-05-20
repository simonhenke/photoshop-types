export interface HistoryState {
  name: string
  itemIndex: number
  count: number
  auto: boolean // false if snapshot
  historyBrushSource: boolean
  currentHistoryState: boolean
  ID: number
}