# Resume
This is a Technical Test for Be's Front-End, which consists of building a table view with data that will come from a simulated API, in json-server.

<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/9IFvsUo.png" alt="Imagem" style="max-width: 100%; height: auto;">
<figcaption>

[Project link](https://github.com/andressafirmino/BeMobile-Front)

</figcaption>
</div>



# How it works?
This project was developed to meet a simplified employee search. It only has a single entity: `employees`.

The entity has only one route:

- GET `/employees`: Returns all registered employees.

#### In addition to the page shown above, the application also has layout options for 3 other screen sizes.

- Screen size between 600px and 855px:
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/eUxiyoJ.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

- Screen size between 375px and 600px:
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/OhIXQQ0.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

- Screen size smaller than 375px: 
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/uV41rvR.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

#### Features.

- Search by name, position or phone number:
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/wbyll9m.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/AbPpzfU.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

#### Show or hide data by clicking arrow.

- When clicking on the arrow, a hidden bar will appear containing the position, date of admission and telephone number:
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/xqan8V9.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

- When clicking on the arrow, the bar will be hidden again:
<div style="display: block; text-align: center;">
    <img src="https://i.imgur.com/HmC4APh.png" alt="Imagem" style="max-width: 100%; height: auto;">
</div>

# Motivation
Além de participar do processo da Be, nesse projeto tive a oportunidade de trabalhar e aprimorar meus conhecimentos em responsividade com ReactJS.

# Technologies used
For this project, the following were used:

- Node (version 21.3.0);
- ReactJS;
- TypeScript;
- Styled-components.

# How to run in development?
To run this project under development, you need to follow the steps below:

1. Have the [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) tools installed on your machine to be able to work on the project; 

#### To access data from the mock API:

2. If you don't have it, install the [json-server](https://github.com/typicode/json-server) package;
3. Clone this GitHub repository to your machine: [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end);
4. Enter the project folder, on your machine, and, using the command line, run the command `json-server --watch db.json``, to consume the simulated API;
 
It is necessary to leave the json-server running in the terminal so that the data can be viewed in the project;

5. Clone this GitHub repository to your machine: [https://github.com/andressafirmino/BeMobile-Front](https://github.com/andressafirmino/BeMobile-Front);
6. Enter the project folder on your machine, open another terminal and download the necessary dependencies with the command: `npm install`;
7. Then create the `.env` file based on `.env.example`;

- This `.env` file is composed of the following environment variable:
```VITE_API_URL="http://localho..."```
- The `VITE_API_URL`` variable is used to connect to the simulated API;
8. It is necessary to leave the json-server running in the terminal so that the data can be viewed in the project;

If you have problems with json-server, try running it with `npx json-server db.json` or `yarn json-server <path>/db.json`, where `<path>` is the full path to the directory where the db.json file is located. If it still doesn't work, seek help on the web;

9. To run the project under development, run the command `npm run dev`.