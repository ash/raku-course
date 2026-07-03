---
title: The solution of ’Relaxing strict‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 You can find the source code in the file [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Output

```
30
```

## Comments

1. `no strict` switches off the requirement that variables be declared, so `$a` and `$b` may be assigned without a `my`. Under the default `strict`, each of those lines would be a compile-time error.

1. Once assigned, the variables behave normally, so `$a + $b` is `30`. The relaxation is lexical — it lasts only to the end of the scope where `no strict` appears.

1. This is a demonstration, not a recommended practice: `strict` is on by default for a good reason — it catches typos in variable names at compile time. In real code, keep it on and declare your variables with `my`.

{% include nav.html %}
