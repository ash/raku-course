---
title: 'Тест — `try`'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside, после outside
0 | Boom!
0 | грешка

{% include quiz.html %}

<div class="extended-explanation">

Тук се случват две неща. Първо, `die` незабавно прекъсва остатъка от блока `try`, така че редът `say 'inside'` изобщо не се достига — отвътре в блока не се отпечатва нищо. Второ, понеже `try` прихваща изключението, самата програма не спира: изпълнението продължава след блока и `say 'outside'` се изпълнява нормално. Затова единственият отпечатан ред е `outside`. (`$r` би била недефинирана, а съобщението `Boom!` би чакало в `$!`, ако погледнете там.)

</div>

{% include nav.html %}
