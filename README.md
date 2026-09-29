# FreshCart: Food Product Explorer

A responsive grocery storefront built with React, TypeScript, and Vite. Browse a sample catalogue, find products, save favorites, and manage a local shopping basket.

## Features

- Search products by name and description; filter by category and minimum rating.
- View product details, sale prices, ratings, and stock information.
- Add products to a basket, adjust quantities, remove items, and review the total.
- Save products to a favorites page.
- Keep basket and saved items in browser local storage between visits.
- Use the demo checkout to see an order confirmation. It does not collect payment or arrange delivery.
- Responsive layouts for desktop and mobile screens.

## Run locally

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Verify and build

```bash
npm run lint
npm run build
```

## Project data

Sample product data, descriptions, prices, stock levels, and image URLs live in `src/services/api.ts`. Basket and favorites state is managed in `src/context/ShoppingContext.tsx` and persisted in the browser.
