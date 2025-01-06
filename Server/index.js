

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const TodoModel=require('./Models/Todo');
const app=express();
const PORT=3000;
app.use(cors(  {
        origin: ["https://todo-list-iota-ten-74.vercel.app"],
        methods: ["POST", "GET","PUT","DELETE"],
        credentials: true
    }));
app.use(express.json());
mongoose.connect('mongodb+srv://dsuyal800:root@cluster0.fdftsrp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');
app.get("/", (req, res) => {
    res.json("Hello");
})
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.put('/update/:id',(req,res)=>{
    
    const {id}=req.params;
    console.log(id);
    const p=req.body.updatedtask;
  //  console.log(p);
    TodoModel.findByIdAndUpdate({_id:id},{task:p})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    
})
app.delete('/delete/:id',(req,res)=>{

    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result)).catch(err => res.json(err))
})
app.listen(3001,
    ()=>{ console.log("Server is running") }
)






