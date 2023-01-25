function createCumulatedArray(elements: number[]): number[] {
  const cumulatedArray = [elements[0]];

  for (let index = 1; index < elements.length; index++) {
    cumulatedArray[index] = cumulatedArray[index - 1] + elements[index];
  }

  return cumulatedArray;
}

export function pickWeightedRandom<T>(elements: T[], weights: number[]): T {
  if (elements.length !== weights.length) {
    throw new Error("Lenght of elemnts must be same as length of weights");
  }

  const cumulativeWeights = createCumulatedArray(weights);
  const highestWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = highestWeight * Math.random();

  let selectedIndex: number;

  for (
    selectedIndex = 0;
    selectedIndex < cumulativeWeights.length;
    selectedIndex++
  ) {
    const cumulatedWeight = cumulativeWeights[selectedIndex];
    if (randomNumber < cumulatedWeight) {
      break;
    }
  }

  return elements[selectedIndex];
}
