import React, {Fragment} from 'react';

import DefaultCard from './DefaultCard';

import {Row} from 'reactstrap';

let howManyColumns = "4";

const UserLib = () => {
    return (
        <Fragment>
            <h5>UserLib - komponent</h5>
            <Row>
                <DefaultCard howManyColumns={howManyColumns}/>
                <DefaultCard />
                <DefaultCard />
            </Row>
        </Fragment>
     );
}

export default UserLib;