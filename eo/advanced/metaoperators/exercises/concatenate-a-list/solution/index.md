---
title: 'Solvo: Konstrui URL-on'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Vi povas trovi la fontkodon en la dosiero [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Eligo

```
http://example.com
18
```

## Komentoj

1. La tabelo estas skribita per la angulkrampa citformo `<...>`, kiu egalas al `'http', '://', 'example', '.com'`.

1. La redukta meta-operatoro `[~]` metas la ĉenkunigan operatoron `~` inter ĉiujn elementojn, do `[~] @parts` gluigas la kvar pecojn en la ununuran ĉenon `http://example.com`.

1. Konservi la rezulton en `$url` permesas reuzi ĝin: `$url.chars` poste raportas, ke la kunmetita URL havas `18` signojn.

{% include nav.html %}
