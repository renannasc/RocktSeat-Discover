const bookByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kyosaki e Sharon L. Lechter",
            },

        ],
    },

    {
        category: "Inteligencia Emocional",
        books:[
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "August Cury"
            },
            {
                title: "Os 7 habitos das pessoas latamente eficazes",
                author: "Stephen R. covey"
            },

        ],
    },
];

const totalCategories = bookByCategory.length
     
   


console.log(totalCategories)

for (const category of bookByCategory) {
    console.log('Categorias cadastrada: ' + category.category)
    console.log('Total de livros: ' + category.books.length)    
}

function countAuthors(){
    let authors = []

    for (const category of bookByCategory) {
        for (const book of category.books ) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
        
        
    }
    console.log('Total de autores:', authors.length, authors)
}

countAuthors()


function booksOfAgusto(){
    let books = []

    for (const category of bookByCategory) {
        for (const book of category.books) {
            if(book.author == 'Augusto Cury'){
                books.push(book.title)
            }
        }
        
    }

    console.log('Livros do autor Augusto Cury: ', books.length, books)
}


booksOfAgusto()

function booksOfAuthor(author){
    let books = []

    for (const category of bookByCategory) {
        for (const book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log('Livros do autor: ' + author +' ' + books)

}
console.log('Pesquisa de livros')
booksOfAuthor('Stephen R. covey')

