import React from "react";
import { animated, useTrail } from "@react-spring/web";
import nyanCatGif from "../../../assets/nyanCatminify.gif";
import styled from "styled-components";
import { ZIndex } from "../../../lib/contants/enums/ZIndex";

const NyanCat = () => {
  const [trails] = useTrail(
    1,
    () => ({
      from: { left: "-40%" },
      to: { left: "100%" },
      loop: true,
      delay: 8000,
      config: { duration: 35000 },
    }),
    [],
  );

  return (
    <>
      {trails.map((props, index) => (
        <NyanCatSC
          key={index}
          style={props}
          src={nyanCatGif}
          alt=" nyan-cat."
        />
      ))}
    </>
  );
};

const NyanCatSC = styled(animated.img)`
  top: -50%;
  transform: translate(0, -10%);
  position: absolute;
  z-index: ${ZIndex.ELEMENT};
  user-select: none;
`;

export default React.memo(NyanCat);
