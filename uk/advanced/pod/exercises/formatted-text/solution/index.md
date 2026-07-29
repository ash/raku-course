---
title: 'Розв''язання: Форматований текст'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Вихідний код можна знайти у файлі [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Вивід

Запуск через `raku --doc`:

```
Greeting

Hello, world!
```

## Коментарі

1. `B<world>` позначає слово жирним; у звичайному текстовому відображенні воно виглядає як звичайний текст, але багатші формати показують його жирним.

1. `raku --doc` відображає Pod, не виконуючи жодного коду програми.

1. Щоб справді *побачити* жирний, відображайте у формат, який несе оформлення. Встановіть форматувальник на кшталт `Pod::To::HTML` через `zef install Pod::To::HTML`, а потім запустіть `raku --doc=HTML formatted-text.raku`; тепер слово виходить загорнутим в елемент HTML `<b>`. Звичайний текстовий вивід `--doc`, навпаки, не має способу показати жирний, щойно його записано у файл чи канал.

{% include nav.html %}
