import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import { IoCalendarOutline } from "react-icons/io5";
import "./FormComponents.css";

interface DatePickerPropsTypes {
  id: string;
  label: string;
  control: Control<any>;
  placeholder: string;
  defaultValue: string;
}

const GlobalDatePicker = ({
  id,
  label,
  control,
  placeholder = "Select Date",
  defaultValue,
}: DatePickerPropsTypes) => {
  return (
    <div className="flex flex-col w-full mb-3 relative">
      <label
        htmlFor={id}
        className="font-medium font-Montserrat text-sm text-primary mb-2 ml-1"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            placeholderText={placeholder}
            selected={value}
            onChange={onChange}
            onBlur={onBlur}
            className="cursor-pointer border border-black rounded-md bg-gray-100 bg-opacity-25 w-full h-9 flex justify-between items-center px-4 text-sm font-Montserrat relative z-10 focus:outline-none "
          />
        )}
      />
      <IoCalendarOutline
        size={22}
        className=" text-primary absolute right-3 bottom-2 z-0"
      />
    </div>
  );
};

export default GlobalDatePicker;
