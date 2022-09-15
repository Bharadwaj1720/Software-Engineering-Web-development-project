import React from "react";
import '../Home.css';
import Layout from "../Layout";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
export default function Open_Project() {
    return (
        <div>
            <Layout message="Open Projects Notifications" />
            <div className="Book_Search" style={{ width: 1000 }}>
                <div><h2>List of Notifications</h2></div>
                <Tab.Container id="list-group-tabs-example" >
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1" >
                                    <span>AdaNet</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link2" >
                                    <span>Stackdriver</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link3" >
                                    <span>Nomulus</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link4" >
                                    <span>OpenCensus</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link5" >
                                    <span>Google Cloud Datalab</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link6" >
                                    <span>Outline</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            Agile and adaptable AutoML with best learning capabilities.AdaNet is a flexible and lightweight TensorFlow-based framework for automatic learning with best-quality models with minimum expert advice. It uses the AdaNet algorithm with Cortes. It determines the structure of a neural network as a collection of subnetworks with the best learning guarantees. AdaNet implements a comprehensive framework for learning neural network architecture.

                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            It has the best features for cloud-based applications of monitoring, logging, and diagnostics.

                                            Google Stackdriver implements robust monitoring, logging, and diagnostics. It provides interactive insight features of monitoring the performance, health, and availability of cloud-based-powered applications. It allows us to detect, discover the issues, and help to fix the problems in a faster way. Google is the best example where most Google applications run on Google Cloud Platform with Stackdriver features.

                                            Cloud SDK is for the client-side projects, and for the reporting and tracking of the errors; we can use Stackdriver Error Reporting.

                                        </div>
                                    </div>


                                </Tab.Pane>

                                <Tab.Pane eventKey="#link3">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            Excellent domain signature name registry software

                                            Nomulus is a scalable and an open-source cloud-based platform for managing top-level domains(TLDs). It is a reliable source for the TLDs.It works to track domain name control ownership, handle registrations, renewals with availability checks for the new End-user registrations, and collect people and their organizations’ information with the domain name details.

                                            Nomulus operates and runs on Google App Engine and is composed originally in Java.
                                        </div>
                                    </div>


                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            It is a stats model and single shared tracing framework.

                                            OpenCensus is a unique combination of open source libraries for instrumenting and implements observability into shared distribution systems. It was built to score minimum overhead so that with the scale deployment process. OpenCensus automatically handles traceability from the applications and represents them locally.

                                            It is public-facing APIs, For Example, gRPC.
                                        </div>
                                    </div>


                                </Tab.Pane>
                                <Tab.Pane eventKey="#link5">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            It is a stats model and single shared tracing framework.

                                            OpenCensus is a unique combination of open source libraries for instrumenting and implements observability into shared distribution systems. It was built to score minimum overhead so that with the scale deployment process. OpenCensus automatically handles traceability from the applications and represents them locally.

                                            It is public-facing APIs, For Example, gRPC.
                                        </div>
                                    </div>


                                </Tab.Pane>
                                <Tab.Pane eventKey="#link6">
                                    <div>
                                        <h2>Abstract</h2>
                                        <div>
                                            The outline presents safer access to open internet with the best network connectivity.

                                            Outline is an open-source VPN software and released by Jigsaw academy in March 2018. It provides the personal and corporate VPN server on a cloud provider from the user’s preference, with minimum effort.

                                            Once its setup is done, Outline server administrators can receive access to other users connected to the VPN using Outline clients.

                                            It is produced for Windows-based, macOS, iOS-based, Android, and ChromeOS based application softwares.  It works the Shadowsocks protocol (shadowsocks.org) for communication between the client and the server.
                                        </div>
                                    </div>


                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </div>
    )
}