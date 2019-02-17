import React, {Component} from 'react';
import {Button} from 'antd';

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let {headtitle, showPageName} = this.props;
        return (
            <div>
                <h3>{headtitle}</h3>
                <Button type="primary" onClick={e => showPageName('home')}>home-name</Button>
                <Button type="danger" onClick={e => showPageName('mall')}>mall-name</Button>
                <Button type="dashed" onClick={e => showPageName('about')}>about-name</Button>
                {this.createList()}
            </div>

        )
    }
    createList() {
        let {data} = this.props;
        return (
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li key={index}>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}