---
title: Об'єкти винятків
translations_gpt:
---

{% include menu.html %}

Виняток є об'єктом, як і будь-що інше в Raku. Коли ви пишете `die 'something failed'`, Raku загортає ваше повідомлення в об'єкт винятку типу `X::AdHoc`.

Усередині `CATCH` цей об'єкт можна дослідити. Його тип дає `.^name`, а текст — `.message`:

```raku
{
    die 'something failed';

    CATCH {
        default {
            say .^name;   # X::AdHoc
            say .message; # something failed
        }
    }
}
```

Знання типу дозволяє по-різному поводитися з різними помилками. Вбудовані винятки Raku мають власні типи, імена яких починаються з `X::`, і на них можна зіставлятися через `when` — так само, як ви зіставлялися зі значеннями в блоці `given`/`when`:

```raku
{
    die 'something failed';

    CATCH {
        when X::AdHoc {
            say 'an ad-hoc error: ' ~ .message;
        }
        default {
            say 'some other error';
        }
    }
}
```

Це виводить `an ad-hoc error: something failed`, бо виняток збігся з типом `X::AdHoc`. Зіставлення за типом є основою обробки конкретних помилок — ідеї, на якій будується розділ про [власні винятки](/uk/oop/custom-exceptions).

{% include nav.html %}
