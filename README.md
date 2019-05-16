<p align="left">
  <a href="https://www.npmjs.com/package/blueprint-templates-cli">
    <img src="https://img.shields.io/npm/v/blueprint-templates-cli.svg?color=brightgreen" alt="Version" />
  </a>

  <a href="https://www.npmjs.com/package/blueprint-templates-cli">
    <img src="https://img.shields.io/npm/dt/blueprint-templates-cli.svg" alt="Downloads" />
  </a>
</p>

### About tool
It is CLI for VSCode Blueprint extension ([github](https://github.com/reesemclean/blueprint), [visualstudio marketplace](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint))

It  helps create new folder of files from template easy. 

### Usage 
#### Install package

    yarn global add blueprint-templates-cli
or 

    yarn add blueprint-templates-cli



#### Add templates

 - Create folder `./blueprint-templates`
 - Create templates (see [vscode blueprint  "add template" section](https://github.com/reesemclean/blueprint#add-templates))
 
 
#### Launch command
 - `node node_modules/.bin/create-component` for locally installed package
 - `create-component` for globally installed package
 - use cli option `-p path/to/templates/folder` to override default template folder path

#### Enter information for creating new component
- Select a target directory for your component (Tab complete)
- Select type of your component
- Enter a name for your component (you can enter comma-separated list of names)
##
![enter image description here](https://raw.githubusercontent.com/shredor/shredor.github.io/master/download.png)
    
