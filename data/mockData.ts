export const generateMockData = (totalPoints: number) : { labels: string[]; data: number[] } => {
  const labels = Array.from({ length: totalPoints }, (_, i) => `Point ${i + 1}`);
  const data = Array.from({ length: totalPoints }, () => Math.floor(Math.random() * 100));
  return { labels, data };
};
