---
title: Как установить mutsu
translations_gpt:
---

{% include menu.html %}

Готовые сборки mutsu для macOS и Linux — как для процессоров Intel/AMD, так и для ARM —
публикуются на странице релизов его репозитория на GitHub,
[github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Каждая сборка содержит
два исполняемых файла: сам `mutsu` и `mzef`, его менеджер пакетов.

## С помощью mise

Проще всего установить выпуск с помощью [mise](https://mise.jdx.dev/) — программы, которая
устанавливает и обновляет инструменты разработчика. Одна команда скачивает сборку для
вашего компьютера и добавляет в ваш `PATH` и `mutsu`, и `mzef`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## С помощью Docker

В любой системе, где работает Docker, включая Windows, mutsu можно использовать, не
устанавливая его. Эта команда запускает интерактивную оболочку REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

А эта запускает программу из текущего каталога:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Сборка из исходного кода

mutsu написан на Rust, поэтому его можно собрать и самостоятельно с помощью Cargo
из исходного кода в его репозитории; подробности описаны в самом репозитории.

## Номера версий

Узнать, какая у вас версия, можно с помощью опции `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Это выпуск самого mutsu. Как и в случае с другими компиляторами, версию языка Raku можно
узнать у самого языка:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Сравните это с тем, как представляются [Rakudo](/ru/essentials/how-to-install-rakudo)
и [Raku++](/ru/essentials/how-to-install-rakupp).

{% include nav.html %}
