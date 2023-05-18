import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests';


function EditCliente(){

    const {id} = useParams();

    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        id:'',
        nome:'',
        idade:'',
        email:''
    });

    useEffect(()=>{
        buscaCliente(id);
    },[]);

    const buscaCliente = async(id)=>{
        const clienteDados = await (await getCliente(id)).data;
        console.log(clienteDados);

        setCliente(clienteDados);
    }

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
    
    const editarCliente = async (event) =>{
        event.preventDefault();
        console.log(cliente);

        await editCliente(cliente);

        navigate('/cliente/view');

    }

    return(
        <>
        <fieldset id="box">
         <legend><h1>Editar cliente</h1></legend>
            <form onSubmit={editarCliente}>
                
                <label>Cliente:</label>
                <input 
                type="text"
                name='id'
                value={cliente.id}
                onChange={handleChange} readOnly />
<p />                
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
                <button type='submit'>atualizar cliente</button>

            </form>
         </fieldset>   
        
        </>
    );
}

export default EditCliente;