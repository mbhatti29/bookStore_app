import React from 'react';
// import logo from './logo.svg';
// import png from './trans-book.png'
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
        this.setState({
          books: res.items
        })
      })

  }

  render() {

    const booksMapped = this.state.books.map((book, i) => (
    <div key={i} onClick={this.addToLibrary}>
      <p>{book.volumeInfo.title}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail'/>
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
