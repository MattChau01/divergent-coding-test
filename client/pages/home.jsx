import React from 'react';
import Header from '../components/header';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';
import imgOne from '../../server/public/room-images/img-1.png';
import imgTwo from '../../server/public/room-images/img-2.png';
import imgThree from '../../server/public/room-images/img-3.png';
import imgFour from '../../server/public/room-images/img-4.png';
import imgFive from '../../server/public/room-images/img-5.png';

const images = [
  { id: 0, img: imgOne },
  { id: 1, img: imgTwo },
  { id: 2, img: imgThree },
  { id: 3, img: imgFour },
  { id: 4, img: imgFive }
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: null
    };
    this.vendorButton = this.vendorButton.bind(this);
  }

  vendorButton(event) {
    window.location.hash = 'vendor-signup';
  }

  render() {

    return (
      <div>
        <Header routeVSignin={this.props.routeVSignin} />
        <div className='mt-4'>
          <div className='d-flex justify-content-center align-items-center' style={{ fontFamily: 'tilt warp, cursive', fontSize: '1.25rem' }}>
            <p className='text-center'>Sign up today and <br /> find a room near you!</p>
          </div>
        </div>
        <Carousel images={images} />
        <div className='d-flex justify-content-center mt-3'>
          <div>
            <p style={{
              fontSize: '1.10rem'
            }}>
              Click one of the following if you are a:
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items'>
          <div className='row mt-3'>
            <div style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              borderRadius: '5rem',
              width: '7rem',
              textAlign: 'center',
              paddingTop: '.25rem',
              cursor: 'pointer'
            }}>
              <a style={{
                fontSize: '1.25rem'
              }} >Participant</a>
            </div>
            <div className='mx-5'>
              <p>OR</p>
            </div>
            <div className='v-sign-up' style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              borderRadius: '5rem',
              width: '7rem',
              textAlign: 'center',
              paddingTop: '.25rem',
              cursor: 'pointer'
            }} onClick={this.vendorButton}>
              <a style={{
                fontSize: '1.25rem'
              }}>Vendor</a>
            </div>
          </div>
        </div>
        <HomeAccordion />
      </div>

    );
  }
}
