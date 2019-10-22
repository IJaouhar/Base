import * as React from 'react';
import './campaigns.component.scss';

interface IProps {
  name: string,
  url: string,
  category: string,
  date: number,
}

class CampaignsComponent extends React.Component<IProps, {}> {
  render() {
    const { name, url, category, date } = this.props;

    return (
      <ul className="campaign-card-container">
        <li>{name}</li>
        <li>{url}</li>
        <li>{category}</li>
        <li>{date}</li>
      </ul>
    );
  }
}

export default CampaignsComponent;