---
title: 'Solution: Opgemaakte tekst'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Je kunt de broncode vinden in het bestand [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Uitvoer

Uitvoeren met `raku --doc`:

```
Greeting

Hello, world!
```

## Opmerkingen

1. `B<world>` markeert het woord als vetgedrukt; bij weergave als platte tekst verschijnt het als gewone tekst, maar rijkere formaten tonen het vetgedrukt.

1. `raku --doc` rendert de Pod zonder programmacode uit te voeren.

1. Om het vetgedrukte daadwerkelijk te *zien*, render je naar een formaat dat opmaak ondersteunt. Installeer een formatter zoals `Pod::To::HTML` met `zef install Pod::To::HTML`, en voer dan `raku --doc=HTML formatted-text.raku` uit; het woord wordt nu weergegeven in een HTML `<b>`-element. De platte `--doc`-tekstuitvoer heeft daarentegen geen mogelijkheid om vetgedrukte tekst te tonen zodra deze naar een bestand of een pipe is geschreven.

{% include nav.html %}
