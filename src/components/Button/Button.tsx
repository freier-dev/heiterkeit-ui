import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
}
export default function Button(props: Props) {
  const { children } = props;
  return <button className={styles.button}>{children}</button>;
}
