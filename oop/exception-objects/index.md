---
title: Exception objects
---

{% include menu.html %}

An exception is an object, like any other in Raku. When you write `die 'something failed'`, Raku wraps your message in an exception object of the type `X::AdHoc`.

Inside a `CATCH`, you can inspect that object. Its type comes from `.^name`, and its text from `.message`:

```raku
{
    die 'something failed';

    CATCH {
        default {
            say .^name;   # X::AdHoc
            say .message; # something failed
        }
    }
}
```

Knowing the type lets you treat different errors differently. Raku’s built-in exceptions have specific types, whose names start with `X::`, and you can match on them with `when`, just as you matched values in a `given`/`when` block:

```raku
{
    die 'something failed';

    CATCH {
        when X::AdHoc {
            say 'an ad-hoc error: ' ~ .message;
        }
        default {
            say 'some other error';
        }
    }
}
```

This prints `an ad-hoc error: something failed`, because the exception matched the `X::AdHoc` type. Matching on the type is the basis of handling specific errors — the idea the section on [custom exceptions](/oop/custom-exceptions) builds upon.

{% include nav.html %}
