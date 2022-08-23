import React from 'react'
import '../../../assets/css/style.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/LOGO_FINAL.png'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', {
      email: email,
      password: password
    })
      .then((response) => {
        if (response) {
          alert("Login successfully.. ....");
          navigate("/dashboard")
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div className="bg-light min-vh-100 align-items-center">
      <section style={{ backgroundColor: "rgb(16 46 86)", height: "100vh" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block" style={{
                    backgroundColor: "bisque",
                    borderRadius: "15px 0px 0px 15px"
                  }} >
                    <div className="d-flex align-items-center mb-3 pb-1" style={{ width: "50%", margin: "50% auto" }} >
                      <img src={logo} alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-2 p-lg-4 text-black">

                      <form>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }} >Sign In</h5>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form2Example17">Email address :</label>
                          <input type="email" id="form2Example17"
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            className="form-control form-control-lg" />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27">Password :</label>
                          <input type="password" id="form2Example27"
                            onChange={(e) => setPassword(e.target.value)} value={password}
                            className="form-control form-control-lg" />
                        </div>

                        <div className="pt-1 mb-3">
                          <button className="btn btn-dark btn-lg btn-block" onClick={submit} type="button">Login</button>
                        </div>

                        <a className="small text-muted" href="#">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81", fontWeight: "500" }}>Don`t have an account? <a href="#"
                          style={{ color: "#393f81" }}>Register here</a></p>
                        <a href="#" className="small text-muted">Terms of use.</a>
                        <a href="#" className="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;
