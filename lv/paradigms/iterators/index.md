---
title: Iteratori
translations_gpt:
---

{% include menu.html %}

Iepriekšējā sadaļa būvēja virknes ar `gather` un `take`. Šī nokāpj vienu līmeni zemāk — pie mehānisma, kas vērtības tiešām piegādā: pie _iteratora_.

Iterators ir mazais objekts aiz katra saraksta, diapazona un slinkas virknes Raku valodā. Tas prot vienu vienīgu lietu — radīt **nākamo** vērtību — un neko vairāk. Ikreiz, kad rakstāt `for` ciklu vai izsaucat `map`, Raku klusi prasa iteratoram pa vienai vērtībai, līdz vairs nav nevienas. Šī sadaļa parāda šo protokolu tieši: kā vērtības no iteratora izvilkt ar rokām un kā uzrakstīt savu iteratoru.

{% include nav.html %}
