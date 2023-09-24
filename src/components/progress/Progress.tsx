interface ProgressProps {
  value: number;
  fillColor: string;
  className?: string;
}

export const Progress = ({ value, fillColor, className }: ProgressProps) => {
  return (
    <div className={`w-full h-1 rounded-full bg-gray-800 overflow-hidden ${className}`}>
      <div className="h-full rounded-full" style={{ backgroundColor: fillColor, width: value }}></div>
    </div>
  );
};
