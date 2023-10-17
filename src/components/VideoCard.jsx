const VideoCard=({info})=>
{
    const snippet=info?.snippet;
    const statistics=info?.statistics;
    
    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" src={snippet?.thumbnails?.high?.url}/>
            <ul>
                <li className="font-bold py-2">{snippet?.title}</li>
                <li>{snippet?.channelTitle}</li>
                <li>{statistics?.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;