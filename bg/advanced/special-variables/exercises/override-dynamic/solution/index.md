---
title: 'Solution: Презаписване на динамична променлива'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Можете да намерите пълния код във файла [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Резултат

```
INFO: working
DEBUG: working
```

## Коментари

1. `task` извиква `log-it`, но никога не споменава `$*prefix`. Стойността все пак достига `log-it`, защото динамичното търсене следва стека на извикванията навън — покрай `task` — до този, който е на стека по това време.

1. Двата блока задават различни стойности, така че *същото* извикване на `task()` произвежда различен префикс всеки път. Това е, което прави динамичните променливи полезни: контекстът тече в дълбоко вложен код, без да се предава през всяка междинна подпрограма като аргумент.

{% include nav.html %}
