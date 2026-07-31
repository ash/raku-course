---
title: Maldiligenta gather
translations_gpt:
---

{% include menu.html %}

Bloko `gather` estas _maldiligenta_: ĝi ne plenumiĝas tuj tutece. Ĝi produktas valorojn nur kiam ili estas tirataj eksteren, kio signifas, ke `gather` povas priskribi **senfinan** serion kaj tamen esti utila — vi simple ĉesas preni valorojn, kiam vi havas sufiĉe.

La kaptilo estas, ke vi devas teni la rezulton maldiligenta. Konservi ĝin en simpla `@array` provus kolekti ĉiun valoron tuj, kaj por senfina serio tio neniam finiĝus. Anstataŭe, tenu la sekvencon en skalaro (kie ĝi restas maldiligenta `Seq`) kaj tiru tranĉaĵon el ĝi:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

La `loop` neniam finiĝas, sed nur kvin valoroj estas iam produktataj, ĉar tio estas ĉio, kion ni petis per `[^5]`. Vi povas ankaŭ tiri de la komenco per `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Maldiligenteco estas tio, kio ebligas al `gather` modeli senfinajn fluojn sekure: nenio estas kalkulata antaŭ ol ĝi estas bezonata, kaj vi prenas ĝuste tiom, kiom vi volas.

{% include nav.html %}
