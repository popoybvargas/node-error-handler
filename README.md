# zv-node-error-handler
Error handling for a NodeJs-Express application.

### Usage
```
import { errorHandler } from 'zv-node-error-handler';  
  
...then just before the end of the main application script, e.g. app.ts/js, use as middleware:  
  
app.use(errorHandler);
```