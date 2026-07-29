---
title: 'Тест — do'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
my $s = do given -3 {
    when $_ < 0 { 'neg' }
    default     { 'nonneg' }
};
say $s;
```

{:.quiz}
1 | neg
0 | nonneg
0 | -3
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`do` працює перед керівними конструкціями, а не лише перед голими блоками. Тут `do given` перетворює весь `given`/`when` на вираз. Топік `-3` збігається з `$_ < 0`, тож вираз дає `'neg'`, що й зберігається в `$s`.

</div>

{% include nav.html %}
