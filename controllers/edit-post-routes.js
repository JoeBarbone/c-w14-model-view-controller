const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post } = require("../models");

router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        
        if (!dbPostData) {
            res.status(404).json({ message: "No post found with this id" });
            return;
        }
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.put("/:id", (req, res) => {

    // pass in req.body instead to only update what's passed through
    Post.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});






module.exports = router;