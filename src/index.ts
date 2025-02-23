import { defineNuxtModule } from "@nuxt/kit";
import { makeDir } from "./make-dir";

export default defineNuxtModule({
  meta: {
    name: "@dand.dev/nuxt-fsd",
    configKey: "fsd",
  },
  defaults: {
    message: "Hello from my module!",
  },
  setup(options, nuxt) {
    /**
     * Дирректории компонентов
     */
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push(
        makeDir({ folder: "pages", prefix: "Page" }),
        makeDir({ folder: "widgets", prefix: "Widget" }),
        makeDir({ folder: "features", prefix: "Feature" }),
        makeDir({ folder: "entities" }),
        makeDir({ folder: "shared", skip: 2 })
      );
    });

    /**
     * Определение дирректорий для дефолтных импортов
     */
    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(
        "./src/widgets/*/*/index.ts",
        "./src/entities/*/*/index.ts",
        "./src/shared/*/index.ts"
      );
    });

    /**
     * Переопределение Nuxt дирректорий
     */
    nuxt.options.dir.pages = "./src/app/routes";
    nuxt.options.dir.layouts = "./src/app/layouts";
    nuxt.options.dir.assets = "./src/app/assets";
    nuxt.options.dir.app = "./src/app";
  },
});
