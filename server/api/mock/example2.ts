export default defineEventHandler(() => {
  const mockProducts =  [
    {
      id: '1',
      name: 'Product 1',
      price: '9.99',  // Intentionally wrong type (string instead of number)
      inStock: 'true', // Intentionally wrong type (string instead of boolean)
      description: 'This is a description of product 1',
      status: 'AVAILABLE',
    },
    {
      id: 2, // Intentionally wrong type (number instead of string)
      name: 'Product 2',
      price: '19.99', // Intentionally wrong type (string instead of number)
      inStock: 'false', // Intentionally wrong type (string instead of boolean)
      status: 'DISCONTNUED', // Intentionally spelt wrong
      description: 'This is a description of product 2',
    },
  ]

  return mockProducts
})
