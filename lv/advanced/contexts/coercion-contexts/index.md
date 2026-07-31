---
title: Skaitliskais, virkņu un Būla konteksts
---

{% include menu.html %}

Trīs ļoti bieži konteksti pieprasa vērtībai uzvesties kā skaitlim, virknei vai Būla vērtībai. Katram no tiem ir prefiksa operators, kas to piespiedu kārtā uzliek:

* `+` — skaitliskais konteksts
* `~` — virknes konteksts
* `?` — Būla konteksts

Piemērojot masīvam, tie atgriež tā garumu, tā elementus apvienotus ar atstarpēm un to, vai tam ir kādi elementi:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Tukšs masīvs ir `0` skaitliskajā kontekstā un `False` Būla kontekstā:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Jums nav vienmēr jāraksta šie operatori manuāli, jo valoda var uzlikt pareizo kontekstu jūsu vietā. Aritmētika ievieto savus operandus skaitliskajā kontekstā, konkatenācija — virknes kontekstā, un `if`, `while`, un `and`/`or` ievieto savu nosacījumu Būla kontekstā:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Tātad `if @array { … }` darbojas tieši tā, kā jūs cerētu: nepustošs masīvs ir patiess. Prefiksa operatori ir tiešais veids, kā pieprasīt tās pašas pārvēršanas.

Kombinācijā ar postfiksa `if` tas ļauj izveidot patiešām izteiksmīgu kodu:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
