import '../src/app/globals.css'
import Home from './Home'
import { AppProvider } from '../src/app/AppContext'
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (<AppProvider>
    <SessionContextProvider supabaseClient={supabaseClient}>
      <div className="mx-auto p-4 max-w-screen-md">
        <Component {...pageProps} />
      </div>
    </SessionContextProvider>
  </AppProvider>
  )
}

export default MyApp
