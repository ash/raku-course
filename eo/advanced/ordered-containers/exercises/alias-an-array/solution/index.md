---
title: 'Solvo: Aliasi tabelon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Vi povas trovi la fontkodon en la dosiero [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Eligo

```
[10 20 30 40]
```

## Komentoj

1. La ligado `@alias := @original` faras `@alias` alia nomo por la sama tabela ujo, anstataŭ kopio de ĝi.

1. La ŝanĝo estas farita tra `@original` ĉi-foje, kaj ĝi estas struktura — `push` aldonas elementon. Ĉar ambaŭ nomoj estas la sama ujo, `@alias` vidas ankaŭ la novan elementon. La du nomoj estas tute interŝanĝeblaj: ne gravas, kiun vi uzas por legi aŭ modifi la tabelon.

{% include nav.html %}
