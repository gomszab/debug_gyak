const tomb = [
       
    {
        uralkodo_nevI : 'I.István',
        esemeny_I1 : 'Koronázás',
        evszam_I1 : '1000',
        esemeny_I2 : 'Pannonhalmi apátság megalapítása',
        evszam_I2 : '1001',
    },
    {
        
        uralkodo_nevB : 'IV.Béla',
        uralkodo_nevM : 'Mátyás király',
        uralkodo_nevF : 'II.Rákoczi Ferenc',
   
        esemeny_B : 'Tatájárás',
        esemeny_M1 : 'Bélcs elfoglalása',
        esemeny_M2 : 'Kenyérmezei csata',
        esemeny_F1 : 'A szabadságharc kezdete',
        esemeny_F2 : 'A szabadságharc vége',
    },
    {
        
       
        evszam_B : '1241-1242',
        evszam_M1 : '1485',
        evszam_M2 : '1479',
        evszam_F1 : '1703',
        evszam_F2 : '1711',
        
        
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
    if(tomb[i].uralkodo_nevI)
    {
        const cella = document.createElement('td')
        cella.innerHTML = tomb[i].uralkodo_nevI
        sor.appendChild(cella)
        const esemeny = document.createElement('td')
        esemeny.innerHTML = tomb[i].esemeny_I1
        sor.appendChild(esemeny)
        const ev = document.createElement('td')
        ev.innerHTML = tomb[i].evszam_I1
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
    