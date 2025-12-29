import express from 'express';
import {dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express(); 
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
    // console.log(__dirname +"public/index.html" )
    res.sendFile(__dirname + "/public/index.html" )
})

app.get('/api/quote', async (req, res)=>{ 
      console.log("✅ /api/quote hit");

   try{

    var quote = await getQuoteFromApi();
    
    // console.log(quote);
     res.status(200).json(quote)
   }catch(err){
    console.error(err);
   }
})



async function getQuoteFromApi(){

    var r = await randomQuoteNumber();
    const allQuotes = await readQuotesFile();
    // console.log();
    return allQuotes[r];
}

function randomQuoteNumber(){
            var randomQuoteNumber = 1 + Math.floor(Math.random() * 500);
    return randomQuoteNumber;
}
function readQuotesFile(){
    

return new Promise((resolve, reject)=>{
    
    fs.readFile(__dirname+"/quotes_500.min.json", "utf-8",(err,data) =>{
    try{
         resolve(JSON.parse(data));
    }catch(err){
        reject(err);
    }
    });
}) 
}





























app.listen(port , () => {
    console.log(`app listening on port   ${port}`)  
})