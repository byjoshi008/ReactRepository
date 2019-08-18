import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/lib/fa';

const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightblue;
  font-family: Arial;
  align-items: center;
`;

const MenuTitle = styled("span")`
  margin-bottom: 20px;
  font-weight: bold;
`;

const Index = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  width: 200px;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
  &.back_btn {
    font-weight: bold;
    background-color: transparent;
    color: #444;
  }
`

export default class Menu extends React.Component{

  state = { category: '' }

  componentDidUpdate(){
    const { currentCategory, setMenuCategory } = this.props;
    if(this.state.category !== currentCategory){
      setMenuCategory(currentCategory);
      this.setState({
        category: currentCategory
      })
    }
  }

  render(){
    const { tutorialList, currentCategory } = this.props;
    return(
      <MenuContainer>
        <MenuTitle>React Tutorial Examples</MenuTitle>
        <Index>
          { tutorialList.map(item => (
            <Item key={item.id} to={`${item.path}`}>{item.title}</Item>
          ))}
          { currentCategory ? <Item to='/' className='back_btn'><FaArrowLeft /> Back to Main Menu</Item> : null }
        </Index>
      </MenuContainer>
    )
  }
}