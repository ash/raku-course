---
title: Uitvoer opvangen
translations_gpt:
---

{% include menu.html %}

Om te lezen wat een extern programma afdrukt in plaats van het naar het scherm te laten gaan, geef je `:out` mee bij het starten. De teruggegeven `Proc` heeft dan een handle `.out` waaruit je kunt lezen:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` leidt de standaarduitvoer van het programma de `Proc` in. De handle `.out` werkt als de bestandshandles uit de vorige sectie, en `.slurp` leest er in één keer alles uit. Het bijwoord `:close` is een handige afkorting: na het lezen sluit het de handle voor je — dezelfde opruiming die je met `.close` op een bestandshandle expliciet deed — zodat er niets open blijft staan. Ten slotte haalt `.chomp` de afsluitende newline weg die `echo` toevoegt.

Hetzelfde werkt met `shell`, wat handig is om het resultaat van een pipeline op te vangen:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Je kunt ook de foutstroom opvangen, met `:err` en de bijbehorende handle `.err`. Zowel `:out` als `:err` meegeven houdt de twee stromen apart, elk in een eigen handle, zodat je ze los kunt lezen:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Hier drukt het shellcommando één regel naar de standaarduitvoer af en één naar de standaardfout (`>&2` leidt daarheen om). Omdat we om beide stromen gevraagd hebben, bevatten `.out` en `.err` ze onafhankelijk — de gewone uitvoer van het programma raakt nooit vermengd met zijn diagnostiek.

Uitvoer opvangen is hoe je een extern programma als bouwsteen gebruikt — draai het, lees zijn resultaat, en ga met die gegevens verder in je eigen programma.

{% include nav.html %}
