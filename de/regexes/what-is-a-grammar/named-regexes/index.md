---
title: Benannte Regexes
translations_gpt:
---

{% include menu.html %}

Bisher haben Sie Muster unmittelbar innerhalb von `/ … /` geschrieben. Sie können einem Muster auch einen **Namen** geben und es wiederverwenden, genau wie eine Subroutine. Deklarieren Sie eines mit `my regex` (oder `my token`, das Sie gleich richtig kennenlernen):

```raku
my regex number { \d+ }
```

Um einen benannten Regex in einem anderen Muster zu verwenden, schreiben Sie seinen Namen in spitzen Klammern, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

`<number>` aufzurufen trifft das Muster **und** capturt es unter diesem Namen, der getroffene Text steht also als `$<number>` zur Verfügung — ein benanntes Capture, das Sie umsonst bekommen.

Ein benannter Regex lässt sich in einem Muster mehrfach verwenden. Kommt er mehr als einmal vor, werden die Captures zu einer Liste, die Sie über einen Index erreichen:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Benannte Regexes halten Muster lesbar und erlauben es Ihnen, größere aus kleineren, gut benannten Teilen zu bauen. Genau das tut eine Grammatik in größerem Maßstab.

{% include nav.html %}
