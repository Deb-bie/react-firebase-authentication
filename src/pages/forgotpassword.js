import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';


function Forgotpassword() {
    const EmailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        // this prevents the form from refreshing
        e.preventDefault()

        try{
            setMessage('')
            setError('')

            // creating a setloading state to prevent the user from clicking the submit button multiple times
            setLoading(true)

        // calling our signup function
            await resetPassword(EmailRef.current.value)
            setMessage('Check your inbox')

        }

        catch {
            
            setError('Failed to reset password')
            
        }

        setLoading(false)
    }


    return (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" 
            style={{ minHeight: "100%"}}>

                <div className="w-100" style={{ maxWidth: "400px", marginTop: "50px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Reset Password</h2>

                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={EmailRef} required></Form.Control>
                                </Form.Group>

                                <br />


                                <Button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>Sign In</Button>
                            </Form>

                            <div className="w-100 text-center mt-3">
                                <Link to='/'>Login</Link>
                            </div>


                        </Card.Body>

                    </Card>

                    <div className="w-100 text-center mt-2">
                        Don't have an account?
                        <Link to='/signup'>Sign Up</Link> 
                        
                    </div>

                </div>
            </Container>

        </AuthProvider>
    )
}

export default Forgotpassword
