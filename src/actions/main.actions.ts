
import CampaignAdapter from '../models/entities/campaigns.entity';

const MainActions = {
  getCampaigns: () => ({
    type: "MAIN::FETCH_GET_CAMPAIGNS",
  }),
  getCampaignsSuccess: (campaigns: Array<object>) => ({
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
  createCampaignsSuccess: (response: any) => ({
    type: "MAIN::FETCH_POST_CAMPAIGNS_SUCCESS",
    payload: {
      response,
    },
  }),
  deleteCampaigns: (id: string) => ({
    type: "MAIN::FETCH_DELETE_CAMPAIGN",
    payload: {
      id,
    },
  }),
  deleteCampaignsSuccess: (response: any) => ({
    type: "MAIN::FETCH_DELETE_CAMPAIGN_SUCCESS",
    payload: {
      response,
    },
  }),
};

export default MainActions;