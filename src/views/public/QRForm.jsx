import React, { useState } from "react";
import { Box } from "grommet";

import Footer from "components/specifics/qrform/Footer.jsx";
import Layer from "components/specifics/qrform/QRForm";
import Toolbar from "components/specifics/qrform/Toolbar.jsx";

import PubSub from "services/pubSub.js";

export default () => {
  const [visibility, setVisibility] = useState(false);

  PubSub.getInstance().on("onVisibilityChange", () => {
    setVisibility(!visibility);
  });

  return (
    <Box>
      <Box height="xsmall" />
      <Toolbar withButton items={[]} />
      <Layer visibility={true} />
      <Footer />
    </Box>
  );
};
