import { CheckboxGroup, CheckboxItem, CheckboxWithLabelAfter, CheckboxNormal } from '../../checkbox';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Normal - vertical</span>
            <span>With Label - vertical</span>
            <CheckboxGroup>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
            </CheckboxGroup>
            <CheckboxGroup>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch1-vert">Option one</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch2-vert">Option two</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch3-vert">Option three</CheckboxWithLabelAfter>
                </CheckboxItem>
            </CheckboxGroup>
            <span>Normal - horizontal</span>
            <span>With Label - horizontal</span>
            <CheckboxGroup layout="horizontal">
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
            </CheckboxGroup>
            <CheckboxGroup layout="horizontal">
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch1-hor">Option one</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch2-hor">Option two</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="ch3-hor">Option three</CheckboxWithLabelAfter>
                </CheckboxItem>
            </CheckboxGroup>
        </div>
    </>
);
