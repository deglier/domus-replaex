export default function Container({ className, children, large}) {
  return (
    <div className={ large ? 'max-w-[1366px] ' : 'max-w-6xl ' + 'mx-auto ' + className}>
      {children}
    </div>
  );
}