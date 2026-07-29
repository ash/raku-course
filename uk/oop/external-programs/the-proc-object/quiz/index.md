---
title: 'Тест — Об''єкт Proc'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | помилку

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` — це ціле число, яке повернула програма; тут оболонці було сказано `exit 2`, тож воно дорівнює `2`. Програма не кидає винятку: невдалий `Proc` збережено в `$proc` і досліджено через `.exitcode`, а погляд на результат вважається його обробкою. (Виняток виник би, лише якби невдалий `Proc` було відкинуто неперевіреним.)

</div>

{% include nav.html %}
