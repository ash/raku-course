---
title: 'Risinājums: Sveika, pasaule!'
---

{% include menu.html %}

Pēc ilga ceļa cauri kursam, mums bija jāatgriežas pie šīs programmas, jo tikko esam iemācījušies jaunu veidu, kā rakstīt Raku programmas.

## Kods 1

```raku
sub MAIN() {
    say 'Sveika, pasaule!';
}
```

🦋 Atrodi programmu failā [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Kods 2

```raku
unit sub MAIN;
say 'Sveika, pasaule!';
```

🦋 Atrodi programmu failā [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Piemērs

Palaid jebkuru programmu:

```console
$ raku exercises/the-main-function/hello-world.raku
Sveika, pasaule!

$ raku exercises/the-main-function/hello-world-unit.raku
Sveika, pasaule!
```

{% include nav.html %}