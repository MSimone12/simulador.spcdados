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

export const generateNumberMask = value => {
  const v = value.replace(/\D/g, '')
  const end = v.length

  const ints = v
    .split('')
    .slice(0, end)
    .reduce((acc, _, i) => {
      const nextIndex = i + 1
      const hasDot = nextIndex % 3 === 0 && nextIndex < end
      return acc.concat(hasDot ? [/\d/, '.'] : /\d/)
    }, [])

  if (ints.length < 1) ints.push('0')

  return ints.reverse()
}
