# Local Storage Array For Nativescript
This is a simple Local Storage Array for Nativescript, integrated by ```application-settings module```. With this you can add some array in localstorage.

## Features
- get all data or by index
- insert
- update
- delete
- truncate
- drop

## Documentation

### GET
##### Method
```get(index, distinct, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                                                              |
|----------|---------|---------------|------------------------------------------------------------------------------------------|
| index    | number  | null          | For get data by index. If you want get all data, you can fill ```null``` for this field. |
| distinct | boolean | false         | Set ```TRUE``` if you want hide duplicate data in your array.                            |
| xkey     | String  | lsakc         | You can make new your xkey here.                                                         |

##### Example
``` javascript
// you can adjust that require path
const lsa = require('./localstorage_array');

let a = lsa.get();
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### INSERT
##### Method
```insert(data, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                      |
|----------|---------|---------------|--------------------------------------------------|
| data     | json    | {}            | Add your data here, data must be in json format. |
| xkey     | String  | lsakc         | You can make new your xkey here.                 |

##### Example
``` javascript
// you can adjust that require path
const lsa = require('./localstorage_array');

let mydata = {
  "name"  : "kang cahya",
  "hobby" : "hiking",
  "color" : "blue"
};
let a = lsa.insert(mydata);
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### UPDATE
##### Method
```update(data, index, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                      |
|----------|---------|---------------|--------------------------------------------------|
| data     | json    | {}            | Add your data here, data must be in json format. |
| index    | number  | 0             | This is a key for update your data.              |
| xkey     | String  | lsakc         | You can make new your xkey here.                 |

##### Example
``` javascript
// you can adjust that require path
const lsa = require('./localstorage_array');

let mydata = {
  "name"  : "kang cahya",
  "hobby" : "hiking",
  "color" : "blue"
};
let a = lsa.update(mydata, 1);
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### DELETE
##### Method
```delete(index, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                      |
|----------|---------|---------------|--------------------------------------------------|
| index    | number  | 0             | This is a key for delete your data.              |
| xkey     | String  | lsakc         | You can make new your xkey here.                 |

##### Example
``` javascript
// you can adjust that require path
const lsa = require('./localstorage_array');

let a = lsa.update(3);
if(a.success){
  console.log(a.message);
} else {
  console.log(a.message);
}
```
