import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';



function Index() {
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const PasswordConfirmationRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        // this prevents the form from refreshing
        e.preventDefault()

        const email = EmailRef.current.value;
        const password = PasswordRef.current.value;
        const passwordConfirmation = PasswordConfirmationRef.current.value;

        // error handling
        if (password !== passwordConfirmation) {
            return setError('Passwords do not match')
        }


        try{

            setError('')

            // creating a setloading state to prevent the user from clicking the submit button multiple times
            setLoading(true)

            // calling our signup function
            await signUp(EmailRef.current.value, PasswordRef.current.value)
            navigate('/home')

        }

        catch {
            
            setError('Failed to create an account')
            
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
                            <h2 className="text-center mb-4">Sign Up</h2>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={EmailRef} required></Form.Control>
                                </Form.Group>


                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={PasswordRef} required></Form.Control>
                                </Form.Group>


                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={PasswordConfirmationRef} required></Form.Control>
                                </Form.Group>

                                <br />

                                <Button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>

                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to='/'>Log In </Link>
                    </div>

                </div>
            </Container>

        </AuthProvider>
    )
}

export default Index


