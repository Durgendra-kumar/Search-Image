
import {useState ,useEffect} from "react";
import axios from "axios";

const cnt = 1;
function LoadImage(){
    const[state,setState] = useState([])
    useEffect(()=> {
         axios
        .get("https://api.unsplash.com/photos?client_id=yMkkUrmMz1GlVVCkbutsQ6V7VJ8BhGxhhG6egLo0WR8")
        .then((data)=>{
            setState(data.data)
        })
    },[cnt]);
        
    return state;
}
function SearchImage(query){ 
    const[state,setState] = useState([])
    useEffect(()=> {
         axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=yMkkUrmMz1GlVVCkbutsQ6V7VJ8BhGxhhG6egLo0WR8")
        .then((data)=>{
            setState(data.data.results)
        })
    },[query]);
        
    return state;
}

export {LoadImage,SearchImage}