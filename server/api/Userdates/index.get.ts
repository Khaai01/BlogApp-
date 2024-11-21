export default defineEventHandler(async (event) => {
    const Userdates = [
        {
            email:'Descripción de dato 1',
            user: 'Producto 1',
            password: 1
        },
        {
            email: 'Descripción de dato 2',
            user: 'dato 1',
            password: 2
        },
        {
            email: 'Descripción de dato 3',
            user: 'dato 3',
            password: 3
        }

    ]

    return Userdates


        /*const repo = await $fetch('https://fakestoreapi.com/Userdates');
        return repo */
    })