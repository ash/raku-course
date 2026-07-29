---
title: 'Розв''язання: Порядок блоків END'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Вихідний код можна знайти у файлі [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Вивід

```
body
second END
first END
```

## Коментарі

1. Обидва фазери `END` виконуються після основного коду, тож `body` виводиться першим.

1. Кілька фазерів `END` виконуються за принципом «останнім прийшов — першим вийшов»: `second END`, оголошений пізніше, виконується перед `first END`. Це віддзеркалює те, як прибирання зазвичай мусить скасовувати найсвіжіші приготування першими.

{% include nav.html %}
