import type { HTMLAttributes, JSX } from "react";
import "./rhombButton.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  textSize: string;
  width: string;
  height: string;
  color?: string;
  children: string;
}

const RhombButton: React.FC<Props> = ({
  textSize,
  width,
  height,
  color,
  children,
}): JSX.Element => {
  return (
    <button
      className={`btn ${width} ${height} ${textSize} ${color ? color : ""} z-50 rounded-[5px] text-[white]`}
    >
      {children}
    </button>
  );
};

export default RhombButton;
