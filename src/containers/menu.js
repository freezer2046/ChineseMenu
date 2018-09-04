import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component{
    state = {
        Menu: []
    }

    componentDidMount(){
        axios.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(response => {
                const data = response.data;
                this.setState({ Menu : data });
            });
    }

    render(){
        const data  = this.state.Menu.map(
            data => {
                return <Link to={'/items/'+data.short_name} key={data.name}>
                <li>{data.name}-({data.short_name})</li></Link>;
            }
        )
        return (
            <div id='menu'>
                <ul>
                    {data}
                </ul>
            </div>
        )
    }

}

export default Menu;