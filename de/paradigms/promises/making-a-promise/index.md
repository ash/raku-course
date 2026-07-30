---
title: Ein eigenes Promise erzeugen
translations_gpt:
---

{% include menu.html %}

Jedes Promise bisher kam von `start`. Sie können aber auch unmittelbar eines mit
`Promise.new` erzeugen — ein Promise, das noch nicht fertig ist — und es selbst erledigen, wenn das
Ergebnis (oder die Nachricht) bereitsteht. `.keep` erfüllt es mit einem Wert:

```raku
my $p = Promise.new;   # a fresh, unsettled promise

$p.keep(42);           # fulfil it with a value
say await $p;          # 42
```

`.break` ist der Fehlschlagfall. Ein gebrochenes Promise abzuwarten wirft den Fehler erneut, genau
wie bei einem `start`-Block, der [gestorben ist](/de/paradigms/await/awaiting-promises) — und
fängt niemand die Ausnahme, hält sie das Programm an:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # dies here with 'disk full'
say 'never reached';      # this line does not run
```

Um weiterzumachen, fangen Sie den Fehlschlag mit `try`, genau wie um jeden Code,
der sterben könnte:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Steht der Ausgang bereits fest, erzeugen zwei Abkürzungen ein Promise, das schon
erledigt beginnt: `Promise.kept($value)` und `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Warum ein Promise von Hand erzeugen? Weil nicht jedes Ergebnis aus einem `start`-Block kommt.
Ein Ereignis, das später eintritt, eine Nachricht, die ankommt, ein Rückruf aus einer anderen Bibliothek
— mit `Promise.new` machen Sie aus jedem davon ein Promise, das der Rest des
Programms `await`-en und wie jedes andere verbinden kann.

{% include nav.html %}
