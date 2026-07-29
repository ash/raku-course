---
title: 'Розв''язання: Пошук або не знайдено'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Вихідний код можна знайти у файлі [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Вивід

```
not found
reason: no such key
```

## Коментарі

1. `lookup('z')` викликає `fail`, тож повертає невизначений `Failure`.

1. Оскільки результат невизначений, програма виводить `not found`, а не намагається скористатися невдалим значенням.

1. `Failure` усе одно несе виняток, який описує, що пішло не так. `$r.exception` дістає його — що водночас позначає збій як оброблений, тож пізніше він не вибухне, — а `.message` читає текст, переданий до `fail`, тобто `no such key`.

{% include nav.html %}
