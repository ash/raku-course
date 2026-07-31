---
title: 'Solvo: Ĉenigu promeson'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Vi povas trovi la fontkodon en la dosiero [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Eligo

```
RAKU!
```

## Komentoj

1. Ĉiu `.then` konstruas novan promeson, kiu plenumiĝas tuj kiam la antaŭa estas preta. Ene de ĝia bloko, `.result` estas la valoro, kiun la antaŭa promeso produktis.

1. La unua postsekvo majuskligas `'raku'` al `'RAKU'`; la dua aldonas `'!'`. Atendi la lastan promeson, `$r`, trairas la tutan ĉenon kaj donas `'RAKU!'` — malgranda ĉenstacio, kie ĉiu paŝo transformas la rezulton de la paŝo antaŭ ĝi.

{% include nav.html %}
