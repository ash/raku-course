---
title: Failu deskriptori
translations_gpt:
---

{% include menu.html %}

Visa faila nolasīšana vai ierakstīšana uzreiz ir ērta, taču dažreiz gribat failam iet cauri pa vienai rindai vai turēt failu atvērtu, kamēr tajā atkārtoti rakstāt. Tam izmantojat _faila turi_.

Vienkāršākajam veidam, kā failu lasīt pa rindai, skaidri norādīts turis pat nav vajadzīgs: metode `lines` uz ceļa objekta dod rindas pa vienai, gatavas ciklam `for`:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Katrs `$line` ir viena rinda bez tās beigu jaunās rindas rakstzīmes. Programma izdrukā:

```
ONE
TWO
THREE
```

Lai failā rakstītu caur turi, atveriet to ar `open` un karodziņu `:w` (rakstīšanai), izmantojiet tura metodes `say` vai `print` un aizveriet to ar `close`, kad esat pabeiguši:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Tura aizvēršana gādā, ka viss ierakstītais tiek izskalots uz disku. Lasīšana pa rindai, kā augstāk, ir ierastais veids, kā tikt galā ar failiem, kas ir par lielu, lai tos uzreiz ierautu atmiņā.

{% include nav.html %}
