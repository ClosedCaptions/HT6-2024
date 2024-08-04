import React from 'react';
import { useState, useEffect } from 'react';
import './searchBar.css';

function Search() { 
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => { 
            console.log(data); 
            setData(data);
            setFilterData(data);
        })
        .catch(err => console.log(err))
    }, [])

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const handleFilter = (value) => { 
        if (value === "") { 
            setData([]);
        }
        else {
            const res = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
            setData(res);
        } 
    }
    return (
        <div className = 'search-top'>
            <div className='search'> 
                <input 
                    type="text" 
                    placeholder='Search...' 
                    onChange={e => handleFilter(e.target.value)}
                /> 
            </div> 
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.name}
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Search;  