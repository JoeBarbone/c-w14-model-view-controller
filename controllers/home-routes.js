const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');




//get all posts for homepage
router.get("/", (req, res) => {
  console.log('======================');
  Post.findAll({
    include: [
        {
          model: User,
          attributes: ['id', 'username'] //'created_at']
        }
      ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});






// get all posts for specific user
router.get("/dashboard", (req, res) => {
    console.log('======================');
    Post.findAll({
        where:{
            user_id: 1
        },
        include: [
          {
            model: User,
            attributes: ['id', 'username'] //'created_at']
          }
        ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render("homepage", {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });





router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  








router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "title",
      "post_content",
      "user_id"
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;











// attributes: [
    //   "id",
    //   "title",
    //   "post_content",
    //   "user_id"
    //   //'created_at'
    //   //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]