import { Button } from '../../button';
import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { MenuList, MenuItem } from '../../menu';


const style = `
    #test-area section {
        height: 300px;
    }

    .k-animation-container {
        position: absolute;
        top: 100%;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Horizontal Menu</span>
            <span>Horizontal Scrolling Menu</span>

            <section>
                <ul id="menu" className="k-widget k-reset k-header k-menu k-menu-horizontal">
                    <li className="k-item k-menu-item k-disabled k-first">
                        <span className="k-link k-menu-link"> Disabled</span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link">Normal</span>
                    </li>
                    <li className="k-item k-menu-item k-hover">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Hover</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-down"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link k-active">
                            <span className="k-menu-link-text">Active</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-down"></Icon>
                            </span>
                        </span>
                        <Popup className="k-menu-popup" positionMode="fixed">
                            <MenuList>
                                <MenuItem text="Disabled" disabled></MenuItem>
                                <MenuItem text="Normal"></MenuItem>
                                <MenuItem text="Hover" hover showArrow></MenuItem>
                                <MenuItem text="Active" active showArrow></MenuItem>
                                <MenuItem text="Focus" focus></MenuItem>
                                <MenuItem text="Focus & Active" active focus></MenuItem>
                            </MenuList>
                        </Popup>
                    </li>
                    <li className="k-item k-menu-item k-focus">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Focus</span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-last">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Normal</span>
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <div className="k-menu-scroll-wrapper horizontal" style={{ width: "300px" }}>
                    <ul id="menu" className="k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">Item 1</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Item 2</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Item 3</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Item 4</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">Item 5</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">Item 6</span>
                        </li>
                    </ul>
                    <Button icon="caret-alt-left" className="k-menu-scroll-button k-scroll-left"></Button>
                    <Button icon="caret-alt-right" className="k-menu-scroll-button k-scroll-right"></Button>
                </div>
            </section>

            <span>Horizontal Menu RTL</span>
            <span></span>

            <section>
                <ul id="menu" className="k-widget k-reset k-header k-menu k-menu-horizontal" dir="rtl">
                    <li className="k-item k-menu-item k-disabled k-first">
                        <span className="k-link k-menu-link"> Disabled</span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link">Normal</span>
                    </li>
                    <li className="k-item k-menu-item k-hover">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Hover</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-down"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link k-active">
                            <span className="k-menu-link-text">Active</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-down"></Icon>
                            </span>
                        </span>
                        <Popup className="k-menu-popup" positionMode="fixed">
                            <MenuList dir="rtl">
                                <MenuItem text="Disabled" disabled></MenuItem>
                                <MenuItem text="Normal"></MenuItem>
                                <MenuItem text="Hover" hover showArrow></MenuItem>
                                <MenuItem text="Active" active showArrow></MenuItem>
                                <MenuItem text="Focus" focus></MenuItem>
                                <MenuItem text="Focus & Active" active focus></MenuItem>
                            </MenuList>
                        </Popup>
                    </li>
                    <li className="k-item k-menu-item k-focus">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Focus</span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-last">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Normal</span>
                        </span>
                    </li>
                </ul>
            </section>
        </div>

    </>
);
