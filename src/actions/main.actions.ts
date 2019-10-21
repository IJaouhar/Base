
import CampaignAdapter from '../models/entities/campaigns.entity';

const MainActions = {
  getCampaigns: () => ({
    type: "MAIN::FETCH_GET_CAMPAIGNS",
  }),
  getCampaignsSuccess: (campaigns: Array<string>) => ({
    type: "MAIN::FETCH_GET_CAMPAIGNS_SUCCESS",
    payload: {
      campaigns,
    },
  }),
  createCampaigns: (campaignInfo: CampaignAdapter) => ({
    type: "MAIN::FETCH_POST_CAMPAIGNS",
    payload: {
      campaignInfo,
    },
  }),
  deleteCampaigns: (id: string) => ({
    type: "MAIN::FETCH_DELETE_CAMPAIGN",
    payload: {
      id,
    },
  }),
};

export default MainActions;