---
title: Custom exceptions
---

{% include menu.html %}

Besides the built-in `X::` exceptions, you can define your own. A custom exception is a class that inherits from the built-in `Exception` class and provides a `message` method:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` is a normal class — it can have attributes such as `value` — but because it `is Exception`, it can be thrown. You throw it by creating an object and calling `.throw` on it:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

The program prints:

```
Value 600 is too big
```

Inside the `CATCH`, `when TooBig` matches because the thrown object is of that type. A custom exception carries whatever data you give it (here, the `value`), so the handler can build a precise message or react in a specific way — far more useful than a plain string passed to `die`.

This brings together everything in this part: a custom exception is a _class_ (with attributes and a method) that takes part in the exception machinery, ready to signal exactly what went wrong.

{% include nav.html %}
