## Sobre o Exercício
O exercício foi a criação de uma API RESTful para verificação de cadastros de informações de exames veiculares práticos.
### Tecnologias Utilizadas
- Typescript
- Node.js
- Express.js
- uuid
- Postman

### Endpoinst

#### `GETS`
- `GET /`: O index da API;
- `GET /exames`: Retorna todos os exames veiculares práticos cadastrados;
- `GET /exames?aprovado=true`: Retorna todos os exames veiculares dos candidatos aprovados se `true`, retorna todos os exames veiculares dos candidatos reprovados de `false`;

#### `POSTS`
- `POST /exames`: Cadastra um novo exame veicular prático, gera um id automático com o `uuid` e valida a aprovação também automaticamente, possui um middleware que valida se os campos obrigatórios foram preenchidos e se o usuário já está cadastrado no banco de dados;

#### `PUTS`
- `PUT /exames/:id`: Atualiza um exame veicular prático existente passando o id do cadastro como parâmetro, existe um middleware que valida a existência do ID informado no banco;

#### `DELETES`
- `DELETE /exames/:id`: Deleta um exame veicular prático existente passando id do cadastro como parâmetro, existe um middleware que valida a existência do ID informado no banco;

#### Exemplo de uso
- Para cadastrar um novo exame veicular prático, você pode utilizar o Postman, importando o arquivo `Collection-API-REST-exames.postman_collection`, neste arquivo os métodos de requisições já estão salvos, basta edita-los conforme quiser e clicar em SEND.
- Caso não tenha o Postman instalado pode baixa-lo por este link-> https://www.postman.com/downloads/


#### Instruções para rodar o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instalação do projeto

- Inicializar o projeto Node (`npm init -y`)
- Instalar as dependências do Node (`npm install`)
- Criar um arquivo .env com a variável -> PORTA=3000 ou outra de sua preferência
- Rodar o projeto em desenvolvimento (`npm run dev`)
- Transpilar para Javascript (`npm run build`)
- Rodar o projeto em produção (`npm run start`)


## OBS.:
-Essa está sendo a primeira API criada do zero, por mim, portanto, estruturas de arquivos, padrões de códigos ainda são de nível Junior.
Qualquer dica ou crítica construtiva é sempre bem vinda.
Os links das mídias sociais estão no meu perfil.

# Forte Abraço!