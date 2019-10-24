import * as React from 'react';
import HeaderComponent from '../header.layout';
import { Form } from 'react-bootstrap';
import './create.container.scss';


interface IProps {
  createCampaigns: Function,
}

interface IState {
  [key: string]: any,
  nameCampaign: string,
  url: string,
  category: string,
  nameCampaignEmpty: string,
  urlEmpty: string,
  categoryEmpty: string,
}

class CreateContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      nameCampaign: '',
      url: '',
      category: '',
      nameCampaignEmpty: '',
      urlEmpty: '',
      categoryEmpty: '',
    }
  }
  
  handleClick = () => {
    const { createCampaigns } = this.props;
    const { nameCampaign, url, category } = this.state;
    let campaignInfo = {}

    if (nameCampaign === '') {
      this.setState({ nameCampaignEmpty: 'red' })
    }
    if (url === '') {
      this.setState({ urlEmpty: 'red' })
    }
    if (category === '') {
      this.setState({ categoryEmpty: 'red' })
    } 
    if (nameCampaign !== '' &&  url !== '' && category !== '...'){
      campaignInfo = {
        name: nameCampaign,
        url: url,
        category: category,
      }
      createCampaigns(campaignInfo)
    }
  }

  handleChange = (event: any) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  render() {
    const { nameCampaign, url, category,nameCampaignEmpty, urlEmpty, categoryEmpty } = this.state;
    return (
      <div>
        <HeaderComponent />
        <div className="create-campaign-form flex-column">
          <Form className="form-container flex-column">
            <Form.Group controlId="form" className='text-form-box'>
              <Form.Label>Name</Form.Label>
              <span className="asterisk"> *</span>
              <Form.Control className={`form-input ${nameCampaignEmpty}`} required type="text" name="nameCampaign" value={nameCampaign} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="form" className='text-form-box'>
              <Form.Label>Url</Form.Label>
              <span className="asterisk"> *</span>
              <Form.Control className={`form-input ${urlEmpty}`} required type="text" name="url" value={url} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="form" className='text-form-box'>
              <Form.Label>Advance Info</Form.Label>
            </Form.Group>
            <Form.Group controlId="form" className='text-form-box'>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" className={`chooser-box ${categoryEmpty}`} required name="category" value={category} onChange={this.handleChange}>
                <option>...</option>
                <option>travel</option>
                <option>dating</option>
                <option>lifestyle</option>
                <option>news</option>
              </Form.Control>
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