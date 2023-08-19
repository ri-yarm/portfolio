import React from "react";
import { a, useTrail } from "@react-spring/web";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail = ({ open, children }: TrailProps) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? "auto" : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};

export default React.memo(Trail);
