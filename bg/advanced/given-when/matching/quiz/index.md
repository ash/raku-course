---
title: Тест — `when`
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

Блокът `when` автоматично *излиза* от `given`, след като съвпадне — няма преминаване надолу (fall-through). `5` удовлетворява първото условие `$_ > 0`, така че се отпечатва `positive` и вторият `when 5` никога не се достига, въпреки че и той би съвпаднал.

</div>

{% include nav.html %}
