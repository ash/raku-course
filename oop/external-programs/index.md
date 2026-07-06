---
title: Running external programs
---

{% include menu.html %}

Programs do not work in isolation — they often need to run other programs, read their output, and consult the environment they were started in. Raku gives you direct, convenient access to all of this.

This section covers `run` and `shell` for launching external commands, capturing what those commands print, and the `%*ENV` hash that holds the environment variables.

{% include nav.html %}
