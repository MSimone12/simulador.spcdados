export const formatCurrency = int => {
  let value = parseFloat(int) / 100
  const isNegative = value < 0
  if (isNegative) value = value * -1
  const formattedValue = value
    .toFixed(2)
    .split('.')
    .map(part => part.split(/(?=(?:...)*$)/).join('.'))
    .join(',')
  return `R$ ${isNegative ? '-' : ''}${formattedValue}`
}
