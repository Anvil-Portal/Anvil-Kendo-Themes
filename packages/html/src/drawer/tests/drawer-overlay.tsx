import { Icon } from '../../icon';


const styles = `
    #test-area {
        height: 600px;
        position: relative;
    }
    #test-area .k-drawer,
    #test-area .k-overlay {
        position: absolute;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="k-drawer-container k-drawer-left k-drawer-overlay k-drawer-expanded">
                <div className="k-widget k-drawer">
                    <div className="k-drawer-wrapper">
                        <div className="k-drawer-items">
                            <ul>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Item</span>
                                </li>
                                <li className="k-drawer-item k-drawer-separator"></li>
                                <li className="k-drawer-item k-hover">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Hovered Item</span>
                                </li>
                                <li className="k-drawer-item k-selected">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Selected Item</span>
                                </li>
                                <li className="k-drawer-item k-selected k-hover">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Selected and hovered item</span>
                                </li>
                                <li className="k-drawer-item k-focus">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Focused item</span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Collapsed</span>
                                    <span className="k-spacer"></span>
                                    <span className="k-drawer-toggle">
                                        <Icon icon="chevron-down" />
                                    </span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Expanded</span>
                                    <span className="k-spacer"></span>
                                    <span className="k-drawer-toggle">
                                        <Icon icon="chevron-up" />
                                    </span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="none" />
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Child Lvl 1</span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="none" />
                                    <Icon icon="none" />
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Child Lvl 2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="k-overlay" style={{ display: "block" }}></div>
            </div>

            <div className="k-drawer-container k-drawer-right k-drawer-overlay k-drawer-expanded">
                <div className="k-widget k-drawer">
                    <div className="k-drawer-wrapper">
                        <div className="k-drawer-items">
                            <ul>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Item</span>
                                </li>
                                <li className="k-drawer-item k-drawer-separator"></li>
                                <li className="k-drawer-item k-hover">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Hovered Item</span>
                                </li>
                                <li className="k-drawer-item k-selected">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Selected Item</span>
                                </li>
                                <li className="k-drawer-item k-selected k-hover">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Selected and hovered item</span>
                                </li>
                                <li className="k-drawer-item k-focus">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Focused item</span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Collapsed</span>
                                    <span className="k-spacer"></span>
                                    <span className="k-drawer-toggle">
                                        <Icon icon="chevron-down" />
                                    </span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Expanded</span>
                                    <span className="k-spacer"></span>
                                    <span className="k-drawer-toggle">
                                        <Icon icon="chevron-up" />
                                    </span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="none" />
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Child Lvl 1</span>
                                </li>
                                <li className="k-drawer-item">
                                    <Icon icon="none" />
                                    <Icon icon="none" />
                                    <Icon icon="star-outline" />
                                    <span className="k-item-text">Child Lvl 2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="k-overlay" style={{ display: "none" }}></div>
            </div>

            <h2 style={{ textAlign: "center" }}>Drawer overlay</h2>
            <div className="k-drawer-content" style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                assumenda cupiditate.
            </div>
        </div>
    </>
);
