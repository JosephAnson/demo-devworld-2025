export default defineEventHandler(() => {
  const products = [
    {
      id: '1', // Intentionally wrong type (number instead of string)
      name: 'Product 1',
      price: '9.99', // Intentionally wrong type (string instead of number)
      inStock: 'true', // Intentionally wrong type (string instead of boolean)
      available: 'AVAILABLE',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '19.99',
      inStock: 'false',
      available: 'DISCONTNUED',
    },
  ]


  return products
})
