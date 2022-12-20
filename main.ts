controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Damien_blue_monkey.tileKindAt(TileDirection.Right, sprites.dungeon.buttonPink)) {
        controller.player1.moveSprite(Damien_blue_monkey, 0, 0)
        if (current_question < 0) {
            let to_show = questions.filter((value, index) => !question_shown[index])
if (to_show.length > 0) {
                ask_question(to_show)
            } else {
            	
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
let answer: string[] = []
let Damien_blue_monkey: Sprite = null
let answers: string[][] = []
let current_answer = 0
let current_question = 0
let answer2 = ""
let question_shown: boolean[] = []
let questions: string[] = []
let interview_trigger = null
current_question = -1
current_answer = -1
let can_show_menu = 1
questions = [
"quelle est votre metier",
"pourquoi as tu choisi ce metier",
"quelle sont les étude pour se métier",
"y-a-til quelquechose qui as te surpris avice ce metier",
"comment est une jounee typique",
"quelles sont les bons/moins bons cotes de ce metier",
"recommendrais-tu ce metier"
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
["Je suis un programmeur. J'écris du code pour les ordinateurs pour aider les musiciens dans la promotion de leurs chansons"],
["J'ai choisis ce métier car quand j'étais jeune j'avais un Commodore 64. C'est un type d'ordinateur et il fallait le programmer pour casiment tous meme pour ouvrir une application il fallait le coder"],
["J'ai obtenu un diplôme en Science informatique.", "Dans les études pour obtenir le diplôme, il y a beaucoup de programmation, mais aussi beaucoup de mathématique "],
["answer 3"],
["answer 4"],
["answer 5"],
["answer 6"]
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
let Dad_BORING_monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(Damien_blue_monkey, 75, 75)
scene.cameraFollowSprite(Damien_blue_monkey)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Damien_blue_monkey, sprites.dungeon.buttonTeal)
tiles.placeOnRandomTile(Dad_BORING_monkey, sprites.dungeon.buttonPink)
