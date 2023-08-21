import React from "react";
import styled from "styled-components";
import spiderGif from "../../assets/chelPauk.gif";
import { ZIndex } from "../../lib/contants/enums/ZIndex";
import { animated, useTrail } from "@react-spring/web";

const SpiderManAlive = () => {
  const [trails] = useTrail(
    1,
    () => ({
      from: { bottom: "-40%" },
      to: { bottom: "100%" },
      loop: true,
      delay: 8000,
      config: { duration: 10000 },
    }),
    [],
  );

  return (
    <div>
      {trails.map((props, index) => (
        <SpiderManSC
          key={index}
          style={props}
          src={spiderGif}
          alt="Spider-Man"
        />
      ))}
    </div>
  );
};

const SpiderManSC = styled(animated.img)`
  width: 100px;
  position: absolute;
  z-index: ${ZIndex.ELEMENT};
  user-select: none;
`;

export default React.memo(SpiderManAlive);
