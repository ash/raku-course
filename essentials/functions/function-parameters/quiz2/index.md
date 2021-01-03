---
title: Quiz — Passing arguments
---

{% include menu.html %}

## 1

There is a function with the following definition:

```raku
sub f {
    say 'Function called';
}
```

Check the correct calls of this function.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Function does not accept any arguments, but one is received here.
0 | f &apos;&apos;; | The same as above.
1 | f(); | This is fine, no arguments passed;
0 | f (); | Here, one argument (an empty list) is passed.
0 | f(10);

## 2

There is another function.

```raku
sub g($x, $y) {
    say "Called g($x, $y)";
}
```

Check the correct calls of this function.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | No comma between arguments.
0 | g(10); | Too few arguments: two required, one passed.
1 | g 10, 20; | Parentheses are not required when it is ambiguous.
0 | g(10,); | Not a valid syntax.
0 | g(,20); | Not a valid syntax either.
0 | g(&apos;10, 20&apos;); | A single string argument passed.
1 | g(&apos;word&apos;, 20); | Parameters can be of different types.
0 | g(10, 20, 30); | Too many arguments.
0 | g 10, 20, 30; | Same here: three arguments are passed.


{% include quiz.html %}

{% include nav.html %}
