type AdjustableScreenProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function AdjustableScreen({
    children,
    className = "",
  }: AdjustableScreenProps) {
    return (
      <div
        className={`
          min-h-screen
          w-full
          overflow-x-hidden
          px-4
          sm:px-6
          lg:px-8
          ${className}
        `}
      >
        {children}
      </div>
    );
  }