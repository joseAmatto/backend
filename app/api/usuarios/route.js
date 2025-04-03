export async  function GET(){

    const usuarios = [

        {nome: "josé", idade: 15}, 
        {nome: "jessica", idade: 22},
        {nome: "pedro", idade: 36},

    ]





    return new Response(

      JSON.stringify (usuarios),

        {
            status: 200,
            headers: { "content-type": "application/json" }
            
        }
    )

}
