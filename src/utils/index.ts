export const shortenAddress = (
  address: string,
  startLength = 3,
  endLength = 3
) => {
  if (!address) return "";
  const start = address.slice(0, startLength);
  const end = address.slice(-endLength);
  return `${start}...${end}`;
};
