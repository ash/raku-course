---
title: Betekenisvolle spaties in rules
translations_gpt:
---

{% include menu.html %}

Een `rule` is een `token` met één extra mogelijkheid aangezet: `:sigspace` (significante spatie), precies het bijwoord `:s`. Het maakt van de witruimte die je in het patroon schrijft een automatische witruimtematcher tussen de delen. Dat is wat je wilt zodra de tekst die je ontleedt spaties tussen haar stukken heeft.

Vergelijk de twee. In een `token` wordt witruimte in het patroon **genegeerd**, dus vraagt `<first> <second>` om de twee delen zonder iets ertussen. Omdat `\w+` bij de spatie stopt, matcht een invoer met spatie niet:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

Je *kunt* de spatie in een `token` accepteren — je moet hem alleen zelf matchen, bijvoorbeeld met `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

Een `rule` voegt dat witruimtematchen voor je in, dus is eenvoudig een spatie tussen de delen schrijven al genoeg:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Een gebruikelijk patroon is `rule` gebruiken voor de structuur op hoger niveau — waar de delen door spaties gescheiden zijn — en `token` voor de kleine stukjes als namen en getallen, die geen spaties bevatten. Zo blijft je grammatica zowel correct als goed leesbaar.

{% include nav.html %}
