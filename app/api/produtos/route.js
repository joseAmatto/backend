
import conexao from "@/app/lib/conexao"

export async function GET(){

    const query = `SELECT * FROM produtos;`
    const [results] = await conexao.execute(query)

    return new Response(

        JSON.stringify(results),

        {
            status: 200,
            headers: { "content-type": "application/json" }

        }
    )

}

export async function POST(){

    const body = await request.json()

    const query = `
     INSERT INTO produtos
     (nome, preco, quantidade)
     VALUES
     (?,?,?);
    `

    const [results] = await conexao.execute(
        query,
        [body.nome, body.preco, body.quantidade]
    )

    
}