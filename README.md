# API RESTful

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Configuração do projeto

Para configurar o projeto, siga os passos abaixo:

- Inicialize um projeto node (`npm init -y`)
- Instale o Express e o dotenv como dependências de produção (`npm install NOME_PACOTE`)
- Instale o TypeScript, o ts-node, a tipagem do Express ("@types/express"), a tipagem do node ("@types/node") e o nodemon como dependência de desenvolvimento (`npm install NOME_PACOTE -D`)
- Crie o arquivo de configuração do TypeScript (`tsc --init`) com o "target" igual a "ES2020" e o diretório de saída ("outDir") igual a "./dist"
- Crie uma pasta src para separarmos nosso código dos arquivos de configurações
- Crie um arquivo chamado index.ts, que será onde vamos inicializar nosso servidor, dentro da pasta src
- Configure o dotenv
- Crie um arquivo chamado .env com uma variável chamada PORT. Use-a para definir a porta que será usada pela sua API

### Especificações

Você trabalha como desenvolvedor de software para o Governo. No momento, está trabalhando em uma aplicação que permita aos examinadores das provas práticas de direção veicular cadastrar os resultados dos exames no sistema. A aplicação deve permitir ao usuário (examinadores):

- castrastrar o resultado de um exame
- listar os resultados dos exames
- editar o resultado de um exame
- excluir o resultado de um exame
- filtrar os resultados pela sua situação (reprovado ou aprovado)

Abaixo, encontram-se as pontuações equivalentes a cada tipo de falta que pode ser cometida durante um exame de direção:

- uma falta eliminatória: reprovação;
- uma falta grave: 03 (três) pontos negativos;
- uma falta média: 02 (dois) pontos negativos;
- uma falta leve: 01 (um) ponto negativo.

Será considerado reprovado na prova prática de direção veicular o candidato que cometer falta eliminatória ou cuja soma dos pontos negativos ultrapasse a 3 (três)

Você deve criar uma API REST que disponibilize os serviços listados acima

#### ⚠️ Importante: o arquivo "bancoDeDados.ts" está exportando o objeto que simulará nosso banco de dados

#### ⚠️ Importante: separe fisicamente, usando diferentes arquivos, seu código entre a inicialização do servidor, rotas, controladores e intermediários. Caso julgue necessário, sinta-se à vontade para criar uma estrutura de pastas e arquivos que deseje

#### ⚠️ Dica: analise os objetos que já estão no banco de dados para entender quais serão os campos que irão compor uma "entidade" exame

#### ⚠️ Dica: para facilitar, crie um script chamado, por exemplo, dev dentro do package.json, e faça-o chamar o nodemon juntamente com ts-node para rodar o projeto

---

#### `GET /`

Essa rota deve retornar um texto simples para testar se a API está funcionando

- #### Requisição

Sem parâmetros de rota, consulta ou corpo

- #### Resposta

Deve retornar um texto simples que diz "API de exames de direção"

#### `POST /exames`

Essa rota deverá cadastrar um novo exame no sistema

- #### Requisição

Sem parâmetros de rota ou de consulta

O corpo (body) deverá possuir um objeto com as seguintes propriedades:

- examinador (campo obrigatório): string que armazena o nome do examinador
- candidato (campo obrigatório): string que armazena o nome do candidato
- quantidade_eliminatorias (campo obrigatório): number que armazena a quantidade de faltas eliminatórias cometidas durante o exame
- quantidade_graves (campo obrigatório): number que armazena a quantidade de faltas graves cometidas durante o exame
- quantidade_medias (campo obrigatório): number que armazena a quantidade de faltas médias cometidas durante o exame
- quantidade_leves (campo obrigatório): number que armazena a quantidade de faltas leves cometidas durante o exame

- #### Resposta

Em caso de sucesso, deve retornar o novo exame cadastrado, incluíndo o id gerado

Em caso de erro, deve retornar um JSON com uma propriedade "mensagem" descrevendo o erro

- #### REQUISITOS OBRIGATÓRIOS

```
- verificar se todos os campos obrigatórios foram enviados
```

#### ⚠️ Dica: tente colocar as validações em intermediários

#### ⚠️ Importante: cuidado ao validar se algum campo numérico não foi enviado. Lembre-se que o valor zero é considerado falso no JavaScript

#### `GET /exames?aprovado=true`

Essa rota deve retornar todos os exames no sistema ou, caso seja passado o parâmetro de consulta (query), retornar apenas os exames que correspondam ao parâmetro de rota

- #### Requisição

Sem corpo ou parâmetro de rota

Parâmetro de consulta chamado aprovado, que pode ter o valor de "true" ou "false"

- #### Resposta

Deve retornar todos os exames no sistema ou, caso seja passado um parâmetro de consulta, chamado de aprovado, retornar apenas os exames que correspondam ao parâmetro de rota

#### ⚠️ Importante: CUIDADO! Lembre-se que os parâmetros de consulta são optativos e são SEMPRE recuperados como strings

#### `PUT /exames/:id`

Essa rota deve editar um exame

- #### Requisição

Sem parâmetro de consulta

Deve possuir um parâmetro de rota (params) chamado id

O corpo (body) deverá possuir um objeto com as seguintes propriedades:

- examinador (campo obrigatório): string que armazena o nome do examinador
- candidato (campo obrigatório): string que armazena o nome do candidato
- quantidade_eliminatorias (campo obrigatório): number que armazena a quantidade de faltas eliminatórias cometidas durante o exame
- quantidade_graves (campo obrigatório): number que armazena a quantidade de faltas graves cometidas durante o exame
- quantidade_medias (campo obrigatório): number que armazena a quantidade de faltas médias cometidas durante o exame
- quantidade_leves (campo obrigatório): number que armazena a quantidade de faltas leves cometidas durante o exame

- #### Resposta

Em caso de sucesso, não deve retornar nenhum conteúdo no corpo da resposta

Em caso de erro, deve retornar um JSON com uma propriedade "mensagem" descrevendo o erro

- #### REQUISITOS OBRIGATÓRIOS

```
- verificar se todos os campos obrigatórios foram enviados
- verificar se existe o exame com o id passado
```

#### ⚠️ Dica: caso tenha seguido a dica sobre colocar a validação do corpo em um intermediário, aqui você poderá reaproveitá-lo :-)

#### `DELETE /exames/:id`

Essa rota deve deletar um exame

- #### Requisição

Sem parâmetro de consulta ou corpo

Deve possuir um parâmetro de rota (params) chamado id

- #### Resposta

Em caso de sucesso, não deve retornar nenhum conteúdo no corpo da resposta

Em caso de erro, deve retornar um JSON com uma propriedade "mensagem" descrevendo o erro

- #### REQUISITOS OBRIGATÓRIOS

```
- verificar se existe o exame com o id passado
```
