import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const AddEvents = () => {
    const {user} = useAuth();
    const [event, setEvent] = useState('');
    const [date, setDate] = useState(new Date());


    const handleEvent = e => {
        setEvent(e.target.value);
    };

    const addData = () =>{
        const userName = user.displayName;
        const userEmail = user.email;
        const eventDate = date.toLocaleDateString();
        const addEvent = {userName, userEmail, event, eventDate};

        fetch('https://peaceful-coast-21734.herokuapp.com/events', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addEvent)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                swal({
                    title: "Success!",
                    text: "You have added an event!",
                    icon: "success",
                  });
            }
        })
    }

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            addData();
            e.target.reset();
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        addData();
        e.target.reset();
    }

    return (
        <div>
            <Container style={{overflowX:'hidden'}}>
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
                            <button handleKeyPress={handleKeyPress} className='btn btn-secondary'>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddEvents;