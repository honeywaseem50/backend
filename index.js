 import express from "express";

 const app = express();

app.use(express.json());

 let products = [
    {
        id:1,
        name:"HP HS45 Headphone",
        price:4500,
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiM7PmVraK6fgKLzRg5Jgy8Th9Ha5lG2mn8E1dKa7CQ&s=10",
        desc: "HP HS45 Headphone is a high-quality audio device that delivers exceptional sound clarity and comfort."
    },
    {
        id:2,
        name:"iphone 18 pro max",
        price:605000,
        imageURL:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEorASor4hI2OLnWYzKB844vT-K0TRw9dctw7LusEamErMdAshSpHf5bV6&s=10",
        desc: "The iPhone 18 Pro Max is the latest flagship smartphone from Apple, featuring a stunning display, powerful performance, and advanced camera capabilities."
    }, 
 ];

app.get("/products", (req, res) => {
    try{
        res.status(200).json(products);
    } catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
 });

//push(201) means adding new product to the products array.
 app.post("/products", (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
 });

 app.get("/weather", (req, res) => {
    res.status(200).json({
        city:"Lahore",
        temp_c:30,
    });
 });

 app.listen(5050, () => {
    console.log("Server is running on port 5050")
 });

 