// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <Link to="/" className="link-style">
        <div className="home-card">
          <Header />
          <div className="bottom-card">
            <div>
              <h1 className="heading">Clothes That Get YOU Noticed</h1>
              <p className="para">
                Fashion is part of the daily air and it does not quite help that
                it changes all the time. Clothes have always been a marker of
                the era and we are in a revolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </p>
              <button type="button" className="shop-now-button">
                Shop Now
              </button>
            </div>
            <div>
              <img
                className="cloths-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
              />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Home
