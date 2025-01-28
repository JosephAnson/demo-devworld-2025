# Beyond Type Checking - DevWorld 2025 Demo

A demo project showcasing end-to-end type safety with TypeScript, Zod, and Nuxt 3. This repository accompanies the "Beyond Type Checking: Building Bulletproof TypeScript Applications" talk at DevWorld 2025.

## 🎯 Key Features

- End-to-end type safety from database to frontend
- Runtime validation with Zod
- Auto-generated form validation
- Type-safe API endpoints
- Database schema to TypeScript type generation

## 🚀 Getting Started

1. Install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Visit `http://localhost:3000` to see the demo in action.

## 🏗️ Project Structure

- `/server/schemas` - Zod schemas and type definitions
- `/server/api` - API endpoints with runtime validation
- `/app/pages` - Frontend pages with type-safe forms
- `/server/db` - Database schema and configuration

## 🛠️ Tech Stack

- [Nuxt 3](https://nuxt.com) - Full-stack Vue framework
- [Zod](https://zod.dev) - TypeScript-first schema validation
- [Drizzle ORM](https://orm.drizzle.team) - Type-safe ORM
- [shadcn-vue](https://www.shadcn-vue.com/) - UI components

## 📚 Examples

The project includes three examples showcasing different approaches to type safety:

1. Type Assertions (unsafe)
2. Zod Schema Validation
3. End-to-End Type Safety with Drizzle

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.
