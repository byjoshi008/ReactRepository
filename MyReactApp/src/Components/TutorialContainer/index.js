import React from 'react';
import styled from 'react-emotion';
import { Switch, Route } from 'react-router-dom'; 
import { FaHome, FaArrowLeft, FaArrowRight } from 'react-icons/lib/fa';
import { connect } from 'react-redux';

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: Arial;
  height: 100%;
`;

const Header = styled("div")`
  display: flex;
  height: 60px;
  background-color: #0087c7;
  color: white;
  align-items: center;
`;

const HomeLink = styled("button")`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px; 

  &:focus, &:active {
    border: none;
    outline: none;
  }
  & > svg {
    margin-top: -5px;
    font-size: 20px;
  }
`;

const Title = styled("span")`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

const Content = styled("div")`
  flex: 1;
  padding: 20px;
`;

const Footer = styled("div")`
  display: flex;
  height: 50px;
  background-color: #4A4A4A;
  color: white;
  align-items: center;

  & > div {
    width: 50%;

    & > button {
      margin: 0 20px;
      background: transparent;
      color: white;
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:focus, &:active {
        outline: none;
        border: none;
      }
      & > svg { 
        margin: -5px 5px 0;
        font-size: 20px;
      }
    }
  }
`;
const PrevTutorial = styled("div")`

`;
const NextTutorial = styled("div")`
  text-align: right;
`;

class TutorialContainer extends React.Component {
  
  state = { tutorialid: this.props.match.params.id, previd: null, nextid: null };
  
  componentWillMount(){
    this.setNextPrevTutorialIds(this.state.tutorialid);
  }

  setNextPrevTutorialIds = (currentId) => {
    const tutorialList = this.props.tutorialList;
    const currentTutorial = tutorialList.find( x => x.id === currentId );
    const index = tutorialList.indexOf(currentTutorial);
    let result = {
      previd: null,
      nextid: null
    }
    
    if(index >= 0){
      if(index !== 0){
        result.previd = index - 1;
      }
      if(index !== tutorialList.length - 1){
        result.nextid = index + 1;
      }
    }
    
    this.setState({
      previd: result.previd,
      nextid: result.nextid
    })
  }

  goToHomePage = () => {
    this.props.history.push('/');
  }

  loadTutorial = (id) => {
    const tutorialList = this.props.tutorialList;
    this.setState({
      tutorialid: tutorialList[id].id
    });
    this.setNextPrevTutorialIds(tutorialList[id].id);
    this.props.history.push(`${tutorialList[id].path}`);
  }

  render(){
    console.log("Tutorial Container Props: ", this.props);
    const {previd, nextid} = this.state;
    const tutorialid = this.state.tutorialid;
    const tutorialItem = this.props.tutorialList.find( x => x.id === tutorialid );
    const title = tutorialItem ? tutorialItem.title : "Tutorial Title"
    return (
      <Container>
        <Header>
          <HomeLink onClick={this.goToHomePage}><FaHome /></HomeLink>
          <Title>{title}</Title>
        </Header>
        <Content>
          <Switch>
              {this.props.tutorialList.map(item => {
                  const TutorialComponent = item.component;
                  if(item.props){
                    return <Route key={item.id} path={item.path} render={ props => <TutorialComponent {...item.props}/>} />
                  } else {
                    return <Route key={item.id} path={item.path} component={TutorialComponent} />
                  }
              })}
          </Switch>
        </Content>
        <Footer>
          <PrevTutorial>
            { previd === 0 || previd
              ? <button onClick={()=> this.loadTutorial(previd)}><FaArrowLeft /> Previous</button>
              : ''
            }
            
          </PrevTutorial>
          <NextTutorial>
            { nextid
              ? <button onClick={()=> this.loadTutorial(nextid)}>Next <FaArrowRight /></button>
              : ''
            }
            
          </NextTutorial>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const tutorialList = state.tutorialList.filter( t => t.category === state.currentCategory);
  console.log("Tutorial List: ", tutorialList);
  return {
    tutorialList: tutorialList,
    ...ownProps
  }
}

export default connect(mapStateToProps)(TutorialContainer);