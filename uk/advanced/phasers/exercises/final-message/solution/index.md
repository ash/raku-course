---
title: 'Розв''язання: Прощальне повідомлення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Вихідний код можна знайти у файлі [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Вивід

```
processed 3 items
```

## Коментарі

1. Фазер `END` записано перед циклом, але виконується він останнім — після того, як основний код завершився. На той час `$count` уже збільшено тричі.

1. Оскільки фазер замикається на `$count`, він читає *остаточне* значення змінної, а не той `0`, який вона мала, коли фазер з'явився у вихідному коді. Це і є звичайна причина класти підсумок у `END`.

{% include nav.html %}
