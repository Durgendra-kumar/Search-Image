
import React from 'react';
import {useState ,useEffect} from "react";
import {LoadImage,SearchImage} from "./Api";
import "./App.css"
import Image from "./Image"; 
function App(){
    const[query,setQuery ] = useState()
    const[searchQ,setSearch ] = useState()
    const data = LoadImage(); 
    
    const search=()=>{
        setSearch(query)
    }
    const searchData = SearchImage(searchQ);
    return(
        <div className="App">
            <div >
                <input type="text" 
                style={{
                    width:500,
                    height:50,
                    marginLeft:470,
                    marginTop:10,
                    fontSize:20,


                }} onChange={(event)=>setQuery (event.target.value)} placeholder="Search for Photos" />
                <button style={{
                    backgroundColor:'black',
                    color:"white",
                    height:50,
                    width:100,
                    marginLeft:10,
                    marginTop:10,
                    fontSize:20,

                }}onClick={search}>Search </button>
            </div>
            <div style={{textAlign:'center',fontSize:40,fontFamily: "Arial"}}>
                {searchQ? query:<label>Random</label>} 
            </div>
            <div className ="contain">
            {searchQ ? searchData.map((img,key)=>(
                <Image src={img.urls.regular} key={key}/>
             )): data.map((img,key)=>(
                <Image src={img.urls.regular} key={key}/>
                ))}
            </div>
        </div>
        
        
    );
}

export default App;
