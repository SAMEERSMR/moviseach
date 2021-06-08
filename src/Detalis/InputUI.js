import React, {useState} from 'react'
import {Movies} from './Movies'
import StarRatings from 'react-star-ratings';


const InputUI = () => {
    const [searchText, setSearchText] = useState('')
    

    const CatagoryList = []
    Movies.map((item) =>  CatagoryList.indexOf(item.Category) < 0 ? CatagoryList.push(item.Category) : null )
    
    return(
    <div style={{marginLeft: '40px', marginTop: '40px'}}>
        <input type="text" onChange={e => setSearchText(e.target.value.toLowerCase())} placeholder="Type to search"/>
        <div className="movieList">{
            CatagoryList.map((item, index) => {
                const GroupList = Movies.filter((Filterdata) => Filterdata.Category === item 
                && (searchText === "" ? true : Filterdata.Title.toLowerCase().includes(searchText))
                )
                return(
                    <div key={index}>
                        <h2>{item} - ({GroupList.length})</h2>
                        {GroupList.map((data,index) => 
                            <div key={index} style={{
                                border: '1px solid gray',
                                marginLeft: '20px',
                                marginRight: '80px',
                                marginBottom: '10px',
                            }}>
                                <StarRatings 
                                        rating={data.Rating/2}
                                        starRatedColor='yellow'
                                        numberOfStars={5}
                                        starDimension='20px'
                                />
                                <br/>
                                <a href={'https://www.imdb.com/find?q=' + data.Title} target="blank" >{data.Title}</a>
                            </div>
                        )}
                    </div>
                )
            })
            
                  
        }</div>
    </div>)}

export default InputUI;