---
title: The solution of ’Kilometres to miles‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 You can find the source code in the file [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Output

```
6.21
```

## Comments

1. The conversion does not depend on any particular object, so it is written as a class method and called directly on `Converter`.

1. A class method can still take parameters: here it receives the number of kilometres and returns the miles.

{% include nav.html %}
