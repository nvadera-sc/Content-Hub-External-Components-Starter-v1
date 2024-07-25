ℹ️ This repository is now archived, having been replaced by a [much improved version](https://github.com/nvadera-sc/Content-Hub-External-Components-Starter)

# Content Hub External Components Starter
This is a starter project intended to help in the development of external components for Content Hub. It supports creating react components, as well as static vanilla javascript based components.

## Develop
### Static JS Component
If you are creating a component that has no external dependencies, and does not require any compiling, you should follow the following steps:
1. Create a new directory within `src/Static`, for example "MyNewComponent"
2. Create a javascript file within this new directory, for example "NewComponent.js"
3. Copy the content of the file at `src/Static/simple/index.js` into your new file to use as a template
4. After building, the new component will be available at `public/static/{DirectoryName}/{FileName}.js`

### React JS Component
If you are creating a component that has external dependencies (such as react), and therefore requires compiling, you should follow the following steps:
1. Create a new directory within `src/Static`, for example "MyNewComponent"
2. Create an entry point file within this new directory, for example "NewComponent.jsx"
3. (optional) Copy the content of either `src/Simple/index.ts` or `src/SimpleReact/index.jsx` into your new entry point file to use as a template
4. Add a new entry for your new entry point file within `webpack.config.js`, for example:
```
module.exports = {
    ...
    entry: {
        ...
        {NewComponentName}: '{PathToEntryFile}'
        ...
    },
    ...
}
```
5. After building, the new component will be available at `public/{NewComponentName}.js`

Further detail regarding entry points can be found within the [Webpack Documentation](https://webpack.js.org/concepts/entry-points/).

## Build
To build the components run

```
npm run build
```

You can also set this to run whenever a source file is changed by running

```
npm run watch
```

This will populate the `public` directory

## Run
Start the server by calling

```
npm run start
```
This will host the compiled components from the `public` directory, by default, at http://localhost:3000.
