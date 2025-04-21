import Post from '../Posts';

function Artigo(){
    return(
        <>
        <section className='container'>

        <h1>componente artigo</h1>
        <div className='container-artigo'>
            <Post subtitle='Tecnologia' title='O guia definitivo do blog'></Post>
            <Post subtitle='Fotografia' title='Quais as melhores câmeras em 2025'></Post>
            <Post subtitle='Cinema' title='Os 10 melhores filmes de 2024'></Post>
        </div>
         
        </section>

        </>
        
    );
}

export default Artigo;