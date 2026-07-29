---
title: 'Solution: Slurpy именувани аргументи'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Можете да намерите пълния код във файла [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Резултат

```
Anna: colour=red, size=5
```

## Коментари

1. Фиксираният позиционен параметър `$name` се попълва първи, а slurpy `*%opts` след това събира всеки останал именуван аргумент в хеш.

1. `%opts.sort` подрежда двойките по ключ, така че резултатът е детерминистичен — `colour` идва преди `size`. `.map` превръща всяка двойка в низ `key=value` с `.key` и `.value`, а `.join(', ')` ги слепва заедно.

1. Крайният низ интерполира `$name` и сглобения `$details`, произвеждайки `Anna: colour=red, size=5`.

{% include nav.html %}
