const commentData=[
    {
        name:"ABC",
        text:"Lorem Ipsum is one of the best dummy data",
        replies:[
            {
                name:"ABC",
                text:"Lorem Ipsum is one of the best dummy data",
                replies:[
                    {
                        name:"ABC",
                        text:"Lorem Ipsum is one of the best dummy data",
                        replies:[
                            
                        ]
                    },
                    {
                        name:"ABC",
                        text:"Lorem Ipsum is one of the best dummy data",
                        replies:[
                            
                        ]
                    },
                    {
                        name:"ABC",
                        text:"Lorem Ipsum is one of the best dummy data",
                        replies:[
                            
                        ]
                    },
                    {
                        name:"ABC",
                        text:"Lorem Ipsum is one of the best dummy data",
                        replies:[
                            
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"ABC",
        text:"Lorem Ipsum is one of the best dummy data",
        replies:[
            
        ]
    },
    {
        name:"ABC",
        text:"Lorem Ipsum is one of the best dummy data",
        replies:[
            
        ]
    },
    {
        name:"ABC",
        text:"Lorem Ipsum is one of the best dummy data",
        replies:[
            
        ]
    }
]

const Comment=({data})=>
{
    const {name, text, replies}=data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
           <p className="px-3 font-bold">{name}</p>
           <p>{text}</p>
        </div>
    )
}

const CommentsList=({comments})=>
{
    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="ol-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentContainer=()=>
{
    return(
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentsList comments={commentData}/>
        </div>
    )
}

export default CommentContainer;