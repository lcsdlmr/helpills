var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://helpills:Chiquette13@cluster0.lrahe.mongodb.net/helpills?retryWrites=true&w=majority', options, 
function(err) {
    if(err){
       console.log(err); 
    }else{
        console.log("******************************** connecté a la base de données ************************************")
    }
 
}
);