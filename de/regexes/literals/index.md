---
title: Wörtlicher Text und Zeichenklassen
translations_gpt:
---

{% include menu.html %}

Ein _Regex_ (kurz für _regulärer Ausdruck_) ist ein Muster, das ein Stück Text beschreibt. Mit einem Regex können Sie Fragen stellen wie „Enthält diese Zeichenkette eine Zahl?“ oder „Beginnt dieses Wort mit einem Großbuchstaben?“, und Sie können Teile aus einer Zeichenkette herausziehen oder verändern.

Raku hat besonders mächtige und gut lesbare Regexes, und sie sind unmittelbar in die Sprache eingebaut. Am einfachsten schreiben Sie einen zwischen zwei Schrägstrichen:

```raku
/cat/
```

Dieses Muster trifft die drei Buchstaben `c`, `a`, `t` in Folge. Um eine Zeichenkette gegen ein Muster zu prüfen, verwenden Sie den Smartmatch-Operator `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Wird das Muster gefunden, meldet Raku den Teil der Zeichenkette, der getroffen wurde, dargestellt zwischen den Eckklammern `｢ ｣`. Dieses Ergebnis sehen Sie sich im nächsten Abschnitt genauer an.

In diesem ersten Abschnitt lernen Sie, wie man genauen (_wörtlichen_) Text trifft und wie man ein Zeichen trifft, das eines von mehreren sein darf — eine _Zeichenklasse_. Die folgenden Abschnitte ergänzen [Quantoren](/de/regexes/quantifiers), [Captures](/de/regexes/captures) und alles Weitere, was Regexes so nützlich macht.

{% include nav.html %}
