# react-hook-slider

### Installation

#### yarn

`yarn add react-hook-slider`

#### npm

`npm install react-hook-slider`

## Usage

This is a simplified example of the library usage. The <Slider> component is designed to be reusable throughout the application while maintaining a consistent design structure. It has the ability to receive different types of child components.

```js
import React, { Children, useRef } from "react";
import { useSlider } from "react-hook-slider";
import { Box, Grid, Button } from "theme-ui";

const Slider = ({ children, sx, className }) => {
  const { sliderRef, scrollStatus, scrollTo } = useSlider({ hasPadding: true });

  const containerRef = useRef(null);
  const showButtons = true;

  return (
    <Box
    sx={{
      position: "relative",
      ...sx,
    }}
    ref={containerRef}
    className={className}
  >
    <Grid
      sx={{
        overflowX: "auto",
        width: "full",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        gridAutoFlow: "column",
        gridAutoColumns: "max-content",
      }}
      ref={sliderRef}
    >
      {Children.map(children, (child, index) => (
        <Box key={index} sx={{ scrollSnapAlign: "center", maxWidth: "90vw" }}>
          {child}
        </Box>
      ))}
    </Grid>
    {showButtons && (
      <Box>
        <Button onClick={scrollTo('left')} disabled={scrollStatus === "left"}>Scroll left</Button>
        <Button onClick={scrollTo('right')} disabled={scrollStatus === "right"}>Scroll right</Button>
      </Box>
    )}
  </Box>
  );
};

export default Slider;
```

This code snippet is an example of how the <Slider> component can be used across the app. The <SimpleCard> components are passed as children to the component, which will handle the layout and scrolling of the cards ensuring consistency in the design and behavior while also having the flexibility to use different types of children.

```js
<Slider>
  {ActivityList.map((activity) => (
    <SimpleCard
      numberOfAdults={activity.numberOfAdults}
      numberOfChildren={activity.numberOfChildren}
      title={activity.title}
    />
  ))}
</Slider>
```
