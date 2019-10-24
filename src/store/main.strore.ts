import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../reducers/main.reducer';
import MainActions from '../actions/main.actions';
import MainContainer from '../modules/pages/main.container';
import CampaignAdapter from '../models/entities/campaigns.entity'
import CreateContainer from '../modules/pages/create.container';

const mapStateToProps = (state: AppState) => (
	state.mainstore
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
	getCampaigns: () => {
		dispatch(MainActions.getCampaigns());
	},
	createCampaigns: (campaignInfo: CampaignAdapter) => {
		dispatch(MainActions.createCampaigns(campaignInfo));
	},
	deleteCampaigns: (id: string) => {
		dispatch(MainActions.deleteCampaigns(id));
	},
});

export const connectedMainStore = connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainContainer);

export const connectedCreateStore = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateContainer);

export { connectedMainStore as MainStore };
export { connectedCreateStore as CreateStore };