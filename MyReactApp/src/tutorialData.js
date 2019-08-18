import HelloWorld from './Components//Tutorials/ReactFundamentals/HelloWorld';
import PropTypeCheck from './Components/Tutorials/ReactFundamentals/PropTypeCheck';
import ConditionalRendering from './Components/Tutorials/ReactFundamentals/ConditionalRendering';
import Rerendering from './Components/Tutorials/ReactFundamentals/Rerendering';
import StyleCheck from './Components/Tutorials/ReactFundamentals/StyleCheck';

import ReduxCounter from './Components/Tutorials/Redux/ReduxCounter'
import ReduxToDo from './Components/Tutorials/Redux/ReduxToDo'

const tutorialList = [
  {
    id: "react_fundamental_tutorial",
    category: '',
    title: "React Fundamentals",
    path: "/react-fundamentals"
  },
  {
    id: "redux_tutorial",
    category: '',
    title: "Redux",
    path: "/redux"
  },

  { 
    id: "reactfundamentals1", 
    category: "react_fundamental_tutorial",
    title: "Hello World", 
    path: "/tutorial/reactfundamentals1", 
    component: HelloWorld 
  },
  {
    id: "reactfundamentals2",
    category: "react_fundamental_tutorial",
    title: "Proptypes",
    path: "/tutorial/reactfundamentals2",
    component: PropTypeCheck,
    props: { firstName: "Bhargav", lastName: "Joshi" }
  },
  {
    id: "reactfundamentals3",
    category: "react_fundamental_tutorial",
    title: "Conditional Rendering",
    path: "/tutorial/reactfundamentals3",
    component: ConditionalRendering
  },
  {
    id: "reactfundamentals4",
    category: "react_fundamental_tutorial",
    title: "Re-rendering",
    path: "/tutorial/reactfundamentals4",
    component: Rerendering
  },
  {
    id: "reactfundamentals5",
    category: "react_fundamental_tutorial",
    title: "Style with React",
    path: "/tutorial/reactfundamentals5",
    component: StyleCheck
  },
  {
    id: "redux1",
    category: "redux_tutorial",
    title: "Counter Example",
    path: "/tutorial/redux1",
    component: ReduxCounter
  },
  {
    id: "redux2",
    category: "redux_tutorial",
    title: "Todo List",
    path: "/tutorial/redux2",
    component: ReduxToDo
  }
]

export default {
  tutorialList: tutorialList
}