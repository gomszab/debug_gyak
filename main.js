let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
];
let valami =[
   { th: 'Veznev'},
    {th:'Kernev'},
    {th:'házas'},
    {th:'állat'}
]

const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
const tableheadrow = document.createElement('tr');


document.body.appendChild(table);
table.appendChild(tablehead);
table.appendChild(tablebody);
tablehead.appendChild(tableheadrow);
for (let i =0; i<valami.length;i++){
    const th = document.createElement('th')
    th.innerHTML=valami.th[i]
    
    if (valami[i]===2){
        th.colspan =valami[i].colspan
    }
    tableheadrow.appendChild(th)
}




for (const person of array) {
    const tr = document.createElement('tr');
    
    const lastname = document.createElement('td');
    tr.appendChild(lastname);
    lastname.innerHTML = person.lastname;

    const firstname1 = document.createElement('td');
    tr.appendChild(firstname1);
    firstname1.innerHTML = person.firstname1;

    if (person.firstname2 === undefined) {
        firstname1.colSpan = 2;
    } else {
        const firstname2 = document.createElement('td');
        firstname2.innerHTML = person.firstname2;
        tr.appendChild(firstname2);
    }

    tr.addEventListener('click', function(e) {
        console.log('click');
        
        const asd = tablebody.querySelector('.selected');
        if (asd != undefined) {
            asd.classList.remove('selected');
        }
        e.currentTarget.classList.add('selected');
    });

    const hazassag = document.createElement('td');
    tr.appendChild(hazassag);
    hazassag.innerHTML = person.married ? "igen" : "nem";

    const allat = document.createElement('td');
    tr.appendChild(allat);
    allat.innerHTML = person.pet;

    tablebody.appendChild(tr);
}

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');
    
    const lastnamevalue = lastname.value;
    const firstname1value = firstname1.value;
    const firstname2value = firstname2.value === "" ? undefined : firstname2.value;
    const marriedchecked = married.checked;
    const petvalue = pet.value;

    
    const newPerson = {
        lastname: lastnamevalue,
        firstname1: firstname1value,
        firstname2: firstname2value,
        married: marriedchecked,
        pet: petvalue
    };

    if (validatefields(lastname, firstname1, pet)) {
        array.push(newPerson);
        console.log(array);
        tablebody.innerHTML = "";
        renderTable();
    }
});


function validatefields(lastname, firstname, pet) {
    let result = true;
    if (lastname.value === "") {
        const par = lastname.parentElement;
        const error = par.querySelector(".error");
        error.innerHTML = "Kötelező vezetéknév";
        result = false;
    }
    if (firstname.value === "") {
        const par2 = firstname.parentElement;
        const error2 = par2.querySelector(".error");
        error2.innerHTML = "Kötelező keresztnév";
        result = false;
    }
    if (pet.value === "") {
        const par3 = pet.parentElement;
        const error3 = par3.querySelector(".error");
        error3.innerHTML = "Kötelező állat";
        result = false;
    }
    return result;
}


function createtablecell(htmlElement, innerHTML, parentElement) {
    const asd = document.createElement(htmlElement);
    asd.innerHTML = innerHTML;
    parentElement.appendChild(asd);
}


function renderTable() {
    for (const person of array) {
        const tr = document.createElement('tr');
        
        const lastname = document.createElement('td');
        tr.appendChild(lastname);
        lastname.innerHTML = person.lastname;

        const firstname1 = document.createElement('td');
        tr.appendChild(firstname1);
        firstname1.innerHTML = person.firstname1;

        if (person.firstname2 === undefined) {
            firstname1.colSpan = 2;
        } else {
            const firstname2 = document.createElement('td');
            firstname2.innerHTML = person.firstname2;
            tr.appendChild(firstname2);
        }

        const hazassag = document.createElement('td');
        tr.appendChild(hazassag);
        hazassag.innerHTML = person.married ? "igen" : "nem";

        const allat = document.createElement('td');
        tr.appendChild(allat);
        allat.innerHTML = person.pet;

        tablebody.appendChild(tr);
    }
}