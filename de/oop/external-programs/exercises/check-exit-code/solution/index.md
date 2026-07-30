---
title: 'Lösung: Prüfen Sie den Exit-Code'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Du findest den Quellcode in der Datei [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Ausgabe

```
4
failure
```

## Kommentare

1. `run` liefert ein `Proc`. Es in `$proc` aufzubewahren — und dann daraus zu lesen — ist hier wichtig: Ein fehlschlagender Befehl, dessen `Proc` verworfen wird, würde werfen, das Ergebnis zu untersuchen gilt aber als Behandlung.

1. `.exitcode` ist die Zahl, die der Befehl zurückgab: `4`. Das `Proc` als Wahrheitswert zu prüfen beantwortet die einfachere Frage — es ist nur dann wahr, wenn der Exit-Code `0` ist, hier also falsch, und das Programm gibt `failure` aus.

{% include nav.html %}
