import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendar } from 'react-calendar';

const AddEvents = () => {
    const [event, setEvent] = useState('');
    const [date, setDate] = useState(new Date());


    const handleEvent = e => {
        setEvent(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(date.toLocaleDateString(), event);
    }

    return (
        <div>
            <Container>
                <h2 className='text-center'>Add an event</h2>
                <hr />
                <Row gap={4} className="mt-4">
                    <Col xs md={4} className="pt-4">
                        <Calendar onChange={setDate} value={date} />
                    </Col>
                    <Col xs md={8} className="pt-4">
                        <form onSubmit={handleSubmit}>
                            <h3>Selected Date: {date.toLocaleDateString()}</h3>
                            <input 
                                onChange={handleEvent} 
                                style={{width:"300px", marginTop:'10px', padding:'3px', borderRadius:'5px', outline:"none"}} 
                                type="text" name="" id="" placeholder='add event name'
                            />
                            <button className='btn btn-secondary'>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddEvents;