const Book = require('../models/Books')


const createBook = async(req, res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
        ){
            return res.status(400).send({message: "Send all required field"})
        }
        const newBook ={
            title: req.body.title,
            author:req.body.author,
            publishedYear: req.body.publishedYear,
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            totalNumberOfBooks: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
}

const getAbook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        return res.status(200).json(book)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const updateAbook = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            res.status(400).send({message:'Books not found'})
        }
        return res.status(200).send({message:"Book info updated successfully!"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message})
    }
}

const deleteAbook =  async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.status(400).send({message:'Books not found'})
        }
        return res.status(200).send({message:"Book deleted successfully!"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message})
    }
}

module.exports = { createBook, getAllBooks, getAbook, updateAbook, deleteAbook}