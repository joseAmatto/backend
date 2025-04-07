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
        buscarPorId( id )
        }

    }, [id])
 

    return (

        <div>

            <h1> Detalhes do produto { useParams().id } </h1>

            <hr/>

            {
                produtos.lenght > 0 &&

                <div>

                    <p><strong>{produtos[0].nome}</strong></p>
                    <p>R$: <strong>{produtos[0].preco}</strong></p>
                    <p>quantidade em estoque: <strong>{produtos[0].quantidade}</strong></p>

                </div>

            }

        </div>
    );
}

export default produto;