import React, {Component} from 'react';
import axios from 'axios';
import './items.css';

class Items extends Component{
    state = {
        items: [],
        category: ''
    }


    componentDidUpdate(){
        if(this.state.category !== this.props.match.params.id){
            axios.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+ this.props.match.params.id)
                .then(
                    response => {
                        this.setState({
                            items:response.data.menu_items,
                            category: this.props.match.params.id
                        });
                    }
                );
        }
    }

    render(){
        const items = this.state.items.map(
            item => {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                )
            }
        );

        return (
            <div>
                <p>Items in category:({this.props.match.params.id})</p>
                <table id='Table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Items;