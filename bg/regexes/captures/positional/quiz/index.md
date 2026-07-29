---
title: 'Тест — Позиционни прихващания'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Двете двойки скоби прихващат в `$0` и `$1`, номерирани от нула. Първата прихваща `ab`, втората прихваща `cd`, така че `$1` е `｢cd｣`.

</div>

{% include nav.html %}
