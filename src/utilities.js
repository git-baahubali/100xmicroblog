import supabase from "./services/supabase_client";

export async function createAccountWithEmail(email, password, onSuccess, onError) {
  const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
  });

  if (error) {
      console.error('Error creating account:', error.message);
      onError(error.message);
  } else {
      console.log('Account created successfully:', user);
      onSuccess(user);
  }
}

export async function signInWithEmail(Email,Password,onSignInSuccess,onSignInError) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    })
    if (error) {
      console.error('Error signing in:', error);
      onSignInError(error); // Handle the error (e.g., show an error message to the user)
    } else {
      console.log('Signed in successfully:', data);
      onSignInSuccess(data); // Navigate to the home page or do other tasks
    }}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
    if(error)
    console.log("Error signing Out : ",Error);
  else
  router.push('/');
  }

export async function loginWithGoogle() {
  // const baseURL = process.env.NODE_ENV === 'production' ? 'https://microblogging100x-dadb27e921ca.herokuapp.com/' : 'http://localhost:3000/'
   const baseURL = 'https://microblogging100x-dadb27e921ca.herokuapp.com'
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options:{
      redirectTo:'https://microblogging100x-dadb27e921ca.herokuapp.com'+'/Home',
    }
  });

  if (error) {
    console.error('Error signing in with Google:', error.message || error);
  } else {
    // The user has been successfully signed in and redirected back to your application
    console.log('Signed in with Google successfully');
  }
}





export async function gerRefreshTokenFromGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  
}

export async function getUserId() {
  const session = await supabase.auth.getSession();
  // const userId = session.user.id;

  return session;
}


export async function storeTokens(access_token, refresh_token) {
  try {
    const response = await fetch('/api/auth/storeTokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token, refresh_token }),
    });

    if (response.ok) {
      console.log('Tokens stored securely');
    } else {
      console.error('Failed to store tokens securely');
    }
  } catch (error) {
    console.error('Error storing tokens securely:', error);
  }
}
