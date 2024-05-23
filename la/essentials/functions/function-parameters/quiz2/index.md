---
title: Quiz — Argumenta Transmittenda
---

{% include menu.html %}

## 1

Est functio cum hac definitione:

```raku
sub f {
    say 'Function called';
}
```

Elige rectas functionis huius vocationes.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Functio nullos argumenta accipit, sed hic unum accipitur.
0 | f &apos;&apos;; | Idem ut supra.
1 | f(); | Hoc recte est, nulli argumenta transmittuntur.
0 | f (); | Hic, unum argumentum (index vacuus) transmittitur.
0 | f(10);

## 2

Est alia functio.

```raku
sub g($x, $y) {
    say "Called g($x, $y)";
}
```

Elige rectas functionis huius vocationes.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Nulla comma inter argumenta.
0 | g(10); | Argumenta non satis: duo requiruntur, unum transmittitur.
1 | g 10, 20; | Parentheses non requiruntur cum non ambiguum est.
0 | g(10,); | Non valida syntax.
0 | g(,20); | Non valida syntax etiam.
0 | g(&apos;10, 20&apos;); | Unum argumentum string transmittitur.
1 | g(&apos;word&apos;, 20); | Argumenta possunt esse diversorum generum.
0 | g(10, 20, 30); | Argumenta nimis multa.
0 | g 10, 20, 30; | Idem hic: tria argumenta transmittuntur.


{% include quiz.html %}

{% include nav.html %}