---
title: Solution to ‘Trying IntStr’
---

{% include menu.html %}

Let us take a look at the program again.

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

There are three scalar variables created there, two of them, `$i` and `$s` are typed variables. That means that `$i` can only store integers and `$s` can only store strings.

As we saw from [the exercises](/raku-course/what/exercises) from one of the previous section, `prompt` return type depends on the characters we typed. If the input string can represent an integer number, the result will be of the `IntStr` type, which is both `Int` and `Str`, and thus can be assigned to either an `Int` or a `Str` variable. So, if you enter, say, `1234`, the program does not break.

    $ raku exercises/typed-variables/intstr.raku
    Enter something: 1234
    1234
    1234

If you enter a string that cannot be an integer number, the program breaks at the moment we assign `$input` to `$i`:

    $ raku exercises/typed-variables/intstr.raku
    Enter something: Hello, World!
    Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
      in block <unit> at intstr.raku line 2

Notice that you get an error even if the input string can be casted to a number, but not integer. As it is not possible to store a floating-point or a rational number in an integer container, Raku will emit an exception:

    $ raku exercises/typed-variables/intstr.raku
    Enter something: 3.14
    Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
      in block <unit> at intstr.raku line 2

The second assignment, `$s = $input`, will never break as a string can take any input.

🦋 You can find the source code in the file [intstr.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/intstr.raku).

{% include nav.html %}
