const search = document.getElementById('search');
const searchButton =document.getElementById('search-button');
const input = search.value;
search.addEventListener('keyup', (event)=>{
    event.preventDefault();
    if(event.keyCode ===13) {
        searchButton.click();
    }
});

const goSearch = () =>{
    const url = 'api/search';
    axios.post(url, input,{})
        .then(function(response){

        })
};