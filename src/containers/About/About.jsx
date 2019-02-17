import React, {Component} from 'react';
import './About.less';
import { Avatar } from 'antd';
import List from '../../components/List/List.jsx';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            headtitle: "这是列表",
            data: [
                {
                    title: '标题一',
                    content: '内容一'
                },
                {
                    title: '标题二',
                    content: '内容二'
                },
                {
                    title: '标题三',
                    content: '内容三'
                },
                {
                    title: '标题四',
                    content: '内容四'
                },
            ]
        }
    }
    render() {
        let {data, headtitle, name} = this.state;
        return (
            <div>
                <h3>this is about page</h3>
                <h4>name: {name}</h4>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <List data={data} headtitle={headtitle} showPageName={this.showPageName.bind(this)}></List>
            </div>
        )
    }
    showPageName(name) {
        this.setState({
            name: name
        })
    }
}