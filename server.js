const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const colors=require('colors')
const connectDB = require('./config/db')
// Route Files
const bootcamps=require('./Routes/bootcamps')
// Load env vars
dotenv.config({path:'./config/config.env'})
// Connect to database
connectDB()
const app=express()
// Dev logging middleware
if(process.env.NODE_ENV='development'){
    app.use(morgan('dev'))
}
// Mount Routes
app.use('/api/v1/bootcamps',bootcamps)
const PORT=process.env.PORT ||5000

const server=app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode in ${PORT}`.yellow.bold))

process.on('unhandledRejection',(err,promise)=>{
console.log(`Error: ${err.message}`.red);
server.close(()=>process.exit(1))
})