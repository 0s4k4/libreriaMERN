import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error en ShowBookDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/books/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error en ShowBookDetails_deleteClick");
      })
  };


  render() {

    const book = this.state.book;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Titulo</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Autor</td>
            <td>{ book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ book.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publicador</td>
            <td>{ book.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Fecha de publicacion</td>
            <td>{ book.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Descripcion</td>
            <td>{ book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Mostrar lista de libros
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Registro de libros</h1>
              <p className="lead text-center">
                  Ver informacion de libros
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Eliminar libro</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Editar libro
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails;