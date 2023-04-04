# react-hook-slider

## Description

An horizontal slider using [React](https://react.dev) hooks that allows to have full control over the design and behavior of the component, simple and easy to use.
### Installation

#### yarn

`yarn add react-hook-slider`

#### npm

`npm install react-hook-slider`

## Usage

The hook returns an object with properties that allow the slider to be controlled: a `ref` to the slider element, a `scrollTo` function to scroll the slider left or right, a `scrollStatus` variable that represents the current scroll position of the slider and `isOverflown`, a function that indicates whether or not the slider content is overflowing its container, in my case this was used to hide or show the slider arrows when there are no enough elements on the list to do the scroll action.

See it in action [here](https://codesandbox.io/s/affectionate-panna-3iwn3q?file=/src/App.js)

Contributions to our [GitHub](https://github.com/sinaptia/react-hook-slider) are welcome.