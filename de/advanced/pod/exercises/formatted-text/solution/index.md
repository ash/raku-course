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

Ausführung mit `raku --doc`:

```
Greeting

Hello, world!
```

## Kommentare

1. `B<world>` markiert das Wort fett; in der Nur-Text-Ausgabe erscheint es als normaler Text, aber reichhaltigere Formate zeigen es fett an.

1. `raku --doc` rendert das Pod, ohne Programmcode auszuführen.

1. Um die Fettschrift tatsächlich zu *sehen*, rendere in ein Format, das Formatierungen unterstützt. Installiere einen Formatierer wie `Pod::To::HTML` mit `zef install Pod::To::HTML` und führe dann `raku --doc=HTML formatted-text.raku` aus; das Wort wird nun in ein HTML-`<b>`-Element eingebettet. Die Nur-Text-Ausgabe von `--doc` hat dagegen keine Möglichkeit, Fettschrift darzustellen, sobald sie in eine Datei oder eine Pipe geschrieben wird.

{% include nav.html %}
