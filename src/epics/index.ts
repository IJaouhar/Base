import { combineEpics } from 'redux-observable';
import getCampaign from './get.campeigns';
import createCampaigns from './post.campeigns';
import deleteCampaigns from './delete.campeigns';

const rootEpic = combineEpics(
  getCampaign,
  createCampaigns,
  deleteCampaigns,
);

export default rootEpic;