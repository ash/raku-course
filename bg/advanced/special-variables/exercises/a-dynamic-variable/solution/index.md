---
title: 'Solution: Динамична променлива'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Можете да намерите пълния код във файла [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Резултат

```
running as guest
running as admin
```

## Коментари

1. Туигилът `*` прави `$*user` динамична. `whoami` никога не я приема като параметър — тя намира стойността, като гледа навън през стека на извикванията, така че първото извикване докладва стойността по подразбиране `guest`.

1. Вътрешният блок предекларира `$*user` като `admin` за времетраенето на този блок. *Същата* `whoami` сега вижда `admin`, защото динамичното търсене следва този, който е в момента на стека. Заменянето на динамична променлива в обхват е начинът, по който предоставяте повишен контекст на всичко, извикано от него — без да променяте `whoami` изобщо.

{% include nav.html %}
