# Beyond Type Checking - DevWorld 2025 Demo

A demo project showcasing end-to-end type safety with TypeScript, Zod, and Nuxt 3. This repository accompanies the "Beyond Type Checking: Building Bulletproof TypeScript Applications" talk at DevWorld 2025.

## 🎯 Key Features

- End-to-end type safety from database to frontend
- Runtime validation with Zod
- Auto-generated form validation with VeeValidate
- Type-safe API endpoints
- Integration with Chrome AI for API generation

## 🚀 Getting Started

1. Install dependencies:

```bash
# pnpm
pnpm install
```

2. Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## 🏗️ Project Structure

- `/app` - Nuxt application code
  - `/pages` - Frontend pages with example implementations
  - `/components` - Vue components
  - `/utils` - Utility functions
- `/schemas` - Zod schemas and type definitions
- `/server/api` - API endpoints with runtime validation
- `/plugins` - Nuxt plugins

## 🛠️ Tech Stack

- [Nuxt 3](https://nuxt.com) - Full-stack Vue framework
- [Zod](https://zod.dev) - TypeScript-first schema validation
- [VeeValidate](https://vee-validate.logaretm.com/v4/) - Form validation with Zod integration
- [shadcn-vue](https://www.shadcn-vue.com/) - UI components
- [Chrome AI](https://github.com/google/chrome-ai) - AI integration for API generation

## 📚 Examples

The project includes four examples showcasing different approaches to type safety:

1. Type Assertions (unsafe) - `example1.vue`
2. Zod Schema Validation - `example2.vue`
3. Automatic Form Creation via Zod Schema - `example3.vue`
4. API Generation via Chrome-based AI - `example4.vue`

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.
