import { button } from "./Button.css";
interface Props {
  children: string;
}
export default function Button(props: Props) {
  const { children } = props;
  return <button className={button}>{children}</button>;
}
