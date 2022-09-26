const sayHello = (name = 'Anonym') => {
    console.log(`Hello, ${name}`)
}

const sayBye = (name = 'Anonym') => {
    console.log(`Bye-bye, ${name}`)
}

exports.utils = {sayHello, sayBye};