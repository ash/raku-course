---
title: The note routine
---

{% include menu.html %}

The `note` routine prints its arguments to the standard errors stream. In the rest, it is similar to [`say`](../say).

1. Calls the `gist` method on its arguments.
1. Adds a newline character.
1. Converts the result to UTF-8.
1. Sends it to the `STDERR` stream.

```raku
my $x = 42;
note "Current value of \$x is $x";
```

Confirm that this program does not send the message to `STDOUT`:

```
$ raku t.raku > /dev/null
Current value of $x is 42
```

If no argument is passed to `note`, it prints `Noted` as the default message.

{% include nav.html %}
