export default function Button(props) {
  const { children, className, onClick, type, disabled, variant, ...rest } = props;

  return (
    <button
      className={
        'bg-accent-pure hover:bg-accent-up focus:bg-accent-deep text-neutral-light-pure px-8 py-4 rounded-[4px] ' + className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
