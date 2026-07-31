---
title: Clausurae
translations_gpt:
---

{% include menu.html %}

_Clausura_ est subprogramma quod variabiles ex circumscriptione in qua definitum est capit, easque vivas servat etiam postquam illa circumscriptio finivit. Hoc subprogrammati proprium statum privatum et durantem dat.

Exemplum classicum est numerator:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

Variabilis `$n` intra `make-counter` declaratur. Subprogramma redditum ad `$n` spectat, itaque super eam clauditur: unaquaeque vocatio `count` **eandem** `$n` auget et reddit, quamquam ipsum `make-counter` iam pridem finivit.

Unaquaeque vocatio `make-counter` recentem `$n` creat, itaque numeratores separati independentes sunt:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Clausurae functioni permittunt statum ferre sine variabili globali et sine obiecto. Sunt modus programmationis functionalis aliquid inter vocationes meminendi.

{% include nav.html %}
