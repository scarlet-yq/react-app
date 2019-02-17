import React, {Component} from 'react';
import './Home.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "二狗子",
            age: 38
        }
    }
    render() {
        return (
            <div>
                <h3>this is home page</h3>
                <p>姓名: {this.state.name}</p>
                <p>年龄: {this.state.age}</p>
            </div>
        )
    }
    componentWillMount(){
        console.log('this.props',this.props)
    }
}