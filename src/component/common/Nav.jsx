import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Wanted</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">To do List</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    
}
export default Nav
