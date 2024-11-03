import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Container } from 'react-bootstrap'


function Project() {
  return (
    <>
      <Header />
     <Container>
     <div className='container-fluid'>
        <h3 className='text-center mt-5'>All Project</h3>
      </div>
      <div className='row my-4'>
        <div className='col-md-4'></div>
        <div className='col-md-4 d-flex'>
          <input type="text" className='form-control' placeholder='Search by Technology' />
          <i class='fa-solid fa-magnifying-glass' style={{ marginTop: '12px', marginLeft: '-28px', color: 'lightgrey' }}></i>
        </div>
        <div className='col-md-4'></div>
      </div>
      <div className='container row my-5 ms-5'>
        <div className='col-md-3'>
          <ProjectCard />
        </div>
      </div>
     </Container>
    </>
  )
}

export default Project