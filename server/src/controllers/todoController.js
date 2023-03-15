import Todo from "../models/models.js"

export async function get(req,res) {
   
   const data= await Todo.find().sort({ createdAt: "-1"})

    if(!data) {
        return res.status(400).json({success:false, message:"Unable to create"})
    }    
    res.json({success:true, data})
}

export async function update(req,res) {
    const {id}= req.params;
    const data =await Todo.findByIdAndUpdate(id,{data:req.body.data},{new:true})


    if(!data) {
        return res.status(400).json({success:false, message:"Unable to create"})
    }

    res.json(data);
}

export async function add(req,res) {
    
    const data = await Todo.create(req.body);
    if(!data) {
        return res.status(400).json({success:false, message:"Unable to create"})
    }

    res.json(data);
}

export async function remove (req,res) {
   
    const data= await Todo.findOneAndDelete({ _id: req.params.id });;

    console.log(data);

   if(!data) {
    return res.status(400).json({success:false, message:"Unable to Delete"})
   }

   res.json(data);
}

export async function toogleRef (req,res) {

    try{

        const { id } = req.params;

        const todoRef= await Todo.findById(id);
    
    
        const todo = await Todo.findOneAndUpdate(
            { _id: id},
            { done: !todoRef.done }
        )
    
        await todo.save();
    
        return res.status(200).json(todo);

    }

    catch (error) {
        return res.status(500).json(error.message);
    }

}

