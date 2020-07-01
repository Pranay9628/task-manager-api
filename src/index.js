const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })


// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){           //cb=callback
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word doc'))
//         }

//         cb(undefined,true)
//         // cb(new Error('file must be pdf'))
//         // cb(undefined,true)

//     }
//  })
// // const errorMiddleware=(req,res,next)=>{
// //     throw new Error ('from the middleware')
// // }

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()    
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5efa69acdca83486c4107bd8')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5efa66398f025d68c8973eb3')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()