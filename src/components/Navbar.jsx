const Navbar = (Props) => {
   
    return(
        <nav className="navbar navbar-dar bg-dark">    
            <div className="container">
                <div>
                <img src="https://i0.wp.com/aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg" alt="logorickymorty" width="150px" height="75px"/>
                </div>
                <div>
                    <h2>Busca tu personaje</h2>
                <form>
                        <input 
                            className="form-control me-2"
                            type="text"
                            placeholder="Busca tu personaje favorito"
                            onChange={(e)=>{
                                Props.setBuscar(e.target.value);
                            }}
                        />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;