import express  from "express";
import root from "./routes/root.js"
const app=express()
const port=process.env.port || "3000"

// load routes
app.use("/",root)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})