---
title: 'Решение: Вход в блок'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Исходный код можно найти в файле [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Вывод

```
--entering
body 1
--entering
body 2
```

## Комментарии

1. `ENTER` выполняется каждый раз при входе в блок, непосредственно перед его телом. Поскольку цикл входит в своё тело один раз на каждой итерации, `--entering` печатается перед каждой строкой `body`.

1. В этом разница между `ENTER` и `FIRST`: `FIRST` выполнился бы только один раз за весь цикл, тогда как `ENTER` выполняется при каждом входе.

{% include nav.html %}
