---
title: Як встановити mutsu
translations_gpt:
---

{% include menu.html %}

Готові збірки mutsu для macOS і Linux — як для процесорів Intel/AMD, так і для ARM — публікуються на сторінці випусків його репозиторію на GitHub, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Кожна збірка містить два виконувані файли: сам `mutsu` і `mzef`, його менеджер пакетів.

## За допомогою mise

Найпростіше встановити випуск за допомогою [mise](https://mise.jdx.dev/) — програми, яка встановлює й оновлює інструменти розробника. Одна команда завантажує збірку для вашого комп'ютера та додає до вашого `PATH` і `mutsu`, і `mzef`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## За допомогою Docker

У будь-якій системі, де працює Docker, зокрема й у Windows, mutsu можна використовувати, не встановлюючи його. Ця команда запускає інтерактивну оболонку REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

А ця запускає програму з поточного каталогу:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Збирання з вихідного коду

mutsu написано мовою Rust, тож ви можете зібрати його й самостійно за допомогою Cargo з вихідного коду в його репозиторії; подробиці пояснено в самому репозиторії.

## Номери версій

Дізнатися, яка версія у вас, можна за допомогою опції `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Це випуск самого mutsu. Як і з іншими компіляторами, версію мови Raku можна запитати в самої мови:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Порівняйте це з тим, як представляють себе [Rakudo](/uk/essentials/how-to-install-rakudo) і [Raku++](/uk/essentials/how-to-install-rakupp).

{% include nav.html %}
