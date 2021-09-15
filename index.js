let criaturas = [];

class Bestas {
    constructor (){
        this.nome = "";
        this.classe = "";
        this.ocorrencia = ""
        this.preco = 0
    }
}

class Necro extends Bestas {

    super(nome, classe, ocorrencia,preco){
    this.habilidade = "";
    }
};

var carteira = 0;

console.log (`Bem vindo, bruxo! \n As coisas durante a guerra estão dificeis, as recuperações economicas e investimento em força interna diminuiu a quantidade de contratos...\n`)
console.log (`Mas nem tudo está perdido, você acaba de receber um bom contrato; Coroas de Novigrad por monstros para um mago colecionador.\n`)
console.log (`Você deve fazer as escolhas de sua caçada, testando seus conhecimentos do mundo bruxo,  lembre se que sua remuneração depende disso. \n \n Sua missão iniciou as 10 horas da manhã, você deve retornar antes do anoitecer para não encomodar os aldeões.\n`)

let personagem = prompt (`Qual seu nome, caro bruxo?: `)
let name = personagem

let i = 10;

let tempo = function(){

    console.log (`\n Já são ${i} horas\n`)
    i++;
}


console.log (`\n Já são ${i} horas`)
console.log(`${name} apenas se alimenta e se prepara para sair a caçada, levando consigo seu equipeamento, uma grande carroagem de carga e é claro, seu companheiro equino, pé de pano\n`)

console.log (`Você sente a energia mística da seretonina, levanta-se e sobe no seu velho amigo, pé de pano.\n`)

console.log (`${name}: "Vamos pé de pano, estou ancioso por achar um Molinossauro e ganhar uma boa grana para comemorar a sexta da maldade, aquele evento da vila vizinha" \n`)


console.log (`Ao chegar na floresta, não foi díficil encontrar pistas, com seu sentido bruxo, ouve ganidos e latidos em uma direção. No sentido oposto, consegue ver patas grandes, porém é díficil distinguir a forma, já que estão ofoscudas pela chuva da noite passada.\n`)

 console.log (`Chegou a sua primeira vez de fazer a escolha, afinal de contas, és um bruxo adulto e não um cavalo! \n \n Escolha apenas com os número indicados nas opções e pense direito, aqui é a vida real, não dá para voltar no tempo.\n`)

 console.log (`1 - Seguir os rastros de pegadas. \n 2 - Seguir os sons de canídeos.`)

 let escolha1 = +prompt(`\nEscolha o número da opção desejada.`)

 if (escolha1 === 1){

        console.log (`\nVocê segue as pegadas, o rastro te leva para o interior da floresta, a vetetação é tão densa que você acredita que nenhum humano jamais chegou ali... \n`);
        console.log (`Enquanto olhava em volta, tentando entender como o rastro terminava e para onde teria ido a criatura, você ouve um rugido vindo de cima, um urso marrom gigantesco!\n`);
        console.log (`Você se afasta da árvore que a temível fera desce velozmente. \n Vocês estão frente a frente!\n`);
        console.log (`O que você fará ${name}?\n`)
        console.log (`1 - Ficarei frente  a frente, sempre de olho nos movimentos, tentando defender de seus golpes, pronto para desferir um ataque assim que o urso vacilar!
        \n 2 - Tentarei me manter afastado, desviando golpes e tentarei o sinal axii pelas suas costas.`)

        var escolha2 = +prompt (`\nEscolha o número da opção desejada.`)


 } else if (escolha1 === 2){

        console.log (`\nVocê segue os sons de latidos, ouve ganidos agudos e exaltados. Ao chegar próximo, se depara com uma pequena matilha de 4 lobos.\n`);
        console.log(`Os lobos abrem imediatamente um arco a sua frente, seja rápido e reaja!! \n `)

        console.log (`O que você fará ${name}?\n`)
        console.log (`1 - Usarei o estilo de luta em grupo, sendo veloz nos meus ataques e mortal! \n 2 - Serei cautelozo, irei intimidar  enquanto me defendo e os ataco. Preciso me concentrar e evitar movimentos bruscos.`)

        var escolha3 = +prompt (`\nEscolha o número da opção desejada.`)

    
 };

