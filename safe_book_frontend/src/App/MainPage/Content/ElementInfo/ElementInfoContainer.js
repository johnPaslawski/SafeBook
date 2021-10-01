import React from "react";
import { connect } from "react-redux";
import ElementInfo from "./ElementInfo";
import * as axios from "axios";
import {setElementData} from "../../../../redux/reducers/MainPage/mainPageElementInfoReducer"
import { withRouter } from "react-router";

class ElementInfoApiComponent extends React.Component{

    componentDidMount(){
        const endpoint = `${this.props.match.params.type}/${this.props.match.params.id}`
        axios.get(`https://localhost:44325/api/${endpoint}`)
        .then( responce => {return this.props.setElementData(responce.data)})
    }

    render(){
        return(
            <ElementInfo elementData={this.props.elementData}/>
        );
    }
}

let ElementInfoComponentWithUrl = withRouter(ElementInfoApiComponent);

const mapStateToProps = (state) => ({
    elementData: state.mainPageElementInfo.elementData
})

const mapDispatchToProps = (dispatch) => ({
    setElementData: body => dispatch(setElementData(body))
})

const ElementInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ElementInfoComponentWithUrl)

export default ElementInfoContainer;