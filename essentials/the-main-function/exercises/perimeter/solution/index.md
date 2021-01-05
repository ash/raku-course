---
title: 'Solution: Perimeter of a rectangle'
---

{% include menu.html %}

This program must be able to take either one or two command-line arguments. A new trick is shown in the solution here. The default value of the second variable is set to the value of the first variable: `sub MAIN($a, $b = $a)`. So, instead of creating the two multi-functions, we have a general function that sets the size of the second side if the figure is a square.

## Code

Here is the solution:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'square' !! 'rectangle';
    say "The perimeter of a $shape is $perimeter.";
}
```

🦋 Find the program in the file [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/perimeter.raku).

## Output

Try different input values to test both squares and rectangles.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
The perimeter of a square is 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
The perimeter of a rectangle is 6.
```

Note that there is the third case which should also be tested. If two equal numbers are passed, the program should still understands this was a square:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
The perimeter of a square is 8.
```

{% include nav.html %}
