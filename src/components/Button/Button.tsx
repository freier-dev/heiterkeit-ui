import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Button(props: Props) {
  const { children } = props;
  return (
    <button style={{ backgroundColor: "dodgerblue", border: "none" }}>
      {children}
    </button>
  );
}
