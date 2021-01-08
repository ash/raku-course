---
title: Quiz — Calling a function
---

{% include menu.html %}

## 1

Having the following function:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

How do you call it?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

For the following function:

```raku
sub x {
    return 42;
}
```

Select the correct calls of it.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Parenthese around the arguments of `say` are ommited.
1 | say(x());
0 | my $v = x (); | A space before `()` makes the `()` an argument.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}
