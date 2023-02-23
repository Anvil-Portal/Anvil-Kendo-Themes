import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode } from '../utils-new';

export const PICKER_CLASSNAME = `k-picker`;

export const pickerStates = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
];

export const pickerOptions = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline" ],
};

export type PickerState = { [K in (typeof pickerStates)[number]]?: boolean };

export type PickerOptions = {
  size?: (typeof pickerOptions.size)[number] | null;
  rounded?: (typeof pickerOptions.rounded)[number] | null;
  fillMode?: (typeof pickerOptions.fillMode)[number] | null;
};

export const pickerDefaultProps = {
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
};

export const Picker = (
    props: PickerOptions & PickerState & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        focus,
        disabled,
        invalid,
        valid,
        loading,
        size = pickerDefaultProps.size,
        rounded = pickerDefaultProps.rounded,
        fillMode = pickerDefaultProps.fillMode,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                PICKER_CLASSNAME,
                optionClassNames(PICKER_CLASSNAME, { size, rounded, fillMode }),
                stateClassNames(PICKER_CLASSNAME, { hover, focus, disabled, invalid, valid, loading }),
            )}>
            {props.children}
        </span>
    );
};

Picker.states = pickerStates;
Picker.options = pickerOptions;
Picker.className = PICKER_CLASSNAME;

export default Picker;
