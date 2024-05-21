---
title: Тест — Извикване на функция
---

{% include menu.html %}

## 1

Имайки следната функция:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Как я извиквате?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

За следната функция:

```raku
sub x {
    return 42;
}
```

Изберете правилните извиквания на функцията.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Скобите около аргументите на `say` са пропуснати.
1 | say(x());
0 | my $v = x (); | Интервал преди `()` прави `()` аргумент.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}