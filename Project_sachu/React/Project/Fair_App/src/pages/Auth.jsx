import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
  const registerForm = register ? true : false;
  return (
    <>
      <Container>
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='container w-75'>
            <h5>
              <Link className='texr-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }}><i class='fa-solid fa-arrow-left me-3'></i>Back to home</Link>
            </h5>
            <div className='bg-light'>
              <Row>
                <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                  <img src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="" width='70%' />
                </Col>
                <Col md={6} className='p-5 d-flex justify-content-center'>
                  <form className='w-100'>
                    <h5 className='text-center'>
                      <i class="fa-brands fa-stack-overflow me-3"></i>
                      Project Fair App
                    </h5>
                    {registerForm ?
                      <>
                        <h6 className='text-center mb-3 mt-3'>Sign Up To Your Account</h6>
                        <input type='text' name='' id='' placeholder='Name' className='form-control rounded'/>
                      </>
                      :
                      <h6 className='text-center mb-3 mt-3'>Sign In To Your Account</h6>
                    }
                    <div className='mb-3 mt-3'>
                      <input type="text" name="" id="" placeholder='Email Id' className='form-control rounded'/>
                    </div>
                    <div className='mb-3'>
                      <input type="password" name="" id="" placeholder='Password' className='form-control rounded'/>
                    </div>
                    {registerForm?
                    <div className='mb-3 mt-3'>
                      <button className='btn btn-warning w-100 rounded'>Register</button>
                      <p className='mt-3'>Already A User ? Click Here To <Link className='ms-2' to={'/login'} style={{textDecoration:'none'}}>Login</Link></p>
                    </div> :
                    <div className='mb-3 mt-3'>
                      <button className='btn btn-warning w-100 rounded'>Login</button>
                      <p className='mt-3'>Not Registered Yet? Click Here To <Link className='ms-2' to={'/register'} style={{textDecoration:'none'}}>Register</Link></p>
                      </div> 
                  }
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Auth