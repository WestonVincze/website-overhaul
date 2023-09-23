import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { DragProps } from "../types";

interface DragConfinedProps extends DragProps {
  offsetLeft: number;
  offsetRight: number;
  offsetTop: number;
  offsetBottom: number;
}

export const DragConfined = ({
  children,
  offsetLeft = -100,
  offsetRight = 100,
  offsetTop = -50,
  offsetBottom = 50,
}: DragConfinedProps): JSX.Element => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox, y: oy, immediate: down }),
    {
      bounds: {
        left: offsetLeft,
        right: offsetRight,
        top: offsetTop,
        bottom: offsetBottom,
      },
    },
  );

  return (
    <animated.div {...bind()} style={{ x, y }}>
      {children}
    </animated.div>
  );
};
