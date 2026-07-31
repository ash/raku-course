---
title: 'Solvo: Kreu dosierujon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Vi povas trovi la fontkodon en la dosiero [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Eligo

```
True
True
```

## Komentoj

1. `mkdir` kreas la dosierujon, kaj `.IO.d` konfirmas, ke `reports` estas dosierujo.

1. Ĉar la dosierujo nun ekzistas, ni povas skribi dosieron en ĝin donante vojon, kiu inkluzivas la dosierujan nomon, `reports/data.txt`. Kontroli `.e` sur tiu vojo konfirmas, ke la dosiero estis kreita ene de la nova dosierujo.

1. La ordo gravas: `spurt` **ne** kreas mankantajn dosierujojn por vi. Skribi al `reports/data.txt` antaŭ ol la dosierujo `reports` ekzistas malsukcesas kun eraro kiel `Failed to open file … : No such file or directory`. Krei la dosierujon unue — kiel `mkdir` faras ĉi tie — estas tio, kio permesas al la skribo sukcesi. Oportune, `mkdir` ankaŭ kreas ĉiujn mankantajn intermezajn dosierujojn, do nestita vojo kiel `mkdir 'reports/2026'` konstruas la tutan ĉenon per unu sola voko.

{% include nav.html %}
