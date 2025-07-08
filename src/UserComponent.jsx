function Login(){
   return(
     <>
    <h1>Please Login</h1>
    </>
   )
}


// we can create multi things and export them to maian App and use them
export let msg= 'Please enter details';
export function Profile(){
    return(
        <>
        <h3>Profile</h3>
        <h5>Please update profile</h5>
        </>
    )
}

export function Settings(){
    return(
        <>
        <h3>Settings</h3>
        <h5>Please update Settings</h5>
        </>
    )
}


export default Login