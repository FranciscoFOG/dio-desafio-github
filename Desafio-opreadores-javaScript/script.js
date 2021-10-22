/* exemplo 1 Map*/

function getAdmins(map) {
    let admins = [];
    for([key, value] of Map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usurarios = new Map();

usurarios.set('Luiz', 'Admin');
usurarios.set('Stephany', 'Admin');
usurarios.set('Jorge', 'User');
usurarios.set('Natália', 'Admin');

console.log(getAdmins(usurarios));

/* exemplo 2 Set*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));