---
title: 'Risinājums: Apgrieztā poļu pieraksta kalkulators'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $expression = '3 4 + 5 *';
my @stack;

for $expression.words -> $token {
    if $token ~~ / ^ \d+ $ / {
        @stack.push($token.Int);
    }
    else {
        my $b = @stack.pop;
        my $a = @stack.pop;
        @stack.push( do given $token {
            when '+' { $a + $b }
            when '-' { $a - $b }
            when '*' { $a * $b }
            when '/' { $a / $b }
        });
    }
}

say @stack[0];
```

🦋 Atrodiet programmu failā [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Izvade

```
35
```

## Komentāri

1. Skaitļi tiek likti stekā. Operators izņem abas jaunākās vērtības, tās apvieno un
rezultātu ieliek atpakaļ — tāda ir postfiksās aprēķināšanas būtība.

1. `do given $token` operatoru pārvērš pareizajā aritmētikā, un secība —
vispirms `$a`, tad `$b` (izņemti apgrieztā kārtībā) — atņemšanu un dalīšanu patur
pareizajā virzienā.

{% include nav.html %}
