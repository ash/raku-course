---
title: Risinājums ‘Izpētot prompt izvadi — Virknes’
---

{% include menu.html %}

## Kods

Šeit ir pilna programma, kas veic uzdevumu un izdrukā gan ievadīto virkni, gan tās tipu.

```raku
my $name = prompt 'What is your name? ';
say $name;
say $name.WHAT;
```

🦋 Jūs varat atrast pirmkodu failā [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Testa izpildes

Palaidiet programmu vairākas reizes un ievadiet dažādus vārdus. Programma atkārto ievadi un arī norāda, ka mainīgais satur virkni, citiem vārdiem sakot, objektu ar tipu `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name? Andrey
Andrey
(Str)
```

Tagad palaidiet programmu vēlreiz, ievadiet dažas atstarpes vārda vietā un nospiediet Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name?    

(Str)
```

Mēs neredzam izvadi, bet redzam, ka mainīgā tips joprojām ir `Str`.

{% include nav.html %}