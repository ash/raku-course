---
title: Scalar variables
---

{% include menu.html %}

So far, the programs we saw had hardcoded text strings. Let us introduce a bit of freedom and let the program use variables.

There are a few types of variables in Raku. A variable is a container that can keep some data in it. We’ll start with the simplest containers that can keep only a single value. Such containers are called _scalars_ or scalar variables. A variable has a name prefixed with a special indicator that tells about the container's nature. That indicator is a character called _sigil_. For scalar containers, such a sigil is a dollar character `$`.

Here are a couple of examples of scalar variables:

```raku
$name

$age
```

{% include nav.html %}
