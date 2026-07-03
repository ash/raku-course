---
title: Packages and namespaces
---

{% include menu.html %}

A _namespace_ is a named container for other named things, such as variables and subroutines. It keeps names from colliding: `Maths::pi` and `Physics::pi` can both exist without clashing. A _package_ is the most basic kind of namespace.

You have already used a namespace without naming it: every `module` creates one. This section looks at packages directly, and at how `our` variables and the `::` separator let you reach into a namespace from outside.

{% include nav.html %}
