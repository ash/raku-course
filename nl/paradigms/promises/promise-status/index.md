---
title: De status van een promise
translations_gpt:
---

{% include menu.html %}

Een promise verkeert altijd in een van drie toestanden, gemeld door haar methode `.status`:

* **`Planned`** — nog niet afgehandeld;
* **`Kept`** — ze eindigde met een waarde;
* **`Broken`** — haar werk wierp een exceptie.

Dat zijn de waarden van de opsomming `PromiseStatus`. `.status` lezen wacht niet — het vertelt je waar de promise zich *op dit moment* bevindt, zodat je hem kunt controleren voordat de promise afgehandeld is en opnieuw daarna:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — read at once, while the block is still running
await $p;      # now wait for it to finish
say $p.status; # Kept
say $p.result; # 10
```

`.result` geeft de vervulde waarde. Anders dan `.status` *wacht* het tot de promise afgehandeld is, dus op een onvoltooide promise blokkeert het precies als `await`. En als de promise verbroken is, werpt `.result` de exceptie opnieuw.

Wanneer je naar een mislukking wilt kijken zonder haar opnieuw te werpen, gebruik je `.cause` — het exceptieobject van een verbroken promise:

```raku
my $p = start { die 'boom' };
try await $p;         # let it settle (and swallow the re-thrown error)
say $p.status;        # Broken
say $p.cause.message; # boom
```

`.status` en `.cause` inspecteren een promise dus zonder haar te verstoren, terwijl `await` en `.result` haar uitkomst ophalen — de waarde, of de opnieuw geworpen fout.

{% include nav.html %}
