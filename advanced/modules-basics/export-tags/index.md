---
title: Export tags
---

{% include menu.html %}

Marking a subroutine `is export` places it in a module’s _default_ export group — the names a plain `use` brings in. By giving `is export` a _tag_, you can sort exports into named groups and let each program pick the set it wants.

A tag is written in parentheses after `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` has no tag, so it belongs to the default group; `goodbye` is tagged `:partings`.

A plain `use` imports the default group only:

```raku
use Greeting;      # hello is available; goodbye is not
```

Naming a tag imports that group instead — and, perhaps surprisingly, _not_ the default one as well:

```raku
use Greeting :partings; # goodbye is available; hello is not
```

Asking for `:partings` gives you exactly that group. To pull in everything a module exports, use the built-in `:ALL` tag:

```raku
use Greeting :ALL; # both hello and goodbye
```

Two special tags are worth knowing. `:ALL` is supported by every module and imports all of its exports. `:MANDATORY` is one you can place on a routine that should be imported no matter which tag the caller chooses.

Each tag is really a package inside the module’s `EXPORT` package — `Greeting::EXPORT::partings`, for example — which is exactly what [module introspection](/advanced/module-introspection) lists. Tags let a larger module keep its default surface small while still offering extra features on request.

{% include nav.html %}
