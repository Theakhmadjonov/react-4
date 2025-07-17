import type { HTMLAttributes, JSX } from "react";
import "./rhombButton.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  width: string;
  height: string;
  color?: string;
  children: string;
}

const RhombButton: React.FC<Props> = ({
  width,
  height,
  color,
  children,
}): JSX.Element => {
  return (
    <button
      className={`btn ${width} ${height} ${color ? color : ""} z-50 rounded-[5px] text-[white] bg-[#f4796c] font-extrabold`}
    >
      <h1 className="text-btn">{children}</h1>
    </button>
  );
};

export default RhombButton;
