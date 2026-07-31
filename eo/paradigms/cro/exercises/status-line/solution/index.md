---
title: 'Solvo: Stato per kliento'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Vi povas trovi la fontkodon en la dosiero [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Eligo

```
200
```

## Komentoj

1. `Cro::HTTP::Client.get` redonas promeson — reta peto finiĝas poste — do ni `await`-as ĝin.

1. La responda objekto jam konas sian `.status`, do ni ricevas `200` rekte, sen sendi la petan tekston aŭ analizi la respondon mane. Komparu tion kun la versio per kruda kontaktskatolo: la modulo faras la tutan protokolan laboron por vi.

{% include nav.html %}
