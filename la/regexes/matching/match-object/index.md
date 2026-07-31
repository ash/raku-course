---
title: Obiectum congruentiae
translations_gpt:
---

{% include menu.html %}

Cum regex congruit, congruentia sagax _obiectum congruentiae_ reddit. Idem obiectum etiam sponte in variabili speciali `$/` servatur, quae interdum «variabilis congruentiae» appellatur.

Obiectum congruentiae multo plus est quam responsum ita-an-non. Ut catena, est textus qui congruit — sive per methodum `.Str` sive per praefixum `~`, quod est operator conversionis in catenam et exacte idem agit:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Novit quoque **ubi** in catena congruentia inventa sit. Methodus `.from` locum dat ubi incipit, et `.to` locum statim post finem eius:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Loci a nulla numerantur, itaque cifra `7` in indice `5` sedet.

Cum regex **non** congruit, effectus obiectum congruentiae omnino non est — est valor specialis `Nil`. `Nil` scalari assignare eum indefinitum relinquit:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Itaque semper `.defined` inspicere potes (vel valore in contextu Booleano simpliciter uti) antequam textum congruentem legas.

{% include nav.html %}
