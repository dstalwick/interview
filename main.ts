namespace SpriteKind {
    export const EnemyProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Damien_blue_monkey.tileKindAt(TileDirection.Right, sprites.dungeon.buttonPink)) {
        controller.player1.moveSprite(Damien_blue_monkey, 0, 0)
        if (current_question < 0) {
            let to_show = questions.filter((value, index) => !question_shown[index])
if (to_show.length > 0) {
                ask_question(to_show)
            } else {
                start_battle()
            }
        } else {
            show_answer(current_question, current_answer)
        }
        controller.player1.moveSprite(Damien_blue_monkey, 75, 75)
    }
})
function show_answer (index: number, answer_number: number) {
    answer = answers[index]
    story.printDialog(answer[answer_number], 85, 100, 120, 175)
    current_answer += 1
    if (current_answer >= answers[index].length) {
        current_question = -1
        current_answer = -1
    }
    question_shown[index] = true
}
info.onCountdownEnd(function () {
    battle()
})
function battle () {
    Dad_BORING_monkey.follow(Damien_blue_monkey, 30)
}
function start_battle () {
    battleStarted = 1
    info.startCountdown(1)
}
function ask_question (to_show: string[]) {
    story.showPlayerChoices(to_show[0], to_show[1], to_show[2], to_show[3])
    current_answer = 0
    if (story.checkLastAnswer(questions[0])) {
        current_question = 0
    } else if (story.checkLastAnswer(questions[1])) {
        current_question = 1
    } else if (story.checkLastAnswer(questions[2])) {
        current_question = 2
    } else if (story.checkLastAnswer(questions[3])) {
        current_question = 3
    } else if (story.checkLastAnswer(questions[4])) {
        current_question = 4
    } else if (story.checkLastAnswer(questions[5])) {
        current_question = 5
    } else if (story.checkLastAnswer(questions[6])) {
        current_question = 6
    } else if (story.checkLastAnswer(questions[7])) {
        current_question = 7
    } else if (story.checkLastAnswer(questions[8])) {
        current_question = 8
    }
    show_answer(current_question, current_answer)
}
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (battleStarted == 1) {
        if (dx > 0) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, Damien_blue_monkey, 50, 0)
        } else if (dx < 0) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, Damien_blue_monkey, -50, 0)
        } else if (dy > 0) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, Damien_blue_monkey, 0, 50)
        } else {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, Damien_blue_monkey, 0, -50)
        }
    }
})
info.player2.onLifeZero(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-2)
    sprite.destroy(effects.fire, 100)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let projectile3: Sprite = null
let answer: string[] = []
let Dad_BORING_monkey: Sprite = null
let Damien_blue_monkey: Sprite = null
let answers: string[][] = []
let battleStarted = 0
let current_answer = 0
let current_question = 0
let dy = 0
let dx = 0
let questions: string[] = []
let question_shown: boolean[] = []
dx = 0
dy = 0
current_question = -1
current_answer = -1
let can_show_menu = 1
battleStarted = 0
questions = [
"Quel est ton métier?",
"Pourquoi as-tu choisi ce métier?",
"Quels sont les étude pour ce métier?",
"Y-a-t'il quelque chose qui t'as surpris en commençant ce métier? Des conseils?",
"Comment se déroule une journée typique?",
"Quels sont les bons/moins bons côtés de ce métier?",
"Recommenderais-tu ce métier?",
"CONCLUSION"
]
question_shown = [
false,
false,
false,
false,
false,
false,
false
]
answers = [
["Je suis un programmeur. J'écris du code pour les ordinateurs pour aider les musiciens dans la promotion de leurs chansons."],
["J'ai choisis ce métier car quand j'étais jeune j'avais un Commodore 64. ", "C'est un des premiers ordinateurs et il fallait le programmer pour quasiment tous, même pour ouvrir une application.", "J'ai commencé avec cet ordinateur et j'ai tellement adoré le programmé que c'est devenu une passion!"],
["J'ai obtenu un diplôme en Science informatique.", "Dans les études pour obtenir le diplôme, il y a beaucoup de programmation, mais aussi beaucoup de mathématique. "],
["J'étais content d'avoir un emploi que j'aime vraiment.", "J'ai aussi été surpris par la quantité de travail qu'il faut pour quelque chose d'aussi simple que de créer un bouton.", "Et... qu'on peut partir son entreprise avec juste un ordinateur et soi-même "],
["Je commence vers 8 h à 17 h.", "J'ai des rencontres pour discuter de ce qu'on va faire et régler des problèmes... ", "mais je passe beaucoup de temps à écrire du code et écouter de la musique."],
[
"Un impact positif est que les ordinateurs ont permis aux gens d'éliminer la distance dans les communications.",
"J'ai un collègue en France et un autre en Inde, et je travail directement avec eux chaque journée.",
"Un impact négatif, est peut-être les dangers des médias sociaux.",
"Les médias sociaux peuvent créer des dépendances et avoir un impact négatif sur l'estime de soi."
],
["Si tu aimes la résolution de problèmes et créer, je recommenderais ce métier. ", "Je recommande de commencer avec de la programmation simple d'environnements de jeux comme ceci en utilisant Makecode arcade!"],
[
"En conclusion...",
"J'ai vraiment aimé faire cette entrevue avec mon papa",
"et programmer cette présentation",
"En maintenant...",
"C'est l'heure de la BATAILLE!!!"
]
]
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.F,
MakeyMakey.MakeyMakeyKey.G
)
Damien_blue_monkey = sprites.create(img`
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . 6 8 8 8 8 8 6 . . . . . . 
    . . 6 1 1 1 1 8 8 8 6 . . . . . 
    . 9 1 6 1 1 6 1 8 8 6 6 . . . . 
    . 9 1 6 1 1 6 1 8 8 1 1 6 . . . 
    9 1 8 8 1 1 1 1 8 8 a 1 c . . . 
    9 1 1 1 1 9 1 1 8 8 a 1 c . 6 6 
    9 9 9 9 9 1 1 1 8 8 6 c . 6 8 6 
    . 6 1 1 1 1 1 8 8 6 6 . . 6 8 6 
    . . 6 6 6 6 6 8 8 8 8 6 . 6 8 6 
    . . . . 6 8 8 8 8 8 8 8 6 6 8 6 
    . . . 6 8 6 6 8 6 8 8 8 8 6 6 . 
    . . . 6 8 6 6 8 6 8 8 8 8 6 . . 
    . . . 6 1 b 6 1 b 6 6 8 6 . . . 
    . . . 6 1 1 c 1 1 b b 1 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    `, SpriteKind.Player)
