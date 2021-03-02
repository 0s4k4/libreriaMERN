const express = require('express');
const router = express.Router();

//cargar modelo libro
const Book = require('../../models/Book');

//@route GET api/books/test
//@description test books route
//@access Public

router.get('/test',(re1,res) => res.send('book route probando!!'));

//@route get api/books
//@description get all books
// @access public
  router.get('/', (req, res) => {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(404).json({ nobooksfound: 'Libros no encontrados' }));
  });

  //@route get api/book/:id
  //@description get single book by id
  //@access public
  router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'libros no encontrados' }));
  });

  //@route get api/books
  //@descripcion add/save book
  //@access public

  router.get('/',(req, res) => {
      Book.create(req.body)
      .then(book => res.json({msg: 'Libro añadido exitosamente'}))
      .cath(err => res.status(400).json({error: 'incapaz para añadir este libro'}))
  })

  //@route get api/book/:id
  //@description update book
  //@acces public
  
  router.put('/',(req, res) => {
      Book.findByIdAndUpdate(req.params.id, req.body)
       .then(book => res.json({ msg: 'actualizacion exitosa!!'}))
       .catch(err =>
        res.status(400).json({error: 'imposible añadir a la base de datos'})
       );
  });

  //@route get api/books/:id
  //@description delete book  by id
  //@access public

  router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'libro eliminado existosamente' }))
      .catch(err => res.status(404).json({ error: 'libro no eliminado' }));
  });
  
  module.exports = router;


