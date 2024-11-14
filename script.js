const tomb = [
       
    {
        uralkodo_nev : 'I.István',
        esemeny_I : 'Koronázás',
        evszam_I : '1000',
    },
    {
        
        uralkodo_nev : 'IV.Béla',
        esemeny_I : 'Tatájárás',
        evszam_I : '1241-1242',
    },
    {
        uralkodo_nev : 'Mátyás király', 
        esemeny_I : 'Bécs elfoglalása',
        evszam_I : '1485',
    }
] 
    /*
      
    */

   
    

const tbody = document.querySelector("tbody")



function generateheader(elso, masodik, harmadik) {
    const sor = document.createElement('tr')
    const elsocell = document.createElement('th')
    const masodikcella = document.createElement('th')
    const harmadikcella = document.createElement('th')
    
    elsocell.innerHTML = elso
    masodikcella.innerHTML = masodik
    harmadikcella.innerHTML = harmadik
    sor.appendChild(elsocell)
    sor.appendChild(masodikcella)
    sor.appendChild(harmadikcella)

    tbody.appendChild(sor)

    
}
        

function generateTable() {
    for(let i = 0; i < tomb.length; i++)
{
    const sor = document.createElement('tr')
    if(tomb[i].uralkodo_nev)
    {
        const cella = document.createElement('td')
        cella.innerHTML = tomb[i].uralkodo_nev
        sor.appendChild(cella)
        const esemeny = document.createElement('td')
        esemeny.innerHTML = tomb[i].esemeny_I
        sor.appendChild(esemeny)
        const ev = document.createElement('td')
        ev.innerHTML = tomb[i].evszam_I
        sor.appendChild(ev)
        tbody.appendChild(sor)
    }

    
}
  

}
    

/*
  cella1.innerHTML = tomb[0].uralkodo_nevI
    cella2.innerHTML = tomb[0].esemeny_I1
    cella3.innerHTML = tomb[0].evszam_I1
    */
    
