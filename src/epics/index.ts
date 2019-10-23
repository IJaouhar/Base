import { combineEpics } from 'redux-observable';
import getCampaign from './get.campeigns';
import createCampaigns from './post.campeigns';

const rootEpic = combineEpics(
  getCampaign,
  createCampaigns,
);

export default rootEpic;