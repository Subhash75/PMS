import { Control, Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
// import { Error } from "src/components/Typography/Typography";

interface DropdownPropsTypes {
  id: string,
  label: string,
  placeholder: string,
  selectObj: Array<object>,
  defaultValue?: object,
  control: Control<any>,
  error?: string,
  isMulti?: boolean,
  isLoading?: boolean,
  closeMenuOnSelect?: boolean,
  maxMenuHeight?: number,
  components?: any,
  isDisabled?: boolean,
}

function Dropdown({
  id,
  label,
  placeholder = "Select Value",
  selectObj = [],
  defaultValue,
  control,
  error,
  isMulti,
  isLoading,
  closeMenuOnSelect,
  maxMenuHeight,
  components,
  isDisabled,
}: DropdownPropsTypes) {
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: "0.25px solid #000",
      fontSize: "12px",
      minHeight: 37,
      maxHeight: 37,
      boxShadow: state.isFocused ? "0 0 0 0.2rem transparent" : "none",
      backgroundColor: "rgba(247, 248, 250, 0.75)",
      marginTop: "-1px",
      padding: "0 5px",
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: 175,
      zIndex: 100,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      border: 0,
      padding: 0,
      display: isDisabled ? "none" : "",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      fontWeight: 600,
      letterSpacing: "0.5px",
      fontSize: "14px",
      fontFamily: "Montserrat SemiBold",
      color: "#e40404",
      borderBottom: ".25px solid",
      backgroundColor: isSelected ? "#fcd5d2" : isFocused ? "#fff" : "#fff",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 0 0 9px",
      fontSize: "14px",
      maxHeight: 28,
      height: 35,
      fontFamily: "Montserrat Medium",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.5)",
      fontWeight: 500,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
      fontFamily: "Montserrat Medium",
    }),
    multiValue: (provided) => ({
      ...provided,
      color: "#e40404",
      fontFamily: "Montserrat Medium",
      borderRadius: "5px",
      margin: "5px",
      background: "#fcd5d2",
      fontSize: "12px",
      fontWeight: "600",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#e40404",
    }),
  };

  return (
    <div className="flex flex-col w-full  relative pb-4">
      <label
        htmlFor={id}
        className="font-medium font-Montserrat text-sm text-primary mb-2 ml-1"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        render={({ field }) => (
          <Select
            {...field}
            id={id}
            isMulti={isMulti}
            isLoading={isLoading}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            defaultValue={defaultValue}
            options={selectObj}
            styles={customStyles}
            maxMenuHeight={maxMenuHeight}
            components={components}
            isDisabled={isDisabled}
          />
        )}
      />
      {/* {<Error>{error}</Error>} */}
    </div>
  );
}

export default Dropdown;
