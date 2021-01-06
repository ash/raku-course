---
title: 'Solution: Digital stairs'
---

{% include menu.html %}

The program uses two loops and two ranges to loop over them.

## Code

Here is one of the possible solutions:

```raku
my $size = prompt 'Enter the size: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Find the program in the file [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Output

Run the program and enter the size of the structure:

```console
$ raku exercises/loops/digital-stairs.raku
Enter the size: 7
1
12
123
1234
12345
123456
1234567
```

## Comment

Note how the current digit is printed:

```raku
.print for 1..$n;
```

As with `say`, the `print` routine can be called as a method. In this case, it is called on the [topic variable](/essentials/loops/topic) `$_`.

{% include nav.html %}
