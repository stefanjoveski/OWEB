function izbrisi(kade){
    element= document.getElementById(kade);
    localStorage.removeItem(element);
   loadKom(kade);
}

