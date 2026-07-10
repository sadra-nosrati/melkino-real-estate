function Skeleton({ className = "" }) {
  return (
    <div
      className={`
        animate-pulse rounded-md bg-dark-border-strong/50
        ${className}
      `}
    />
  );
}

export default Skeleton;
