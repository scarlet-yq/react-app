import React, {Component} from 'react';

export default class ShowName extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let {name} = this.props;
        return (
            <div>
                <h3>姓名：{name}</h3>
                <ul>
                    {this.createCoutryList()}
                </ul>
            </div>

        )
    }
    createCoutryList() {
        let {state} = this.props;
        return (
            <ul>
                {
                    state.countryList &&
                    state.countryList.map((item, index) => {
                        return <li key={index}>id:{item.id}----{item.name}</li>
                    })
                }
            </ul>
        )
    }
}