interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children?: React.ReactNode;
  uppercaseTitle?: boolean;
}
export function Badge({
  title,
  description,
  children,
  uppercaseTitle = true,
  className = "",
  ...rest
}: BadgeProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-4 rounded-lg text-sm shadow-md bg-[#23222599] backdrop-blur-sm w-full min-w-[120px] max-w-full overflow-hidden ${className}`}
      {...rest}
    >
      <span
        className={`text-gray-dark-11 font-bold pb-2 ${
          uppercaseTitle ? "uppercase" : ""
        } truncate`}
        title={title}
      >
        {title}
      </span>
      {children ??
        (description && (
          <span
            className="text-gray-dark-12 break-words leading-snug"
            title={description}
          >
            {description}
          </span>
        ))}
    </div>
  );
}
