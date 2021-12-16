import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap';

const PageNotFound = () => {
    return (
    
        <Container className="d-flex align-items-center justify-content-center container" 
            style={{ minHeight: "100%"}}>

            <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px" }}>

                <Card>
                    <Card.Body>
                        <h4>This page is not available</h4>
                        <p>
                        Click here to  
                        <Link to='/'>login</Link>
                        </p>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default PageNotFound
