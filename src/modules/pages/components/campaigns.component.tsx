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
        <li className="text-block">{name}</li>
        <li className="text-block text-url">{url}</li>
        <li className="text-block">{category}</li>
        <li className="text-block">{date}</li>
        <li className="text-block"><button className="delete-button" onClick={() => {deleteCampaigns(id)}}>Remove</button></li>
      </ul>
    );
  }
}

export default CampaignsComponent;