---
title: 'Risinājums: Skaitļa izrunāšana'
---

{% include menu.html %}

Zemāk redzamajā programmā ir iebūvēts masīvs ar skaitļu nosaukumiem no 0 līdz 20 un desmitu nosaukumiem: 20, 30 utt. Nosacījumu ķēdē skaitlis tiek sadalīts vienā no izrunas noteikumiem.

## Kods

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Divciparu nenoapaļoti skaitļi, piem., 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Desmitu reizinājumi, piem., 50
    say @names[$n / 10 + 18];
}
```

🦋 Atrodiet programmu failā [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/spell-a-number.raku).

## Piemērs

Palaidiet programmu vairākas reizes, lai pārbaudītu visas trīs `if`—`elsif`—`elses` konstrukcijas zarus.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}