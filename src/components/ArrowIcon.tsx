type ArrowIconProps = {
  direction?: "right" | "down" | "up";
};

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  const rotation = direction === "down" ? "rotate(90 12 12)" : direction === "up" ? "rotate(-90 12 12)" : undefined;

  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m13 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform={rotation} />
    </svg>
  );
}
