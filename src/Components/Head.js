
import { Row, Col, Image, Nav} from 'react-bootstrap';

function Head(){
  return(
        <Row>
            <div class="clock">
            <Image class="clockback" href="#" src="./images/clockback.png" height='150px' rounded/>
                <div class="hour">
                    <div class="hr" id="hr"></div>
                </div>
                <div class="min">
                    <div class="mn" id="mn"></div>
                </div>
                <div class="sec">
                    <div class="sc" id="sc"></div>
                </div>
            <script src="./clockscript.js"></script>
            </div>
          <Col md='8'>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Menu</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ServerStatus">ServerStatus</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md='1'>User</Col>
          <Image src="./images/fox.png" alt="Logo" height='60' rounded/>
        </Row>
  )}

export default Head;