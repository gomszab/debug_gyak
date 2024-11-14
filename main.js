let array = [
    {
    uralkodo_nev : "I. István",
    esemeny1 : "Koronázás",
    evszam1 : "1000",
    esemeny2 : "Pannonhalmi apátság megalapítása",
    evszam2 : "1001",
    },

    {
    uralkodo_nev : "IV. Béla",
    esemeny1 : "tatárjárás",
    evszam1 : "1241-1242",
    },

    {
    uralkodo_nev : "Mátyás király",
    esemeny1 : "Bécs elfoglalása",
    evszam1 : "1485",
    esemeny2 : "Kenyérmezei csata",
    evszam2 : "1479",
    },

    {
    uralkodo_nev : "II. Rákóczi Ferenc",
    esemeny1 : "A szabadságharc kezdete",
    evszam1 : "1703",
    esemeny2 : "A szabadságharc vége",
    evszam2 : "1711",
    }



]

const table = document.createElement('table');
    document.body.appendChild(table);

const thead = document.createElement('thead');
    table.appendChild(thead);
const tr = document.createElement('tr');
    thead.appendChild(tr);

const tbody = document.createElement('tbody');
    table.appendChild(tbody)

const uralkodo = document.createElement('th');  
    uralkodo.innerHTML = 'Úralkodó'
    tr.appendChild(uralkodo)

const esemeny = document.createElement('th');
    esemeny.innerHTML = 'Esemény';
    tr.appendChild(esemeny);

const evszam = document.createElement('th');
    evszam.innerHTML = 'Évszám';
    tr.appendChild(evszam);

irdki(array);

    const form = document.getElementById('form');
form.addEventListener('submit' ,function(e){
    const uralkodo = document.getElementById('uralkodo_nev');
    const esemeny1 = document.getElementById('esemeny1');
    const evszam1 = document.getElementById('evszam1');
    const esemeny2 = document.getElementById('esemeny2');
    const evszam2 = document.getElementById('evszam2');


    e.preventDefault();
    const uralkodo_nev_value = uralkodo.value;
    const esemeny1_value = esemeny1.value;
    const evszam1_value = evszam1.value;
    const esemeny2_value = esemeny2.value;
    const evszam2_value = evszam2.value;


    const adatok = [
        {
            uralkodo : uralkodo_nev_value ,
            esemeny1 : esemeny1_value,
            evszam1 : evszam1_value,
            esemeny2 : esemeny2_value,
            evszam2 : evszam2_value,
        }
    ]

    array.push(adatok);
    irdki(array);
    
})
form.reset();


    function irdki(tomb){
        tbody.innerHTML = "";

        for(let adat of tomb){
            const tr_body = document.createElement('tr');


            const nev = document.createElement('td');
            nev.innerHTML =adat.uralkodo_nev;
            nev.rowSpan = adat.esemeny2 ? 2 : 1;
            tr_body.appendChild(nev);



            const esemeny = document.createElement('td');
            esemeny.innerHTML = adat.esemeny1;
            tr_body.appendChild(esemeny);
            



            const ev1 = document.createElement('td');
            ev1.innerHTML = adat.evszam1;
            tr_body.appendChild(ev1);


            tbody.appendChild(tr_body);
        
        if(adat.esemeny2 && adat.evszam2){
            const ujsor = document.createElement('tr')

            const esemeny2 = document.createElement('td');
            esemeny2.innerHTML = adat.esemeny2;
            ujsor.appendChild(esemeny2);

            const ev2 = document.createElement('td')
            ev2.innerHTML = adat.evszam2;
            ujsor.appendChild(ev2);

            tbody.appendChild(ujsor);
        }
        
        
        
        }
       

}