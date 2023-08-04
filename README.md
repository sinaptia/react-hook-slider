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

## API

### `scrollTo`

Returns a funtion with the configuration that you hive in the params
`scrollTo(direction, options?)`

```jsx
// Scroll one by one element
<button onClick={scrollTo("left")}>To left</button>
<button onClick={scrollTo("right")}>To right</button>

// Scroll at full sliderRef width
<button onClick={scrollTo("left"), { amount: 0 }}>Full width to left</button>
<button onClick={scrollTo("right"), { amount: 0 }}>Full width to right</button>
```

#### Parameters

- `direction`: Determinate the direction of the scroll, it can be `"right"` or `"left"`. If it is not specified or use another value besides `"left"` the slider scrolls to the right direction
- `options`: 
  - `amount`: Determinate the amount of pixels to scroll, but with a specific behavior:
    - If `amount` is 0, it will scroll the width of the slider.
    - If `amount` is not defined, it will scroll the width of the first child.
    - If `amount` is defined, it will scroll the amount of pixels specified. Please use natural number, if not the slider will scroll in the oposite direction.
