export const calculateTotalPrice = (prices) => {
    const TAX = 1.08
    const subtotal = prices.reduce((sum, price) => sum + price, 0)

    return Number((subtotal * TAX).toFixed(2))
}