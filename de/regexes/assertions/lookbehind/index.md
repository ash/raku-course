---
title: Lookbehind
translations_gpt:
---

{% include menu.html %}

Ein _Lookbehind_ prüft, was unmittelbar **vor** der aktuellen Position kommt:

* `<?after …>` — gelingt, wenn der Text davor trifft (bejahender Lookbehind)
* `<!after …>` — gelingt, wenn der Text davor **nicht** trifft (verneinender Lookbehind)

Damit können Sie etwas nur wegen dessen treffen, was ihm vorausgeht, ohne dieses Präfix ins Ergebnis aufzunehmen. Fangen Sie etwa die Ziffern hinter einem Dollarzeichen ein, aber lassen Sie das `$` außerhalb des Treffers:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

Die Zusicherung `<?after '$'>` verlangt ein `$` unmittelbar vor der aktuellen Position, dann trifft `\d+` die Ziffern. Der Treffer ist `100`, ohne das Dollarzeichen.

Lookahead und Lookbehind werden oft verbunden. Ein Stück Text, umgeben von `<?after …>` und `<?before …>`, trifft nur dann, wenn es zwischen den verlangten Nachbarn steht — ein praktischer Weg, einen Wert aus einem bekannten Zusammenhang zu ziehen.

{% include nav.html %}
