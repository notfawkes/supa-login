import { SupabaseClient } from '@supabase/supabase-js'

interface SuccessPageProps {
  supabaseClient: SupabaseClient;
  onLogout: () => void;
}

const SuccessPage = ({ supabaseClient, onLogout }: SuccessPageProps) => {
  const handleLogout = async () => {
    await supabaseClient.auth.signOut()
    onLogout()
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Successfully logged in!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default SuccessPage 