
class Book {
    constructor(title, author, year, lang, amount, redaction) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.lang = lang;
        this.amount = amount;
        this.redaction = redaction;
    }
    getPages() {
        return Math.round(this.amount / 800);
    }

    get pages() {
        return Math.round(this.amount / 800);
    }

}
class Publishing {
    constructor(name, language) {
        this.name = name;
        this.language = language
    }
    createBook(name, title, amount) {
        return new Book(name, title, 2020, this.language, amount, this.name)
    }
}

class Library {
    constructor(name){
        this.name=name;
        this.book=[]
    }
    addBook(book){
        this.book.push(book)
    }
}


const book = new Book("story", "author", 1768, "rus", 765, "hhhouse")
const publishing = new Publishing("hgfd", "rus")
const NBook = publishing.createBook("hfggh", "jhhgjh", 87654);
const library = new Library("hdhhd")
library.addBook(book)
library.addBook(NBook)
console.log(library )

const books = [];
axios.get('books.json').then(({data}) => {
    data.forEach((item) => {
        const book = publishing.createBook(item.name, item.author, item.words);
        library.addBook(book);
    });

    
})



/*book.addBook( new Book("detective", "Joy", 1867, "rus", 984, "bigH"));
book.addBook( new Book("history", "Kol", 1977, "rus", 1234, "bigH"));
book.addBook( new Book("shot stories", "Dern", 1997, "rus", 765, "HHgH"));
book.getPages()
console.log(book)
class Book{
    constructor(title, author, year, lang, amount,redaction,page){
         this.title =title;
         this.author=author;
         this.year=year;
         this.lang=lang;
         this.amount=amount;
         this.redaction=redaction;
this.page= page;

    }
   getPages(){
       return this.page= Math.round(this.amount/800);
   }
}
const book= new Book("story", "author", 1768, "rus", 7654, "hhhouse", 35);

book.getPages()
console.log(book)


class Publishing extends Book{
    constructor(title, author, year, lang, amount,redaction,page,name, language){
      super(title, author, year, lang, amount,redaction,page)
        this.name=name;
this.language=language;
    }
    findBook(){


        /*let title='';
        let author='';
        if(title==this.title && author==this.author  ) return true;
    }
}
console.log(findBook())

//console.log(findBook(story));
const publishingHouse= new Publishing("story", "author", 1768, "rus", 7654, "hhhouse", 35, "press", "rus")
console.log(publishingHouse)
publishingHouse.findBook();*/