import { connect } from 'react-redux';
import BrowseView from './BrowseView';
import { fetchAllRecipes } from '../../store/recipes/actions/fetchAllRecipes';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: (auth) => {
            return dispatch(fetchAllRecipes(auth));
        },
    };
};

const BrowseViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseView);

export default BrowseViewContainer;