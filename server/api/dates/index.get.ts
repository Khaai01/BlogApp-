export default defineEventHandler(async (event) => {
    const dates = [
        {
            email: 1,
            user: 'Producto 1',
            password: 'Descripción del producto 1'
        },
        {
            email: 2,
            user: 'Producto 2',
            password: 'Descripción del producto 2'
        },
        {
            email: 3,
            user: 'Producto 3',
            password: 'Descripción del producto 3'
        }

    ]

    return dates


        /*const repo = await $fetch('https://fakestoreapi.com/dates');
        return repo */
    })