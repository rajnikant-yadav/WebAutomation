import express  from "express";
import swagger from './swagger.js'
import swaggerUi from "swagger-ui-express";

import root from "./routes/root.js"
const app=express()
const port=process.env.port || "3000"

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swagger));

// load routes
app.use("/",root)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})