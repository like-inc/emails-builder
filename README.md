# Email builder

## Structure
```
├── build //-- all compiler emails with inline style and should used for sending
│   ├── *.html
├── src
│   ├── layouts //-- reusable template like header, footer, etc.
│   │   ├── **/*.pug
│   ├── styles //-- scss styles for all templates and can be separated
│   │   ├── **/*.scss
│   ├── **/*.pug //-- all raw templates in root folder
├── gulpfile.js //-- config 
└── .
```

## Installation

Install the dependencies and devDependencies.

```
npm i
```

## Development

For running server at watch mode

```
npm run watch:email
```
Server runs in live reload mode and works at [http://localhost:8080](http://localhost:8080)

## Build

For build all templates run command:
```
npm run build:email
```
