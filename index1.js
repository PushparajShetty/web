

import express from "express"
import cors from "cors"
import bodyparser  from "body-parser"
import { MongoClient } from 'mongodb'
// var urlencodedparser = bodyparser.urlencoded({extended:true})

const app=express()
app.use(cors());
app.use(express.json())

app.post("/submit",function(req,res)
{
    const data = req.body;
   
   console.log(data)

   
   
   res.send("");


    
    MongoClient.connect("mongodb://localhost:27017",function(err,client){
        if(err)
        console.log(err)
        else{
            
            const db=client.db("simple_db")
            db.collection("sign_up").insertOne(data,function(err,data)
            {
                if(err)
                console.log(err)
                else
                console.log("good")
                client.close()
            })

        }

}) 

});

app.post("/login",function(req,res){

    const data = req.body;
   
    console.log(data)
    MongoClient.connect("mongodb://localhost:27017",function(err,client){
        if(err)
        console.log(err)
        else{
            
            const db=client.db("simple_db")
             db.collection("sign_up").findOne(data,function(err,detail)
            {
                if(err)
                console.log(err)
                else
                console.log(detail)
                res.json(detail)
                client.close()
            })

        }

}) 
})
app.get("/ticket/:id",function(req,res)
{

    
    var data = req.params.id;
   data=parseInt(data)
   //console.log(data)

   MongoClient.connect("mongodb://localhost:27017",function(err,client){
    if(err)
    console.log(err)
    else{
        
        const db=client.db("simple_db")
         db.collection("movie").findOne({"movie_id":data},function(err,detail)
        {
            if(err)
            console.log(err)
            else
            
            res.json(detail.seatsus)
            client.close()
        })

    }

}) 
   
   
});
app.put("/ticket/:id",function(req,res)
{
    const body=req.body;
    const arr=req.body.data;
    var id = req.params.id;
    id=parseInt(id)
    MongoClient.connect("mongodb://localhost:27017",function(err,client){
        if(err)
        console.log(err)
        else{
            var i;
            
            const db=client.db("simple_db")
        
            db.collection("movie").findOne({"movie_id":id},function(err,detail)
            {
                var seatsav_array=[]
            var seatsus_array=[]
            var index;
                if(err)
                console.log(err)
                else
                seatsav_array=detail.seatsav
                seatsus_array=detail.seatsus
                for(i in arr)
                {
                    index= seatsav_array.indexOf(arr[i])
                    seatsus_array.push(arr[i])
                    seatsav_array.splice(index,1)
                }
                console.log(seatsus_array)
                console.log(seatsav_array)
                db.collection("movie").updateOne({"movie_id":id},{$set:{"seatsav":seatsav_array,"seatsus":seatsus_array}},function(err,result)
                {
                    if(err)
                    console.log(err)
                    else{
                        client.close()
                        }
                }
                )
                
            })

        }
}) 

});


 


app.listen(8080,function(){
	
console.log("server is running")
})