const ComicsCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={props.thumb} alt="Thumbnail" />
                </div>
                <div className="card-txt">
                    <h3>{props.title || 'No title'}</h3>
                </div>
            </div>
        </>
    )
}

export default ComicsCard