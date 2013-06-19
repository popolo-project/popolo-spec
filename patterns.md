---
layout: default
title: Data Design Patterns | The Popolo Project
id: patterns
---
{% include navigation.html %}

# Flag additional properties

It is impractical to define every possible property for a given class in order to satisfy all possible use cases. Some properties used for specific use cases will therefore not be defined in the data specification. For example, the following JSON document adds a `hair_colour` property:

```json
{
  "@type": "Person",
  "name": "Mr. John Q. Public, Esq.",
  "hair_colour": "brown"
}
```

Data consumers, who are less familiar with the specification itself, might assume that the `hair_colour` property is part of the specification and expect it to be defined on other documents with the same semantics over the long term.

To avoid misinterpretation, some implementations flag additional properties that may be subject to change using one of the two strategies below:

1. Prefix the additional property with a `+` character, e.g.:

    ```json
    {
      "@type": "Person",
      "name": "Mr. John Q. Public, Esq.",
      "+hair_colour": "brown"
    }
    ```

1. Collect all additional properties into a subdocument, e.g.:

    ```json
    {
      "@type": "Person",
      "name": "Mr. John Q. Public, Esq.",
      "extra": {
        "+hair_colour": "brown"
      }
    }
    ```
