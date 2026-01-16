const LoginComponent = ({status})=>{
    return (
        <>
        {status ? <h1> login Success</h1> : <h1> login failed</h1>}
        
        </>
    )
}

export default LoginComponent;