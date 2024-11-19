import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Botton from "./Botton";

function Item ({item}) {
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.category}
            </Card.Text>
            <Botton to={`/item/${item.id}`}>
        Ver mas
      </Botton>
          </Card.Body>
        </Card>
      </Col>
    )}

    export default Item