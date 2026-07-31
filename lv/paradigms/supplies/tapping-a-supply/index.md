---
title: Pieslēgšanās supply
translations_gpt:
---

{% include menu.html %}

Lai abonētu supply, jūs tai _pieslēdzaties_: jūs padodat `.tap` bloku, un šis bloks izpildās katrai vērtībai, ko supply izstaro. Vienkāršākā supply eksperimentiem ir `Supply.from-list`, kas izstaro saraksta vērtības:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Tas izdrukā:

```
1
2
3
```

Bloks `-> $v { say $v }` ir _pieslēgums_. Supply pēc kārtas iestumj tajā katru vērtību, tāpēc bloks izpildās trīs reizes — pa vienai katrai vērtībai.

Pieslēgums ar vērtību var darīt jebko, arī uzkrāt rezultātu:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Šeit katra izstarotā vērtība tiek pieskaitīta `$total`, kas beigās ir `6`. Pieslēgšanās ir reaktīvās programmēšanas pamatdarbība: piesaistiet straumei uzvedības gabalu un ļaujiet straumei to darbināt.

{% include nav.html %}
