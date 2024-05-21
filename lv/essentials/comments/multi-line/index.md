---
title: Vairākrindu komentāri
---

{% include menu.html %}

Tiklīdz vēlaties atstāt komentāru, kas ir lielāks par vienu rindu, varat izvēlēties vai nu vairākus vienrindu komentārus, vai vienu vairākrindu komentāru.

Vairākrindu komentāri sākas ar divu rakstzīmju kombināciju ``#` `` un tiem seko pāris noslēdzošo rakstzīmju `( )`, `{ }`, `[ ]` vai `< >` vai to atkārtotas kopijas: `(( ))`, `[[[ ]]]` utt.

Piemēram:

```raku
my $name;
#`( Mēs lūgsim lietotājam
vispirms ievadīt savu vārdu un tad
saglabāt ievadi mainīgajā. )

$name = prompt 'Kāds ir tavs vārds? ';
#`{ Programma tagad gaida,
līdz lietotājs ievadīs vārdu
un nospiedīs Enter. }

say $name; #`( Un tagad mēs to varam izdrukāt )
```

{% include nav.html %}