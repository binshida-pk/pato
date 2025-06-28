type Props = {
  label?: string;
  classes?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

function Button({ label, classes, type, onClick }: Props) {
  return (
    <div>
      <button
        type={type || "button"}
        className={`text-white ${classes}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
