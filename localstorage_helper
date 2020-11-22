exports.get = function(index="all"){
    if(index == "all"){
        return {
            "success"   : true,
            "message"   : "Data found.",
            "data"      : gLocalstorage
        };
    } else {
        if ( gLocalstorage[index] !== void 0 ) {
            return {
                "success"   : true,
                "message"   : "Data found.",
                "data"      : gLocalstorage[index]
            };
        } else {

            return {
                "success"   : false,
                "message"   : "Index not found!",
                "data"      : []
            };
        }
    }
};

exports.insert = function(data=[]){
    if(data.length == 0 || Object.keys(data).length == 0){
        return {
            "success"   : false,
            "message"   : "Data is null!",
            "data"      : data
        };
    } else {
        gLocalstorage.push(data);

        return {
            "success"   : true,
            "message"   : "Data has been inserted.",
            "data"      : data
        };
    }
};

exports.update = function(data=[], index=0, xkey="ldkc"){
    if(data.length == 0 || Object.keys(data).length == 0){
        return {
            "success"   : false,
            "message"   : "Data is null!",
            "data"      : data
        };
    } else {
        if ( gLocalstorage[index] !== void 0 ) {
            delete gLocalstorage[index];

            let newdata = [];
            for (let i = 0; i < gLocalstorage.length; i++) {
                if(gLocalstorage[i] != undefined || gLocalstorage[i] != "undefined"){
                    newdata.push(gLocalstorage[i]);
                } else {
                    newdata.push(data);
                }           
            }

            gLocalstorage.splice(0);
            gLocalstorage.push(newdata);
            
            return {
                "success"   : true,
                "message"   : "Data has been updated.",
                "data"      : data
            };
        } else {
            return {
                "success"   : false,
                "message"   : "Index not found!",
                "data"      : data
            };
        }
    }
};

exports.delete = function(index=0){
    if ( gLocalstorage[index] !== void 0 ) {
        delete gLocalstorage[index];
        
        let newdata = [];
        for (let i = 0; i < gLocalstorage.length; i++) {
            if(gLocalstorage[i] != undefined || gLocalstorage[i] != "undefined"){
                newdata.push(gLocalstorage[i]);
            }            
        }
        
        gLocalstorage.splice(0);
        gLocalstorage.push(newdata);

        return {
            "success" : true,
            "message" : "Data has been deleted."
        };
    } else {
        return {
            "success" : false,
            "message" : "Index not found!"
        };
    }
};
 
exports.clear = function(){
    gLocalstorage.splice(0);
    
    return {
        "success" : true,
        "message" : "Storage has been clear."
    };
};