if (escolha2 === 1){

    console.log (`\n ${name} luta bravamente, com uma postura heróica! O urso está irritado e ataca ferozmente, mas você consegue sempre desviar...\n Você está frente a frente com a fera, ela se levanta em duas patas, você percebe o momento perfeito de golpear a fera na barriga...\n Ao se preparar para o ataque, os 600 KG do animal, somado com uma ira digna de lendas, caisobre você, o esmagando e o atordoando.
    `);
    
    tempo ();
  
    console.log (`"Você acorda em alerta, olha ao redor e não ver sinal do seu adversário, sente a cabeça explodir de dor e percebe sangue em sua roupa, sangue de bruxo. 

    Sua vitalidade bruxaica lhe salvou, a criatura foi embora por achar que você estava morto, como qualquer humano que teria sofrido aquele ataque. Você teve sorte que o urso já havia tomado café da manhã, mas perdeu sua caça!"
    `)

    tempo ();

} else if (escolha2 === 2){

    console.log (`\n "A luta é cansativa e embora seja potencialmente perigo e entendiante, você sabe que deve ter cuidado com ursos marrom, por isso mantem a calma...\n 

    No primeiro avanço irritado da besta, você se posiciona atrás do animal e desfere o sinal de axii. \n
    
    O sinal é bem sucedido e você consegue atordoar o animal."
    `)

    console.log (`O resto foi moleza, você só precisou cortar no ponto certo para que o urso sonhe com mel para sempre e levantar 600 KG de carne para uma carroça, onde levará os animais caçados.
    \n`)

    let urso = criaturas.push = new Bestas();

        urso.nome = "Urso Marrom";
        urso.classe = "Fera";
        urso.ocorrencia = "Florestas densas";
        urso.preco = 300

   carteira = carteira +300
    tempo ();

};

if (escolha3 === 1){

    console.log (`"Você é um bruxo! Não são lobos que vão te assustar. Você é tão rápido quanto o vento, o lobo a sua direita tenta avançar por baixo e morder sua perna, ao que você, com um simples girar de espada, corta seu focinho ao meio. A fera despenca ao chao esganiçando. \n 

    Enquanto atacava o lobo ousado, um segundo pula em direção a sua garganta, um salto realmente formidável, mas foi fácil posicionar a espada de forma a empalar o canino."
    \n`)

    console.log (`\n Você se mantem em guarda e late como um cachorro selvagem em resposta aos rosnados dos demais animais, que fogem correndo. \n 

    Você recolhe o lobo que não teve o rosto desconfigurado para levar ao colecionador e o coloca na carroça.
    `) 

    let lobo = criaturas.push = new Bestas();

        lobo.nome = "Urso Marrom";
        lobo.classe = "Fera";
        lobo.ocorrencia = "Florestas densas";
        lobo.preco = 150

   carteira = carteira +150

    tempo ();

} else if (escolha3 === 2){

    console.log (`"Você agiu como um humano agiria, e se tem uma coisa que os lobos estão bem acostumados é a matar humanos! \n

    O lobo a sua direita avança, mordendo sua perna e te puxando, você tenta dar uma estocada no animal, porém um segundo pula sobre você e o derruba."
    \n`)

    console.log (`\n A pequena matilha agora te cerca no chão, você em um pensamento rápido e faz o sinal de Aard. Os lobos são jogados longe e fogem, tão assustados quanto você ao perceber que fez a escolha errada. \n

    Por sorte você está vivo, mas a caçada aos lobos está perdida. "
    `)

    tempo ();

};

tempo ();

console.log(`Você se recupera da batalha, come algo e tenta pensar nos próximos passos. \n 

\n  Duas opções de fácil acesso e admiradas por pessoas loucas como o colecionador lhe veem a cabeça...								
`)

tempo ();

console.log (`${name}, faça sua escolha...\n`)

console.log (`1 - Ir atrás de ghouls \n \n 2 - Caçar nevolosos\n`)

let escolha4 = +prompt (`Qual seu desejo de caçada?: `)

