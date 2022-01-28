# Spencerfeng React Package

## This is a base template that can be used for building a custom React Package.

## How to use it

### Install all dependencies

```bash
npm install
```

### Build the package for local development

```bash
npm run build:dev
```

### Build the package for production

```bash
npm run build:prod
```

## How to test the package in your local computer

### Step 1

Build the package

### Step 2

In the root of the package directory, run

```bash
npm link
```

### Step 3

In the root of the React app where you want to use this package, run

```bash
npm link spencerfeng-react-package
```
