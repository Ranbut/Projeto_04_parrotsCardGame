# [Driven Education](https://www.driven.com.br/) - Projeto 4 - Parrots Card Game

<img src="https://github.com/Ranbut/Projeto_04_parrotsCardGame/blob/master/assets/icon.png" alt="Parrots Card Game">

[Acesse o site clicando aqui!](https://ranbut.github.io/Projeto_04_parrotsCardGame/);

# Descrição

Seu segundo projeto com JavaScript será a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes!

# Requisitos

- Geral
    - [X]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público
    - [X]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu
- Layout
    - [X]  Aplicar layout para desktop e mobile
    
- Distribuição de cartas
    - [X]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
    - [X]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido, até que o usuário coloque um número válido.
    - [X]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória
               
- Clique na carta
    - [X]  Ao clicar em uma carta, a mesma deve ser virada
    - [X]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [X]  Caso seja a segunda carta virada, existem 2 situações:
        - [X]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
        - [X]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
- Fim do Jogo
    - [X]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X **a quantidade de vezes que o usuário virou uma carta no jogo**.
        
# Bônus (opcional)

- [X]  Coloque um relógio no topo superior direito da tela, contando quantos segundos já passaram desde o início do jogo. Ao final, informe na mensagem de vitória a quantidade de segundos.
- [X]  Ao final do jogo, pergunte com um **prompt** se o usuário gostaria de reiniciar a partida. Se ele responder sim, comece novamente o jogo perguntando a quantidade de cartas. O prompt deve receber as strings “**sim**” e “**não**”, com todas as letras minúsculas e acentuação correta.
    
    Esse prompt não deveria aceitar "s", "S", "n", "N" ou qualquer variação com letrais maiúsculas ou minúsculas.
