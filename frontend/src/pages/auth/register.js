import { useState } from 'react';


const Register = (props) => {

    const [userInfo, setUserInfo] = useState({});

    const registerUser = (e) => {
        e.preventDefault();
        
    };

    const changeInfo = (e) => {
        console(e.target);
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col" style={{marginTop: 50}}>
                    <img src="/register.png" className="img-fluid"/>
                </div>
                <div className="col" style={{marginTop: 120}}>
                    <div className="card p-3 logincard" style={{width: '30rem'}}>
                        <p className="text-center">Crypto</p>
                        <div className="card-body">
                            <form onSubmit={registerUser}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="firstname"
                                            onChange={changeInfo}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name="lastname"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control"
                                        name="email"
                                     />
                                </div>
                                <div className="mb-4">
                                    <label  className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-lock" aria-hidden="true"></i> Register</button>
                                </div>
                            </form>
                            <p className="text-center p-3" style={{marginBottom: -25}}><button onClick={ () => props.loginPage() } className="btn btn-light">Have an account? Login</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;