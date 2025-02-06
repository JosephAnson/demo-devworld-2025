export default defineEventHandler(() => {
  const products =  [
    {
      id: '1',
      name: 'Product 1',
      price: '9.99',
      inStock: 'true',
      productStatus: 'AVAILABLE',
    },
    {
      id: 2, // Intentionally wrong type (number instead of string)
      name: 'Product 2',
      price: '19.99', // Intentionally wrong type (string instead of number)
      inStock: 'false', // Intentionally wrong type (string instead of boolean)
      productStatus: 'DISCONTNUED', // Intentionally spelt wrong
    },
  ]

  return products
})
