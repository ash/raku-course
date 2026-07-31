---
title: Classes
translations_gpt:
---

{% include menu.html %}

Adhuc genera datorum quibus usus es — numeri, chordae, ordines et cetera — omnia in Raku inbuilta erant. _Programmatio ad obiecta directa_ tibi permittit tua ipsius genera definire, quae _classes_ appellantur, et valores illorum generum creare, quae _obiecta_ appellantur.

Classis per verbum `class` definitur, quod nomen et clausula sequuntur:

```raku
class Dog {
}
```

Haec classis `Dog` adhuc vacua est, sed iam novum genus est. Ut obiectum classis creetur — _exemplar_ —, methodum `new` in nomine classis voca:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

Variabilis `$rex` nunc obiectum `Dog` continet. Unaquaeque vocatio `new` obiectum separatum creat:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` et `$fido` sunt duo canes distincti, quamquam classis nihil adhuc continet. In sectionibus sequentibus classi propria data (_attributa_) et propriam agendi rationem (_methodos_) dabis. Primum argumentum propius inspicit differentiam inter classem et exemplaria eius.

{% include nav.html %}
