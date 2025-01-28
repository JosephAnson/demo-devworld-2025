export default defineEventHandler(async () => {
  return {
    name: 'Product 1',
    price: 100,
    description: 'This is a product',
    image: 'https://via.placeholder.com/150',
    category: 'ELECTRONICS',
    stock: 10,
    isAvailable: true,
    variants: [
      {
        size: 'S',
        color: 'Red',
      },
    ],
  }
})
