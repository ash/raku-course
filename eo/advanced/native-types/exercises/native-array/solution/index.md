---
title: 'Solvo: Denaska tabelo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Vi povas trovi la fontkodon en la dosiero [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Eligo

```
555
```

## Komentoj

1. Meti la grandigitan indiĝenan tipon `uint8` antaŭ la `@`-tabelon deklaras tabelon, kie ĉiu elemento estas konservata kiel unu sensigna bajto — la kompakta aranĝo, kiu taŭgas por binaraj datumoj.

1. La ĉirkaŭvolva limo aplikiĝas al ĉiu *elemento* (`0..255`), ne al la rezulto de ilia sumado. `.sum` enkastas la totalon en ordinaran `Int`, do `100 + 200 + 255` donas la plenan `555`.

{% include nav.html %}
