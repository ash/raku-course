---
title: Объекты исключений
translations_gpt:
---

{% include menu.html %}

Исключение — это объект, как и всё остальное в Raku. Когда вы пишете `die 'something failed'`,
Raku оборачивает ваше сообщение в объект исключения типа `X::AdHoc`.

Внутри `CATCH` этот объект можно исследовать. Его тип даёт `.^name`, а текст — `.message`:

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

Знание типа позволяет обрабатывать разные ошибки по-разному. У встроенных исключений Raku есть
конкретные типы, имена которых начинаются с `X::`, и их можно сопоставлять через `when` — точно
так же, как вы сопоставляли значения в блоке `given`/`when`:

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

Программа печатает `an ad-hoc error: something failed`, потому что исключение совпало с типом
`X::AdHoc`. Сопоставление по типу — основа обработки конкретных ошибок, и на этой идее строится
раздел о [собственных исключениях](/ru/oop/custom-exceptions).

{% include nav.html %}
