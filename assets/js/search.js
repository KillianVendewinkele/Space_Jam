const articles = [

    {name : 'React JS'},
    {name : 'UX/UI'},
    {name : 'PHP 8'},
    {name : 'Node JS'},
    {name : 'My SQL'},
    ];
    
    const searchinput = document.getElementById('searchInput');
    
    searchinput.addEventListener('keyup', function(){
        const input = searchinput.value;
    
        const result = articles.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    
    
        let suggestion = '';
    
    if (input != ''){
        result.forEach(resultItem =>
            suggestion +=`
                <div class="suggestion">${resultItem.name}</div>
            `
            )}
    
            document.getElementById('suggestions').innerHTML = suggestion;
    })