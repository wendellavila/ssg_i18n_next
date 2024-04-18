export interface Map<T> {
  [id: string]: T;
}
export type I18n = <TargetKey>(key: TargetKey) => any;