import { classNames, States, Size, Roundness, FillMode } from '../utils';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';

export const TEXTBOX_CLASSNAME = `k-textbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTextboxProps = KendoTextboxOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    showClearButton?: boolean;
};

export type KendoTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showClearButton: true
};

export const Textbox = (
    props: KendoTextboxProps &
        KendoTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
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
            className={classNames(props.className, TEXTBOX_CLASSNAME)}
        >
            <InputPrefix>{prefix}</InputPrefix>
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputLoadingIcon {...props} />
            <InputValidationIcon {...props} />
            { showClearButton && <InputClearValue {...props} /> }
            <InputSuffix>{suffix}</InputSuffix>
        </Input>
    );
};

Textbox.states = states;
Textbox.options = options;
Textbox.className = TEXTBOX_CLASSNAME;

export default Textbox;
