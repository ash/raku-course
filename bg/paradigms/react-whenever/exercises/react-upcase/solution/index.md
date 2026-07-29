---
title: 'Решение: Главни букви с react'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Намерете програмата във файла [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Изход

```
[A B C]
```

## Коментари

1. Тялото на `whenever` се изпълнява по веднъж за стойност, превръща я в главни букви и я слага в `@collected`.

1. `react` изчаква единствения поток да приключи, така че в момента на изпълнение на `say` масивът съдържа и трите стойности по ред: `[A B C]`.

1. Потокът има свои собствени методи, подобни на списъчните, така че можете да превърнете в главни букви в самата струя, а не в тялото — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — и ефектът е същият. `.map` върху поток преобразува всяка стойност, докато тя минава покрай него; изборът е само дали преобразуването принадлежи на струята, или на реакцията.

{% include nav.html %}
