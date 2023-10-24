
import { Row, Col, Button, Card} from 'react-bootstrap';
function Cards () {
    return(
    
    <Row>
        {[0, 1, 2, 3].map(item => (
        <Col md='3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/post.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
    </Row>
    )}
export default Cards;