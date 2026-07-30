---
title: Het sleutelwoord grammar
translations_gpt:
---

{% include menu.html %}

Een _grammatica_ groepeert benoemde regexes onder één naam, ongeveer zoals een klasse methoden groepeert. Je declareert er een met het sleutelwoord `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Binnen de grammatica wordt elk benoemd patroon met `token` geschreven (een soort regex die je binnenkort in detail bestudeert). Eén token, dat conventioneel `TOP` heet, is het startpunt — het beschrijft het geheel. Hier zegt `TOP` "de tekst is `Hello, `, dan een naam, dan `!`", en `name` zegt hoe een naam eruitziet.

De tokens kunnen naar elkaar verwijzen op naam, precies als de [benoemde regexes](/nl/regexes/what-is-a-grammar/named-regexes) uit het vorige onderwerp. `TOP` gebruikt `<name>`, wat de grammatica leesbaar houdt: elke regel heeft één duidelijke taak.

Om een grammatica op een string toe te passen, roep je haar methode `.parse` aan:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

De volgende sectie bekijkt `TOP` en `.parse` nauwkeuriger. Voor nu is het idee om te onthouden eenvoudig: **een grammatica is een benoemde verzameling benoemde regexes die samen een heel stuk gestructureerde tekst beschrijven.**

{% include nav.html %}
