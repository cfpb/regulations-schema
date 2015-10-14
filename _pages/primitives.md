---
layout: default
title: Primitives schema
---

## Primitives

This describes the primitives that are allowed in RegsML.

Regulation text is a mixed element that can contain:

1. Regular text,
2. references, and
3. definitions.

<span class="toggle">View schema code</span>

```XML
<complexType name="RegText" mixed="true">
  <choice minOccurs="0" maxOccurs="unbounded">
    <element ref="tns:ref"></element>
    <element ref="tns:def"></element>
  </choice>
</complexType>
```

The paragraph element can contain the following:

1. At most 1 paragraph title.
2. One content tag that contains regtext.
3. Possibly any number of subparagraphs.

In addition, the paragraph element contains the following attributes:

1. `marker`, which defines the marker that is placed in the beginning of the paragraph
2. `label`, which defines the unique tag that identifies the paragraph.

```xml
<paragraph marker="a">
  <title>Mortgages with adjustable rates or finance charges and home equity lines of credit.</title>
  <content>
    ...
  </content>
</paragraph>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Paragraph">
	<sequence>
		<choice minOccurs="0" maxOccurs="1">
			<element name="title" type="string"></element>
		</choice>
		<element name="content" type="tns:RegText"></element>
		<element ref="tns:paragraph" minOccurs="0" maxOccurs="unbounded"></element>
	</sequence>
<attribute name="marker" type="string" use="required"></attribute>
<attribute name="label" type="string"></attribute>
</complexType>
```

The `reference` element supports referencing any other element with a label attribute. The `reference` element has the following attributes:

1. `target`, the element being referenced.
2. `reftype`, the type of reference (internal or external)

<span class="toggle">View schema code</span>

```xml
<complexType name="Reference">
	<simpleContent>
		<extension base="string">
			<attribute name="target" type="string"></attribute>
			<attribute name="reftype" type="string"></attribute>
		</extension>
	</simpleContent>
</complexType>
```

The `definition` element supports defined terms within the text. The `definition` has the following attributes:

1. `id`, a unique id
2. `term`, the actual term being defined within this tag

```xml
<complexType name="Definition">
	<simpleContent>
		<extension base="string">
			<attribute name="id" type="string" use="optional"></attribute>
			<attribute name="term" type="string" use="required"></attribute>
		</extension>
	</simpleContent>
</complexType>
```

[View the full schema file &#187;](https://github.com/cfpb/regulations-schema/blob/master/src/primitives.xsd)
