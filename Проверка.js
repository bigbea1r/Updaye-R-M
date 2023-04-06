axios
   .get('https://rickandmortyapi.com/api/character/')
   .then(response => console.log(response.data))
   .catch(erorr =>
   console.erorr(erorr));