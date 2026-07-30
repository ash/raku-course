---
title: Aanhalingsadverbia
translations_gpt:
---

{% include menu.html %}

Het gedrag van een quoting-constructie kan worden afgestemd met _bijwoorden_. Elke quoting-functie — het interpoleren van scalars, het uitvoeren van ingebedde closures, het verwerken van backslashes — wordt bestuurd door een eigen bijwoord, dat die ene functie in- of uitschakelt, zodat je kunt beginnen met `q` of `Q` en precies de functies kunt toevoegen die je nodig hebt.

Enkele veelgebruikte bijwoorden:

* `:s` / `:scalar` — interpoleer scalaire variabelen (`$x`)
* `:c` / `:closure` — interpoleer ingebedde code in `{ ... }`
* `:b` / `:backslash` — verwerk backslash-escapes zoals `\n`

Voeg er een toe aan `q` om een enkele functie in te schakelen. Sta bijvoorbeeld ingebedde code toe maar niets anders:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — gewone q laat het blok onaangeroerd
say q:c/result: {3 * 4}/; # result: 12        — :c voert het blok uit
```

Met gewone `q` wordt `{ 3 * 4 }` letterlijk afgedrukt; alleen `:c` zorgt ervoor dat het blok wordt uitgevoerd en de waarde wordt ingevoegd, terwijl een `$variabele` nog steeds onaangeroerd zou blijven. Let op de `/.../`-scheidingstekens hier: als je de string begrenst met `{...}` zou het nog steeds werken — de compiler telt de geneste accolades correct — maar dan wordt de binnenste `{ 3 * 4 }` gelezen als onderdeel van de begrensde tekst in plaats van als een closure, dus `:c` zou het letterlijk laten. Wanneer de tekst een `{ ... }`-blok bevat, kies dan een ander scheidingsteken dan `{...}` zodat de closure daadwerkelijk wordt uitgevoerd. Je kunt scalaire interpolatie toevoegen aan de anders letterlijke `Q`:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Bijwoorden schakelen functies ook **uit** met een `!`. Om `qq` te gebruiken maar `$` letterlijk te houden:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` is gelijk aan `Q` met alle interpolatie-bijwoorden ingeschakeld, en `q` is gelijk aan `Q` met een kleinere set. De bijwoorden geven je fijnmazige controle tussen die twee uitersten.

{% include nav.html %}
