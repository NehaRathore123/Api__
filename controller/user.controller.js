import '../model/connection.js';
import userSchemaModel from '../model/user.model.js';

export var save= async(req,res,next)=>{
    var userdetails = req.body
    var userList= await userSchemaModel.find();
    var l=userList.length;
    var _id =l==0?1:userList[l-1]._id+1;
    
userdetails = {...userdetails,"_id":_id,"info":Date()};
//console.log(userdetails); use to print the detail in console
try
{
    var user= await userSchemaModel.create(userdetails);
   res.status(201).json({"status":true});
}
catch(err)
{
    console.log(err);
    res.status(500).json({"status":false});
}
};