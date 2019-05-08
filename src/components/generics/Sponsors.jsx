import React from "react";
import { Box, Carousel, Image, ResponsiveContext } from "grommet";

export default () => {
  const ID = "sponsors";

  const getMargin = size => {
    if (size === "xsmall" || size === "small" || size === "large")
      return "1% 0%";

    return "medium";
  };

  const renderImage = logo => {
    return (
      <Box align="center">
        <Image
          fit="contain"
          height="100px"
          width="80%"
          src={require(`assets/images/${logo}`)}
        />
      </Box>
    );
  };

  const desktopCarousel = size => {
    return (
      <Carousel fill play={5000}>
        <Box
          direction="row"
          margin={getMargin(size)}
          justify="between"
          id="container_image"
        >
          {renderImage("logo-luka.svg")}
          {renderImage("logo-ach.svg")}
          {renderImage("logo-fintech.svg")}
          {renderImage("logo-google.svg")}
        </Box>
        <Box
          direction="row"
          margin={getMargin(size)}
          justify="between"
          id="container_image"
        >
          {renderImage("logo-branko.svg")}
          {renderImage("logo-fintech.svg")}
          {renderImage("logo-google.svg")}
          {renderImage("logo-ach.svg")}
        </Box>
      </Carousel>
    );
  };

  const responsiveCarousel = size => {
    return (
      <Box margin={getMargin(size)}>
        <Carousel fill play={5000}>
          {renderImage("logo-ach.svg")}
          {renderImage("logo-google.svg")}
          {renderImage("logo-branko.svg")}
          {renderImage("logo-luka.svg")}
          {renderImage("logo-fintech.svg")}
        </Carousel>
      </Box>
    );
  };

  const showCarousel = size => {
    if (
      size === "xsmall" ||
      size === "small" ||
      size === "medium" ||
      size === "large"
    )
      return responsiveCarousel(size);

    return desktopCarousel(size);
  };

  return (
    <ResponsiveContext.Consumer>
      {size => {
        return (
          <Box
            id={ID}
            overflow="hidden"
            background="dark-1"
            pad={{ vertical: "medium", horizontal: "xlarge" }}
          >
            {showCarousel(size)}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};
