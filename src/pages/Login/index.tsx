/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

import app from 'services/firebase/firebase'
import { useAuth } from 'contexts/auth/auth-context'

import {
  Inner,
  ErrorMessage,
  InputGroup,
  Input,
  ButtonGroupWrapper,
  LoginButton,
} from './styles'

export default function Login() {
  const auth = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (auth) {
      history.push('/')
    }
  }, [auth])

  const loginWitheEmail = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .signInWithEmailAndPassword(user.value, password.value)
      .then((_result: any) => {
        history.push('/')
      })
      .catch((error: any) => {
        setError(error.message)
      })
  }

  return (
    <Inner>
      <Form onSubmit={loginWitheEmail}>
        <h1>Login</h1>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <InputGroup>
          <Input name="user" placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <Input name="password" type="password" placeholder="Password" />
        </InputGroup>
        <ButtonGroupWrapper>
          <LoginButton type="submit">Login</LoginButton>
        </ButtonGroupWrapper>
      </Form>
    </Inner>
  )
}
