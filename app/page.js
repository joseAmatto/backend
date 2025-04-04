export default function Home() {


  return (



     <div>

      <style>

        {`
          table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-family: Arial, sans-serif;
          }
              
          th, td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
          }
              
          th {
          background-color: #4CAF50;
          color: white;
          }
              
          tr:nth-child(even) {
          background-color: #f2f2f2;
          }
              
          tr:hover {
          background-color: #ddd;
          }
              
          td {
          font-size: 14px;
          }
        `}

      </style>






       <h1>Gerenciamento de produtos</h1><br/>

       <button>Listagem</button>
       <button>Cadastro</button>

       <br/><br/>

       <hr/><br/>





       <h2>Listagem</h2><br/>


        <table>

          <tr>

             <td>ID</td>
             <td>Nome</td>
             <td>Preço</td>
             <td>Quantidade</td>
             <td>Registro</td>

          </tr>

          <tr>

             <td>1</td>
             <td>Calça jeans</td>
             <td>R$: 19,90</td>
             <td>50</td>
             <td>04/04/2025 ás 14:20</td>

          </tr>



        </table>


       <hr/><br/>





       <h2>Cadastro</h2><br/>

       <form>

          <label> Digite o nome do produto: <br/> <input/> </label><br/>
          <br/>
          <label> Digite o preço: <br/> <input/> </label><br/>
          <br/>
          <label> Digite a quantidade: <br/> <input/> </label><br/>
          <br/>
          <button>Salvar</button>

       </form>



    </div>



  );
}
