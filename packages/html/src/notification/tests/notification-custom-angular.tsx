import { Notification, NotificationAction } from '../../notification';


const styles = `
    .k-notification-group {
        position: static;
    }

    .fullwidth,
    .fullwidth > .k-notification {
        width: 100%;
    }

    .k-custom-notification {
        font-size: 20px;
        color: black;
    }

    .k-notification-actions {
        align-self: start;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                {/* notification group */}
                <div className="k-notification-group">
                    <div className="k-notification-container">
                        <Notification text="Multiline notification" closable={true} actions={ <NotificationAction type="close" /> } >
                            <div>Closable multiline notification</div>
                            <div>Closable multiline notification</div>
                            <div>Closable multiline notification</div>
                        </Notification>
                    </div>
                    <div className="k-notification-container">
                        <Notification className="k-custom-notification" text="Custom notification" />
                    </div>
                </div>
            </div>
            <div className="k-colspan-3 k-col-span-3">
                <div className="k-notification-container fullwidth">
                    <Notification text="Full width notification" closable={true} actions={ <NotificationAction type="close" /> } />
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>

            <div dir="rtl">
                {/* notification group */}
                <div className="k-notification-group">
                    <div className="k-notification-container">
                        <Notification text="Multiline notification" closable={true} actions={ <NotificationAction type="close" /> } >
                            <div>Closable multiline notification</div>
                            <div>Closable multiline notification</div>
                            <div>Closable multiline notification</div>
                        </Notification>
                    </div>
                    <div className="k-notification-container">
                        <Notification className="k-custom-notification" text="Custom notification" />
                    </div>
                </div>
            </div>
            <div className="k-colspan-3 k-col-span-3" dir="rtl">
                <div className="k-notification-container fullwidth">
                    <Notification text="Full width notification" closable={true} actions={ <NotificationAction type="close" /> } />
                </div>
            </div>

        </div>
    </>
);
