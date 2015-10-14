---
layout: default
title: Part schema
---

## Part

The `section` element describes the contents of a section of regulation. It consists of the following elements:

1. `subject`, a string containing the title of the section
2. zero or more paragraph elements

The `section` element supports the following attributes:

1. `sectionNum`, an integer indicating the section number
2. `label`, a unique id by which the section can be referenced

<span class="toggle">View schema code</span>

```XML
<complexType name="Section">
	<sequence>
		<element name="subject" type="string"></element>
		<choice maxOccurs="unbounded">
			<element name="reserved" type="string"></element>
			<element name="paragraph" type="tns:Paragraph"></element>
		</choice>
	</sequence>
	<attribute name="sectionNum" type="int" use="required"></attribute>
	<attribute name="label" type="string" use="required"></attribute>
</complexType>
```

The `partContents` type defines the contents of a part of a regulation. It consists of the following elements:

1. zero or one auth elements. The auth element is a complex type consisting of the following elements:
	1. title, a string indicating issuing authority
	2. content, a string indicating where the issuing authority comes from
2. zero or more section elements
3. zero or more appendix elements

<span class="toggle">View schema code</span>

```xml
<complexType name="PartContents">
  <sequence>
  <choice minOccurs="0" maxOccurs="1">
    <element name="auth">
      <complexType>
        <sequence>
          <element name="title" type="string"></element>
          <element name="content" type="string"></element>
        </sequence>
      </complexType>
    </element>
  </choice>
  <choice minOccurs="0" maxOccurs="unbounded">
    <element ref="tns:section"></element>
  </choice>
  <choice minOccurs="0" maxOccurs="unbounded">
    <element ref="tns:appendix"></element>
  </choice>
</sequence>
</complexType>
```

The subpart type describes a subpart to a regulation. It consists of the following elements:

1. zero or one `title` elements, a string giving the subpart title
2. zero or one `tableOfContent` elements, which describe the table of contents in the subpart
3. at least one `partContents` elements.

In addition, subpart contains the following attributes:

1. `subpartLetter`, a string identifying the letter of this subpart

<span class="toggle">View schema code</span>

```xml
<complexType name="Subpart">
	<sequence>
		<choice minOccurs="0" maxOccurs="1">
			<element name="title" type="string"></element>
		</choice>
		<choice minOccurs="0" maxOccurs="1">
			<element name="tableOfContents" type="tns:TableOfContents"></element>
		</choice>
		<choice minOccurs="1" maxOccurs="unbounded">
			<element name="content" type="tns:PartContents"></element>
		</choice>
	</sequence>
	<attribute name="subpartLetter" type="string"></attribute>
</complexType>
```

The `part` element describes the part of a regulation. It consists of the following elements:

1. zero or one `tableOfContents` elements that describe the table of contents within the part
2. `content`, an element which consists of the following sub-elements:
	1. zero or more `subpart` elements
	2. zero or more `appendix` elements
	3. zero or more `interpretation` elements

<span class="toggle">View schema code</span>

```xml
<complexType name="Part">
	<sequence>
		<choice minOccurs="0" maxOccurs="1">
			<element name="tableOfContents" type="tns:TableOfContents"></element>
		</choice>
		<element name="content">
			<complexType>
				<sequence>
					<choice minOccurs="0" maxOccurs="unbounded">
						<element ref="tns:subpart"></element>
						<element ref="tns:appendix"></element>
						<element ref="tns:interpretations"></element>
					</choice>
				</sequence>
			</complexType>
		</element>
	</sequence>
	<attribute name="partNumber" type="int" use="required"></attribute>
</complexType>
```

[View the full schema file](https://github.com/cfpb/regulations-schema/blob/master/src/part.xsd)
