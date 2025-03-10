import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { AnimationContainer } from '../../animation-container';


const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <section>
                <AnimationContainer>
                    <div className="k-spreadsheet-filter-menu k-column-menu k-popup k-group k-reset">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon icon="sort-asc-small"></Icon>Sort range A to Z
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon icon="sort-desc-small"></Icon>Sort range Z to A
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-spreadsheet-condition-filter k-expander">
                                <div className="k-columnmenu-item">
                                    Filter by condition
                                    <span className="k-spacer"></span>
                                    <span className="k-expander-indicator">
                                        <Icon icon="chevron-down" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-expander">
                                <div className="k-columnmenu-item">
                                    Filter by value
                                    <span className="k-spacer"></span>
                                    <span className="k-expander-indicator">
                                        <Icon icon="chevron-up" />
                                    </span>
                                </div>
                                <div className="k-columnmenu-item-content">
                                    <Searchbox placeholder="Search..." />
                                    <div className="k-spreadsheet-value-treeview-wrapper">
                                        <Treeview>
                                            <TreeviewItem text="All" showCheckbox expanded>
                                                <TreeviewGroup>
                                                    <TreeviewItem text="$14.87" showCheckbox checked />
                                                    <TreeviewItem text="$21.10" showCheckbox />
                                                    <TreeviewItem text="$16.79" showCheckbox />
                                                    <TreeviewItem text="$11.39" showCheckbox />
                                                    <TreeviewItem text="$41.36" showCheckbox />
                                                    <TreeviewItem text="$13.19" showCheckbox />
                                                    <TreeviewItem text="$41.94" showCheckbox />
                                                    <TreeviewItem text="$23.95" showCheckbox />
                                                    <TreeviewItem text="$16.16" showCheckbox />
                                                </TreeviewGroup>
                                            </TreeviewItem>
                                        </Treeview>
                                    </div>
                                    <ActionButtons alignment="stretched">
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </section>
        </div>
    </>
);
