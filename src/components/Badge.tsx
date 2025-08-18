interface BadgeProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  color?: string;
}

export function Badge({ title, description, children }: BadgeProps) {
  return (
    <div className="flex flex-col gap-1 px-3 py-2 rounded-lg text-sm shadow-md bg-[#23222599] backdrop-blur-sm w-fit min-w-0">
      <span className="text-gray-dark-11 uppercase font-bold">{title}</span>
      {children ??
        (description && (
          <span className="text-gray-dark-11 pt-2">{description}</span>
        ))}
    </div>
  );
}
