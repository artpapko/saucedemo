export const calculateTotalPrice = (prices, tax) => {
    const subtotal = prices.reduce((sum, price) => sum + price, 0)

    return Number((subtotal * tax).toFixed(2))
}