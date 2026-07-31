---
title: Ne ĉiu eraro estas tuja
translations_gpt:
---

{% include menu.html %}

Defaŭlte ĵetita escepto haltigas la programon tuj, kaj `try` estas la maniero kapti ĝin. Sed ne ĉio, kio aspektas kiel fatala eraro, efektive haltigas vian programon en la momento, kiam ĝi okazas. Raku havas misfunkciojn, kiuj restas kvietaj — prokrastante sian reagon ĝis vi uzas la rezulton, aŭ lasante vin inspekti ilin kaj daŭrigi. Kelkaj el ĉi tiuj jam aperis en ĉi tiu parto, kaj indas kolekti ilin en unu loko.

**Divido per nulo.** Dividi per nulo ne eksplodas tie, kie ĝi estas skribita. La malbona valoro estas produktata kaj tenata kviete; ĝi ĵetas nur kiam vi *uzas* ĝin — presante aŭ devigante ĝin, ekzemple:

```raku
my $x = 1 / 0;    # neniu eraro ĉi tie
say 'still running';
say $x;           # nur nun ĝi ĵetas
```

Ĉi tiu prokrastita konduto, kaj la objektoj `Failure` malantaŭ ĝi, estas la temo de [Molaj misfunkcioj](/eo/oop/failures).

**Malsukcesanta ekstera programo.** `Proc` redonita de `run` aŭ `shell`, kiu eliris malsukcese, ne ĵetas, kiam ĝi estas produktata. Ĝi ĵetas nur, se vi *forĵetas* ĝin netraktita; konservu ĝin kaj legu `.exitcode` (aŭ testu ĝin kiel Boolean valoron), kaj la misfunkcio restas simpla valoro, al kiu vi povas reagi. Vi vidis tion en [La objekto Proc](/eo/oop/external-programs/the-proc-object).

La komuna fadeno: misfunkcio povas esti *prokrastita* — transformita en valoron, kiun vi ekzamenas, kiam vi estas preta, anstataŭ tuja kolapso. `try` kaj la fazero `CATCH` traktas la erarojn, kiuj estas ĵetataj tuj; ĉi tiuj mekanismoj traktas tiujn, kiuj ne estas.

{% include nav.html %}
