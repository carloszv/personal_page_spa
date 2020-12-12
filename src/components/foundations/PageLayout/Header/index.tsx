/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'

// eslint-disable-next-line import/no-cycle
import { useAuth } from 'contexts/auth/auth-context'
import app from 'services/firebase/firebase'

import { Head, Outer, TopBar, LogoutButton, Logo } from './styles'

export default function Header(): ReactElement {
  const auth = useAuth()

  async function logout() {
    await app
      .auth()
      .signOut()
      .then()
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.error(error.message)
      })
  }

  return (
    <Head>
      <Outer>
        <TopBar>
          {auth !== null && (
            <LogoutButton type="button" onClick={logout}>
              logout
            </LogoutButton>
          )}
        </TopBar>
        <Logo src="" alt="Carlos Zamora" />
      </Outer>
    </Head>
  )
}
