import express from "express";
const app = express();

const port = 3000;

app.use(express.json());


try{
app.listen(port, () =>{
    console.log('Listening to port 3000...');
});

}catch(e){
    console.loh(e);
}

app.get('/marjorie', async(request, response) =>{
    response.status(200).json({message: "Hello, Marjorie!"});


} );