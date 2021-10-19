# valid9
### An easier and clearer way to validate

Built for Vue but works as any validation that takes a condition followed by a string;


```
import { initiateRules } from 'valid9';

const ruleSet = {
  function isEqualTo(val, param1){
    const condition = val === param1;
    const msg = `${val} does not equal ${param1}`;
    
    return { condition, msg }
  }
}

const v9 = initiateRules(ruleSet);
```

In Vue template;

```
<q-input
  :rules=[isEqualTo('someValue')]
/>


```


```
import { initiateRules } from 'valid9';

const v9 = initiateRules();
```

This comes with a set of default rules mainly pertaining to string len


