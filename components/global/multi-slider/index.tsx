"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  minStepsBetweenThumbs: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
  withoutLabel: boolean;
};

const MultiSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      withoutLabel,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);
    const [showValues, setShowValues] = useState([false, 0]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative mb-6 flex w-full touch-none select-none items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-emerald-600" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            {!withoutLabel && showValues[0] && (
              <div
                className={cn(
                  index === showValues[1] ? "z-20" : "z-10",
                  "absolute text-center",
                )}
                style={{
                  left: `calc(${((value - min) / (max - min)) * 100}% - 40px)`,
                  top: `10px`,
                }}
              >
                <span
                  className={cn(
                    "absolute rounded border bg-white p-2 text-sm shadow-sm",
                  )}
                >
                  {formatLabel ? formatLabel(value) : value}
                </span>
              </div>
            )}
            <SliderPrimitive.Thumb
              key={index}
              onMouseOver={(e) => {
                console.log(index);
                setShowValues([true, index]);
              }}
              onMouseLeave={() => setShowValues([false, index])}
              onTouchStart={() => setShowValues([true, index])}
              onTouchEnd={() => setShowValues([false, index])}
              className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors hover:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);

MultiSlider.displayName = SliderPrimitive.Root.displayName;

export { MultiSlider };
