const ComicsCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={props.thumb} alt="Thumbnail" />
                </div>
                <div className="card-txt">
                    <span>{props.title || 'No title'}</span>
                </div>
            </div>
        </>
    )
}

export default ComicsCard