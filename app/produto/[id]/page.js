'use client'


import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function produto() {

    const id = useParams().id

    const [produtos, alteraProdutos] = useState([])

    async function buscarPorId( id ){

        const response = await axios.get("http://localhost:3000/api/produtos/"+id)
        alteraProdutos( response.data )

    }

    useEffect(()=> {

        if(id){
        buscarPorId( useParams().id )
        }
        
    }, [id])
 

    return (

        <div>

            <h1> Detalhes do produto { useParams().id } </h1>

        </div>
    );
}

export default produto;