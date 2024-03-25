"use client";

import { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { ChevronDown, ChevronUp } from "lucide-react";
import type {
  DropdownIndicatorProps,
  GroupBase,
  MultiValue,
  MultiValueGenericProps,
  OptionProps,
  SingleValue,
} from "react-select";
import { components } from "react-select";
import AsyncSelect from "react-select/async";
import { cn } from "@/lib/utils";
import {
  type CSSObjectWithLabel,
  type ControlProps,
  type StylesConfig,
} from "react-select";

type OptionData = {
  value: string | number;
  label: string;
  color?: string;
  isFixed?: undefined;
  isDisabled?: boolean;
};

export type ReactSelectOnChangeOption =
  | MultiValue<OptionData>
  | SingleValue<OptionData>;

export type ReactSelectValueType = string | number | (string | number)[];

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  labelClassName?: string;
  name: string;
  placeholder?: string;
  isLoading?: boolean;
  isMulti?: boolean;
  closeOnSelect?: boolean;
  data: OptionData[];
  disabled?: boolean;
  className?: string;
  onChange?: (
    option: ReactSelectOnChangeOption,
    oldOptionValue?: ReactSelectValueType,
  ) => void;
  onClear?: () => void;
  onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void;
}

const ReactSelect: React.FC<SelectProps> = ({
  label,
  labelClassName,
  name,
  isLoading,
  isMulti,
  closeOnSelect = true,
  data,
  placeholder,
  disabled,
  onChange,
  onClear,
  className,
  onMenuScrollToBottom,
}) => {
  const id = Date.now().toString();

  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.info(errors);
    }
  }, [errors]);

  const formValue = getValues(name) as ReactSelectValueType;

  const [defaultValue, setDefaultValue] = useState<
    OptionData | OptionData[] | undefined
  >();

  useEffect(() => {
    if (Array.isArray(formValue) && formValue.length === 0) {
      setDefaultValue([]);
      return;
    }

    if (formValue === 0 || formValue === "" || formValue === "0") {
      setDefaultValue({ label: "", value: "0" });
      return;
    }

    if (data && formValue) {
      if (Array.isArray(formValue)) {
        setDefaultValue(data.filter((opt) => formValue.includes(opt.value)));
      } else {
        setDefaultValue(data.find((opt) => opt.value === formValue));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, formValue]);

  const DropdownIndicator = (
    props: JSX.IntrinsicAttributes &
      DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>,
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <ChevronUp className={cn("mr-2 h-4 w-4 text-gray-400")} />
        ) : (
          <ChevronDown className={cn("mr-2 h-4 w-4 text-gray-400")} />
        )}
      </components.DropdownIndicator>
    );
  };

  const Option = (
    props: JSX.IntrinsicAttributes &
      OptionProps<unknown, boolean, GroupBase<unknown>>,
  ) => {
    return (
      <div>
        <components.Option {...props}>
          <div className="flex justify-between">
            <label>{props.label}</label>
            {isMulti && (
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
                className="text-action-primary-normal rounded-lg border border-gray-400 focus:ring-0 focus:ring-transparent"
              />
            )}
          </div>
        </components.Option>
      </div>
    );
  };

  const MultiValueContainer = (props: MultiValueGenericProps) => {
    return (
      <div>
        <components.MultiValueContainer {...props} />
      </div>
    );
  };

  const Control = (props: ControlProps) => {
    return <components.Control {...props} className="py-[2.6px]" />;
  };

  const asyncLoadOptions = (
    inputValue: string,
    callback: (params: any) => void,
  ) => {
    setTimeout(() => {
      const filteredOptions = data.filter((option) =>
        option.label.toLowerCase().includes(inputValue?.toLowerCase()),
      );
      callback(filteredOptions);
    }, 200);
  };

  const { field } = useController({
    control,
    name,
  });

  const selectStyle: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
    control: (
      baseStyle: CSSObjectWithLabel,
      state: ControlProps<unknown, boolean, GroupBase<unknown>>,
    ) => ({
      ...baseStyle,
      width: "100%",
      height: "100%",
      borderRadius: "0.375rem",
      background: state.isFocused ? "#FFFFFF" : "#FFFFFF",
      cursor: "pointer",
      border: state.isFocused
        ? "0.080rem solid #E2E8F0"
        : "0.080rem solid #E2E8F0",
      boxShadow: state.isFocused ? "0.094rem #f97316" : "none",
      "&:hover": {
        boxShadow: "0.094rem solid #f97316",
        borderColor: "#10b981",
        borderWidth: "0.080rem",
      },
      "&:active": {
        background: "#ecfdf5",
      },
    }),
    input: (baseInputStyle: CSSObjectWithLabel) => ({
      ...baseInputStyle,
      "input:focus": {
        boxShadow: "none",
      },
    }),
    clearIndicator: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: "#10b981",
    }),
    menu: (provided: CSSObjectWithLabel) => ({
      ...provided,
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingBottom: "2px",
    }),
    multiValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      backgroundColor: "white",
      boxShadow:
        "0 1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.19)",
      color: "#FF7200",
      padding: "0px 2px",
    }),
    multiValueRemove: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: "#C53434",
      "&:hover": {
        background: "none",
      },
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>,
    ) => ({
      ...provided,
      background: state.isFocused ? "#f3f4f6" : "#FFFFFF",
      color: state.isFocused ? "#272E35" : "#272E35",
      marginTop: "3px",
      borderRadius: "0.25rem",
      "&:hover": {
        cursor: "pointer",
        background: "#f3f4f6",
      },
      "&:active": {
        color: "#272E35",
        background: "#f3f4f6",
      },
    }),
  };

  return (
    <div className={cn("w-full ", className)}>
      <label
        className={cn(
          " block text-sm font-medium  text-gray-900",
          labelClassName,
        )}
      >
        {label}
      </label>
      <AsyncSelect
        id={id}
        instanceId="select-box"
        key={field.name}
        ref={field.ref}
        name={field.name}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          Option,
          MultiValueContainer,
          Control,
        }}
        defaultValue={defaultValue}
        defaultOptions={data}
        value={defaultValue}
        hideSelectedOptions={false}
        cacheOptions
        loadOptions={asyncLoadOptions}
        placeholder={placeholder}
        className="text-sm"
        isLoading={isLoading}
        isDisabled={disabled}
        isClearable={!!formValue}
        closeMenuOnSelect={closeOnSelect}
        isMulti={isMulti}
        onMenuScrollToBottom={onMenuScrollToBottom}
        onChange={(selectedOption, triggeredAction) => {
          let currentValue: ReactSelectValueType;
          let currentOption;

          if (Array.isArray(selectedOption)) {
            currentOption = selectedOption as OptionData[];
            currentValue = currentOption.map((item) => item?.value);
          } else {
            currentOption = selectedOption as OptionData;
            currentValue = currentOption?.value;
          }

          field.onChange(currentValue ?? "");

          // only trigger change when previous value is not the same as new value
          if (!isMulti && field.value !== currentValue) {
            onChange?.(currentOption, field.value as ReactSelectValueType);
          }

          if (triggeredAction.action === "clear" && onClear) {
            setDefaultValue(undefined);
            onClear();
          }
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
          },
        })}
        styles={selectStyle}
      />
    </div>
  );
};

export function isMultiValue<T>(
  arg: MultiValue<T> | SingleValue<T>,
): arg is MultiValue<T> {
  return Array.isArray(arg);
}

export default ReactSelect;
