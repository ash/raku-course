---
title: 'Lösung: Übergeben Sie einen Handle an eine Funktion'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Du findest den Quellcode in der Datei [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Ausgabe

```
started
working
done
```

## Kommentare

1. Der von `open` gelieferte Handle ist einfach ein Wert in `$fh`, er kann also wie jede Zeichenkette oder Zahl als Argument an `log-line` übergeben werden. Innerhalb der Subroutine schreibt `$fh.say` durch denselben offenen Handle.

1. Weil der Handle über alle drei Aufrufe hinweg offen bleibt, hängt jedes `log-line` eine weitere Zeile an dieselbe Datei an. `close` schreibt dann alles weg, und `slurp` liest die drei Zeilen zurück.

1. Das macht Handles kombinierbar: Eine Funktion kann einen Handle aufnehmen und hineinschreiben (oder daraus lesen), ohne sich darum zu kümmern, auf welche Datei er zeigt — das entscheidet der Aufrufer, wenn er die Datei öffnet.

{% include nav.html %}
