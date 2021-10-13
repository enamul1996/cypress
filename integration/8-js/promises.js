// let cypressA = new Promise((resolve, reject) => {
//     let r = 6
//     if (r == 12 ){
//         resolve('promised is fulfilled' )
//     }
//     else {
//         reject(' promised is not fulfilled')
//     }
// })
// cypressA.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })

function math (x, y) {
    console.log(` I am added ${x + y}`)
    console.log(`i am substracted ${x - y}`)
}
//math(10, 24)

let cypressA = new Promise((resolve, reject) => {
    let info = {
        firstname : "enamul",
        rollNo : 36
    }
    let notinfo = {
        error : 404,
        message : 'Check the connection' 
    }
    if (info.hasOwnProperty('firstName')) {
        resolve( info )
    }
    else {
        reject(notinfo)
    }
})
cypressA.then((info) => {
    console.log(info)
    if(info.hasOwnProperty('firstName') && info.hasOwnProperty('rollNo')){

        math(10, 24)
    }
}).catch((notinfo) => {
    console.log(notinfo)
    console.log( `the error code is ${not.info.error} and meesage is ${notinfo.message}`)
})