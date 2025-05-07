import largeLogo from '../assets/img/dc-logo-bg.png'
import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

// function that takes links array and create list items for every object in array
const createLinks = (array) => {
    return array.map((element) => {
        return (
            <li key={element.id}>
                <a href={element.href} className={element.current ? 'active-link' : ''}>{element.label}</a>
            </li>
        );
    });
}

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className="upper-footer">

                    <div className="container d-flex">
                        <div className="col-40 d-flex">
                            <div className="col-33">
                                <h4>DC COMICS</h4>
                                <ul>
                                    {/* invoke createLinks function */}
                                    {createLinks(props.links)}
                                </ul>
                                <h4>SHOP</h4>
                                <ul>
                                    <li><a href="#">Shop DC</a></li>
                                    <li><a href="#">Shop DC Collectibles</a></li>
                                </ul>
                            </div>
                            <div className="col-33">
                                <h4>DC</h4>
                                <ul>
                                    <li><a href="#">Terms Of Use</a></li>
                                    <li><a href="#">Privacy policy(New)</a></li>
                                    <li><a href="#">Ad Choices</a></li>
                                    <li><a href="#">Advertising</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Subscriptions</a></li>
                                    <li><a href="#">Talent Workshops</a></li>
                                    <li><a href="#">CPSC Certificates</a></li>
                                    <li><a href="#">Ratings</a></li>
                                    <li><a href="#">Shop Help</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-33">
                                <h4>SITES</h4>
                                <ul>
                                    <li><a href="#">DC</a></li>
                                    <li><a href="#">MAD Magazine</a></li>
                                    <li><a href="#">DC Kids</a></li>
                                    <li><a href="#">DC Universe</a></li>
                                    <li><a href="#">DC Power Visa</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-60">
                            <figure className="large-logo">
                                <img src={largeLogo} alt="CD-logo-large" />
                            </figure>
                        </div>
                    </div>

                </div>
                <div className="lower-footer">

                    <div className="container d-flex justify-between align-center">

                        <div className="left-footer">
                            <button>SIGN-UP NOW!</button>
                        </div>

                        <div className="right-footer d-flex">
                            <h3>FOLLOW US</h3>
                            <ul className='d-flex'>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={youtube} alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={pinterest} alt="pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={periscope} alt="periscope" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer