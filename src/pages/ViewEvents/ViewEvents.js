import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Calendar } from 'react-calendar';

const ViewEvents = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Container>
                <h2 className='text-center'>View Events</h2>
                <hr />
                <Row gap={4} className="mt-4">
                    <Col xs md={4} className="pt-4">
                        <Calendar onChange={onChange} value={value} />
                    </Col>
                    <Col xs md={8} className="pt-4">
                        <Table striped bordered hover  style={{width:'100%'}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ViewEvents;