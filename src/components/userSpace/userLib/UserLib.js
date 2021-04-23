import React, {Fragment, Component} from 'react';

import DefaultCard from './DefaultCard';

import {Row} from 'reactstrap';

let howManyColumns = "4";

class UserLib extends Component {
    constructor(props) {
        super(props);
        this.state = { movies:[] }
    }

    URL = 'https://randomuser.me/api/?results=6';

    fetchDataFromYTDataApi = () =>{
        fetch(this.URL)
            .then(resp => resp.json())
            .then(data => this.setState({movies: data.results}))
            .catch(error => console.log('F-a-i-l-u-r-e'));
    }

    componentDidMount(){
        this.fetchDataFromYTDataApi();
    }

    render() {
        const {movies} = this.state;
        return (
        <Fragment>
            <h5>UserLib - komponent</h5>
            <h5>{movies.length && "Tablica filmów została pobrana"}</h5>
            <Row>
                <DefaultCard howManyColumns={howManyColumns}/>
                <DefaultCard />
                <DefaultCard />
            </Row>
            </Fragment>
        );
    }
}

export default UserLib;