import React from 'react'
import Card from 'react-bootstrap/Card';
import media_player_img from '../assets/video-player.png'
function ProjectCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={media_player_img} />
      <Card.Body>
        <Card.Title>Media Player</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProjectCard