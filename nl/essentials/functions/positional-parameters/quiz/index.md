---
title: Quiz — Een functie aanroepen
---

{% include menu.html %}

## 1

Met de volgende functie:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Hoe roep je deze aan?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Voor de volgende functie:

```raku
sub x {
    return 42;
}
```

Selecteer de correcte aanroepen ervan.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Haakjes rond de argumenten van `say` worden weggelaten.
1 | say(x());
0 | my $v = x (); | Een spatie voor `()` maakt de `()` een argument.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}