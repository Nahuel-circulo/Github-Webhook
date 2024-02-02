import express, { Request, Response } from 'express';
import { envs } from './config';

(()=>{
  main()
})()


function main(){

  const app = express();
  
  app.post('/api/github',(req:Request,res:Response)=>{
    res.json('Github Endpoint')
  })


  app.listen(envs.PORT,()=>{
    console.log(`App running on http://localhost:${envs.PORT}`)
  })

}