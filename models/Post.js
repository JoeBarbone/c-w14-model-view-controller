const { Model, DataTypes, UniqueConstraintError } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

// create our model by exending the Model and DataTypes from Model
class Post extends Model {}

// define table columns and configuration
Post.init (
    {
        
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: User.id
        }
    },
    {   

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'    
    }
);

module.exports = Post;