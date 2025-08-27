export const formatWeight = (weight: number): string => {
  if (weight === 0) return '0 кг'
  if (weight < 1) return `${(weight * 1000).toFixed(0)} г`
  return `${weight.toFixed(1)} кг`
}

export const formatQuantity = (qty: number): string => {
  return qty.toString()
}
