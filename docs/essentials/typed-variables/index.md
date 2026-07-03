---
title: Typed variables
---

{% include menu.html %}

In Raku, a scalar variable (or, a scalar container) can keep a single object of different types. For example, the same variable can first contain a number, and then a string:

```raku
my $var = 42;
$var = 'Hello';
```

Here is another example of mixing different data types in the same expression:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

This is, probably, not the best coding practice, but it is a perfectly valid Raku program.

Nevertheless, Raku allows you to specify what a given variable may keep. There are more details in the below topics.

{% include nav.html %}
