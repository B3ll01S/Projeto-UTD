import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addCliente } from '../../services/cliente-requests';

function AddCliente(){
 
    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        nome:'',
        idade:'',
        email:''
    });

    const handleChange = (event) =>{
        
        const {name,value} = event.target;

        setCliente((clienteAnterior)=>{
            return {
                ...clienteAnterior,
                [name]:value
            }
        }
        );

    }
    
    const salvaCliente = async (event) =>{
        event.preventDefault();
        console.log(cliente);

        await addCliente(cliente);

        navigate('/cliente/view');

    }

    return(
        <>
        <fieldset id='box'>
           <legend><h1>adicionar cliente</h1></legend>
            <form onSubmit={salvaCliente}>
                <label>Nome:</label>
                <input 
                type="text"
                name='nome'
                value={cliente.nome}
                onChange={handleChange} />
<p />
                <label>Idade:</label>
                <input 
                type="text"
                name='idade'
                value={cliente.idade}
                onChange={handleChange} />
<p />
                <label>Email:</label>
                <input 
                
                type="text"
                name='email'
                value={cliente.email}
                onChange={handleChange} />
<p />                
                <button type='submit'>Adicionar</button>
            </form>
        </fieldset>    
        </>
    );
}

export default AddCliente;
