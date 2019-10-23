import * as React from 'react';
import HeaderComponent from '../header.layout';
import CampaignsComponent from './components/campaigns.component';

interface IProps {
  getCampaigns: Function,
  createCampaigns: Function,
  deleteCampaigns: Function,
  campaigns: Array<object>,
}

class MainContainer extends React.Component<IProps, {}> {
  componentWillMount() {
    const { getCampaigns } = this.props;
    getCampaigns()
  }
  render() {
    const { campaigns, deleteCampaigns } = this.props;
    const arrOfCampaigns: Array<any> = [];
    let campaign = null;

    if (campaigns) {
      campaigns.forEach((camp: any, index) => {
        console.log(camp);
        campaign = 
        <CampaignsComponent
        id={camp.id}
        name={camp.name}
        url={camp.url}
        category={camp.category}
        date={camp.createdAt}
        deleteCampaigns={deleteCampaigns}
        />
        arrOfCampaigns.push(campaign);
      });
    }
    

    return (
      <div>
        <HeaderComponent />
        {arrOfCampaigns}
      </div>
    );
  }
}

export default MainContainer;