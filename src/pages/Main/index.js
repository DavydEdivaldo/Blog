import api from '../../services/api'; // o ../../ é para sair da pasta pages e consegui selecionar a services
import Post from '../../componentes/Posts';

function Main (){

    async function handleAxios(){
        const response = await api.get('/posts');
        console.log(response);
    }

    return(
        <>
            <section className='container'>
                <h1>Main js</h1>
                <button className='button-main' onClick={handleAxios}>Requisição</button>   
            </section>

        </>
    )
}
export default Main;