const fetchPokemon = () => {
    const pokeName= document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./img/piplup-pokemon.gif");
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        let pokeType = data.types[0].type.name;
        pokeImage(pokeImg);
        document.getElementById("datoName").textContent = pokeNombre;
        document.getElementById("datoTipo").textContent = pokeType;

        for(let i = 0; i <= 5; i++ ){
            let statName = data.stats[i].stat.name;
            let statNum = data.stats[i].base_stat;
            document.getElementById(`datoStatName${i}`).textContent = statName;
            document.getElementById(`datoStatNum${i}`).textContent = statNum;
        }
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}