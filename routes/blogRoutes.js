const express=require('express');
const router=express.Router();
const blogcontroller=require('../controllers/blogcontroller');

//all blog get page
router.get('/',blogcontroller.blog_index);
//to repond to the blog creating page
router.get('/create', blogcontroller.blog_create_get);
//the blog details from blog id
router.get('/:id',blogcontroller.blog_details);
//handling the Post request from the form.Instructs to insert the data from the form into the database.
router.post('/',blogcontroller.blog_create_post);
//delete request
router.delete('/:id', blogcontroller.blog_delete);
  
module.exports=router;