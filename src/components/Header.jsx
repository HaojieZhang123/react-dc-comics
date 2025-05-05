import logo from '../assets/img/dc-logo.png'

const Header = () => {
    return (
        <>
            <header className='container'>
                <div>
                    <figure>
                        <img src={logo} alt="" />
                    </figure>
                </div>
                <div>
                    <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li className='active'><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header