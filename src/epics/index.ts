import { combineEpics } from 'redux-observable';
import getCampaign from './get.campeigns';

const rootEpic = combineEpics(
  getCampaign,
);

export default rootEpic;