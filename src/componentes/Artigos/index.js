import Post from '../Posts';

function Artigo(){
    return(
        <>
        <section className='container'>

        <h1>Artigos</h1>
        <div className='container-artigo'>
            <Post subtitle='Tecnologia' title='O guia definitivo do blog'>
                Irure officia sunt esse adipisicing eiusmod minim laboris ut quis. Minim veniam consectetur amet aliquip in dolore. Sit cupidatat id sint anim aliqua.
            </Post>
            <Post subtitle='Fotografia' title='Quais as melhores câmeras em 2025'>
                Officia qui eiusmod id mollit aute pariatur aute elit aliquip esse nulla amet. Excepteur magna ut duis duis cillum anim magna eu officia ex. Proident excepteur ut id velit voluptate est et. Consectetur eiusmod ut do pariatur aliquip.
            </Post>
            <Post subtitle='Cinema' title='Os 10 melhores filmes de 2024'>
                Sint laborum excepteur labore nostrud elit nisi nostrud mollit do laboris. Esse proident ipsum dolore Lorem labore. Quis exercitation excepteur dolore voluptate Lorem. Non ullamco cupidatat dolor ipsum irure elit sit voluptate dolor. Elit sint do voluptate amet fugiat cillum excepteur consectetur ea duis cupidatat do mollit nisi. Reprehenderit dolore proident deserunt eiusmod sunt. Id nulla tempor sint dolore laborum minim exercitation qui ut tempor consequat.
            </Post>
        </div>
         
        </section>

        </>
        
    );
}

export default Artigo;