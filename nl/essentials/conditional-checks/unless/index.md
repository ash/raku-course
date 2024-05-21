---
title: Gebruik van unless
---

{% include menu.html %}

Alle Booleaanse voorwaarden kunnen eenvoudig worden ontkend met de [`!` operator](/nl/essentials/booleans/operations#negation). Echter, in sommige gevallen maakt een expliciete ontkenning de expressie zwaarder en minder leesbaar. In deze gevallen kan `unless` een vriend zijn.

Het `unless` blok wordt uitgevoerd wanneer de voorwaarde `False` is.

```raku
my $broken = False;

# ...Iets kan $broken hier op True zetten...
    
unless $broken {
    say "Maak je geen zorgen!";
    say "Wees gelukkig!";
}
```

Vergelijk de twee varianten van hetzelfde programma:

Met `if` en ontkenning:

```raku
if !$broken { . . . }
```

Met `unless`:

```raku
unless $broken { . . . }
```

Met de alternatieven kun je altijd kiezen wat voor jou beter voelt in de huidige situatie.

Let op dat `unless` niet gevolgd kan worden door een `else` of `elsif` blokken. In dit geval is de enige manier om `if` te gebruiken.

{% include nav.html %}