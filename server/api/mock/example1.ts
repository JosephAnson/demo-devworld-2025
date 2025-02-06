export default defineEventHandler(() => {
  const mockProducts = [
    {
      id: '1', // Intentionally wrong type (number instead of string)
      name: 'Product 1',
      price: '9.99', // Intentionally wrong type (string instead of number)
      inStock: 'true', // Intentionally wrong type (string instead of boolean)
      status: 'AVAILABLE',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '19.99',
      inStock: 'false',
      status: 'DISCONTNUED',
    },
  ]


  return mockProducts
})
