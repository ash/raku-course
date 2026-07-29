---
title: Тест — do
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`do` работи пред управляващи конструкции, не само пред обикновени блокове. Тук `do given` превръща цялата конструкция `given`/`when` в израз. Темата `-3` съвпада с `$_ < 0`, така че изразът дава `'neg'`, което се записва в `$s`.

</div>

{% include nav.html %}
