import {useEffect, useState} from 'react';

const MiApi = () => {

const [personajes, setPersonajes] = useState([]);

  useEffect(()=>{
    llamarPersonajes();
    // console.log(llamarPersonajes);
  }, []);

const llamarPersonajes = async()=>{
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();   
     
    console.log(data.results[0].name);
    setPersonajes([data.results]);
};

return(
    <div className='row'>
            {/* {personajes.map((char, index) => (
                <div key={index} className='col'>
                    
                </div>
            ))} */}
       


    </div>
    
    );
};

export default MiApi;