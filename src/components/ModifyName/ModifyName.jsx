import React, {Component} from 'react';
import {Button} from 'antd';
import {getData} from '../../redux/actions/name.js';


export default class ModifyName extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let {state, empty_name, request_message, dispatch} = this.props;
        console.log("修改", this.props);
        return (
            <div>
                <Button type="primary" onClick={e => dispatch({type:'MODIFY_NAME', name: '李翠花她妈'})}>修改名字</Button><br/><br/>
                <Button type="primary" onClick={e => empty_name()}>无名</Button>
                <Button type="danger" onClick={e => dispatch(getData(123444))}>获取数据</Button>

            </div>
        )
    }
}