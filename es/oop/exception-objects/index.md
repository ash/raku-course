---
title: Objetos de excepción
translations_gpt:
---

{% include menu.html %}

Una excepción es un objeto, como cualquier otro en Raku. Cuando escribes `die 'something failed'`, Raku envuelve tu mensaje en un objeto de excepción del tipo `X::AdHoc`.

Dentro de un `CATCH` puedes inspeccionar ese objeto. Su tipo viene de `.^name` y su texto de `.message`:

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

Conocer el tipo te permite tratar errores distintos de forma distinta. Las excepciones incorporadas de Raku tienen tipos concretos, cuyos nombres empiezan por `X::`, y puedes emparejarlas con `when`, igual que emparejabas valores en un bloque `given`/`when`:

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

Esto imprime `an ad-hoc error: something failed`, porque la excepción coincidió con el tipo `X::AdHoc`. Emparejar por tipo es la base del manejo de errores concretos, la idea sobre la que se construye la sección de [excepciones personalizadas](/es/oop/custom-exceptions).

{% include nav.html %}
