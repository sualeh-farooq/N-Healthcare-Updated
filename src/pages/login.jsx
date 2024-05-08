import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createClient } from '../../utils/supabase/component'
import LoginLayout from '../layout/loginlayout'

export default function LoginPage({ userData }) {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error.message)
      setErrorMessage(error.message)
      return
    }
    console.log('login success')
    router.push('/private')
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.error(error)
    } else {
      await supabase.auth.signIn({ email, password });
      router.push('/private')
    }
  }

 useEffect(()=>{
 if (userData) {
  router.push('/private');
  return null;
}
 },[])

  return (
    <LoginLayout>
      <main style={{ height: '100vh !important;' }} className="  px-4 h-100 ">
        <div style={{ height: '100vh' }} className="row justify-content-center align-items-center">

          <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} className="col-12 col-sm-12 col-md-6  border-3 p-4 rounded-3 bg-white">
            <div className='py-3 d-flex justify-content-center' >
              <img width={200} src="/assets/img/logo/nlogo.png" alt="logo" />

            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="contact-btn justify-content-center" onClick={logIn}>
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </LoginLayout>
  )
}

export async function getServerSideProps(context) {
  try {
    const supabase = createClient(context);
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userData) {
      return {
        props: {
          userData: userData.user,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      userData: null,
    },
  };
}
