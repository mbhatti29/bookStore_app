import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: '',
      books: [],
      library: [],
    }
  }
  

  componentDidMount() {
  
  }

  searchValue = (event) => {
    this.setState({
      search : event.target.value
    })
  }

  searchBookInput = (event) => {
    event.preventDefault()

    this.state.search && 
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          books: res.items
        })
      })

  }

  render() {

    const booksMapped = this.state.books.map((book, i) => (
    <div key={i} className='book' onClick={this.addToLibrary}>
      <p>{book.volumeInfo.title}</p>

        <div className='image-container'><a href={book.volumeInfo.infoLink}><img src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail' /></a>
          <a href={book.volumeInfo.infoLink}><div className='after'>{book.volumeInfo.description.substr(0,250)}</div></a>
        </div>
    </div>))

    return (
      <div>
        <form onSubmit={this.searchBookInput}>
          <input onChange={this.searchValue}></input>
          <button>Submit</button>
        </form>
        <div className='bookDiv'>
          {booksMapped}
        </div>
      </div>
    )
  }
}


export default App;
