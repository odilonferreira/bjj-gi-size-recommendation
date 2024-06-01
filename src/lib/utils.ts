import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { KimonoSizes } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findBestKimonoSize = (height: string, weight: string): number => {
  const parsedHeight = Number(height);
  const parsedWeight = Number(weight);

  let bestHeightSize: number = 0;
  let bestWeightSize: number = 0;

  for (const [
    size,
    { height: heightRange, weight: weightRange },
  ] of Object.entries(KimonoSizes)) {
    const [minHeight, maxHeight] = heightRange;

    const [minWeight, maxWeight] = weightRange;

    if (parsedHeight >= minHeight && parsedHeight <= maxHeight) {
      bestHeightSize = Number(size);
    }

    if (parsedWeight >= minWeight && parsedWeight <= maxWeight) {
      bestWeightSize = Number(size);
    }
  }

  if (bestHeightSize && bestWeightSize) {
    return Math.max(bestHeightSize, bestWeightSize);
  }

  return bestHeightSize ?? bestWeightSize;
};
