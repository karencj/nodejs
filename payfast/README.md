#Projeto criado a partir do curso de nodejs avançado da alura

1 - criando projeto
npm init

2 - npm install --save express

3 - criar arquivo index.js
- na raiz do projeto
- preencher arquivo index.js para utilizar o express

4 - implementar metodo listen no index.js
- para manter a aplicação rodando

5 - npm install -g nodemon
- -g - globalmente 
- nodemon fica recompilando o codigo, para n ter q ficar parando o servidor toda hora

6 - a unica funcionalidade do index.js é iniciar a aplicação

7 - cria um novo diretorio para definir as rotas
- controllers
- passar o app para os controllers

8 - criando config
- arquivo custom-express.js: para definir as nossas configurações do 

9 - nova lib para para ajudar no carregamento das rotas
- npm install --save consign
- evolução/sucessor express-load
- vantagem: mais leve, e independente do express

10 - carregando o diretório de rotas dentro da variavel app utilizando o consign
consign().include().into()

11 - utilizar as outras formas de request: POST, PUT ...
- usando postman

12 - quando precisar receber alguma informação via body da requisição:
- baixar modulo para dar parse na requisição
- npm install --save body-parser
- mudando o custom-express para usar o body-parser

13 - persistir no banco mysql
- npm install --save mysql

14 - criando pasta de persistencia
- criando arquivo de conectionFactory
    - cria a função quecria a conexão
- ao criar uma nova pasta tem que carregar na variavel app via consign no arquivo custom-express

15 - porque usar ptototype nos DAO?
- 

16 - baixar lib de validações
- npm install --save express-validator
- colocar no arquivo custom-express e colocar para a aplicação usar
- funções asserts

17 - verificar sempre se está sendo enviado os status code e location corretos no retornos 

18 - passando params via url:
- :nomeVariavel
- acessando ela: req.params.nomeVariavel

19 - protocolo REST
- verbo + recurso = operação REST
- delete/put/get/post

20 - hateoas - quais os próximos passos q o client pode seguir depois de uma url
- o que o usuário pode fazer a seguir
- cria um novo response com os dados já enviados anteriormente + possiveis links/caminhos/passos
- hypermedia as the engine of application state
- definição da coreografia de serviços usando o proprio hypermedia

21 - 



#Status Code
- 100: conexão continuada

- 200: sucesso
- 201: criado/inserido com sucesso
- 202: accept
- 203: 
- 204: no content - removido com sucesso

- erro de usuario / erro de entradade dados
- 400: bad request
- 404: not found
- 403: not allowed
- 405: forbidden

- erro do lado do servidor
- 500: erro interno do servidor
- 503:
- 504:
- 505: 

- mensagens de redirecionamento
- 301: movido temporariamente
- 302: movido definitivamente





