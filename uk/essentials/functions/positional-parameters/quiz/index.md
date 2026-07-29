---
title: Тест — Виклик функції
---

{% include menu.html %}

## 1

Маючи таку функцію:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Як ви її викличете?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Для такої функції:

```raku
sub x {
    return 42;
}
```

Оберіть правильні її виклики.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Дужки навколо аргументів `say` опущено.
1 | say(x());
0 | my $v = x (); | Пробіл перед `()` робить `()` аргументом.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}
