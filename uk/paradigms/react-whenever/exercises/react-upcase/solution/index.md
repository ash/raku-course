---
title: Розв'язання вправи «Верхній регістр через react»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Знайдіть програму у файлі [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Вивід

```
[A B C]
```

## Коментарі

1. Тіло `whenever` виконується по разу на значення, переводить його у верхній регістр і кладе в `@collected`.

1. `react` чекає завершення єдиного потоку, тож на момент виконання `say` масив містить усі три значення по порядку: `[A B C]`.

1. Потік значень має власні методи, схожі на спискові, тож переводити у верхній регістр можна в самому струмені, а не в тілі — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — і ефект той самий. `.map` на потоці перетворює кожне значення, коли те пропливає повз; вибір полягає лише в тому, чи перетворення належить струменеві, чи реакції.

{% include nav.html %}
