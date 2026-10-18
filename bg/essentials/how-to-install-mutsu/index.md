---
title: Как да инсталирате mutsu
translations_gpt:
---

{% include menu.html %}

mutsu публикува готови компилации за macOS и Linux, както за процесори Intel/AMD, така и за ARM, на страницата с издания на хранилището си в GitHub — [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Всяка компилация съдържа два изпълними файла: самия `mutsu` и `mzef`, неговия мениджър на пакети.

## С mise

Най-лесният начин да инсталирате издание е [mise](https://mise.jdx.dev/) — програма, която инсталира и обновява инструменти за разработчици. Една команда изтегля компилацията за вашата машина и поставя във вашия `PATH` както `mutsu`, така и `mzef`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## С Docker

На всяка система, на която работи Docker, включително Windows, можете да използвате mutsu, без да го инсталирате. Това стартира интерактивната обвивка REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

А това изпълнява програма от текущата директория:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Изграждане от изходния код

mutsu е написан на Rust, така че можете и сами да го изградите с Cargo от изходния код в хранилището му; хранилището обяснява подробностите.

## Номера на версиите

Проверете коя версия имате с опцията `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Това е изданието на самия mutsu. Както и при другите компилатори, за версията на езика Raku можете да попитате самия език:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Сравнете това с начина, по който се представят [Rakudo](/bg/essentials/how-to-install-rakudo) и [Raku++](/bg/essentials/how-to-install-rakupp).

{% include nav.html %}
