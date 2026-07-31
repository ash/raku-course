---
title: Komandlinia flago
translations_gpt:
---

{% include menu.html %}

## Problemo

`Bool`-a nomita parametro de `MAIN` fariĝas ŝaltebla **flago**: skribi `--flag` agordas ĝin al `True`, kaj forlasi ĝin konservas ĝian defaŭlton. Skribu programon, kies `MAIN` akceptas `Bool :$shout = False` kaj presas `HELLO` kiam la flago estas agordita, aŭ `hello` alie.

## Ekzemplo

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
