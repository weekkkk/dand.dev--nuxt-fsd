import { ComponentsDir } from "nuxt/schema";

const formatComponentName = (
  pascalName: string,
  postfix: string = "",
  skip: number = 0
) =>
  `${pascalName.slice(0, skip)}${pascalName
    .slice(skip)
    .replaceAll("Ui", "")}${postfix}`;

export const makeDir = ({
  prefix,
  folder,
  skip,
}: {
  folder: string;
  prefix?: string;
  skip?: number;
}): ComponentsDir => {
  return {
    path: `~/src/${folder}`,
    extendComponent(component) {
      component.pascalName = formatComponentName(
        component.pascalName,
        prefix,
        skip
      );
      return component;
    },
    pattern: "**/*index.vue",
    extensions: ["vue"],
  };
};
