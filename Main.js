//Declare all objects here
const quoteGen = {
    inspirational: ["When you have a dream, you’ve got to grab it and never let go. — Carol Burnett",
        "Nothing is impossible. The word itself says I’m possible! — Audrey Hepburn",
        "There is nothing impossible to they who will try. — Alexander the Great"],
    funny: ["Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. —Will Ferrell",
        "Ned, I would love to stand here and talk with you—but I’m not going to. —Phil Connors (Bill Murray)",
        "I’m not superstitious, but I am a little stitious. —Michael Scott (Steve Carrell)"],
    famous: ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"],
    randomNumber() {
        return Math.floor(Math.random() * 3)
    }, 
    formatMessage (quoteArray){
        return quoteArray.join('\n')
    }
};

//Store quotes in array
let quotes = []

//Loop through quotes and build array of all three quotes
for (quote in quoteGen){
    let index = quoteGen.randomNumber()

    switch (quote){
        case 'inspirational':
            quotes.push(`inspirational Quote: ${quoteGen[quote][index]}`)
            break
        case 'funny':
            quotes.push(`Funny Quote: ${quoteGen[quote][index]}`)
            break
        case 'famous':
            quotes.push(`Famous Quote: ${quoteGen[quote][index]}`)
            break
        default: 
            break
    }
}

console.log(quoteGen.formatMessage(quotes))


