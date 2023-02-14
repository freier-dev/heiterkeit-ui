interface Props {
  /**
   * Button label
   */
  children: string;
}
export default function Button(props: Props) {
  const { children } = props;
  return (
    <button style={{ backgroundColor: "dodgerblue", border: "none" }}>
      {children}
    </button>
  );
}
