## Running

```
npm run dev
```

## Things we should know

- svelte-router-spa has no typings, so, typescripting will mess up
- it also doesn't support async route component loading, so we will need to preload any custom components if we ever get there
- it requires svelte 3, had to --force install with svelte 4 + change the package lock to have it use ^4.0.0
