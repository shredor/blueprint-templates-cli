#!/usr/bin/env node

"use strict";

import { getInput } from "./input";
import { createFiles } from "./lib/fileCreator";

const runCreator = async () => {
  const { directoryPath, inputNames, selectedTemplatePath } = await getInput();

  await Promise.all(
    inputNames.map(inputName =>
      createFiles({ inputName, selectedTemplatePath }, directoryPath),
    ),
  );
};

runCreator().catch(e => console.log(e));
