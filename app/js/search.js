const goSearch = () =>{
    const search = document.getElementById('search').value;

    let input = [];

    input.push({
        search
    });

    const url = 'api/search';
    axios.post(url, input)
        .then(function(response){
            console.log(response);
        }).catch(function(error){
        if (error){
            console.log(error);
        }
    });
};