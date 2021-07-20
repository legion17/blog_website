const express = require('express');
const mongoose = require('mongoose')
const blogRoutes=require('./routes/blogRoutes');

// express app
const app = express();

//DataBase connection link(string).
const dburl = "mongodb+srv://nilu_810:mypass@cluster0.fc4x7.mongodb.net/blogdata?retryWrites=true&w=majority";
//Connect using mongoose
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => {
    // listen for requests
    app.listen(3000);
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err)
  })

//register view engine
app.set('view engine', 'ejs');

//static files to be made availble to front end to make the style.css in a new file
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//adding a new blog from code (not using the front end thing)
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 11',
//     snippet: 'about my new blog11',
//     body: 'more about my new blog121'
//   })

//   blog.save()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });


//mongoose and routing
app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about', {
    title: 'About'
  });
});
app.get('/contact', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('contact', {
    title: 'Contact-Us'
  });
});
// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});
//blog Routes
app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});