import { classNames, States, Size, Roundness, FillMode } from '../utils-new';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { SpinButton } from '../spinbutton';


export const NUMERICTEXTBOX_CLASSNAME = `k-numerictextbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.loading,
    States.required,
    States.disabled,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoNumericTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoNumericTextboxProps = KendoNumericTextboxOptions & {
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
    showClearButton?: boolean;
};

export type KendoNumericTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showSpinButton: true,
    showClearButton: true
};

export const NumericTextbox = (
    props: KendoNumericTextboxProps &
        KendoNumericTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        value,
        placeholder,
        size,
        rounded,
        fillMode,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        showClearButton = defaultProps.showClearButton,
        showSpinButton = defaultProps.showSpinButton,
        ...other
    } = props;


    return (
        <Input
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            loading={loading}
            disabled={disabled}
            className={classNames(props.className, NUMERICTEXTBOX_CLASSNAME)}
        >
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputValidationIcon {...props} />
            <InputLoadingIcon {...props} />
            {showClearButton && (<InputClearValue {...props} />)}
            {showSpinButton && (
                <SpinButton
                    className="k-input-spinner"
                    size={size}
                    fillMode={fillMode}
                />
            )}
        </Input>
    );
};

NumericTextbox.states = states;
NumericTextbox.options = options;
NumericTextbox.className = NUMERICTEXTBOX_CLASSNAME;

export default NumericTextbox;
