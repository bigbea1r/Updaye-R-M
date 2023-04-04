axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      let data = response.data.results;
      let blockAvatar = document.querySelector('.img');
      let blockData = document.querySelector('.data');
      let blockItem = document.querySelector('.users');
      let blockDead = document.querySelector('.mb_dead');
      let blockBeast = document.querySelector('.mb_beast');
      let blockValue = document.querySelector('.value');
      let blockResult = document.querySelector('.result')
      //------------------------------------------------//
      let result = document.createElement("li");
      result.innerHTML = data.length;
      blockResult.appendChild(result);
      //------------------------------------------------//
      data.forEach((item) => {
        let avatar = document.createElement("img");
        let name = document.createElement("li");
        let status = document.createElement("li");
        let species = document.createElement("li");
        let type = document.createElement("li");
        let location = document.createElement("li");
        avatar.src = item.image;
        name.innerHTML = item.name;
        status.innerHTML = item.status;
        species.innerHTML = item.species;
        type.innerHTML = item.gender;
        location.innerHTML = item.location.name;   
        blockAvatar.appendChild(avatar); 
        blockItem.appendChild(name);
        blockDead.appendChild(status);
        blockBeast.appendChild(species);
        blockValue.appendChild(type);
        blockData.appendChild(location); 
      }
      );
      console.log(data);
    })    
         .catch(erorr =>
        console.erorr(erorr));
      

