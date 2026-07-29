---
title: Обекти на изключенията
translations_gpt:
---

{% include menu.html %}

Изключението е обект, като всеки друг в Raku. Когато напишете `die 'something failed'`, Raku обвива вашето съобщение в обект на изключение от типа `X::AdHoc`.

Вътре в `CATCH` можете да разгледате този обект. Типът му идва от `.^name`, а текстът му — от `.message`:

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

Знанието на типа ви позволява да третирате различните грешки различно. Вградените изключения на Raku имат конкретни типове, чиито имена започват с `X::`, и можете да ги съпоставяте с `when`, точно както съпоставяхте стойности в блок `given`/`when`:

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

Това отпечатва `an ad-hoc error: something failed`, защото изключението съвпадна с типа `X::AdHoc`. Съпоставянето по тип е основата на обработката на конкретни грешки — идеята, върху която надгражда разделът за [собствените изключения](/bg/oop/custom-exceptions).

{% include nav.html %}
