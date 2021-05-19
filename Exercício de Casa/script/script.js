let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

//EXIBINDO APENAS DATA
books.forEach((item)=>{
    let dataAtual = new Date(item.published); 
    let dia = dataAtual.getUTCDate().toString();
    let mes = (dataAtual.getUTCMonth()+1).toString();
    item.published = `${dataAtual.getUTCFullYear().toString()}-${(mes.length === 1) ? '0'+mes : mes}-${(dia.length === 1) ? '0'+dia : dia}`;
});


//ARRAY QUE VAI ARMAZENAR ISBN DOS LIVROS DA LISTA
//se um livro for excluido, ele é excluido do array
//se um livro já existir no array, o usuario não pode adicionar novamente
let isbn = [];


//EXIBINDO LISTA DE LIVROS NA APLICAÇÃO
function printBooks(){
    books.forEach((item)=>{
        if((isbn.find(prop=>prop===item.isbn))===undefined){
            let tableRef = document.getElementById('table');
            let newRow = tableRef.insertRow(-1);
    
            let newCell = newRow.insertCell(0);
            newCell.innerHTML = `<span>${item.title}</span>`
    
            newCell = newRow.insertCell(1);
            newCell.innerHTML = `<span>${item.author}</span>`;

            newCell = newRow.insertCell(2);
            newCell.innerHTML = `<span>${item.isbn}</span>`;
    
            newCell = newRow.insertCell(3);
            newCell.innerHTML = `<span>${item.published}</span>`;
    
            newCell = newRow.insertCell(4);
            if(item.pages===''||item.pages===undefined){
                newCell.innerHTML = `<span>campo não informado</span>`;
                newCell.style.color = 'red';
            }else{
                newCell.innerHTML = `<span>${item.pages}</span>`;
            }
    
            newCell = newRow.insertCell(5);
            newCell.innerHTML = '<img id="remove" src="./img/removeIcon.png" class="remove">';
    
            isbn.push(item.isbn);
        }
    });

};
printBooks();

//VERIFINCANDO SE BOOK JA EXISTE NA LISTA
function verify(book){
    if((books.find(prop=>prop.isbn===book.isbn))===undefined){ 
        books.push(book);
    }
    else{
        alert(`O livro "${book.title}" com isbn: ${book.isbn} já existe! Verifique abaixo!`);
    }
}

//ADICIONANDO LIVRO AO ARRAY BOOKS
function addBookOnList(event){

    event.preventDefault(); 
    let list = 1;
    book = {
        isbn: '',
        title: '',
        author: '',
        published: '',
        pages: ''
    };

    if(document.getElementById('title').value===''){
        alert(`O campo Título é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.title = document.getElementById('title').value;
    }

    if(document.getElementById('author').value===''){
        alert(`O campo Autor é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.author = document.getElementById('author').value;
    }

    if(document.getElementById('isbn').value===''){
        alert(`O campo ISBN é obrigatório, por favor, preencher!`)
        list = 0;
    }else{     
        book.isbn = document.getElementById('isbn').value;
    }

    if(document.getElementById('publishDate').value===''){
        alert(`O campo Data de Publicação é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.published = document.getElementById('publishDate').value;
    }

    if(document.getElementById('pages').value===''){
        book.pages = '';
    }else{
        book.pages = document.getElementById('pages').value;
    }

    if(list === 1){
        verify(book);
        printBooks();
    }
    clear();
};


//LIMPANDO INPUTS
function clear(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('publishDate').value = "";
    document.getElementById('pages').value = "";
}


//REMOVENDO ITEM DA LISTA
document.getElementById('answer').addEventListener('click', (event) => {
    let isbnTarget = event.target.closest('tr').children[2].textContent;
    books.forEach((item, index)=>{
        if(item.isbn === isbnTarget){
            books.splice(index, 1);
            isbn.splice(index, 1);
        }
    });
    if(event.target.className === 'remove'){
        event.target.parentElement.parentElement.remove();
        
    }
});