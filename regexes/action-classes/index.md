---
title: Action classes
---

{% include menu.html %}

Inline `{ make … }` blocks work, but they clutter a grammar with logic and make it harder to read. The tidy solution is an _action class_: a separate class whose methods are named after the grammar’s tokens and supply the `make` for each one.

This section shows how to write an action class, how to hand it to `.parse`, and when to prefer it over inline actions.

{% include nav.html %}
