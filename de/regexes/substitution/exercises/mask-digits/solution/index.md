---
title: 'Lösung: Maskieren Sie die Ziffern'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Du findest den Quellcode in der Datei [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Ausgabe

```
PIN ####
PIN 1234
```

## Kommentare

1. Das großgeschriebene `S///` erledigt dieselbe Arbeit wie `s///`, **liefert aber eine neue Zeichenkette**, statt die Variable an Ort und Stelle zu ändern. Mit `:g` ersetzt es in der gelieferten Kopie jede Ziffer `\d` durch ein `#`. Es wird mit `given` auf `$orig` angewandt, was diese Zeichenkette zum Thema macht.

1. `$orig` danach auszugeben zeigt, dass es weiterhin `PIN 1234` enthält — anders als bei `s///` blieb das Original unberührt.

{% include nav.html %}
