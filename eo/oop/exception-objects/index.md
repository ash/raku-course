---
title: Esceptobjektoj
translations_gpt:
---

{% include menu.html %}

Escepto estas objekto, kiel ĉiu alia en Raku. Kiam vi skribas `die 'something failed'`, Raku envolvas vian mesaĝon en esceptobjekton de la tipo `X::AdHoc`.

Ene de `CATCH`, vi povas inspekti tiun objekton. Ĝia tipo venas de `.^name`, kaj ĝia teksto de `.message`:

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

Koni la tipon permesas al vi trakti malsamajn erarojn malsame. La enkonstruitaj esceptoj de Raku havas specifajn tipojn, kies nomoj komenciĝas per `X::`, kaj vi povas kongrui kun ili per `when`, ĝuste kiel vi kongruis valorojn en bloko `given`/`when`:

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

Ĉi tio presas `an ad-hoc error: something failed`, ĉar la escepto kongruis kun la tipo `X::AdHoc`. Kongrui laŭ la tipo estas la bazo de trakti specifajn erarojn — la ideo, sur kiu la sekcio pri [propraj esceptoj](/eo/oop/custom-exceptions) konstruas.

{% include nav.html %}
