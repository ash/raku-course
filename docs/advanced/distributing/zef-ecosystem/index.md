---
title: zef and the ecosystem
---

{% include menu.html %}

`zef` is Raku’s module installer. You have already used it to install modules by name; it also works on a local distribution directory. From inside a distribution you can test and install it directly:

```
zef test .
zef install .
```

`zef test .` runs the files under `t/`, and `zef install .` installs the distribution into your Raku so that other programs can `use` it. Installing by name — `zef install Cro` — does the same thing after first downloading the distribution from the ecosystem.

To **publish** your own distribution so that others can install it by name, you upload it to the ecosystem. The common tool for this is `fez`:

```
fez upload
```

This packages the current distribution and submits it to the Raku ecosystem, after which `zef install Maths::Simple` will work for anyone.

> These commands need `zef`/`fez` installed and network access, and uploading needs an ecosystem account.

So the lifecycle of a shared module is: lay it out with a `META6.json`, test it with `zef test`, and publish it with `fez upload`. From then on it is just another name that anyone can `zef install`.

{% include nav.html %}
