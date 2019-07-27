import React from 'react';
import { Form,FormGroup,FormControl, FormLabel, Button } from 'react-bootstrap';

class Gift extends React.Component{
    constructor(){
        super();
        this.state = { 
            person : '',
            present : ''
        }
    }
    render(){
        return(
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl className="input-person"
                        onChange={(event)=>{
                            this.setState({ person : event.target.value});
                        }}
                        ></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl className="input-present"
                        onChange={(event)=>{
                            this.setState({ present : event.target.value});
                        }}
                        ></FormControl>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift;