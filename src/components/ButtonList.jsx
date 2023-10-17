import Button from "./Button";

const ButtonList=()=>
{
    const lists=['All','Live','Gaming','Cricket','Football','Cooking','Gaming','Tech','Science','ML'];
    return(
        <div className="flex">
            {
                lists.map((list)=>
                {
                    return(
                        <Button list={list}/>
                    )
                })
            }
        </div>
    )
}

export default ButtonList;