const mongoose = require('mongoose');
// next of kin
const nextOfKinSchema = new mongoose.Schema({
    _id: false,
    relationship:{
        type:String,
        enum: ["parent", "child", "wife"],
        required: true
    }, 
    kinName:{
        type:String, 
        required: true
    }, 
    kinCellNo:{
        type:String, 
        required:true
    }, 
    kinAddress:{
        type:String,
        required:true
    }
});
// account type
const accounTypeSchema = new mongoose.Schema({
    _id: false,
    role:{
        type:String,
        enum:["AccountHolder", "Partner", "SiletnInvestor"],
        required: true
    }
});
// contract period 
const contractPeriodSchema = new mongoose.Schema({
    _id:false,
    contractPeriod:{
        type: String,
        enum: ["New contract", "Re-New"],
        required:true
    }
});
// client Personal details
const clientSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: true
    }, 
    cellNo:{
        type:String
    },
    address:{
        type: String || Number, 
        required: true
    },
    // comapny details
    comapnyName:{
        type: String,
        required:true
    },
    comapnyEmail:{
        type:String, 
        required: true
    },
    companyCellno:{
        type:String, 
        required: true
    },
   nextKin:[nextOfKinSchema],
   accountType:[accounTypeSchema],
   contractPeriod:[contractPeriodSchema],
//    merketplace details
   marketplace:{
    type:String
   },
   investment:{
    type:String
   }

});

const clientModel = new mongoose.model("clientModel", clientSchema);

module.exports = clientModel;