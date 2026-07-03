---
title: Matching ranges, types, and conditions
---

{% include menu.html %}

A `when` block does not only compare for equality. It performs a _smart match_ between the topic and the value you give it, so you can match against ranges, types, and conditions, not just single values.

## Ranges

A range matches when the topic falls inside it. This makes `given`/`when` a natural fit for grouping numbers into bands:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

The value `75` falls into the range `70..79`, so the program prints:

```
C
```

## Types

A type matches when the topic is of that type. This lets you branch on what kind of value you have:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Since `$value` holds a string, the program prints:

```
a string
```

## Conditions

You can also use a comparison directly. Inside the `when`, the topic is available as `$_`, so a condition such as `$_ < 0` matches when it is true:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Here the first `when` matches, and the program prints:

```
negative
```

{% include nav.html %}
