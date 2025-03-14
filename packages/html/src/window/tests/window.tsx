import { Window } from '../../window';

const style = `
    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Window" actions={[ 'window-minimize', 'window', 'x' ]}>Window content</Window>
            </section>

            <section>
                <Window title="" actions={[ 'window-minimize', 'window', 'x' ]}>Window with no title specified</Window>
            </section>

            <section>
                <Window title="">Window with empty title and no actions</Window>
            </section>

            <section>
                <Window>Window without a title</Window>
            </section>

            <section>
                <Window title="Window minimized" actions={[ 'window-minimize', 'window', 'x' ]} minimized>Window content</Window>
            </section>
        </div>
    </>
);
