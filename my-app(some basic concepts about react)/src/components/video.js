import './video.css';

function Video({title, id, channel, views, time, verified, children}){

    return(
        <>
            <div className='container'>
                <div className='pic'>
                    <img src={`https://picsum.photos/id/${id}/160/90`} />
                    <div className="title">{title}</div>
                    {verified ? <div className="channel">{channel} ✅</div> : <div className="channel">{channel}</div>}
                    <div className="views">{views} views <span>.</span>{time}</div>

                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video;