import sequelize from 'src/database'

const getAllMembers = async () => {
  try {
    const members = await sequelize.models.Members.findAll()
    return members
  } catch (err) {
    console.log(err)
  }
}

export default { getAllMembers }
