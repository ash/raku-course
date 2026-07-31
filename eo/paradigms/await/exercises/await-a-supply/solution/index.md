---
title: 'Solvo: Atendu supply'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Vi povas trovi la fontkodon en la dosiero [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Eligo

```
final reading: 23
```

## Komentoj

1. Atendi supply blokas, ĝis la fluo eligis ĉion, kion ĝi havas — la sama «atendu ĝis kompleta», kiun `await` donas por promeso — kaj ĝia valoro estas la **lasta** afero, kiun la supply eligis, `23`.

1. Tio taŭgas por fluo, kie nur la finstato gravas, kiel la plej lasta sensila legaĵo. Se vi bezonas *ĉiun* valoron, tio estas tasko por `.tap` aŭ bloko `react`, kiel en la antaŭaj sekcioj.

{% include nav.html %}
