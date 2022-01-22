const clientes = [
    {
      nome: "Ricardo",
      cpf: "3294928544",
      dependentes: [{
        nome: "Paloma",
        parentesco: "esposa",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Dinho",
        parentesco: "filho",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Irene",
      cpf: "56767867867",
      dependentes: [{
        nome: "Rhenan",
        parentesco: "filho",
        dataNasc: "30/08/2020"
       }],
    }
   ]

//Utilizar os 3 pontos para espalhar os itens solicitados
const lista_Dependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]


console.log(lista_Dependentes)

//para trazer os resultados em formato de tabela, utilizar o table
console.table(lista_Dependentes)

/*
cosole.log(lista_Dependentes)
[
  { nome: 'Paloma', parentesco: 'esposa', dataNasc: '20/03/2011' },
  { nome: 'Dinho', parentesco: 'filho', dataNasc: '04/01/2014' },
  { nome: 'Rhenan', parentesco: 'filho', dataNasc: '30/08/2020' }
]

console.table(lista_Dependentes)
┌─────────┬──────────┬────────────┬──────────────┐
│ (index) │   nome   │ parentesco │   dataNasc   │
├─────────┼──────────┼────────────┼──────────────┤
│    0    │ 'Paloma' │  'esposa'  │ '20/03/2011' │
│    1    │ 'Dinho'  │  'filho'   │ '04/01/2014' │
│    2    │ 'Rhenan' │  'filho'   │ '30/08/2020' │
└─────────┴──────────┴────────────┴──────────────┘

*/