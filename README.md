# Next 9

This is a demonstration of Next.js 9 features.

## About

Next.js is a fantastic framework that allows us to build performant server-side rendered React apps with ease.

In this repo, you will find ways how you can utilize the powerful features of [Next.js 9](https://nextjs.org/),
like **API routes** and **Static Site Generation (SSG)** to build full-stack React apps.

Also it use [Auth0](https://auth0.com/) to handle user *authentication* and *authorization*,
and also Chakra UI component library is integrated for better look.
into our Next.js project to make it a breeze to build beautiful and modularized user interfaces

## To run

To run this project you'll need:

- yarn
- node

To start development server simply type following in your terminal:

```bash
yarn dev
```

All scripts you'll find under **Scripts** section.

## Routes

There is complete list of all routes:

- `/home` - displays home page
- `/about` - displays about page
- `/about/me` - displays *nested* route
- `/user/:id` - displays *dynamic* route when `id` is specified.
    It also can parse *parametrs queries*. Try

    ```ulr
    http://localhost:3000/user/123a?action=create&darkmode=false
    ```

## Techologies

- React
- Next