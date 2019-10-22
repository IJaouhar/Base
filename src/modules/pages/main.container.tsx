import * as React from 'react';
import HeaderComponent from '../header.layout';
import CampaignsComponent from './components/campaigns.component';

interface IProps {
  getCampaigns: Function,
  campaigns: Array<object>,
}

class MainContainer extends React.Component<IProps, {}> {
  componentWillMount() {
    const { getCampaigns } = this.props;
    getCampaigns()
  }
  render() {
    const { campaigns } = this.props;
    const arrOfCampaigns: Array<any> = [];
    let campaign = null;

    if (campaigns) {
      campaigns.forEach((camp: any, index) => {
        console.log(camp);
        campaign = 
        <CampaignsComponent
        name={camp.name}
        url={camp.url}
        category={camp.category}
        date={camp.createdAt}
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