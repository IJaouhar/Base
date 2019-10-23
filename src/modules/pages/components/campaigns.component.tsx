import * as React from 'react';
import './campaigns.component.scss';

interface IProps {
  id: number,
  name: string,
  url: string,
  category: string,
  date: number,
  deleteCampaigns: Function,
}

class CampaignsComponent extends React.Component<IProps, {}> {
  render() {
    const { name, url, category, date, id, deleteCampaigns } = this.props;

    return (
      <ul className="campaign-card-container">
        <li>{name}</li>
        <li>{url}</li>
        <li>{category}</li>
        <li>{date}</li>
        <li><button onClick={() => {deleteCampaigns(id)}}></button></li>
      </ul>
    );
  }
}

export default CampaignsComponent;