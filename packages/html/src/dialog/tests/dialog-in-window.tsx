import { Window } from '../../window';
import { DialogModal } from '../../dialog';


const styles = `
    #test-area {
        width: 500px;
        transform: translate( 0, 0 );
    }
    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>

                <Window title="Window with dialog" actions={[ 'window-minimize', 'window', 'x' ]} className="k-window-wrapper">
                    Window content
                    <DialogModal title="Dialog in window" actions={[ 'x' ]}>
                        Dialog content
                    </DialogModal>
                </Window>
            </section>
        </div>
    </>
);
