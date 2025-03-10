/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle, CardImage } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Layout } from '../../layout';
import { Avatar } from '../../avatar';
import { Typography } from '../../typography';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <Card orientation="horizontal">
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" alignment="stretched" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardImage src="/packages/html/assets/avatar.jpg" />
                <Layout orientation="vertical" className="k-flex">
                    <CardBody title="Card Title" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons className="k-card-actions" alignment="stretched">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </Layout>
            </Card>

            <Card orientation="horizontal">
                <CardImage>
                    <img src="/packages/html/assets/avatar.jpg" />
                </CardImage>
                <span className="k-separator k-separator-vertical"></span>
                <Layout orientation="vertical" className="k-flex">
                    <CardBody title="Card Title" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons className="k-card-actions" alignment="stretched">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </Layout>
            </Card>

            <Card orientation="vertical">
                <CardBody title="Sofia" subtitle="Sunny" className="k-text-center">
                    <Typography type="display-1">☀️</Typography>
                    <Typography type="display-2">2&deg;C</Typography>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons className="k-card-actions" alignment="stretched">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardBody title="Passenger" subtitle="GP, Gosho"></CardBody>
                <hr className="k-separator" />
                <CardBody>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">Departure</div>
                        <div className="k-flex k-text-right">Arrival</div>
                    </Layout>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">
                            <Typography type="display-4">SOF</Typography>
                            <div>
                                6 Dec 2017<br />
                                10:30
                            </div>
                        </div>
                        <Typography type="display-4" className="k-flex k-text-center">
                            ✈️
                        </Typography>
                        <div className="k-flex k-text-right">
                            <Typography type="display-4">LON</Typography>
                            <div>
                                6 Dec 2017<br />
                                12:30
                            </div>
                        </div>
                    </Layout>
                    <hr className="k-hr" />
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">
                            <Typography type="display-4">LON</Typography>
                            <div>
                                12 Dec 2017<br />
                                18:30
                            </div>
                        </div>
                        <Typography type="display-4" className="k-flex k-text-center">
                            ✈️
                        </Typography>
                        <div className="k-flex k-text-right">
                            <Typography type="display-4">SOF</Typography>
                            <div>
                                12 Dec 2017<br />
                                22:30
                            </div>
                        </div>
                    </Layout>
                </CardBody>
                <hr className="k-separator" />
                <CardBody>
                    <Layout orientation="horizontal">
                        <div className="k-flex k-text-left">Total</div>
                        <div className="k-flex k-text-right">BGN 234</div>
                    </Layout>
                </CardBody>
            </Card>

            <Card orientation="vertical">
                <CardHeader className="k-d-flex">
                    <Avatar type="image" themeColor="primary" rounded="medium" className="bg-img">
                        <img src="/packages/html/assets/avatar.jpg" />
                    </Avatar>
                    <div>
                        <CardTitle>Thumbnail and Footer</CardTitle>
                        <CardSubtitle>Capital of Italy</CardSubtitle>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Rome is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.</p>
                    <span className="k-separator k-separator-vertical"></span>
                    <p>Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. </p>
                </CardBody>
                <CardFooter>
                    Footer here
                </CardFooter>
            </Card>

        </div>
    </>
);
