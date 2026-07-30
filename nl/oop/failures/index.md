---
title: Zachte mislukkingen
translations_gpt:
---

{% include menu.html %}

Een exceptie werpen met `die` legt alles onmiddellijk stil. Soms is dat te drastisch: je wilt dat een subroutine meldt dat ze geen resultaat kon leveren, maar de aanroeper laat beslissen of dat fataal is. Daarvoor heeft Raku _zachte mislukkingen_, gemaakt met `fail`.

Wanneer een subroutine `fail` aanroept, werpt ze niet meteen. In plaats daarvan geeft ze een bijzonder `Failure`-object aan de aanroeper terug. Een `Failure` is ongedefinieerd, dus de aanroeper kan er rustig op controleren:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

De geslaagde aanroep geeft `5` terug. De mislukte aanroep geeft een `Failure` terug, die `False` meldt voor `defined`, zodat de aanroeper het resultaat kan testen voordat hij het gebruikt.

Een `Failure` heet _zacht_ omdat hij pas in een echte, geworpen exceptie verandert als je hem als waarde probeert te gebruiken zonder hem eerst te controleren. Zolang je hem afhandelt — bijvoorbeeld door `defined` te testen — blijft hij stil. Zo kan een subroutine een probleem signaleren zonder het hele programma tot stoppen te dwingen.

## Dit heb je eerder gezien

Deze uitgestelde stijl van mislukken is niet uniek voor `fail`. Eerder in dit deel kwam je hetzelfde idee twee keer tegen.

Een **deling door nul** levert stilletjes een waarde op en werpt pas wanneer je die werkelijk gebruikt:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

Een **mislukkend extern programma** geeft een `Proc` terug die alleen werpt als je hem onafgehandeld weggooit — bewaar hem en bekijk hem, en hij blijft een stille waarde:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

In elk geval legt een probleem het programma niet stil op het moment dat het optreedt: het wordt een waarde die je kunt controleren, en het escaleert pas tot een geworpen exceptie wanneer je het ongecontroleerd gebruikt of negeert. Het onderwerp [Niet elke fout is onmiddellijk](/nl/oop/try/deferred-errors) zet deze twee naast elkaar.

{% include nav.html %}
