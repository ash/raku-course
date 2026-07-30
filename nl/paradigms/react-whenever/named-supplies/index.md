---
title: Supplies die elders gedefinieerd zijn
translations_gpt:
---

{% include menu.html %}

Elke `whenever` tot nu toe maakte zijn supply meteen in de kop — `whenever Supply.from-list(...)`. Dat leest goed voor een snel voorbeeld, maar echte programma's hebben hun gebeurtenisbron zelden precies op die plek bij de hand. Vaker wordt een supply ergens anders gebouwd — teruggegeven door een functie, geproduceerd door een `Supplier`, of aan je overhandigd door een socket of een timer — en komt hij als gewone variabele binnen. Een `whenever` bekijkt net zo graag een benoemde supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Dit drukt af:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Lees `whenever $sensors { … }` dus als "telkens wanneer de supply `$sensors` — waar hij ook vandaan kwam — een waarde uitzendt, draai deze body". De inline `whenever Supply.from-list(...)` die je eerder zag, is slechts het bijzondere geval waarin de bron toevallig ter plekke gemaakt wordt.

Als deze vorm van een buitenblok met binnenblokken je ergens aan doet denken, heb je gelijk — de [volgende pagina](/nl/paradigms/react-whenever/whenever-vs-when) vergelijkt hem met `given`/`when`.

{% include nav.html %}
