
function Post(props){
    return(
        <>
        <div className='post'>
            <div className='img-post'></div>
            <h5>{props.subtitle}</h5>
            <h3>{props.title}</h3>
            <p className=''>Minim dolor est cillum non irure proident sunt voluptate amet consequat ea. Anim elit nostrud velit cupidatat minim non amet tempor ut consequat et. Consectetur sit nulla amet amet eiusmod ut aliquip enim laborum.</p>
            <div className='flex container-perfil'>
                <div className='img-perfil'></div>
                <div className='descript-perfil'>
                    <h6>Autor do post</h6>
                    <p>Abril, 2025 - 8 min leitura</p>
                </div>

            </div> 
        </div>

        </>
    );
}
export default Post;