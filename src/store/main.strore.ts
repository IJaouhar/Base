import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../reducers/main.reducer';
import MainActions from '../actions/main.actions';
import MainContainer from'../modules/pages/main.container';


const mapStateToProps = (state: AppState) => (
	state.mainstore
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
	getCampaigns: () => {
		dispatch(MainActions.getCampaigns());
	},
});

export const connectedMainStore = connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainContainer);

export { connectedMainStore as MainStore };