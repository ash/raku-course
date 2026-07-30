---
title: Der Status eines Promise
translations_gpt:
---

{% include menu.html %}

Ein Promise befindet sich stets in einem von drei Zuständen, gemeldet von seiner Methode `.status`:

* **`Planned`** — noch nicht erledigt;
* **`Kept`** — es endete mit einem Wert;
* **`Broken`** — seine Arbeit warf eine Ausnahme.

Das sind die Werte der Aufzählung `PromiseStatus`. `.status` zu lesen wartet nicht — es sagt Ihnen, wo das Promise *gerade jetzt* steht, Sie können es also prüfen, bevor das Promise erledigt ist, und danach erneut:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — read at once, while the block is still running
await $p;      # now wait for it to finish
say $p.status; # Kept
say $p.result; # 10
```

`.result` liefert den erfüllten Wert. Anders als `.status` *wartet* es, bis das Promise erledigt ist, bei einem unfertigen Promise blockiert es also genau wie `await`. Und wurde das Promise gebrochen, wirft `.result` die Ausnahme erneut.

Wenn Sie einen Fehlschlag ansehen möchten, ohne ihn erneut zu werfen, nehmen Sie `.cause` — das Ausnahmeobjekt eines gebrochenen Promise:

```raku
my $p = start { die 'boom' };
try await $p;         # let it settle (and swallow the re-thrown error)
say $p.status;        # Broken
say $p.cause.message; # boom
```

`.status` und `.cause` untersuchen ein Promise also, ohne es zu stören, während `await` und `.result` seinen Ausgang abholen — den Wert oder den erneut geworfenen Fehler.

{% include nav.html %}
