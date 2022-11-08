let userlista = []

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('names').addEventListener('click', async () => {
        usernames()
    })

})


async function usernames(){
    let response = await fetch('users.json')
    let result = await response.json()

    userlista.textContent = ''

    result.users.sort((a, b) => a.lastName.localeCompare(b.lastName))
    

    for (let p of result.users) {
        let li = document.createElement('li')
        li.textContent = p.lastName.toUpperCase() + ", " + p.firstName
        document.getElementById("htmllista").appendChild(li);
    }

}

