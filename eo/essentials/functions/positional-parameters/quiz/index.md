---
title: Kvizo — Voki funkcion
---

{% include menu.html %}

## 1

Havante la sekvan funkcion:

```raku
sub abc($a, $b, $c) {
    return $a ~ $b ~ $c;
}
```

Kiel vi vokas ĝin?

{:.quiz-code}
, , | say abc($a␣ $b␣ $c);
= | my $s ␣ abc(&apos;a&apos;, &apos;b&apos;, &apos;c&apos;);
= abc ) | my $z ␣ ␣␣␣($a, $b, $c␣;
, , | say abc $a␣ $b␣ $c;

## 2

Por la sekva funkcio:

```raku
sub x {
    return 42;
}
```

Elektu la ĝustajn vokojn de ĝi.

{:.quiz}
1 | say x;
1 | say(x);
1 | say x(); | Parentezoj ĉirkaŭ la argumentoj de `say` estas preterlasitaj.
1 | say(x());
0 | my $v = x (); | Spaco antaŭ `()` faras la `()` argumento.
1 | my $w = x();
1 | my $u = x;

{% include quiz.html %}

{% include nav.html %}