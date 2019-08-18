import { connect } from 'react-redux';
import Menu from '../Components/Menu';

const mapStateToProps = (state, ownProps) => {
    return {
        tutorialList: state.tutorialList.filter( t => t.category === ownProps.category),
        currentCategory: ownProps.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuCategory: (category) => {
            console.log("Set Category: ", category);
            dispatch({
                type: 'SET_CATEGORY',
                category: category
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);