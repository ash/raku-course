---
title: 'Solution: Een opdrachtregelvlag'
translations_gpt: true
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Je kunt de broncode vinden in het bestand [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Uitvoer

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Opmerkingen

1. Een `Bool` benoemde parameter wordt een vlag: het doorgeven van `--shout` stelt `$shout` in op `True`, terwijl het weglaten de standaardwaarde `False` behoudt.

1. De ternaire operator drukt vervolgens `HELLO` of `hello` af. In tegenstelling tot een `--naam=waarde`-optie neemt een vlag geen waarde aan — alleen de aanwezigheid ervan telt.

{% include nav.html %}
