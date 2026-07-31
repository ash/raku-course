---
title: Dinamiskie mainīgie
translations_gpt:
---

{% include menu.html %}

_Dinamiskam_ mainīgajam ir tvigils `*`. Atšķirībā no leksiska mainīgā, kas redzams tikai tajā blokā, kur deklarēts, dinamisks mainīgais tiek atrasts, skatoties **uz āru pa izsaukumu steku** — caur to, kurš izsauca pašreizējo kodu, neatkarīgi no tā, kur šis kods definēts.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

Apakšprogramma `greet` `$*greeting` nedeklarē un nesaņem to kā argumentu, tomēr var to redzēt, jo mainīgais ir dinamisks un `greet` tika izsaukta no vietas, kur tas ir redzams.

Šis piemērs strādātu arī ar vienkāršu globālu skalāro mainīgo `$greeting`, taču dinamisko mainīgo daba parādīsies nākamajā piemērā.

Tā kā meklēšana seko izsaukumu stekam, tuvāka deklarācija sava bloka laikā **pārmāc** tālāku:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

Tā pati `show` pirmoreiz izdrukā `outer` un `inner` tad, kad izsaukta no bloka, kurš `$*level` pārdeklarējis. Tas ir _dinamiskais redzamības apgabals_, un tieši tā darbojas Raku iebūvētie `$*OUT`, `$*IN` un `$*ERR` — izvadi var uz laiku novirzīt, blokā pārdeklarējot `$*OUT`, un katra tā iekšienē izsauktā rutīna redz jauno vērtību. Dinamiskie mainīgie ir ideāli kontekstam, kam jāplūst uz izsaukto kodu, netiekot padotam kā skaidrs arguments.

{% include nav.html %}
