---
title: 'Lösung: Zwei whenevers'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Du findest den Quellcode in der Datei [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Ausgabe

```
200
```

## Kommentare

1. Die beiden `whenever`-Blöcke beobachten die beiden benannten Supplies und reagieren **verschieden**: Einzahlungen werden addiert, Abhebungen abgezogen. Ein react-Block, zwei Ströme, zwei unterschiedliche Reaktionen — genau darum geht es bei einem `whenever` je Quelle.

1. Der react-Block ist erst fertig, wenn beide Supplies fertig sind, der Kontostand steht also fest, bevor er ausgegeben wird: `100 + 50 + 200 - 30 - 120` ergibt `200`. Da Addition und Subtraktion vertauschbar sind, beeinflusst die Verflechtung der beiden Ströme das Ergebnis nicht.

1. Hier liefern beide Supplies ihre Werte unverzüglich, ein Strom nach dem anderen. Im echten Leben treffen die Ereignisse eines Bankkontos über die Zeit verteilt ein — jetzt eine Einzahlung, eine Stunde später eine Abhebung — und die beiden Ströme verflechten sich, wie in der Vorführung [Zwei Zeitgeber](/de/paradigms/react-whenever/two-timers). Der Code bleibt genau derselbe: Der react-Block führt denjenigen `whenever`-Rumpf aus, der zum jeweils eintreffenden Ereignis passt.

{% include nav.html %}
