---
title: 'Solution: Почистване при напускане'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Изходният код на тази програма можете да намерите във файла [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Изход

```
Working
Cleanup
```

## Коментари

1. След като `Working` бъде отпечатано, `return` излиза от подпрограмата веднага, така че `never reached` никога не се отпечатва.

1. Въпреки че тялото е напуснато преждевременно, фазерът `LEAVE` все пак се задейства при излизане и отпечатва `Cleanup`. Тази гаранция е точно причината `LEAVE` да е правилното място за освобождаване на ресурси — той се изпълнява независимо как завършва блокът.

{% include nav.html %}
