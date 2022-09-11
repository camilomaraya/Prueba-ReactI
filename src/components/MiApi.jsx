import {useEffect, useState} from 'react';

const MiApi = (Props) => {

const [personajes, setPersonajes] = useState([]);

const initialUrl = "https://rickandmortyapi.com/api/character";

const llamarPersonajes = async (url)=>{
    const response = await fetch(url);
    const data = await response.json()
    
    // console.log(data.results[0].name);
    setPersonajes(data.results);
};

useEffect(()=>{
    llamarPersonajes(initialUrl);
    // console.log(llamarPersonajes);
  }, []);

return(
    <>
        <h1 className='text-center'> RICK AND MORTY APP</h1>
        <div className="row">
            {personajes.filter ((ele) => {
                if (Props.buscar === ""){
                    return "ele";
            } else if(
                ele.name
                    .toLocaleLowerCase()
                    .includes(Props.buscar.toLocaleLowerCase())
                ){
                    return ele;
                }
            } ).map((ele) => (
                <div key={ele} className="col-lg-3 col-md-4 mb-4">
                    <div className='card text-center'>
                        <div className="card-header">
                            <img src={ele.image} alt="" className='card-img-top' />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>{ele.name}</h5>
                            <hr/>
                            <p className='card-text'>Status: {ele.status}</p>
                        </div>
                        <div className='card-footer'>
                            Location: {ele.location.name}
                        </div>
                    </div>
                </div>    
                ))}
        </div>
    </>
    );
};

export default MiApi;