import * as React from 'react';
import HeaderComponent from '../header.layout';
import { Form } from 'react-bootstrap';


interface IProps {
  createCampaigns: Function,
}

interface IState {
  nameCampaign: string,
  url: string,
}

class CreateContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      nameCampaign: '',
      url: '',
    }
  }
  handleClick = () => {

  }

  handleChange = (event: any) => {
    const { target: { name, value } } = event
    // this.setState({ [name]: value })
  }

  render() {
    const { nameCampaign, url } = this.state;
    const {createCampaigns} = this.props;
    createCampaigns()
    return (
      <div>
        <HeaderComponent />
        <div>
        <Form className="subscriptionForm">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <span className="asterisk"> *</span>
                <Form.Control className="formInput" required type="text" name="nameCampaign" value={nameCampaign} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Url</Form.Label>
                <span className="asterisk"> *</span>
                <Form.Control className="formInput" required type="text" name="url" value={url} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Advance Info</Form.Label>
              </Form.Group>

              <button type="button" className="btn-register" onClick={() => this.handleClick()}>
                Create
              </button>
            </Form>
        </div>
      </div>
    );
  }
}

export default CreateContainer;