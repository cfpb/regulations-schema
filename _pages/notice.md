---
layout: default
title: eRegs/RegsML schema
---

## Notices

In RegsML, notices express changes from one version of a regulation to the next. 

### `notice`

Notices include the same sorts of content as regulations do, except that the content is just the things that have been modified from the last notice, wrapped in a changeset element. 
   
All the notice metadata is contained within the preamble, which is identical to the regulation preamble.

Notices contain three elements:

1. `fdsys`, which contains information pertinent to the federal register.
2. `preamble`, which contains some descriptive information about the reg.
3. `changeset`, which contains zero or more changes this notice makes to the previous version of a regulation.

`notice` is intended to be the root element of a document.

```xml
<notice>
  <fdsys>
    ...
  </fdsys>
  <preamble>
    ...
  </preamble>
  <changeset>
   ...
  </changeset>
</notice>
```

<span class="toggle">View schema code</span>

```xml
<include schemaLocation="primitives.xsd"></include>
<include schemaLocation="preamble.xsd"></include>
<include schemaLocation="toc.xsd"></include>
<include schemaLocation="part.xsd"></include>

<complexType name="Notice">
  <sequence>
    <element name="preamble" type="tns:Preamble"></element>
    <choice minOccurs="0" maxOccurs="1">
      <element ref="tns:changeset"></element>
    </choice>
  </sequence>
</complexType>
```

---

### `changeset`

`changeset` includes all changes from one version of a regulation to another. This includes operations that add/modify/delete for a given label within the regulation itself. It consists of the following:

1. Zero or more `change` elements.

```xml
<changeset>
  ...
</changeset>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Changeset">
  <sequence>
    <choice minOccurs="0" maxOccurs="unbounded">
      <element ref="tns:change"></element>
    </choice>
  </sequence>
</complexType>
  ```

### `change`

A `change` modifies the given label from the immediately prior version of a regulation with the given contents. Deletions won't have any content. Change content can be any of the following valid RegML regulation content elements:

`section`, `paragraph`, `analysis`, `appendix`, `appendixSection`, `interpretations`, `interpSection`, `interpParagraph`

`change` elements have two attributes:

1. `label`, the label within the regulation which will be changed
2. `operation`, the change to be performed. This must be one of `added`, `modified`, or `deleted`.

```xml
<change operation="modified" label="1234-1-a">
  ...
</change>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Change">
  <choice minOccurs="0" maxOccurs="unbounded">
    <element name="reserved" type="string"></element>
    <element ref="tns:section"></element>
    <element ref="tns:paragraph"></element>
    <element ref="tns:analysis"></element>
    <element ref="tns:appendix"></element>
    <element ref="tns:appendixSection"></element>
    <element ref="tns:interpParagraph"></element>
    <element ref="tns:interpretations"></element>
    <element ref="tns:interpSection"></element>
  </choice>
  <attribute name="operation">
    <simpleType>
      <restriction base="string">
        <enumeration value="added"/>
        <enumeration value="modified"/>
        <enumeration value="deleted"/>
      </restriction>
    </simpleType>
  </attribute>
  <attribute name="label"></attribute>
</complexType>
```

---

[View the full schema file &#187;](https://github.com/cfpb/regulations-schema/blob/master/src/eregs.xsd)
