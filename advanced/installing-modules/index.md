---
title: Installing modules from the web
---

{% include menu.html %}

Beyond the modules you write yourself, there is a large collection of modules published by the Raku community. They cover everything from web frameworks to data formats, and you can install them and use them in your own programs.

## The `zef` installer

Modules are installed with `zef`, the standard module manager that ships with Rakudo. To install a module, give `zef` the module’s name:

```console
$ zef install JSON::Fast
```

`zef` downloads the module along with anything it depends on, runs its tests, and installs it. Once installed, a module is on the search path automatically, so a program can load it with a plain `use` — no `-I` option is needed:

```raku
use JSON::Fast;
```

You can also search the ecosystem and update or remove modules:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## Where modules come from

Published modules live in the Raku _ecosystem_. You can browse it on the website [raku.land](https://raku.land), which lists the available distributions and their documentation.

## `META6.json`

A distribution that is meant to be shared includes a description file named `META6.json`. It records the distribution’s name, version, the modules it provides, and the other distributions it depends on. `zef` reads this file to know what to install and how the pieces fit together. When you publish your own module, providing a correct `META6.json` is what makes it installable by everyone else.

{% include nav.html %}
