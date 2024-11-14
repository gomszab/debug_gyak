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
]

const table = document.createElement('table');
const tablebody = document.createElement('tbody');
const tableheader = document.createElement('thead');
const tableheaderRow = document.createElement('tr');


createTableCell('th', "Vezeteknev", tableheaderRow)
const kernev = createTableCell('th', "Keresztnev", tableheaderRowFirstName)
kernev.colSpan = 2
createTableCell('th', "Házas",tableheaderRow)
createTableCell('th', "Állat", tableheaderRow)


document.body.appendChild(table)
table.appendChild(tablebody)
table.appendChild(tableheader)
tableheader.appendChild(tableheaderRow)


RenderTable();
function RenderTable(){
    for (const person of array){  

        const tr = document.createElement("tr")
        tablebody.appendChild(tr)

        tr.addEventListener('click', function(e)
        {
            const selectedrow = tablebody.querySelector(".selected") 
            e.currentTarget.classList.add('selected')
    
            if (selectedrow != undefined)
                {
                    selectedrow.classList.remove('selected')
                }
                
            console.log('click')
    
        })
    
    
        const td = document.createElement("td")
        const firstname1td = document.createElement("td")
        const marriedtd = document.createElement("td")
        const pettd = document.createElement("td")
    
        td.innerHTML = person.lastname
        firstname1td.innerHTML = person.firstname1
        marriedtd.innerHTML = person.married
        pettd.innerHTML = person.pet
    
        
        tr.appendChild(td)
        tr.appendChild(firstname1td)
        
    
        if (person.firstname2 === undefined){ 
            firstname1td.colSpan = "2"

            if (person.married)
                marriedtd.innerHTML = "igen"       
            else
            marriedtd.innerHTML = "nem"
    
            tr.appendChild(marriedtd)
            tr.appendChild(pettd)
        }
        else{
            const firstname2td = document.createElement("td")
            firstname2td.innerHTML = person.firstname2
    
            if (person.married)
                marriedtd.innerHTML = "igen"
            else
            marriedtd.innerHTML = "nem"
    
            tr.appendChild(firstname2td)
            tr.appendChild(marriedtd)
            tr.appendChild(pettd)
        }
    }
}

function ValidateFields(ln, fn1,p){ 
    let result = true
    const errorMessages = form.querySelectorAll('.error') 

    for (const error of errorMessages)
        error.innerHTML = ''

    if (ln.value === ''){
        const error = ln.parentElement.querySelector('.error')
        error.innerHTML = "Vezetéknév kötelező!"
        result = false
    }
    if (fn1.value === ''){
        const error = fn1.parentElement.querySelector('.error')
        error.innerHTML = "keresztnév kötelező!"
        result = false
    }
    if (p.value === ''){
        const error = p.parentElement.querySelector('.error')
        error.innerHTML = "Kisállat kötelező!"
        result = false
    }

    return result    
}

const form = document.getElementById("form")
form.addEventListener('submit', function(e)
{
    e.preventDefault()
    const LastNameInput = document.getElementById("lastname")
    const FirstNameInput1 = document.getElementById("firstname1")
    const FirstNameInput2 = document.getElementById("firstname2")
    const MarriedInput = document.getElementById("married")
    const PetInput = document.getElementById("pet")

    const LNV = LastNameInput.value
    const FNV = FirstNameInput1.value
    const FNV2 = FirstNameInput2.value

    const MV = MarriedInput.value
    const PV = PetInput.value

    if(ValidateFields(lastname, firstname1, pet))
        {
            array.push({
                lastname: LNV,
                firstname1: FNV,
                firstname2: FNV2 === ''?undefined:FNV2, 
                married: MV,
                pet: PV
            })
        }
    
    tablebody.innerHTML = ''; 
    console.log(array)  
        RenderTable();
}
)

/**
 * Creates a new cell
 * @param {'td'|'th'} tagName 
 * @param {string} innerH 
 * @param {HTMLTableRowElement} parent
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName, innerH, parent){
    const element = document.createElement(tagName);
    element.innerHTML(innerH);
    parent.appendChild(element);

    return element;
}