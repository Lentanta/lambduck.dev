export const getReadingTime = (content: string) => {
  const WORD_PER_MIN = 200;
  const words = content.split(" ").length;
  return Math.round(words / WORD_PER_MIN);
};
