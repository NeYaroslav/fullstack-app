module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNul: false,
    },
  })

  return Posts
}