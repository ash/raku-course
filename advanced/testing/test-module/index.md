---
title: The Test module
---

{% include menu.html %}

Bring in the testing tools with `use Test`. The most basic check is `ok`, which passes when its condition is true. Each check takes an optional description:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Running this prints, in the standard test format known as _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Each passing check is reported as `ok` with its number and description; a failing one would be `not ok`. The final `1..2` is the _plan_, stating how many tests ran. The `done-testing` call at the end emits that plan automatically.

When you expect a specific value, `is` is clearer than `ok`, because it reports both the expected and the actual value on failure:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

This prints `ok 1 - addition works`. To see that reporting in action, give `is` a wrong expectation:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Now the check fails, and the output explains exactly how:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

The `not ok` line marks the failure, and the diagnostic lines beneath it show what was expected against what actually turned up — which is why `is` is more helpful than a bare `ok` when a specific value matters.

`ok`, `is`, and `done-testing` are already enough to write a useful test file; the next topic adds [the other comparisons](/advanced/testing/comparisons).

{% include nav.html %}
