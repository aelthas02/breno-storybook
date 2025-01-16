# Breno Storybook

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

### And was based on the following Design in [Figma](https://www.figma.com/design/jy9JeQ6Vbka6bm1qUcF1Rg/Portifolio?node-id=0-1&t=NeC8A54tiyllGFxG-1)

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Publishing

After building your library with `ng build ngx-apostaganha-ui`, go to the dist folder `cd dist/ngx-apostaganha-ui` and run `npm publish or npm pack`.

## Using the library locally

After running the `npm pack` command, a .tgz file will be generated in the /dist directory. Copy the .tgz file to the root of the project that will be using the library and run `npm i agdev-apostaganha-ngx-apostaganha-ui-x.x.x.tgz`.

Import the lib component you want to use into your .component file

## Documentation

To view the documentation, run `npm run storybook`.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
