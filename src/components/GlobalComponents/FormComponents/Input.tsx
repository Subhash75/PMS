// import { Error } from "src/components/Typography/Typography";

interface InputPropsTypes {
  type: 'text' | 'email' | 'number';
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  maxLength?: string | number;
  minLength?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputRef: any;
  error?: string;
}

function Input({
  type = "text",
  id,
  label,
  placeholder = "Enter value",
  required = false,
  maxLength = "100",
  minLength = "0",
  onChange,
  onFocus,
  inputRef,
  error,
}: InputPropsTypes) {
  return (
    <div className="flex flex-col w-full mb-3 pb-1">
      <label
        htmlFor={id}
        className="font-medium font-Montserrat text-sm text-primary mb-2 ml-1"
      >
        {label}
      </label>
      <input
        {...inputRef}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
          inputRef?.onChange && inputRef.onChange(e),
          onChange && onChange(e),
        ]}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          inputRef?.onFocus && inputRef.onFocus(e);
          onFocus && onFocus(e);
        }}
        className="border border-black rounded-md bg-gray-100 bg-opacity-25 w-full h-9 flex justify-between items-center px-4 text-sm font-Montserrat focus:outline-none "
      />
      {/* {<Error>{error}</Error>} */}
    </div>
  );
}

export default Input;