if(escolha4 === 1){

    console.log (`\n ${name}: "Pé de pano, iremos caçar ghouls!"\n `);
    console.log (`Ghouls são criaturas loucas, mas extremamente fáceis de atrair. Será uma caçada rápida.\n `);
    console.log (`\n Você começa a matar pequenos animais ao redor, deixando uma rede de iscas, prontinhas para servir de janta a uma criatura carniceira.`);
    

    console.log (`\nVocê ouve ao longe, eles veem desesperados, loucos por comida e berrando ferozmente. Você avista aquelas criaturas horrendas, cheias de sangue, putridas e fetidas. \n \n Que bom que bruxos não vomitam.	\n`);

    console.log (`O que você fará ${name}?\n`)
    console.log (`1 - Sacarei minha espada de prata e ficarei bem atento, vou desferir golpes fatais, sempre mantendo minha posição. 
    \n 2 - Irei usar minha espada de aço  embebida em veneno, assim conseguirei deixar a criatura agonizando de dor enquanto luto com as demais.\n`)

    var escolha5 = +prompt(`\nEscolha o número da opção desejada: `)

    tempo ();

} else if (escolha4 === 2){
    
    console.log (`\n ${name}: "Vou atrás de um névoloso, pé de pano, fique atento." \n `);
    console.log (`Névolosos são criaturas carniceiras, será facil atraí-las, mas nada fácil matá-las. Com certeza o colecionador pagará uma nota!\n `);
    console.log (`\n Você começa a matar pequenos animais ao redor, deixando uma rede de iscas, prontinhas para servir de janta a uma criatura carniceira.\n`);
    

    console.log (`Você perceber o ar ficar denso, a névoa cobre toda sua volta, o frio toma sua nuca, os névolus se aproximam...\n`);

    console.log (`O que você fará ${name}?\n`);
    console.log (`1 - Vou ficar de olhos abertos, sempre olhando ao redor enquanto tento sair da névoa. Ao primeiros sinal da criatura, a atacarei com um golpe fatal e preciso.
 
    \n 2 - Irei ficar muito atento, sendo cuidadoso e manterei os ouvidos em alerta. Usarei o sinal Aard para me auxiliar.
\n    `)

    var escolha6 = +prompt(`\nEscolha o número da opção desejada: `)

    tempo ();
    
};



if (escolha5 === 1){

    console.log (`Os conhecimentos de um bom bruxo são implacáveis! A espada de prata tem grande efeito em ghouls, ataques rápidos e mortais são bem eficazes e sua posição lhe permitiu não ser pego pelas criaturas. \N`);
    
  
    console.log (`Elas fogem lhe deixando um trofeu, um de seus amigos, que lhe renderá uma boa premiação posteriormente. \n    `)

    let ghoul = criaturas.push = new Necro();

    ghoul.nome = "Ghoul";
    ghoul.classe = "Necrofilo";
    ghoul.ocorrencia = "Locais com carniças"
    ghoul.preco = 300
    ghoul.habilidade = "Vulnerável a veneno e resistentes a cortes que não sejam de prata"

    carteira = carteira +300
    tempo ();

} else if (escolha2 === 2){

    console.log (`"As criaturas avançam, atacando de todas as direções. Sua espada de aço corta, mas o que criaturas tão doidas sentiriam? Nem mesmo o veneno as fere! \n

    Você usa toda sua energia para usar um forte sinal de Ydern, oque te faz ganhar tempo e subir em uma árvore para se esconder. \n
    
    ${name} nada pode fazer a não ser esperar que os ghouls se encham da comida deixada e vão embora. \n
    
    Sua caçada falhou, onde será que você estava nas aulas de necrófolos? Talvez montado em um unicornio com uma bela companheira.
     `)

     tempo ();
};

if (escolha6 === 1){

    console.log (`"Você se afasta cautelosamente do meio da névoa, enquanto tenta avistar a critura. Detecta um nevolo a sua esquerda, esticando o braço para te atacar, então você desfere um golpe... \n

    O nevolo fica intangivel, fazendo com que seu golpe não tenha efeito. Você ver alguns nevoloso comendo as iscas e toda vez que tenta desferir um golpe, a critura fica intangivel. \n
    
    Sua tentativa de caçada é frustrada, onde será que você estava nas aulas de necrófolos? Talvez montado em um unicornio com uma bela companheira."
     \N`)    

     tempo ();

} else if (escolha6 === 2){

    console.log (`Atento, você ouve um som de movimento em um arbusto, então desfere o sinal de Aard para deixar a criatura tangível.  O nevolo dispara em sua direção, mas nada que uma espada afiada e um sinal de Aard não resolvam. \n Decapitar a critura foi como cortar manteiga e sua maestria para a morte espanta os demais nevolosos.
    \n
    
    ${name} coloca o nevoloso morto em sua carroça e estica as costas. `)

    let nevoloso = criaturas.push = new Necro();

    nevoloso.nome = "nevoloso";
    nevoloso.classe = "Necrofilo";
    nevoloso.ocorrencia = "Locais com carniças e neblina"
    nevoloso.preco = 600
    nevoloso.habilidade = "Intangibilidade"

    carteira = carteira +600

   tempo ();
};

console.log (`Você regressa à casa do mago às ${i} horas.`);

console.log (`Você retorna com as seguintes criaturas: `);

console.log (criaturas);

console.log (`Você adquiriu ${carteira} moedas!`);

console.log (`\n \n\ \n \n`);

console.log(`Você vai a sexta da maldade, o tão estimado evento. Por ser um bruxo maior de idade, já pode tomar coisas mais pesadas, como coca-cola.`)

var coca = 0;

do {
    coca++;
    carteira = carteira -50
} while (carteira >= 50);

console.log (`Coca colas tomadas ${coca}`)