---
title: 'Quiz: Boolean operations'
---

{% include menu.html %}

In each of the sections below, select the correct answer that the program prints.

## 1

Here is the program:

```raku
my $value = True && False;
say $value;
```

What does it print?

{:.quiz}
0 | True
1 | False

## 2 

What does the second program print?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

What is the output of this program?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Comments

In the second and third programs, we have expressions with three Boolean values. The result depends on the order in which the operations are executed. The `&&` operator has tighter precedence than `||`, so it is executed first.

{% include nav.html %}
