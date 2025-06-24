import { createClient, Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import AuthUI from './components/Auth'
import SuccessPage from './components/SuccessPage'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key not found. Make sure to set them in your .env file.")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = () => {
    setSession(null);
  }

  return (
    <>
      {!session ? <AuthUI supabaseClient={supabase} /> : <SuccessPage supabaseClient={supabase} onLogout={handleLogout}/>}
    </>
  )
}

export default App 