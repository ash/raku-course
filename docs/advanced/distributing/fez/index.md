---
title: Publishing with fez
---

{% include menu.html %}

The previous topic introduced `fez` as a way to upload a distribution to the Raku ecosystem. You do not have to use `fez` — it is not the only way to publish — but it is the most common choice, and it does more than upload: it can also set a new distribution up for you and manage your author account. Install it with `zef`:

```
zef install fez
```

## Starting a distribution

Rather than assembling a `META6.json` and the `lib/` and `t/` directories by hand, you can let `fez` scaffold them:

```
fez init My::Greeting
```

`fez init` initialises a new distribution to build on — a project directory with a ready-made `META6.json` and the standard layout already in place — so you can go straight to writing code under `lib/` and tests under `t/` instead of preparing the metadata file yourself.

## Registering and logging in

Publishing needs an ecosystem account. You create one once with `fez register` (it asks for a username, email, and password) and sign in with `fez login`, which stores your key so that later commands are authenticated:

```
fez register
fez login
```

Your username matters: a distribution’s `META6.json` must carry an `auth` field set to `zef:<username>`, which is how the ecosystem knows the upload is really yours.

## Uploading

With the account in place and the distribution ready, `fez upload` packages the current directory and submits it:

```
fez upload
```

After that, anyone can install it by name with `zef install My::Greeting`. Each version may be uploaded only once, so remember to raise the `version` in `META6.json` before publishing an update.

## Other handy commands

A few more `fez` commands you will reach for:

* `fez review` — check a distribution for likely problems before uploading;
* `fez list` — show the distributions you have already published;
* `fez refresh` — rebuild `META6.json` from the files currently on disk.

> All of these need `fez` installed and network access, and everything past `init` needs an ecosystem account.

{% include nav.html %}
