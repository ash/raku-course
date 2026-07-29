---
title: Розв'язання вправи «Розбір хештега»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Знайдіть програму у файлі [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Вивід

```
｢raku｣
```

## Коментарі

1. `TOP` прописує фіксований `#`, за яким іде токен `<tag>`.

1. `.parse` вимагає, щоб зіставився весь рядок, і після цього тег доступний як захоплення `<tag>`.

## Альтернатива

Натомість можна дозволити `tag` зіставлятися з усім хештегом — із `#` разом зі словом — і дістатися до слова через вкладене правило `word`:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Це друкує те саме `｢raku｣`. Тепер `<tag>` захоплює весь `#raku`, а до слова всередині нього дістаються як `<tag><word>`. Граматика читається дещо більше схожою на річ, яку вона описує: хештег *є* `#`, за яким іде слово, а слово — це самостійна іменована частина.

{% include nav.html %}
