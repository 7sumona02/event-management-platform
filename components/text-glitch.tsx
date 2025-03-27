interface TextGlitchProps {
  text: string;
  className?: string;
}

export function TextGlitch({ text, className = "" }: TextGlitchProps) {
  return (
    <div className={`group relative overflow-hidden font-medium ${className}`}>
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}
  