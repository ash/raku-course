---
title: Je eigen promise maken
translations_gpt:
---

{% include menu.html %}

Elke promise tot nu toe kwam van `start`. Maar je kunt er ook rechtstreeks een maken met
`Promise.new` — een promise die nog niet klaar is — en haar zelf afhandelen wanneer het
resultaat (of het nieuws) klaar is. `.keep` vervult haar met een waarde:

```raku
my $p = Promise.new;   # a fresh, unsettled promise

$p.keep(42);           # fulfil it with a value
say await $p;          # 42
```

`.break` is het mislukkingsgeval. Een verbroken promise afwachten werpt de fout opnieuw, net
zoals het dat doet bij een `start`-blok dat [gestorven is](/nl/paradigms/await/awaiting-promises) — en
als niets die exceptie vangt, legt ze het programma stil:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # dies here with 'disk full'
say 'never reached';      # this line does not run
```

Om door te gaan vang je de mislukking met `try`, precies zoals je om elke code zou doen
die kan sterven:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Als de uitkomst al bekend is, maken twee afkortingen een promise die al afgehandeld
begint: `Promise.kept($value)` en `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Waarom met de hand een promise maken? Omdat niet elk resultaat uit een `start`-blok komt.
Een gebeurtenis die later afgaat, een bericht dat binnenkomt, een callback uit een andere bibliotheek
— met `Promise.new` maak je van elk daarvan een promise die de rest van het
programma kan `await`-en en net als elke andere kan combineren.

{% include nav.html %}
