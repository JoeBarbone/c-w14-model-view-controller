const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, (req, res) => {
    
    Post.findAll({
    where: {
        // use the ID from the session
        user_id: req.session.user_id
    },
    attributes: [
        'id',
        'title',
        'post_content'
    ],
    include: [
        {
        model: User,
        attributes: ["id", "username"],
        }
    ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true, user_id: req.session.user_id });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});


module.exports = router;