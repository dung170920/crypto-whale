interface CodeInputProps {
  name: string;
  placeholder: string;
  className?: string;
}

export const CodeInput = ({ name, placeholder, className }: CodeInputProps) => {
  return (
    <div
      className={`mb-4 bg-gray-700 border border-transparent rounded-3xl focus-within:border-primary focus-within:ring-primary ${className}`}
    >
      <input
        type="text"
        name={name}
        id={name}
        className="w-16 h-16 text-2xl text-center caret-primary"
        placeholder={placeholder}
      />
    </div>
  );
};
