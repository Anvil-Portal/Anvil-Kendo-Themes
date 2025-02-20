import { Button } from '../button';
import { Textbox } from '../textbox';
import { Skeleton } from '../skeleton';
import { classNames, stateClassNames, States } from '../misc';

export const CAPTCHA_CLASSNAME = `k-captcha`;

const states = [
    States.loading,
    States.valid,
    States.invalid,
    States.disabled
];

const options = {};
const defaultProps = {};

export type KendoCaptchaProps = {
    value?: string;
};

export type KendoCaptchaState = { [K in (typeof states)[number]]?: boolean };

export const Captcha = (
    props: KendoCaptchaProps &
        KendoCaptchaState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        value,
        valid,
        invalid,
        loading,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CAPTCHA_CLASSNAME,
                stateClassNames(CAPTCHA_CLASSNAME, {
                    disabled,
                }),
                {
                    'k-captcha-loading': loading,
                }
            )}>
            <div className="k-captcha-image-wrap k-hstack">
                <div className="k-captcha-image">
                    <img
                        className={classNames({ 'k-hidden': loading })}
                        src="/packages/html/assets/captcha.jpg"
                    />
                    {loading && (
                        <Skeleton shape={'rect'} style={{ width: '100%', height: '100%' }} />
                    )}
                </div>
                <div className="k-captcha-image-controls k-vstack">
                    <Button icon="volume-up" disabled={loading === true}></Button>
                    <Button icon="arrow-rotate-cw" disabled={loading === true}></Button>
                </div>
                <div className="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
                    <div className="k-widget k-slider k-slider-vertical"></div>
                </div>
            </div>
            <div className="k-captcha-input k-vstack">
                <Textbox
                    value={value}
                    invalid={invalid}
                    disabled={loading === true}
                />
                {valid && !loading && (
                    <span className="k-captcha-validation-message !k-text-success">
                        Verification Success
                    </span>
                )}
            </div>
        </div>
    );
};

Captcha.states = states;
Captcha.options = options;
Captcha.className = CAPTCHA_CLASSNAME;
Captcha.defaultProps = defaultProps;

export default Captcha;
