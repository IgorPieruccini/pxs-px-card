import { Loader } from "pixi.js";
import { useMemo, useState } from "react";
import { BACKFACE, Deck, LoadResource, Resource } from "../utils";

export const useCardStore = ({ resource: res, backfacePath }: Deck) => {
  const [cardResources] = useState<LoadResource[]>(res);
  const [resources, setResources] = useState<Resource>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loader = useMemo(() => {
    return new Loader();
  }, []);

  useMemo(() => {
    loader.add(BACKFACE, backfacePath);
    cardResources.forEach((resource) => {
      loader.add(resource.id, resource.path);
    });

    loader.load((_, resources: Resource) => {
      setResources(resources);
      setIsLoading(false);
    });
  }, [cardResources, loader, backfacePath]);

  return { resources, isLoading } as const;
};
