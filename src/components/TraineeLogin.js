import React, {useRef, useState} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"

export default function TraineeLogin(props) {
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const {login, loginGoogle} = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(props.location.state.userId, passwordRef.current.value).then((res) => {
                console.log(res.user)
                setLoading(false)
            })
            history.replace("/home")
        } catch  {
            setError("Failed to log in")
            setLoading(false)
        }

    }

    return (
        <> < Card > <Card.Body>
            <h2 className="text-center mb-4">Trainee Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={props.location.state.userId} disabled={true}/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required="required"/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    Log In
                </Button>

            </Form>
            <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">Need an account
        ? <Link to="/signup">Sign Up</Link>
    </div>

</>)
}
