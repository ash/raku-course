---
title: Allomorphs
---

{% include menu.html %}

Consider the following program. Before running it, can you tell which input values would break it and at which line?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

There are three scalar variables created here. Two of them, `$i` and `$s` are typed variables. That means that `$i` can only store integers and `$s` can only store strings.

The return type of `prompt` depends on the characters we typed. If the input string can represent an integer number, the result will be of the `IntStr` type, which is _both_ `Int` and `Str`, and thus can be assigned to either an `Int` or a `Str` variable. So, if you enter, say, `1234`, the program does not break.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

The `IntStr` type is an example of the so-called _allomorph_ — a data type that combines two other types. Here are a few more examples.

If you enter a string that cannot be an integer number, the program breaks at the moment we assign `$input` to `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Notice that you get an error even if the input string can be cast to a number, but not an integer. As it is not possible to store a floating-point or a rational number in an integer container, Raku will emit an exception:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

The second assignment, `$s = $input`, will never break as a string can take any input.

🦋 You can find the source code of this program in the file [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}
