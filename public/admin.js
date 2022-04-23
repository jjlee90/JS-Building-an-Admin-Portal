// created a function to change book title
async function changeBookName() {
    let res = await fetch('http://127.0.0.1:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            quantity: 4
        })
    })
    let txt = await res.json()
    console.log(txt)
}
changeBookName()

// appending book titles, input and button to page
async function getBooks() {
    let res = await fetch('http://localhost:3001/listBooks')
    let txt = await res.json()
    console.log(txt)

    for (let i = 0; i < txt.length; i++) {

        let list = document.createElement('li')
        list.innerHTML = txt[i].title
        document.body.append(list)

        let input = document.createElement('input')
        input.value = txt[i].quantity
        list.append(input)

        let button = document.createElement('button')
        button.innerHTML = "Save"
        list.append(button)

        // attaching event listener to button to update quantity based on the input passed in 
        button.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: txt[i].id,
                    quantity: input.value
                })
            })
        })
    }
}
getBooks()