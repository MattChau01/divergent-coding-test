import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.autoScroll = this.autoScroll.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  componentDidMount() {
    this.autoScroll();
  }

  autoScroll() {
    this.timer = setInterval(() => {
      if (this.state.count === 4) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 3000);
  }

  prevImg() {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
    } else if (this.state.count <= 4) {
      this.setState({ count: this.state.count - 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  nextImg() {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
    } else if (this.state.count >= 0) {
      this.setState({ count: this.state.count + 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  render() {
    return (
      <div className='mt-3 d-flex justify-content-center align-items-center'>
        <div className='row justify-between'>
          <div >
            <div>
              <button className='carousel-arrows' onClick={this.prevImg} >
                &lt;
              </button>
            </div>
          </div>
          <div className='home-carousel'>
            <img src={this.props.images[this.state.count].img} className='home-carousel-img' />
          </div>
          <div>
            <div>
              <button className='carousel-arrows' onClick={this.nextImg}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
