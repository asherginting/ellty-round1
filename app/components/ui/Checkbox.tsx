type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className="group inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className="
          flex h-5.75 w-5.75 items-center justify-center rounded-md border border-gray-300 bg-white transition-colors duration-200
          peer-checked:bg-blue-500 peer-checked:border-blue-500
          group-hover:[&>svg]:opacity-100
          peer-checked:[&>svg]:opacity-100
          peer-checked:[&>svg_path]:stroke-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16.64}
          height={12.04}
          fill="none"
          className="opacity-0 transition-opacity"
        >
          <path
            className="stroke-[#E3E3E3]"
            strokeLinecap="round"
            d="m.5 6.572 5.549 4.935a.05.05 0 0 0 .07-.003L16.14.5"
          />
        </svg>
      </span>
    </label>
  );
}
