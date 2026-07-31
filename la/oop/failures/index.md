---
title: Defectus molles
translations_gpt:
---

{% include menu.html %}

Exceptionem per `die` iacere omnia statim sistit. Interdum id nimis violentum est: vis ut subprogramma nuntiet se effectum producere non potuisse, sed vocanti permittat decernere utrum id fatale sit. Ad hoc Raku _defectus molles_ habet, per `fail` creatos.

Cum subprogramma `fail` vocat, non statim iacit. Loco eius obiectum speciale `Failure` vocanti reddit. `Failure` indefinitum est, itaque vocans tacite illud inspicere potest:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

Vocatio felix `5` reddit. Vocatio deficiens `Failure` reddit, quod pro `defined` `False` nuntiat, itaque vocans effectum probare potest antequam eo utatur.

`Failure` _mollis_ appellatur quia in veram exceptionem iactam vertitur solum si eo ut valore uti conaris sine prius inspecto. Dum illud tractas — exempli gratia `defined` probando — tacitum manet. Hoc permittit subprogrammati problema significare sine hoc quod totum programma sistere cogatur.

## Hoc iam vidisti

Hic modus defectus dilati non soli `fail` proprius est. Prius in hac parte eandem ideam bis invenisti.

**Divisio per nihil** valorem tacite producit et solum tunc iacit cum eo revera uteris:

```raku
my $x = 1 / 0;   # nullus adhuc error
say $x;           # solum hic iacit, cum valor adhibetur
```

**Programma externum deficiens** `Proc` reddit quod solum tunc iacit si illud non tractatum abicis — serva illud et inspice, et manet valor tacitus:

```raku
run 'sh', '-c', 'exit 1';   # Proc deficiens abicitur, itaque hoc iacit
```

In utroque casu problema programma eo momento quo accidit non sistit: fit valor quem inspicere potes, et in exceptionem iactam crescit solum cum eo sine inspectione uteris vel illud neglegis. Argumentum [Non omnis error statim venit](/la/oop/try/deferred-errors) haec duo iuxta se ostendit.

{% include nav.html %}
