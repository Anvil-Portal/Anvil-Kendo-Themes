import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { Toolbar } from '../../toolbar';


const styles = `
    .k-mediaplayer {
        height: 360px;
    }
    .k-slider-horizontal {
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <div className="k-mediaplayer k-widget">
                <div className="k-mediaplayer-titlebar">Media player title</div>
                <div className="k-mediaplayer-toolbar-wrap">
                    <div className="k-slider k-slider-horizontal k-mediaplayer-seekbar">
                        <div className="k-slider-track-wrap">
                            <div className="k-slider-track">
                                <div className="k-slider-selection"></div>
                                <a href="#" className="k-draghandle k-draghandle-end"></a>
                            </div>
                        </div>
                    </div>
                    <Toolbar className="k-mediaplayer-toolbar">
                        <Button fillMode="flat" icon="play" className="k-play-button"></Button>
                        <div className="k-mediaplayer-currenttime-wrap">
                            <span className="k-mediaplayer-currenttime">00:18</span> /
                            <span className="k-mediaplayer-duration">00:55</span>
                        </div>
                        <div className="k-spacer"></div>
                        <Button fillMode="flat" icon="volume-up" className="k-volume-button"></Button>
                        <div className="k-mediaplayer-volume-wrap">
                            <div className="k-slider k-slider-horizontal k-mediaplayer-volume">
                                <div className="k-slider-track-wrap">
                                    <div className="k-slider-track">
                                        <div className="k-slider-selection"></div>
                                        <a href="#" className="k-draghandle k-draghandle-end"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-mediaplayer-quality-wrap">
                            <DropdownList value="360p" arrowIconName="hd" className="k-mediaplayer-quality" />
                        </div>
                        <Button fillMode="flat" icon="fullscreen" className="k-fullscreen-button"></Button>
                    </Toolbar>
                </div>
                <div className="k-mediaplayer-overlay"></div>
            </div>

        </div>
    </>
);
