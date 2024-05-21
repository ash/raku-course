---
title: Quiz 2 — Liste und Skalar vs. Liste und Array
---

{% include menu.html %}

Es gibt Listen auf der rechten Seite in den untenstehenden Zuweisungen. Von welchem Typ sind die Objekte, die die Variablen enthalten?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Wählen Sie die richtigen Antworten:

{:.quiz-select}
(Liste) | Der Typ von `$x` ist&nbsp; (: (Array), (Int), (Liste) :)
(Array) | Der Typ von `@x` ist&nbsp; (: (Array), (Int), (Liste) :)

## 2*

Hier ist ein komplizierterer Fall. Machen Sie sich keine Sorgen, wenn Sie es jetzt nicht verstehen. Wir werden in der zweiten Hälfte des Kurses auf dieses Thema zurückkommen.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Wählen Sie die richtigen Antworten:

{:.quiz-select}
(Array) | Der Typ von `$x` ist&nbsp; (: (Array), (Int), (Liste) :)
(Array) | Der Typ von `@x` ist&nbsp; (: (Array), (Int), (Liste) :)

{% include quiz.html %}

{% include nav.html %}