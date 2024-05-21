---
title: Viktorīna — Funkcijas izsaukšana
---

{% include menu.html %}

## 1

Ņemot vērā sekojošo funkciju:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Kā to izsaukt?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Sekojošai funkcijai:

```raku
sub x {
    return 42;
}
```

Izvēlieties pareizos tās izsaukumus.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Klambraksti ap `say` argumentiem ir izlaisti.
1 | say(x());
0 | my $v = x (); | Atstarpe pirms `()` padara `()` par argumentu.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}