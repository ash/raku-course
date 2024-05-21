---
title: Викторина — Вызов функции
---

{% include menu.html %}

## 1

Имея следующую функцию:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Как её вызвать?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Для следующей функции:

```raku
sub x {
    return 42;
}
```

Выберите правильные вызовы этой функции.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Скобки вокруг аргументов `say` опущены.
1 | say(x());
0 | my $v = x (); | Пробел перед `()` делает `()` аргументом.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}