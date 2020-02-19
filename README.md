O objetivo deste exercício é conseguirmos desenvolver uma SPA (single page application) com
múltiplas páginas, utilizando o React Router e outros conceitos abordados na Aula 02. Para
isso, crie uma aplicação React utilizando o comando npx create-react-app e logo em seguida,
na pasta criada, instale o React Router utilizando o comando npm i -S react-router-dom.

Passo 2
Seguindo o exemplo visto no codesandbox, defina três rotas:
● “/” - Rota inicial, mostrando uma mensagem de boas vindas genérica;
● “/users” - Tela com listagem de usuários, contendo uma tabela com os seguintes
dados:
○ Nome;
○ Email;
○ Idade;
● “/users/:name” - Ao selecionar um usuário na tabela desenvolvida anteriormente,
deverá ser encaminhado para a rota em questão passando como parâmetro na URL o
nome do usuário selecionado. Nessa tela, deverá ser exibido o nome do usuário
recebido via URL. Lembre-se de que, cada tela deverá ser um componente único.

Passo 3
Na tela de listagem de usuários, adicione um botão para cada usuário da tabela que terá como
função remover o usuário da listagem. Para executar esse passo, você deverá ter ao menos
dois componentes envolvidos: UsersTable

Passo 4
Altere o componente utilizado na rota /users/:name para que, sempre no ciclo
componentDidMount(), o título da janela seja alterado. Faça isso utilizando a propriedade
document.title.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
