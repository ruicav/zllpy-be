const models = require('./models')

const Project = models.Project
const User = models.User

// CRIANDO USUARIOS

User.bulkCreate([
  { email: 'foo@foo.com', name: 'foo' },
  { email: 'foo2@foo.com', name: 'foo2' },
])
  .then(users=>console.log(JSON.stringify(users)))
  .catch((err) => {
    console.log("Error while users creation : ", err)
  })

// CRIANDO PROJETOS E OS ADICIONANDO AOS USUARIOS

Project.bulkCreate([
  {
    name: 'Projeto A'
  },
  {
    name: 'Projeto B'
  }
])
  .then((projects) => {
     // 
     User.findAll({ include: ['projects'] })
      .then((users) => {
        [...users].forEach(user => {
          user.setProjects(projects)
            .then((joined) => console.log(JSON.stringify(joined)))
            .catch((err) => console.log("Error while joining Users and Projects : ", err))
        })
      })
      .catch((err) => console.log("Error while Users search : ", err))
  })
  .catch((err) => console.log("Error while Project creation : ", err))


// CRIANDO TIMEKEEPERS

const models = require('./models')

const Timekeep = models.Timekeep

Timekeep.bulkCreate([
  { userProjectId: 1, workingDate: new Date().getDate(), workingTime: 3 },
  { userProjectId: 4, workingDate: new Date().getDate(), workingTime: 6 }
])
  .then((timekeepers) => console.log(`timeKeepers>>>${JSON.stringify(timekeepers)}<<<`))
  .catch((err) => {
    console.log("Error while timekeerpes creation : ", err)
  })


// CHECANDO TIMEKEEPERS

const models = require('./models')

const Timekeep = models.Timekeep

Timekeep.findAll()
  .then(timekeepers => console.log(`${JSON.stringify(timekeepers)}`))