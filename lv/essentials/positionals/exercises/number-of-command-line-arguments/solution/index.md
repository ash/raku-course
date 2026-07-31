---
title: 'Risinājums: Komandrindas argumentu skaits'
translations_gpt:
---

{% include menu.html %}

Argumentu skaitu joprojām dod `@*ARGS.elems`, taču šoreiz ar to jāizdara kas vairāk nekā tikai jāizdrukā. Saglabājiet skaitu mainīgajā un pēc tam ar trejdaļīgo operatoru izvēlieties pareizo vārdu:

## Kods

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Atrodiet programmu failā [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Izvade

Ir vērts pārbaudīt trīs interesantus gadījumus: neviena argumenta, tieši viena un daudzu. Tikai otrajā tiek lietota vienskaitļa forma.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}
