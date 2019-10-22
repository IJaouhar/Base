import * as React from 'react';

interface IProps {
  getCampaigns: Function,
}

class MainContainer extends React.Component<IProps,{}> {
  render() {
    const { getCampaigns } = this.props;

    return (
      <div>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <h1>ASDASDASDASDASDASDASDASDASDASDASD</h1>
        <button onClick={() => {getCampaigns()}}>HOLA</button>
      </div>
    );
  }
}

export default MainContainer;