---
title: Викторина — Интерполяция хешей
---

{% include menu.html %}

Дан следующий хеш:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Завершите следующие программы, чтобы получить запрашиваемый вывод.

## 1

Используя хеш, выведите имя греческой буквы `β`. Используйте форму без кавычек вокруг строки ключа.

{:.quiz-code}
&lt;β&gt; | say &quot;The letter β is called %letters␣␣.&quot;;

## 2

Используя хеш, выведите имя греческой буквы `β`. Используйте форму, где ключ заключен в одинарные кавычки.

{:.quiz-code}
{&apos;β&apos;} | say &quot;The letter β is called %letters␣␣␣␣.&quot;;


## 3

Выведите буквы и их имена в виде таблицы.

{:.quiz-code}
letters{ | say &quot;Here are some Greek letters:\n%␣␣␣␣␣}\netc.&quot;; | Обратите внимание, что вывод может быть не отсортирован.

Возможный вывод для этого случая:

    Here are some Greek letters:
    α	Alpha
    β	Beta
    γ	Gamma
    etc.

{% include quiz.html %}

{% include nav.html %}