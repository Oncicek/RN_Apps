export const generateRandomBetween: (
  min: number,
  max: number,
  exclude: number
) => number = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber === exclude
    ? generateRandomBetween(min, max, exclude)
    : randomNumber;
};
