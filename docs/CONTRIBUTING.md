# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
npm install
```

While developing, you can run the [example app](/example/) to test your changes.

To run the example app on Android:

```sh
npm run android
```

To run the example app on iOS:

```sh
cd ios/
pod install

npm run ios
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
npm run lint:eslint:check
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
npm test
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.
