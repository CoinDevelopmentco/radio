import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Musicplayer from './Musicplayer.js';
import album from './Imagine Dragons - Night Visions.jpg';
import icon from './Napster.svg';

function Navbar({user,inOut,setPlaylistMenu,setRadioMenu,setPick}) {
  
  const refresh = () => {
    setPlaylistMenu('show')
    setRadioMenu('show')
    setPick(null)
  }
   
  const checkUser = user

  return (
    <Container fluid>
      <Row className="Nav-Row">
        <Col onClick={refresh} className="logo" ><img className="icon" src={icon} />IPFS RAD10</Col>
          <Row className="artist-info" >
          <Col className="artist" ><img className="album" src={album} /></Col>
          <Col>ARTIST: BIO</Col>
          </Row>
        <Col className="musicplayer" ><Musicplayer user={checkUser} className="musicplayer" /></Col>
        <Col className="browse" >Album tracks</Col> 
        <Col className="member" ><input className="input" type="test" placeholder="Search Music" />{inOut}</Col>
      </Row>
      <Row>
        <Col className="description" ><div className="description-inner" >InterPlanetary File System Radio</div></Col>  
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Navbar;

//onChange={event => props.onChange(event.target.value)}