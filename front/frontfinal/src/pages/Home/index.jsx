
function Home(){
 
    return(
        <>
        <fieldset id="box">
            <legend><h1>Bem-Vindo</h1></legend>
           <h2>Gerenciamento de Clientes</h2> 
           <br />             
            <a href="http://localhost:5173/cliente"><button> Adicionar </button></a>
            <a href="http://localhost:5173/cliente/view"><button> Editar </button></a>
        </fieldset>    
        </>
    );
}

export default Home;