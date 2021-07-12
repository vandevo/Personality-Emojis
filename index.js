const myEmojis = ["😂","👋🏻","💪"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")

const shiftBtn = document.getElementById("shift-btn")
const popBtn = document.getElementById("pop-btn")

function renderEmo(){
    emojiContainer.innerHTML = ""
for (let i = 0 ; i < myEmojis.length ; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)

}}
renderEmo()


pushBtn.addEventListener("click", function(){
    if (emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmo()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmo()
    }

})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmo()
})

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmo()
})
