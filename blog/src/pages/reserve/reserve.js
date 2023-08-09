import React,{Component} from "react";
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReserveDiv = styled.div`
    height: 100%;
    width: 100%;
    border: 2px #7fccde solid;
    border-radius: 30px;
    padding: 60px;
`;

class Reserve extends Component{
    constructor(props){
        super(props);
        const locmethod = props.locmethod;          // parameter로 넘어온 val1
        this.state = { locmethod:locmethod };   // Component state에 저장
    }
    render(){
        return(
            <Container>
                <ReserveDiv>
                    <h1>[예약 방법]</h1>
                    <p>{this.state.locmethod}</p>
                </ReserveDiv>
            </Container>
        );
    }
};

export default Reserve;