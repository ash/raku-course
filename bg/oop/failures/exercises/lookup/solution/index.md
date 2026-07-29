---
title: 'Решение: Търсене или ненамерено'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Изход

```
not found
reason: no such key
```

## Коментари

1. `lookup('z')` извиква `fail`, така че връща недефиниран `Failure`.

1. Понеже резултатът е недефиниран, програмата отпечатва `not found`, вместо да се опитва да използва провалилата се стойност.

1. `Failure` все пак носи изключението, което описва какво се е объркало. `$r.exception` го извлича — което заедно с това отбелязва провала като обработен, за да не гръмне по-късно, — а `.message` прочита текста, подаден на `fail`: `no such key`.

{% include nav.html %}
