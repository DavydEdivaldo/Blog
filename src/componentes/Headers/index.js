import logopng from '../../imagens/logo512.png';

function Header(){
   const altLogo = 'logo do blog'

    return (
        <>
            <header className="flex-between">
                <div className="logo">
                    <img src={logopng} alt={altLogo}/>
                </div>
                <div className="pesquisar">
                    <input className='input-pesquisar' type="text" name="procurar" placeholder="Digite para pesquisar"/>
                    </div>
                <ul className="links"> 
                    <li><a href="#" className='nav-link'>Home</a></li>
                    <li><a href="#" className='nav-link'>Sobre</a></li>
                    <li><a href="#" className='nav-link'>Contato</a></li>
                </ul>
            </header>
        </>

    );
}

export default Header;