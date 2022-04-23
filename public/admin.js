// Your Code Here
// fetch('http://127.0.0.1:3000/', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({

//     })
// });

// created a function to change book title
async function changeBookName() {
    let res = await fetch('http://127.0.0.1:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 3,
            title: 'The Legends of Arathrae',


        })
    })
    let txt = await res.json()
    console.log(txt)
}

// appending book titles,input and button to page
async function getBooks() {
    let res = await fetch('http://127.0.0.1:3001/listBooks')
    let txt = await res.json()
    console.log(txt)


    for (let i = 0; i < txt.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = txt[i].title
        document.body.append(div)

        let input = document.createElement('input')
        input.value = "book quantity"
        div.append(input)

        let button = document.createElement('button')
        button.innerHTML = "Save"
        div.append(button)
    }
}

getBooks()
    // document.body.append(getBooks)
    // changeBookName()