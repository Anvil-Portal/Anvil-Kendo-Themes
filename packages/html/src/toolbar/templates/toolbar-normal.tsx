import ToolBar from "../toolbar.spec";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { MenuButton } from '../../menu-button';
import { SplitButton } from '../../split-button';

export const ToolbarNormal = (props) => (
    <ToolBar children={[
        <>
            <Button>Button</Button>
            <MenuButton text="Menu button"></MenuButton>
            <SplitButton>Split button</SplitButton>
            <ButtonGroup>
                <Button icon="align-left">Left</Button>
                <Button icon="align-center">Center</Button>
                <Button icon="align-right">Right</Button>
            </ButtonGroup>
        </>
    ]}
    {...props}>
    </ToolBar>
);
