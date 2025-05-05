import MainButtons from "./MainButtons"
const Main = () => {
    return (
        <>
            <main>
                <div className="bg-black">
                    <div className="container content">
                        <h2>--&gt; Content goes here &lt;--</h2>
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