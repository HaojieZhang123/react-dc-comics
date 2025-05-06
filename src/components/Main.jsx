import MainButtons from "./MainButtons"
import ListComics from "./ListComics"
const Main = () => {
    return (
        <>
            <main>
                <div className="bg-black">
                    <div className="container content">
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