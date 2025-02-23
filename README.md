# @dand.dev/nuxt-fsd

Nuxt 3 Module for FSD with auto import support.

# Initialization

Install module.

```bash pnpm
npm i @dand.dev/nuxt-fsd
```

Add module to `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ["@dand.dev/nuxt-fsd"],
});
```

# Usage

Module usage guide.

## Directoryes

1. Create `src` directory.
2. Add to `src` FSD layers directoryes.

### Total directory structure

```bash
.../
├── src/
│   ├── app/
│   ├── entities/
│   ├── features/
│   ├── shared/
│   ├── widgets/
```

## Shared

Сonsider `UiButton` component for example.

### Directory structure

```bash
.../
├── src/
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── button/
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── ...
│   │   │   │   ├── index.ts # For auto import component types
│   │   │   │   ├── index.vue # For auto import component
│   │   ├── utils/ # Anyone segment
│   │   │   ├── sum.ts
│   │   │   ├── index.ts # For auto import segment modules
```

`ui/button/index.ts` - file for auto import component types.

```typescript
export type { IUiButtonProps } from "./interfaces";
```

`ui/button/index.vue` - file for auto import component.

```vue
<script setup lang="ts">
import type { IUiButtonProps } from "./interfaces";

const props = withDefaults(defineProps<IUiButtonProps>(), {
  type: "button",
});
</script>

<template>
  <button :type="type">
    <slot />
  </button>
</template>
```

`utils/index.ts` - file for auto import segment modules.

```typescript
export { sum } from "./sum";
```

### Usage

```vue
<script setup lang="ts">
const props: IUiButtonProps = {
  type: "submit",
};
</script>

<template>
  <UiButton v-bind="props"> Total: {{ sum(1, 4) }} </UiButton>
</template>
```

## Entities

Everything is the same as `shared`, but the components do not have `Ui` prefix.

## Features, Widgets

Everything is the same as `entities`, but the components do have `Feature` and `Widget` postfix.

## Pages

```bash
.../
├── src/
│   ├── pages/
│   │   ├── product/ # Anyone page
│   │   │   ├── index.vue # For auto import page component
```

## App

```bash
.../
├── src/
│   ├── app/
│   │   ├── routes/ # App routes
│   │   │   ├── index.vue # Path "/"
│   │   ├── middlewares/ # App middlewares
│   │   │   ├── auth.ts # Auth middleware
│   │   ├── layouts/ # App layouts
│   │   │   ├── default.vue # Default app layout
```
