//Node.js
// const http=require("http");
// const port=5050;
// const ls=["hi","bye","hello","hola"];
// http
// .createServer((req,res)=>{
//     const {method,url}=req;
//     if(url=="/about"){
//         if(method=="GET"){
//             res.write(ls.toLocaleString());
//             res.end();
//         }
//         else if(method=="POST"){
//             let body="";
//             req.on("data",(chunk)=>{
//                 body+=chunk;

//             })
//             .on("end",()=>{
//                 body=JSON.parse(body);
//                 console.log(body);
//                 let newls=ls;
//                 newls.push(body.name);
//                 newls.push(body.age);
//                 console.log(newls);
//             })
//             .on("error",()=>{
//                 console.log("There is an error");
//             });
//         }
//         else if(method=="DELETE"){
//             let body="";
//             req.on("error",(err)=>{
//                 console.log(err);
//             })
//             .on("data",(chunk)=>{
//                 body+=chunk;
//             })
//             .on("end",()=>{
//                 body=JSON.parse(body);
//                 let newls=ls;
//                 let index=ls.indexOf(body.item);
//                 newls.splice(index,2);
//                 console.log(newls);
//             })
//         }
//     }
//     else{
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write("<h1>Welcome to node.js<h2>");
//         res.write("<h3>My name is Anirban</h3>");
//         res.write("<table><tr><td>hi</td><td>Snirabna</td></tr></table>")
//         res.end();

//     }
// })
// .listen(port,()=>{
//     console.log("Hey the server has started");
// });

// EXPRESS.JS

const express=require('express');
const port=5050;
const app=express();
const todo=["hi","u","are","best"];
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send("hi everyone");
});
app.post("/about",(req,res)=>{
    let newitem=req.body.name;
    todo.push(newitem);
    console.log(todo);
    res.status(200).send("Message added successfully");

})
app.get("/about",(req,res)=>{
    
    res.json({
        "message":"Page running"
    });
})

app.listen(port,()=>{
    console.log("Server has started at port 5050");
})