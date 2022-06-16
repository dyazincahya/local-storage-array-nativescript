import { ApplicationSettings } from '@nativescript/core'

function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

export function LSget(index=null, distinct=false, xkey="lsakc"){
    const appSettings = ApplicationSettings
    if(!appSettings.hasKey(xkey)){
        return {
            "success"   : false,
            "message"   : "Data not found!",
            "data"      : []
        };
    } else {
        const arrData = JSON.parse(appSettings.getString(xkey));
        if(index == null){
            if(arrData.length != 0){                
                if(distinct){
                    return {
                        "success"   : true,
                        "message"   : "Data found.",
                        "data"      : multiDimensionalUnique(arrData)
                    }
                } else {
                    return {
                        "success"   : true,
                        "message"   : "Data found.",
                        "data"      : arrData
                    }
                }
            } else {
                return {
                    "success"   : false,
                    "message"   : "Data not found!",
                    "data"      : []
                }
            }
        } else {
            if ( tmpdata[index] !== void 0 ) {
                if(distinct){
                    return {
                        "success"   : true,
                        "message"   : "Data found.",
                        "data"      : multiDimensionalUnique(arrData)[index]
                    }
                } else {
                    return {
                        "success"   : true,
                        "message"   : "Data found.",
                        "data"      : arrData[index]
                    }
                }
            } else {
                return {
                    "success"   : false,
                    "message"   : "Index not found!",
                    "data"      : []
                }
            }
        }        
    }
}

export function LSinsert(data=[], xkey="lsakc"){
    const appSettings = ApplicationSettings
    if(data.length == 0 || Object.keys(data).length == 0){
        return {
            "success"   : false,
            "message"   : "Data is null!",
            "data"      : data
        }
    } else {
        if(!appSettings.hasKey(xkey)){
            let tmp = []
            tmp.push(data)
            appSettings.setString(xkey, JSON.stringify(tmp))

            return {
                "success"   : true,
                "message"   : "Data has been inserted!",
                "data"      : data
            }
        } else {
            if(Array.isArray(data)){
                let extractdata = JSON.parse(appSettings.getString(xkey))

                let ma = data.concat(extractdata)
                appSettings.remove(xkey)          
                appSettings.setString(xkey, JSON.stringify(ma))
            } else {
                let tmpdata = []
                let extractdata = JSON.parse(appSettings.getString(xkey))
                tmpdata.push(data)

                let ma = tmpdata.concat(extractdata)
                appSettings.remove(xkey)
                appSettings.setString(xkey, JSON.stringify(ma))
            }

            return {
                "success"   : true,
                "message"   : "Data has been inserted.",
                "data"      : data
            }
        }
    }
}

export function LSupdate(data={}, index=0, xkey="lsakc"){
    const appSettings = ApplicationSettings
    if(data.length == 0 || Object.keys(data).length == 0){
        return {
            "success"   : false,
            "message"   : "Data is null!",
            "data"      : data
        };
    } else {
        let tmpdata = []
        let extractdata = JSON.parse(appSettings.getString(xkey))
        for (let k = 0; k < extractdata.length; k++) {
            tmpdata.push(extractdata[k])
        } 

        if ( tmpdata[index] !== void 0 ) {
            let newdata = [];
            for (let i = 0; i < tmpdata.length; i++) {
                if(tmpdata[i] != undefined || tmpdata[i] != "undefined"){
                    if(i === index){
                        newdata.push(data)
                    } else {
                        newdata.push(tmpdata[i])
                    }
                } else {
                    newdata.push(data)
                }           
            }

            appSettings.remove(xkey)
            appSettings.setString(xkey, JSON.stringify(newdata))
            
            return {
                "success"   : true,
                "message"   : "Data has been updated.",
                "data"      : data
            }
        } else {
            return {
                "success"   : false,
                "message"   : "Index not found!",
                "data"      : data
            }
        }
    }
}

export function LSremove(index=0, xkey="lsakc"){
    const appSettings = ApplicationSettings
    if(!appSettings.hasKey(xkey)){
        return {
            "success" : false,
            "message" : "Database not found!"
        }
    } else {
        let tmpdata = []
        let extractdata = JSON.parse(appSettings.getString(xkey))
        
        for (let k = 0; k < extractdata.length; k++) {
            tmpdata.push(extractdata[k])
        } 

        if ( tmpdata[index] !== void 0 ) {
            let newdata = [];
            for (let i = 0; i < tmpdata.length; i++) {
                if(tmpdata[i] != undefined || tmpdata[i] != "undefined"){
                    if(i !== index){
                        newdata.push(tmpdata[i])
                    }
                }            
            }
            
            appSettings.remove(xkey)
            appSettings.setString(xkey, JSON.stringify(newdata))

            return {
                "success" : true,
                "message" : "Data has been deleted."
            }
        } else {
            return {
                "success" : false,
                "message" : "Index not found!"
            }
        }
    }
}

export function LSdrop(xkey="lsakc"){
    const appSettings = ApplicationSettings
    if(!appSettings.hasKey(xkey)){
        return {
            "success" : false,
            "message" : "Storage not found!"
        }
    } else {
        appSettings.remove(xkey);
        
        return {
            "success" : true,
            "message" : "Storage has been dropped."
        }
    }
}
