import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ViewEvents = () => {
    const {user} = useAuth();
    const [events, setEvents] = useState([]);
    const [Delete, setDelete] = useState(false);
    const [value, onChange] = useState(new Date());

    useEffect(()=>{
        fetch(`https://peaceful-coast-21734.herokuapp.com/events?email=${user.email}`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [Delete]);

    useEffect(()=>{
        fetch(`https://peaceful-coast-21734.herokuapp.com/events?date=${value.toLocaleDateString()}&&email=${user.email}`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [value]);


    const handleAllEvents = () =>{
        fetch(`https://peaceful-coast-21734.herokuapp.com/events?email=${user.email}`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }

    const handleDeleteEvent = (id) => {
        console.log(id);
        // const confirm = window.confirm("Are you Sure?");
        // if(confirm){
        //     fetch(`https://peaceful-coast-21734.herokuapp.com/events/${id}`, {
        //         method:"DELETE",
        //         headers:{
        //             'content-type':'application/json'
        //         }
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         setDelete(!Delete)
        //     })
        // }

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://peaceful-coast-21734.herokuapp.com/events/${id}`, {
                    method:"DELETE",
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setDelete(!Delete)
                })
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }


    return (
        <div>
            <Container>
                <h2 className='text-center'>View Events</h2>
                <hr />
                <Row gap={4} className="mt-4">
                    <Col xs md={4} className="pt-4">
                        <Calendar  onChange={onChange} value={value} />
                    </Col>
                    
                    <Col xs md={8} className="pt-4">
                        <button onClick={handleAllEvents} className='btn btn-secondary mb-2'>Click to all events</button>

                        <div >
                            <Table striped bordered hover  style={{width:'100%', }}>
                                <thead className='text-center'>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Event</th>
                                        {/* <th>Username</th> */}
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        events.map((item, index) => <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.eventDate}</td>
                                        <td>{item.event}</td>
                                        <td onClick={() => handleDeleteEvent(item._id)}>
                                            <svg className='text-danger' style={{width:'25px', height:'25px', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </td>
                                    </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ViewEvents;