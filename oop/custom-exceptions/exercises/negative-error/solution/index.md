---
title: The solution of ’A negative error‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 You can find the source code in the file [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Output

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Comments

1. `Negative is Exception` makes the class throwable, and its `message` method uses the `n` attribute to build the text.

1. `check` validates its input and throws the custom exception for a negative number. The exception travels out of `check` to the `CATCH` in the calling block, where `when Negative` matches it by type and prints the message. Validating input and signalling bad values with a typed exception is a very common, real use of custom exceptions.

1. The `{ … }` around the call is there because a `CATCH` phaser handles the exceptions thrown in **its own enclosing block**. The block groups the risky `check(-5)` together with the `CATCH` that guards it, so the thrown exception is caught right here, and execution resumes just after the block. Without wrapping them in a block, the `CATCH` would guard the whole program instead — and once it caught the exception the program would simply end, with no natural place to carry on.

1. The final `Negative.new(n => -10).throw` shows the other side of this. It sits **outside** the block, so nothing catches it: the exception propagates all the way to the top, and the program dies, printing the message and a backtrace to standard error and exiting with a non-zero status. That is the default fate of any exception you do not catch — and exactly why the first throw needed a `CATCH` to survive.

{% include nav.html %}
