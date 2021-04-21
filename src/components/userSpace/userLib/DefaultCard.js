import React, {Fragment} from 'react';

import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';

import './DefaultCard.css';

// import Picture from './logo.svg';
import Picture from './gory.jpg';


const DefaultCard = ( {howManyColumns} ) => {
    return (
    <Fragment>
        <Col sm={howManyColumns}>
            <Card>
                <CardImg top width="100%" src={Picture} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    </Fragment>
     );
}

DefaultCard.defaultProps = {
    howManyColumns:"4"
}

export default DefaultCard;