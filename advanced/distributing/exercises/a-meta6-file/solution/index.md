---
title: The solution of ’A META6 file‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

`META6.json`:

```json
{
    "name": "Greet::Simple",
    "version": "0.0.1",
    "description": "A simple greeting module",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [ "JSON::Fast" ],
    "provides": {
        "Greet::Simple": "lib/Greet/Simple.rakumod"
    }
}
```

🦋 You can find the source code in the file [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Comments

1. `provides` maps the module name to the file that implements it, with the directory path matching the `::` parts of the name.

1. `depends` lists the other distributions this one needs — here the single entry `"JSON::Fast"`. When someone installs `Greet::Simple`, the tools will pull in `JSON::Fast` first. An empty array would mean no dependencies.

{% include nav.html %}
