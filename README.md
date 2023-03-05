# 📝 Description

> Rock Paper Scissors game CLI

# 🧰 Installation

## Prerequisites

- [`Node`](https://nodejs.org/en/download) v16.x
- [`yarn`](https://yarnpkg.com/cli/install)

Install yarn packages before continue

```bash
yarn
```

# ⌨ Development

## Running the app

```bash
yarn dev play -l rock -r paper
```

## 🧪 Running tests per layer

```bash
yarn test:layers:domain
```

# 📏 Lint

Linting codebase

```bash
# getting lint issues
yarn lint

# fixing lint issues
yarn lint:fix
```

# 📦 Building

Before building application to production, make sure environment variables are
applied correctly

Building for production

```bash
yarn build
```

# ✅ TODO

- add integration/e2e tests
- add as real binary command

Observation: Some TODOS are spread across the code and need to be fixed ASAP
