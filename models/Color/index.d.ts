import TinyColor from 'tinycolor2';

declare class Color {
  _class: 'color';
  alpha: number;
  blue: number;
  green: number;
  red: number;

  constructor(args?: any, json?: any);

  set(tinyColor: TinyColor.Instance): Color;

  _getTinyColor(): TinyColor.Instance;
}

export = Color;
