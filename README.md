# COPID Digital Menu

Mobile-first digital restaurant menu for **COPID**, inspired by the layout and interaction patterns of modern QR digital menus.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Run

```bash
npm install
npm run dev
```

## Replace menu content

Edit these files only:

- `src/data/menu.ts` — categories and products
- `src/data/restaurant.ts` — name, cover, logo, currency
- `public/images/` — logo, cover, product, and category images

Product fields:

- `id`, `categoryId`, `name`, `description`, `image`, `calories`, `price`, `available`, optional `badge`, optional `allergens`

## Language / RTL

Arabic is the default locale. Use the language control in the header area to switch to English. Direction flips automatically (`rtl` / `ltr`).
