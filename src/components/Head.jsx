import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { searchAPI } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head=()=>
{
    const [searchQuery, setSearchQuery]=useState('');
    const [suggestions, setSuggestions]=useState([]);
    const [showSuggestions, setShowSuggestions]=useState(false);

    const searchCache=useSelector((store)=>store.search);
    console.log(searchQuery)

    useEffect(()=>
    {
       const timer= setTimeout(()=>{
        if(searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery])
        }
        else
        {
            getSearchSuggestions()
        }
       },200);
       return ()=>
       {
        clearTimeout(timer);
       }
    },[searchQuery])

    const getSearchSuggestions=async()=>
    {
        const data=await fetch(searchAPI+searchQuery);
        const json=await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchQuery]:json[1]
        }))
    }




    const dispatch=useDispatch();

    const toggleMenuHandler=()=>
    {
        dispatch(toggleMenu());
    }

    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png" alt="menu" onClick={()=>toggleMenuHandler()}/>
                <img className="h-8 mx-2" src="https://img.generation-nt.com/youtube-logo_04B0032001657714.png" alt="youtube"/>
            </div>
            <div className="col-span-10 px-10">
                <div>
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery} 
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">🔍</button>
                </div>
               {showSuggestions && (
                 <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {
                            suggestions.map((s)=>(<li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={s}>{s}</li>))
                        }
                    </ul>
                </div>
               )}
            </div>
            <div className="col-span-1">
                <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/000/551/599/original/user-icon-vector.jpg" alt="user-icon"/>
            </div>
        </div>
    )
}

export default Head;