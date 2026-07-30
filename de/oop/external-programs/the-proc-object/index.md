---
title: Das Proc-Objekt
translations_gpt:
---

{% include menu.html %}

Jeder Aufruf von `run` oder `shell` liefert ein `Proc`-Objekt zurück — einen kleinen Bericht darüber, welches Programm gelaufen ist und wie es geendet hat. Die früheren Themen haben seinen Handle `.out` zum Lesen der Ausgabe genutzt; das `Proc` trägt mehr als das.

Der nützlichste Teil ist der **Exit-Code**. Ein Programm teilt dem, der es gestartet hat, mit einer kleinen ganzen Zahl mit, ob es gelungen ist: `0` bedeutet Erfolg, und jede andere Zahl ist ein selbstgewählter Fehlercode des Programms. `.exitcode` liefert Ihnen diese Zahl:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Für die übliche Ja/Nein-Frage — hat es funktioniert? — ist ein `Proc` schlicht wahr, wenn der Exit-Code `0` ist, und andernfalls falsch, Sie können es also unmittelbar prüfen:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

Ein `Proc` merkt sich auch den Befehl, den es gestartet hat, in `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Eines ist zu beachten: Wenn ein Befehl fehlschlägt und Sie das gelieferte `Proc` schlicht **ignorieren**, löst Raku eine Ausnahme aus, statt den Fehlschlag unbemerkt durchgehen zu lassen:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Weil ein Exit ungleich null gewöhnlich bedeutet, dass etwas schiefging, wirft ein fehlgeschlagenes `Proc`, das weggeworfen wird, sobald es seinen Gültigkeitsbereich verlässt. Auslöser ist das *Verwerfen* des Ergebnisses, nicht das Ignorieren des Exit-Codes: Das `Proc` einfach in einer Variablen zu speichern genügt, um die Ausnahme zu vermeiden, selbst wenn Sie es nie wieder ansehen.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

Wenn Sie also *erwarten*, dass ein Befehl fehlschlagen könnte, bewahren Sie sein `Proc` auf und sehen Sie sich `.exitcode` an (oder prüfen Sie es als Wahrheitswert), wann immer Sie wissen möchten, was geschehen ist.

{% include nav.html %}
