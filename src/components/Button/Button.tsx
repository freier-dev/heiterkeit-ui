interface Props {
  /**
   * Button label
   */
  children: string;
}
export default function Button(props: Props) {
  const { children } = props;
  return (
    <button
      style={{
        backgroundColor: "hotpink",
        border: "none",
        color: "#333",
        borderRadius: 7,
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        padding: "0.75rem 1rem",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
