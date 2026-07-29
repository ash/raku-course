---
title: Тест — Наречия за цитиране
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` обикновено интерполира скалари, но наречие, написано с `!`, *изключва* дадена функция. Тук `:!s` деактивира интерполирането на скалари, така че `$price` остава точно както е написано, вместо да бъде заменено с `5`.

</div>

{% include nav.html %}
