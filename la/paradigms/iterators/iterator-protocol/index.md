---
title: Protocollum iteratorum
translations_gpt:
---

{% include menu.html %}

Omnis valor per quem percurrere potes — index, intervallum, ordo — _iteratorem_ tibi tradere potest methodo `.iterator`. Iterator unam methodum essentialem habet, `pull-one`, quae valorem sequentem quotiens eam vocas reddit:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Cum valores desinunt, `pull-one` speciale signum, `IterationEnd`, loco veri elementi reddit. Ab eodem `$it` unum valorem amplius petens illud vides:

```raku
say $it.pull-one =:= IterationEnd; # True
```

Operator `=:=` **idem obiectum** probat, quo modo signum agnoscis. Illa particula in anulo refert, ubi valorem extractum servare *et* illum probare debes. Si illum per `=` **assignas**, valor in receptaculum cadit et comparatio tandem receptaculum potius quam `IterationEnd` inspicit. Remedium est per `:=` **ligare**, ita ut variabilis simpliciter *sit* quidquid `pull-one` reddidit:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # liga, ne assigna
    last if $v =:= IterationEnd;
    say $v;
}
```

Anulus `a`, `b`, `c` imprimit et deinde consistit. Hoc est exacte quod anulus `for` sub pallio pro te agit: `.iterator` in re per quam percurris vocat et `pull-one` vocare pergit donec `IterationEnd` inveniat. Illud manu scribere raro opus est, sed semel id agere ostendit iteratores — non indices — esse id per quod Raku revera percurrit.

{% include nav.html %}
