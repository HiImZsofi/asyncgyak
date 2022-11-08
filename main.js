let userlista = []


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('names').addEventListener('click', async () => {
        usernames()
    })
    document.getElementById('contact').addEventListener('click', async () => {
        table()
    })
    document.getElementById('szamitas').addEventListener('click', async () => {
        var xertekek = parseInt(document.getElementById('xertek').value)
        osszsuly(xertekek)
    })

    document.getElementById('barna').addEventListener('click', async () => {
        szemszin()
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
        unames.push(p.maidenName)
        emails.push(p.email)
        telefon.push(p.phone)
    }

}

async function table(){
    let response = await fetch('users.json')
    let result = await response.json()

  result.users.sort((a, b) => a.username.localeCompare(b.username))


    for (let u of result.users){
        
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.textContent = u.username;
        td2.textContent = u.email;
        td3.textContent = u.phone;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tabla.appendChild(tr);
    }
    
}

async function osszsuly(x){
    let response = await fetch('users.json')
    let result = await response.json()
    var sum = 0

    for (let p in result.users){
        if(p.height > x){
            sum += p.weight
        }
    }
    var message = "Összsúly: " + sum + " kg"
    return document.getElementById('sulyiratas').append(message)
}

async function szemszin(){
    let response = await fetch('users.json')
    let result = await response.json()

    var sum = 0

    for (let p in result.users){
        if(p.eyeColor == "Brown"){
            sum++
        }
    }
    document.getElementById('sziniratas').append(sum)
}

