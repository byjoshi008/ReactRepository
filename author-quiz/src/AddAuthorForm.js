import React from 'react';
import './AddAuthorForm.css';

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddBook = this.onAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    onAddBook(event) {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="addauthorform_input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <div className="addauthorform_input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" className="form-control" value={this.state.imageUrl} onChange={this.onFieldChange} />
            </div>
            <div className="addauthorform_input">
                <label htmlFor="bookTemp">Books</label>
                {this.state.books.map(book => <p key={book}>{book}</p>)}
                <div class="d-flex">
                    <input type="text" name="bookTemp" className="form-control mr-2" value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type="button" className="btn btn-primary" value="Add Book" onClick={this.onAddBook} />
                </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit"></input>
        </form>;
    }
}
function AddAuthorForm({ match, onAddAuthor }) {
    return <div className="addauthorform">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
}

export default AddAuthorForm;