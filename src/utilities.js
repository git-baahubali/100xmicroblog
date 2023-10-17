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
      email: 'example@email.com',
      password: 'example-password',
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
  }

  
