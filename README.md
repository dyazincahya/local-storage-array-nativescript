[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K02WIPN)

# Local Storage Array For Nativescript
This is a simple Local Storage Array for Nativescript, integrated by [application-settings](https://docs.nativescript.org/api-reference/modules#applicationsettings) module. With this you can add some array in localstorage.

## Features
- get all data or by index
- insert
- update
- remove
- drop

## Support
[Nativescript 8](https://nativescript.org) or newer

## Dependency with Module
[application-settings](https://docs.nativescript.org/api-reference/modules#applicationsettings)

## Documentation

- Put [localstorage_array.js](https://github.com/dyazincahya/local-storage-array-nativescript/blob/main/localstorage_array.js) in App Directory.
- And Import the [localstorage_array.js](https://github.com/dyazincahya/local-storage-array-nativescript/blob/main/localstorage_array.js) like this :

```typescript
import { LSget, LSinsert, LSupdate, LSremove, LSdrop } from '../localstorage_array'
```
> you can adjust that Import path if you want


### GET
With this, you can get all data or get data by index.

##### Method
```LSget(index, distinct, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                                                              |
|----------|---------|---------------|------------------------------------------------------------------------------------------|
| index    | number  | null          | For get data by index. If you want get all data, you can fill ```null``` for this field. |
| distinct | boolean | false         | Set ```TRUE``` if you want hide duplicate data in your array.                            |
| xkey     | String  | lsakc         | Your xkey.                                                                               |

##### Example
``` javascript
// you can adjust that Import path
import { LSget } from '../localstorage_array'

let a = LSget();
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### INSERT
For insert new data.

##### Method
```LSinsert(data, xkey)```

##### Param Description
|  Params  | Type             | Default Value | Description                                      |
|----------|------------------|---------------|--------------------------------------------------|
| data     | json or array    | []            | Add your data here, data must be in json format. |
| xkey     | String           | lsakc         | You can make new your xkey here.                 |

##### Example
``` javascript
// you can adjust that Import path
import { LSinsert } from '../localstorage_array'

let mydata = {
  "name"  : "kang cahya",
  "hobby" : "hiking",
  "color" : "blue"
};
let a = LSinsert(mydata);
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### UPDATE
For update data by index.

##### Method
```LSupdate(data, index, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                      |
|----------|---------|---------------|--------------------------------------------------|
| data     | json    | {}            | Add your data here, data must be in json format. |
| index    | number  | 0             | This is a key for update your data.              |
| xkey     | String  | lsakc         | Your xkey.                                       |

##### Example
``` javascript
// you can adjust that Import path
import { LSupdate } from '../localstorage_array'

let mydata = {
  "name"  : "kang cahya",
  "hobby" : "hiking",
  "color" : "blue"
};
let a = LSupdate(mydata, 1);
if(a.success){
  console.log(a.data);
} else {
  console.log(a.message);
}
```

### REMOVE
For delete data by index.

##### Method
```LSremove(index, xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                                      |
|----------|---------|---------------|--------------------------------------------------|
| index    | number  | 0             | This is a key for delete your data.              |
| xkey     | String  | lsakc         | Your xkey.                                       |

##### Example
``` javascript
// you can adjust that Import path
import { LSremove } from '../localstorage_array'

let a = LSremove(3);
if(a.success){
  console.log(a.message);
} else {
  console.log(a.message);
}
```

### DROP
With this, you can delete all data in xkey.

##### Method
```LSdrop(xkey)```

##### Param Description
|  Params  | Type    | Default Value | Description                |
|----------|---------|---------------|----------------------------|
| xkey     | String  | lsakc         | Your xkey.                 |

##### Example
``` javascript
// you can adjust that Import path
import { LSdrop } from '../localstorage_array'

let a = LSdrop("your_xkey");
if(a.success){
  console.log(a.message);
} else {
  console.log(a.message);
}
```

## Author
[Kang Cahya](https://www.kang-cahya.com/)

## License
[MIT License](https://github.com/dyazincahya/local-storage-array-nativescript/blob/main/LICENSE)
