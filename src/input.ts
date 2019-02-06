// inputName,
// selectedTemplatePath,

"use strict";

import * as args from "args";
import { readdirSync } from "fs";
import * as inquirer from "inquirer";
import { PathPrompt } from "inquirer-path";
import { resolve } from "path";

args.option("path", "The path of template folder", "blueprint-templates");

const templatesPath = args.parse(process.argv).path as string;

console.log(process.argv);

inquirer.registerPrompt("path", PathPrompt);

export async function getInput(): Promise<any> {
  const dirs = readdirSync(resolve(process.cwd(), templatesPath), {
    withFileTypes: true,
  })
    .filter(dir => dir.isDirectory())
    .map(({ name }) => name);

  const answers = await inquirer.prompt([
    {
      cwd: ".",
      default: "src/components/",
      directoryOnly: true,
      message: "Select a target directory for your component:",
      name: "path",
      suggestOnly: false,
      type: "path",
    } as inquirer.Question,
    {
      choices: dirs,
      message: "Select type of your component",
      name: "type",
      type: "list",
    },
    {
      message: "Enter a name for your component:",
      name: "name",
      validate: input => Boolean(input) || "Component name shold be not empty",
    },
  ]);

  return {
    directoryPath: answers.path,
    inputNames: answers.name.split(","),
    selectedTemplatePath: resolve(process.cwd(), "blueprint-templates", answers.type),
  };
}
