import { Icon } from '../../icon';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid" style={{ gridTemplateColumns: "120px repeat(2, 1fr)", alignItems: "center" }}>

            <span></span>
            <span>Continuous Selection</span>
            <span>Single Selection</span>

            <span>Hover:</span>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                            <span className="k-rating-precision-part" style={{ width: `calc( --var() )` }}>
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <span>Focus:</span>
            <section>
                <span className="k-rating k-widget k-focus">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected k-focus">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget k-focus">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected k-focus">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <span>Selected:</span>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <span>Selected Hover:</span>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected k-hover">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <span>Label</span>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>1 / 5</span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                            <span className="k-rating-precision-part" style={{ clipPath: "inset(0px 50% 0px 0px)" }}>
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>1.5 / 5</span>
                    </span>
                </span>
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <span className="k-rating k-widget k-focus">
                        <span className="k-rating-container">
                            <span className="k-rating-item k-selected">
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item k-selected">
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item k-selected k-focus">
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                        </span>
                    </span>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <span className="k-rating k-widget k-focus">
                        <span className="k-rating-container">
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item k-selected k-focus">
                                <Icon icon="star" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon icon="star-outline" size="xlarge"></Icon>
                            </span>
                        </span>
                    </span>
                </div>
            </section>

            <span>SVG</span>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect className="k-i-rect" x="0" y="0" rx="5" ry="5" width="50" height="30"></rect>
                            </svg>
                        </span>
                        <span className="k-rating-item k-selected">
                            <span className="k-rating-precision-complement" style={{ width: "50px" }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                                </svg>
                            </span>
                            <span className="k-rating-precision-part" style={{ clipPath: "inset(0px 50% 0px 0px)" }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="k-i-rect" x="0" y="0" rx="5" ry="5" width="50" height="30"></rect>
                                </svg>
                            </span>
                            <span style={{ width: '50px', height: "30px", display: "block" }} ></span>
                        </span>
                        <span className="k-rating-item k-selected k-focus">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                            </svg>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>1.5 / 3</span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                            </svg>
                        </span>
                        <span className="k-rating-item k-selected">
                            <span className="k-rating-precision-complement" style={{ width: "50px" }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                                </svg>
                            </span>
                            <span className="k-rating-precision-part" style={{ clipPath: "inset(0px 50% 0px 0px)" }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="k-i-rect" x="0" y="0" rx="5" ry="5" width="50" height="30"></rect>
                                </svg>
                            </span>
                            <span style={{ width: '50px', height: "30px", display: "block" }} ></span>
                        </span>
                        <span className="k-rating-item k-selected k-focus">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                            </svg>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>1.5 / 3</span>
                    </span>
                </span>
            </section>


            <span>Readonly</span>
            <section>
                <span className="k-rating k-widget k-readonly">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget k-readonly">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item k-selected">
                            <Icon icon="star" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon icon="star-outline" size="xlarge"></Icon>
                        </span>
                    </span>
                </span>
            </section>
        </div>
    </>
);
