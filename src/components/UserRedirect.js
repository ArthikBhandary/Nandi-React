import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function RedirectLogin() {
  // const { currentUser, logout } = useAuth()
  // if( currentUser ){
  //   console.log(currentUser);
  //   logout();
  // }
  const userIdRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function getRedirectUrl(userId){
      let code = userId.toString().slice(0,2);
      switch (code) {
          case "TR":
              return "/login_trainee";
          case "AD":
              return "/login_admin";
          default:
              return "/login_trainee";
      }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      let userId = userIdRef.current.value
      let nextUrl = getRedirectUrl(userId);
      console.log(nextUrl, userId)
      navigate(nextUrl,
          {state : {
              userId:userId
            }
          }
      );
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
