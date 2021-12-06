import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function RedirectLogin() {
  const userIdRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function getRedirectUrl(userId){
      let code = userId.toString().slice(0,2);
      console.log("HHHH")
      switch (code) {
          case "TR":
              return "/trainee/login";
              break;
          case "AD":
              return "/admin";
              break;
          default:
              throw "Invalid Id";
      }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      let userId = userIdRef.current.value
      let nextUrl = getRedirectUrl(userId);
      console.log(nextUrl, "HHHHHH")
      history.push(nextUrl, {userId:userId});
  } catch(err) {
      setError(err)
      setLoading(false)
    }


  }



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={userIdRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
