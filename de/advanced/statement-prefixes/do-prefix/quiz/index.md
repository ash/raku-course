---
title: Quiz — do
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`do` funktioniert nicht nur vor einfachen Blöcken, sondern auch vor Kontrollstrukturen. Hier verwandelt `do given` das gesamte `given`/`when` in einen Ausdruck. Das Topic `-3` passt auf `$_ < 0`, sodass der Ausdruck `'neg'` ergibt, was in `$s` gespeichert wird.

</div>

{% include nav.html %}
