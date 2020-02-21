# use-throttled-function
Custom React.js hook for throttling functions. Keeps a consistent timer throughout re-renders.

# Usage

```
import { useThrottledFunction } from './use-throttled-function.js'
const throttledFunc = useThrottledFunction(function,time,limit(optional))

```

function - will be throttled
time - milliseconds of time before next allowed function call
limit - ammount of times function can be used in the ammount of time specififed in previous parameter

