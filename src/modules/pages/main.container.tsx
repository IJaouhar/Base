import * as React from 'react';
import HeaderComponent from '../header.layout';
import CampaignsComponent from './components/campaigns.component';
import "./main.container.scss";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
        campaign = 
        <CampaignsComponent
        key={index}
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
        
        <div className="campaigns-box">
          <Link to="create">
            <Button type="submit" className="create-campaign">
              Create new campaign
            </Button>
          </Link>
          {arrOfCampaigns}
        </div>
        
      </div>
    );
  }
}

export default MainContainer;