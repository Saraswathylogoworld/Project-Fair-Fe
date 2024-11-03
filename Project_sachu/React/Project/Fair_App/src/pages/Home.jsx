import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import home_image from '../assets/image2.png'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
      <div className='container-fluid bg-success p-4 mb-4 mt-4' style={{ width: '100%', height: '100vh' }}>
        <Row>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
            <div>
              <h3 className='text-light'>Project Fair</h3>
              <h6>One stop destination for any software projects</h6>
            </div>
            <Link to={'/login'}>
              <button className='btn btn-outline-light my-4'>GET STARTED<i class='fa-solid fa-arrow-right ms-3'></i></button>
            </Link>
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column mt-5'>
            <img src={home_image} alt="" width="75%" />
          </Col>
        </Row>
      </div>
      <div className='container-fluid mb-5'>
        <h2 className='text-center my-5'>Explore Our Projects</h2>
        <marquee scrollAmount={15}>
        <div className='row'>
          <div className='col-md-3 justify-content-center d-flex p-2'>
            <ProjectCard/>
          </div>
           <div className='col-md-3 justify-content-center d-flex p-2'>
            <ProjectCard/>
          </div>
          <div className='col-md-3 justify-content-center d-flex p-2'>
            <ProjectCard/>
          </div>
        </div>
        </marquee>
        
        <Link to={'/project'} className='text-primary' style={{ textDecoration:'none' }}>
          <h5 className='text-center'>See more Projects</h5>
        </Link>
      </div>

    </>
  )
}

export default Home