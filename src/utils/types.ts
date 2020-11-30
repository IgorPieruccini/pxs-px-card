import { LoaderResource } from "pixi.js";

export interface CardContent {
  number?: number;
}

export interface LoadResource {
  id: string;
  path: string;
  content: {
    number?: number;
  };
}

export type Resource = Partial<Record<string, LoaderResource>>;
export type CardResource = Partial<
  Record<string, LoaderResource & { content: CardContent }>
>;

export interface Deck {
  backfacePath: string;
  resource: LoadResource[];
}
