import { Button } from '../../button';


const style = `
    /*
        This simulates the element "scroll" (scrollLeft, scrollTop, scrollBy) property
    */
    .k-tabstrip-scrollable .k-hstack .k-tabstrip-items .k-item:first-child {
        margin-right: -30px;
    }
    .k-tabstrip-scrollable .k-vstack .k-tabstrip-items .k-item:first-child {
        margin-top: -34px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-top k-tabstrip-scrollable" dir="rtl">
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-right" className="k-tabstrip-prev"></Button>
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active">
                                <span className="k-link">First</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                        </ul>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-left" className="k-tabstrip-next"></Button>
                    </div>
                    <div className="k-tabstrip-content k-active k-focus">
                        <div>Top scrollable</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-bottom k-tabstrip-scrollable" dir="rtl">
                    <div className="k-tabstrip-content k-active">
                        <div>Bottom scrollable</div>
                    </div>
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-right" className="k-tabstrip-prev"></Button>
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active">
                                <span className="k-link">First</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                        </ul>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-left" className="k-tabstrip-next"></Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-left k-tabstrip-scrollable" dir="rtl">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-up" className="k-tabstrip-prev"></Button>
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-down" className="k-tabstrip-next"></Button>
                    </div>
                    <div className="k-tabstrip-content k-active">
                        <div>Scrollable Left orientation</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-right k-tabstrip-scrollable" dir="rtl">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-up" className="k-tabstrip-prev"></Button>
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-down" className="k-tabstrip-next"></Button>
                    </div>
                    <div className="k-tabstrip-content k-active">
                        <div>Scrollable Right orientation</div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
