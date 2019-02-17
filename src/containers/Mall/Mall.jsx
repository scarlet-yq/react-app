import React, {Component} from 'react';
import './Mall.less';
import { Rate } from 'antd';

export default class Mall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h3>this is mall page</h3>
                <Rate allowHalf defaultValue={2.5} />
            </div>
        )
    }
}