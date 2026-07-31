---
title: Serĉi simbolon
translations_gpt:
---

{% include menu.html %}

## Problemo

Krom listigi la nomojn de pakaĵo, vi povas atingi nomon dinamike uzante ĝin kiel ŝlosilon en la simboltabelo de la pakaĵo. Vi ricevas modulon `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Skribu apartan programon, kiu ŝargas la modulon kaj presas la valoron de `$pi` serĉante ĝin en la simboltabelo per `Circle::{'$pi'}` — ne per la kvalifikita `$Circle::pi`.

## Ekzemplo

Rulante kun la modulo sur la serĉvojo, la programo presas:

```console
$ raku -I. lookup.raku
3.14
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
