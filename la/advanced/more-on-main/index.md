---
title: Plus de MAIN subprogrammatibus
translations_gpt: true
---

{% include menu.html %}

In parte Essentialium `MAIN` [ad argumenta lineae mandati accipienda](/la/essentials/the-main-function/reading-command-line-arguments) adhibuisti. Raku plura tibi circa `MAIN` praestat quam solam valorum traditionem.

## Nuntius de usu

Si argumenta in linea mandati cum signatura `MAIN` non congruunt, Raku corpus non exsequitur. Pro eo, _nuntium de usu_ automatice generatum imprimit, qui describit quomodo programma vocari debeat.

Hoc programma sume:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Recte vocatum, personam salutat:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Sine argumento vocatum, signatura non congruit, itaque Raku nuntium de usu pro salutatione imprimit:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

Nuntius ex nominibus parametrorum construitur, itaque nomina significantia eis dando textum auxilii gratis utilem reddis.

## Argumenta nominata

Parametri `MAIN` tam nominati quam positionarii esse possunt. Parametrus nominatus fit optio `--option=value` in linea mandati, et valor praefinitus eum optionalem reddit:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
