---
title: 'Solution: Formatierter Text'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Du findest den Quellcode in der Datei [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Ausgabe

Ausfuehrung mit `raku --doc`:

```
Greeting

Hello, world!
```

## Kommentare

1. `B<world>` markiert das Wort fett; in der Nur-Text-Ausgabe erscheint es als normaler Text, aber reichhaltigere Formate zeigen es fett an.

1. `raku --doc` rendert das Pod, ohne Programmcode auszufuehren.

1. Um die Fettschrift tatsaechlich zu *sehen*, rendere in ein Format, das Formatierungen unterstuetzt. Installiere einen Formatierer wie `Pod::To::HTML` mit `zef install Pod::To::HTML` und fuehre dann `raku --doc=HTML formatted-text.raku` aus; das Wort wird nun in ein HTML-`<b>`-Element eingebettet. Die Nur-Text-Ausgabe von `--doc` hat dagegen keine Moeglichkeit, Fettschrift darzustellen, sobald sie in eine Datei oder eine Pipe geschrieben wird.

{% include nav.html %}
