---
title: The solution of ’Kind of triangle‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 You can find the source code in the file [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Output

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Comments

1. The `unless` guard rejects side lengths that break the triangle inequality
before any classification happens.

1. The number of *distinct* side lengths tells the kind: one means all equal
(equilateral), two means exactly one pair equal (isosceles), three means all
different (scalene).

1. Destructuring the loop variable as `-> ($a, $b, $c)` unpacks each inner list
straight into three named sides.

{% include nav.html %}
