import MainButtons from "./MainButtons"
import ListComics from "./ListComics"
import HeroBanner from "../assets/img/jumbotron.jpg"

const Main = () => {
    return (
        <>
            <main>
                <div className="jumbotron">
                    <img src={HeroBanner} alt="Hero banner" />
                </div>
                <div className="bg-black">
                    <div className="container content position-relative">
                        <div className="section-title">Current series</div>
                        <ListComics />
                    </div>
                </div>
                <div className="bg-blue">
                    <div className="container content">
                        <MainButtons />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main