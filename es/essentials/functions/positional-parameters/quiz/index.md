---
title: Quiz — Llamando a una función
---

{% include menu.html %}

## 1

Teniendo la siguiente función:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

¿Cómo la llamas?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Para la siguiente función:

```raku
sub x {
    return 42;
}
```

Selecciona las llamadas correctas de la misma.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Se omiten los paréntesis alrededor de los argumentos de `say`.
1 | say(x());
0 | my $v = x (); | Un espacio antes de `()` hace que `()` sea un argumento.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}