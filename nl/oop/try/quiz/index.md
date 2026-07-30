---
title: 'Quiz — `try`'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside en dan outside
0 | Boom!
0 | een fout

{% include quiz.html %}

<div class="extended-explanation">

Er gebeuren hier twee dingen. Ten eerste breekt `die` de rest van het `try`-blok onmiddellijk af, dus de regel `say 'inside'` wordt nooit bereikt — er wordt vanuit het blok niets afgedrukt. Ten tweede stopt het programma zelf niet, omdat `try` de exceptie vangt: de uitvoering gaat voorbij het blok verder en `say 'outside'` draait gewoon. De enige afgedrukte regel is dus `outside`. (`$r` zou ongedefinieerd zijn, en de melding `Boom!` zou in `$!` klaarstaan als je zou kijken.)

</div>

{% include nav.html %}
