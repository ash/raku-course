---
title: The solution of ’Bulk pricing‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 You can find the source code in the file [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Output

```
normal price
bulk price
```

## Comments

1. The first candidate has a `where` clause that only accepts quantities of 10 or more, so the call `price(25)` is dispatched to it.

1. The second candidate has no condition and acts as the catch-all, so `price(3)` goes there.

{% include nav.html %}
