---
title: The solution of ’Temperature conversion‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 You can find the source code in the file [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Output

```
212
```

## Comments

1. The method works with the object’s own `degrees` attribute, so the formula does not need any argument passed in.

1. For `100` degrees Celsius, the result is `212` degrees Fahrenheit.

{% include nav.html %}
