# CODElivery-Locadora.

## TRABALHO ADA SEM SER TECH - MODULO02 POO - GRUPO - LOCADORA DE VEICULO

Trabalho em Grupo - Módulo de Programação Orientada a Objetos

SISTEMA PARA LOCADORA DE VEÍCULOS

Sua equipe foi contratada para criar um sistema para uma locadora de veículos.
A locadora terá uma única loja, portanto, sem a necessidade de suporte para múltiplas filiais. 

O cliente apresentou algumas regras de negócio importantes:

1. Placas Únicas:
    - Não é permitido cadastrar dois veículos com a mesma placa no sistema.

2. Aluguel de Veículos:
    - O cliente deve fornecer apenas o nome, CPF e o tipo de carteira para alugar um veículo.
    - Ao alugar um veículo, se o tipo da carteira for A, o cliente só pode alugar uma moto; se for B, só pode alugar um carro.

3. Devolução de Veículos:
    - Para devolver um veículo, é necessário fornecer apenas o CPF do cliente.

4. Restrições e Verificações:
    - Não é permitida a exclusão de um veículo que esteja atualmente alugado.
    - Um cliente só pode alugar um veículo por vez, portanto, não deve estar alugando nenhum outro no momento do novo aluguel.

5. Cálculo do Aluguel:
    - Ao alugar um veículo, o sistema deve calcular o valor do aluguel usando a fórmula:
        * Valor da diária x dias a serem alugados x acréscimo do tipo de veículo.
        * Carros têm um acréscimo de 10%, enquanto motos têm um acréscimo de 5%.

O sistema do cliente deverá ser desenvolvido utilizando Node.js e Typescript.

O sistema oferecerá o seguinte menu de funcionalidades:

1. Cadastrar veículo
2. Alugar veículo
3. Devolver veículo
4. Listar veículos disponíveis
5. Listar veículos alugados
6. Sair

Lembre-se de considerar a orientação a objetos em seu design e implementação do sistema.
Boa codificação!

## Resolução do exercício

Você precisar ter instalado em seu computador: [GIT](https://git-scm.com/), [Node.js](https://github.com/rafael-neri/projeto-poo.git) e [Visual Studio Code](https://code.visualstudio.com/).

Para executar o código typescript você precisa instalar as dependencias
```sh
npm install
```

Para acessar o projeto:
```sh
git clone https://github.com/paulobof/CODElivery-locadora.git
cd CODElivery-locadora
```

Para executar o projeto:
```sh
npx tsx ./src/App.ts
```

Desenvolvido por CODElivery