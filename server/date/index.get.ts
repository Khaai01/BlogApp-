export default defineEventHandler( async (event) => {
    const date = [
        {
            id: 1,
            title: 'dato 1',
            description: 'descripcion del dato 1'
        },
        {
            id: 2,
            title: 'dato 2',
            description: 'descripcion del dato 2'
        },
        {
            id: 3,
            title: 'dato 3',
            description: 'descripcion del dato 3'
        }

    ]
    return date
})