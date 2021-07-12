const myEmojis = ["😂","👋🏻","💪"]
const emojiContainer = document.getElementById("emoji-container")

for (let i = 0 ; i < myEmojis.length ; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)

}


const pushBtn = document.getElementById("push-btn")

pushBtn.addEventListener("click", function(){
    
    
    renderEmo()
})

function renderEmo(){
        const emojiInput = document.getElementById("emoji-input")
        if (emojiInput.value){
            myEmojis.push(emojiInput.value)
            emojiInput.value = ""
        }
    
    
    
}