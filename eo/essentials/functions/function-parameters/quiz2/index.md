---
title: Kvizo — Pasado de argumentoj
---

{% include menu.html %}

## 1

Estas funkcio kun la sekva difino:

```raku
sub f {
    say 'Funkcio vokita';
}
```

Elektu la ĝustajn vokojn de ĉi tiu funkcio.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Funkcio ne akceptas iujn ajn argumentojn, sed unu estas ricevita ĉi tie.
0 | f &apos;&apos;; | La sama kiel supre.
1 | f(); | Ĉi tio estas bone, neniuj argumentoj pasitaj.
0 | f (); | Ĉi tie, unu argumento (malplena listo) estas pasita.
0 | f(10);

## 2

Estas alia funkcio.

```raku
sub g($x, $y) {
    say "Vokita g($x, $y)";
}
```

Elektu la ĝustajn vokojn de ĉi tiu funkcio.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Neniu komo inter argumentoj.
0 | g(10); | Tro malmultaj argumentoj: du necesaj, unu pasita.
1 | g 10, 20; | Parentezoj ne estas necesaj kiam ĝi ne estas ambigua.
0 | g(10,); | Ne valida sintakso.
0 | g(,20); | Ankaŭ ne valida sintakso.
0 | g(&apos;10, 20&apos;); | Unuopa ŝnura argumento pasita.
1 | g(&apos;vorto&apos;, 20); | Argumentoj povas esti de malsamaj tipoj.
0 | g(10, 20, 30); | Tro multaj argumentoj.
0 | g 10, 20, 30; | La sama ĉi tie: tri argumentoj estas pasitaj.


{% include quiz.html %}

{% include nav.html %}