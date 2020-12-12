/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'contexts/auth/auth-context'

export default function Home() {
  const auth = useAuth()
  const history = useHistory()

  useEffect(() => {
    if (auth === null) {
      history.push('/login')
    }
  }, [history, auth])

  if (auth === null) {
    return null
  }

  return <>Home</>
}
