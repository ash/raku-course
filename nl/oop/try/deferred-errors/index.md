---
title: Niet elke fout is onmiddellijk
translations_gpt:
---

{% include menu.html %}

Een geworpen exceptie legt het programma standaard meteen stil, en met `try` vang je hem. Maar niet alles wat op een fatale fout lijkt, legt je programma werkelijk stil op het moment dat het gebeurt. Raku heeft mislukkingen die stil blijven — die hun reactie uitstellen tot je het resultaat gebruikt, of die je toelaten ze te bekijken en door te gaan. Een paar daarvan zijn in dit deel al langsgekomen, en het loont ze op één plek bij elkaar te zetten.

**Een deling door nul.** Delen door nul ontploft niet waar het geschreven staat. De slechte waarde wordt geproduceerd en stilletjes vastgehouden; ze werpt pas wanneer je haar *gebruikt* — bijvoorbeeld door haar af te drukken of te coerceren:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

Dit uitgestelde gedrag, en de `Failure`-objecten erachter, zijn het onderwerp van [Zachte mislukkingen](/nl/oop/failures).

**Een mislukkend extern programma.** Een `Proc` die door `run` of `shell` teruggegeven wordt en die niet succesvol geëindigd is, werpt niet op het moment dat hij gemaakt wordt. Hij werpt alleen als je hem onafgehandeld *weggooit*; bewaar hem en lees `.exitcode` (of test hem als boolean) en de mislukking blijft een gewone waarde waarop je kunt reageren. Je zag dit in [Het Proc-object](/nl/oop/external-programs/the-proc-object).

De rode draad: een mislukking kan *uitgesteld* worden — omgezet in een waarde die je bekijkt wanneer je er klaar voor bent, in plaats van een onmiddellijke crash. `try` en de `CATCH`-faser gaan over de fouten die meteen geworpen worden; deze mechanismen gaan over de fouten die dat niet doen.

{% include nav.html %}
