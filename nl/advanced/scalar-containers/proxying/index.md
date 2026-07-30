---
title: Proxying van methode-aanroepen
translations_gpt:
---

{% include menu.html %}

Een scalaire container zijn betekent eigenlijk een object zijn van het type `Scalar`. In de meeste gevallen is het gebruik van scalars zo transparant dat een ontwikkelaar helemaal niet aan de container hoeft te denken en zich kan voorstellen dat hij rechtstreeks met de opgeslagen waarden werkt.

Dit werkt omdat een scalaire container methodeaanroepen doorstuurt naar de waarde die hij bevat. Na de toewijzing `my $lang = 'Raku'` kun je bijvoorbeeld de `.chars`-methode aanroepen op de variabele:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

Het programma drukt `4` af, het aantal tekens in de string `'Raku'`. Het resultaat is precies hetzelfde als wanneer je `.chars` rechtstreeks op de stringwaarde zou aanroepen, in plaats van op de containervariabele:

```raku
say 'Raku'.chars; # 4
```

Met andere woorden, de container stuurt de `.chars`-aanroep stilletjes door naar de string die hij bevat en geeft het resultaat aan je terug.

{% include nav.html %}
