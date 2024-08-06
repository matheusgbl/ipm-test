# IPM Teste

## Descrição
Projeto desenvolvido para entrega do desafio técnico de front end da IPM.

## Estrutura de pastas
- `src/`: Contém os arquivos-fonte do projeto.
  - `static`: Contém os arquivos de estilos, scripts, fontes e recursos, como imagens e ícones.
  - `templates`: A pasta de templates que possui a página principal e a página para recuperar a lista de usuários de uma API.
  - `main.py`: O arquivo Python principal para fazer a chamada a API.
- `README.md`: O arquivo README para a documentação do projeto.

## Referências:
- Menu mobile/hamburguer: [css-hamburguer](https://codepen.io/t_afif/pen/NWXmRWO);

## Como executar localmente
- Primeiro é necessário fazer o download do python caso não possua [python-download](https://www.python.org/downloads/)
- Em seguida executar o download do flask com o comando:
    ```bash
    pip install Flask
    ```
- Caso necessário, segue o link da documentação do Flask [flask-docs](https://flask.palletsprojects.com/en/3.0.x/installation/)
- Navegue até a pasta /src e execute o comando:
  ```bash
    python main.py
    ```
- Acesse a URL disponibilizada através do terminal, geralmente é `http://127.0.0.1:5000`

## Acesso ao projeto na vercel
- Link de acesso para o deploy realizado na vercel [ipm-test](https://ipm-test.vercel.app/)