Dad_BORING_monkey = sprites.create(img`
    ....fffff...........
    ...feeeeef.......99.
    ..fddddeeef.66666666
    .cdfddfdeeff..999.88
    .cdfddfdeeddf...888.
    cdeeddddeebdc.666666
    cddddcddeebdc.ff....
    cccccdddeefc.fef....
    .fdddddeeff..fef..99
    ..fffffeeeef.fef.99.
    ....feeeeeeeffef....
    ...feffefeeeeff.....
    ...feffefeeeef99.999
    ...fdbfdbffef.9.99..
    ...fddcddbbdf.......
    ....fffffffff.......
    `, SpriteKind.Enemy)
controller.player1.moveSprite(Damien_blue_monkey, 100, 100)
info.setLife(30)
info.player2.setLife(40)
scene.cameraFollowSprite(Damien_blue_monkey)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Damien_blue_monkey, sprites.dungeon.buttonTeal)
tiles.placeOnRandomTile(Dad_BORING_monkey, sprites.dungeon.buttonPink)
game.onUpdateInterval(50, function () {
    if (controller.dx() != 0) {
        dx = controller.dx()
        dy = 0
    }
    if (controller.dy() != 0) {
        dy = controller.dy()
        dx = 0
    }
})
game.onUpdateInterval(500, function () {
    if (battleStarted == 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . 2 f 4 f f 2 . . . . . 
            . . . . . 2 f f 4 f 2 . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Dad_BORING_monkey, 100, 100)
        projectile2.follow(Damien_blue_monkey)
        projectile2.setKind(SpriteKind.EnemyProjectile)
    }
})
game.onUpdateInterval(10000, function () {
    if (battleStarted == 1) {
        for (let index = 0; index < 15; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 2 . . . . . . . 
                . 2 . . . . . . 2 . . . . 2 2 . 
                . 2 2 . . . . . 2 . . . 2 2 . . 
                . . 2 2 2 . . . 2 . . 2 2 . . . 
                . . . . 2 2 . . 2 . 2 2 . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . 2 2 2 2 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 2 2 2 2 . 
                . . . . 2 2 3 1 1 3 2 . . . . . 
                . . . . 2 . . 2 2 . 2 . . . . . 
                . . . 2 . . . 2 . . . 2 . . . . 
                . . 2 2 . . . 2 . . . . 2 . . . 
                . . 2 . . . . 2 . . . . . 2 2 . 
                . . . . . . . . . . . . . . 2 . 
                . . . . . . . . . . . . . . . . 
                `, Dad_BORING_monkey, randint(0, 200), randint(0, 200))
            projectile.follow(Damien_blue_monkey, 99)
            projectile.setKind(SpriteKind.EnemyProjectile)
        }
    }
})
