[10:14 pm, 30/09/2021] +91 77091 92441: describe('upload a file in cypress testcases',function(){

    it('upoload a basic file',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const fixturePath = 'abc.png'
        cy.get('#fileUpload').attachFile(fixturePath)
    })

    it('upoload a basic file 2',()=>{
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        const fixturePath = 'abc.png'
        cy.get('#myFile').attachFile(fixturePath)
        cy.get('#submit-button').click()
            cy.on('window:alert',(str)=>{
            expect(str).to.equal('Your file has now been uploaded!')   // text validate

        })  
    })

    it('upoload a basic file 2',()=>{
        cy.visit('http://www.webdriveruniversity.com/File-U…
[10:40 pm, 30/09/2021] +91 77091 92441: // random number 

let randomNumber = Math.floor(Math.random()*6)+1
let userInput = Number(prompt('Please enter any vakues betweeen one to six'))
let correctGuess = false

if(randomNumber ==  userInput){
    correctGuess = true
}
else {
    console.log('You have one more chance ')
    userInput = Number(prompt('Please enter any vakues betweeen one to six'))
    if(randomNumber ==  userInput){
        correctGuess = true
    }
    else {
        correctGuess = false
        
    }

}
if(correctGuess) {
    console.log('you guess it right')
}
else{
    connsole.log('Try again next time')

}