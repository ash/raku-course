---
title: Quiz 2 — Lijst en scalar vs. lijst en array
---

{% include menu.html %}

Er zijn lijsten aan de rechterkant in de onderstaande toewijzingen. Objecten van welk type houden de variabelen bij?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Kies de juiste antwoorden:

{:.quiz-select}
(Lijst) | Het type van `$x` is&nbsp; (: (Array), (Int), (Lijst) :)
(Array) | Het type van `@x` is&nbsp; (: (Array), (Int), (Lijst) :)

## 2*

Hier is een ingewikkelder geval. Maak je geen zorgen als je het nu niet begrijpt. We zullen later in de cursus op dit onderwerp terugkomen.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Kies de juiste antwoorden:

{:.quiz-select}
(Array) | Het type van `$x` is&nbsp; (: (Array), (Int), (Lijst) :)
(Array) | Het type van `@x` is&nbsp; (: (Array), (Int), (Lijst) :)

{% include quiz.html %}

{% include nav.html %}