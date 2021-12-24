require('dotenv').config()

var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.APP_BDD, options, 
function(err) {
    if(err){
       console.log(err); 
    }else{
        console.log("******************************** connecté a la base de données ************************************")
    }
 
}
);