---
title: Глобальні змінні
---

{% include menu.html %}

Давайте створимо змінну перед блоком коду:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

У цьому випадку, `$x` є глобальною змінною (вона знаходиться в глобальній області видимості), і програма виводить `42` двічі.

{% include nav.html %}