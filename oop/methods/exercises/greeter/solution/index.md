---
title: The solution of ’A reversed word‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 You can find the source code in the file [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Output

```
ukaR
```

## Comments

1. The `reversed` method reaches the object’s own `text` through its accessor `$.text` and calls the built-in `flip` on it, which returns the string reversed.

1. The method is called directly on the freshly created `Word` object. Nothing is stored back — `reversed` simply computes and returns a new value from the attribute.

1. Note that inside the class, you can read the variable directly without employing the accessor:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
