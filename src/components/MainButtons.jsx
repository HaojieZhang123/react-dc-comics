import digital from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscription from '../assets/img/buy-comics-subscriptions.png'
import shop from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'

const MainButtons = () => {
    return (
        <>
            <ul className='main-buttons d-flex'>
                <li className='d-flex'>
                    <img src={digital} alt="Digital" />
                    <span>DIGITAL COMICS</span>
                </li>
                <li className='d-flex'>
                    <img src={merchandise} alt="merchandise" />
                    <span>DC MERCHANDISE</span>
                </li>
                <li className='d-flex'>
                    <img src={subscription} alt="subscription" />
                    <span>SUBSCRIPTION</span>
                </li>
                <li className='d-flex'>
                    <img src={shop} alt="shop" />
                    <span>COMIC SHOP LOCATOR</span>
                </li>
                <li className='d-flex'>
                    <img src={visa} alt="visa" />
                    <span>DC POWER VISA</span>
                </li>
            </ul>
        </>
    )
}

export default MainButtons