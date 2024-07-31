import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id:1,
            name: 'table wooden',
            price: 200,
            image:'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:2,
            name: 'table glass',
            price: 300,
            image:'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:3,
            name: 'table plastic',
            price: 100,
            image:'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:4,
            name: 'table metal',
            price: 150,
            image:'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:5,
            name: 'table polyster',
            price: 250,
            image:'https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]


      if (req.query.search) {
        const filteredProducts = products.filter(product => 
        product.name.includes(req.query.search));
        res.send(filteredProducts);
        return;
        
      }

      setTimeout(() => {
        res.send(products);
      }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);   
});