---
title: Kvizo — Uzante la unuo-skopan difinon
---

{% include menu.html %}

## 1

Elektu unu el la deklariloj por fari la programon ĝusta.

{:.quiz-select}
unit | (: mia, multi, unit :) `sub MAIN(Str $name);`
. | `say "Saluton, $name!";`

## 2

Diru ĉu la programo estas ĝusta.

```raku
unit sub MAIN(Str $name) {
    say "Saluton, $name!";
}
```

{:.quiz-select}
valid | Ĉi tiu programo estas&nbsp; (: valida, nevalida :) | Malgraŭ la ĉeesto de `unit`, vi ankoraŭ povas aldoni krampojn, sed tio estas tre redundanta.

## 3

Ĉu ĉi tiu programo estas ĝusta?

```raku
unit multi sub MAIN() {
    say 'Saluton, ĉiuj!';
}

unit multi sub MAIN($name) {
    say "Saluton, $name!";
}
```

{:.quiz-select}
invalid | Ĉi tiu programo estas&nbsp; (: valida, nevalida :) | Eraro: `Ne eblas uzi 'unit' kun individuaj multi kandidatoj.`

{% include quiz.html %}

{% include nav.html %}