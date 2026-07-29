---
title: Тест — Інтерполяція хешів
---

{% include menu.html %}

Дано такий хеш:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Доповніть наведені нижче програми, щоб отримати потрібний вивід.

## 1

Використовуючи хеш, виведіть назву грецької літери `β`. Скористайтеся формою без лапок навколо рядка-ключа.

{:.quiz-code}
&lt;β&gt; | say &quot;The letter β is called %letters␣␣.&quot;;

## 2

Використовуючи хеш, виведіть назву грецької літери `β`. Скористайтеся формою, де ключ узятий в одинарні лапки.

{:.quiz-code}
{&apos;β&apos;} | say &quot;The letter β is called %letters␣␣␣␣.&quot;;


## 3

Виведіть літери та їхні назви таблицею.

{:.quiz-code}
letters{ | say &quot;Here are some Greek letters:\n%␣␣␣␣␣}\netc.&quot;; | Зверніть увагу, що вивід може бути невідсортованим.

Можливий вивід для цього випадку:

    Here are some Greek letters:
    α	Alpha
    β	Beta
    γ	Gamma
    etc.

{% include quiz.html %}

{% include nav.html %}
