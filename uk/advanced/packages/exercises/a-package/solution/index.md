---
title: 'Розв''язання: Пакунок'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Вихідний код можна знайти у файлі [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Вивід

```
0
212
```

## Коментарі

1. І змінну, і підпрограму оголошено через `our`, тож обидві стають частиною простору імен `Temperature` й доступні ззовні.

1. До змінної дістаються як `$Temperature::freezing` — сигіл, ім'я пакунка, потім ім'я змінної, — а підпрограму викликають як `Temperature::fahrenheit(100)`. Переведення `100` дає `100 * 9/5 + 32`, тобто `212`.

1. Звичайний `package` дає лише простір імен. Для придатної до повторного використання бібліотеки ми взяли б `module`, а коли на кону об'єкти — `class`, але механізм простору імен у кожному з випадків той самий.

{% include nav.html %}
