---
title: Wörtlichen Text treffen
translations_gpt:
---

{% include menu.html %}

Das einfachste Muster ist eine Folge von Buchstaben und Ziffern. Ein solches Muster trifft genau diese Zeichen, in dieser Reihenfolge, irgendwo in der Zeichenkette:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

Der Treffer muss nicht am Anfang der Zeichenkette beginnen — die Regex-Maschine sucht das Muster an jeder Position, bis sie es findet.

Ein erfolgreicher Treffer erzeugt ein `Match`-Objekt. Jenes `｢cat｣` im ersten Beispiel ist, wie ein solches Objekt bei der Ausgabe aussieht: `say` stellt einen `Match` als den getroffenen Text dar, umgeben von den Eckklammern `｢ ｣`. Ist das Muster nicht vorhanden, schlägt der Treffer stattdessen fehl: Der Smartmatch ergibt `Nil`, einen undefinierten Wert, der in einer Wahrheitsprüfung als falsch gilt:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Innerhalb eines Regex sind Leerzeichen standardmäßig **nicht** bedeutsam — sie stehen nur dort, um das Muster lesbar zu machen. `/ ell /` trifft also genau das, was `/ell/` treffen würde; die umgebenden Leerzeichen werden schlicht übergangen:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Weil ein Leerzeichen im Muster übergangen wird, braucht es für ein *tatsächliches* Leerzeichen **Anführungszeichen**: Alles, was Sie in Anführungszeichen setzen, wird wörtlich getroffen. Dieselbe Anführung ist auch der Weg, ein Satzzeichen zu treffen, das in einem Regex sonst eine besondere Bedeutung hätte:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Für Leerraum können Sie auch die Klasse `\s` verwenden, die Ihnen gleich begegnet.)

{% include nav.html %}
