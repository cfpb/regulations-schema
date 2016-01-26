---
layout: default
title: Table of Contents schema
---

## Table of Contents

The `tableOfContents` element describes the contents of the element that contains it. It consists of the following elements:

zero or more `tocSecEntry` elements, which express a reference to a section of the content. The `tocSecEntry` consists of the following elements:

1. `sectionNum`, an integer indicating the section number
2. `sectionSubject`, a string indicating the section title

In addition, the `tocSecEntry` element supports the following attributes:

1. `target`, a string indicating the label of the element being referenced

zero or more `tocAppEntry` elements, which express a reference to a section of the appendix content. The `tocAppEntry` consists of the following elements:

1. zero or one appendixLetter, a string containing the letter of the appendix being referenced
2. appendixSubject, a string containing the subject of the appendix or section being referenced

In addition, the `tocAppEntry` element supports the following attributes:

1. `target`, a string indicating the label of the element being referenced

```xml
<tableOfContents>
	<tocSecEntry>
		<sectionNum>1</sectionNum>
		<sectionSubject>Authority, purpose, and scope.</sectionSubject>
	</tocSecEntry>
	<tocSecEntry>
		<sectionNum>2</sectionNum>
				<sectionSubject>Definitions.</sectionSubject>
	</tocSecEntry>
	<tocSecEntry>
		<sectionNum>3</sectionNum>
		<sectionSubject>Preemption of State law.</sectionSubject>
	</tocSecEntry>
	<tocSecEntry>
		<sectionNum>4</sectionNum>
		<sectionSubject>Requirements for alternative mortgage transactions.</sectionSubject>
	</tocSecEntry>
	<tocAppEntry>
		<appendixLetter>A</appendixLetter>
		<appendixSubject>Appendix A to Part 1004—Official Commentary on Regulation D</appendixSubject>
	</tocAppEntry>
</tableOfContents>
```


<span class="toggle">View schema code</span>


```xml
<complexType name="TableOfContents">
	<sequence>
		<choice minOccurs="0" maxOccurs="unbounded">
			<element name="tocSecEntry">
				<complexType>
					<sequence>
						<element name="sectionNum" type="int"></element>
						<element name="sectionSubject" type="string"></element>
					</sequence>
					<attribute name="target" type="string" use="required"></attribute>
				</complexType>
			</element>
		</choice>
		<choice minOccurs="0" maxOccurs="unbounded">
			<element name="tocAppEntry">
				<complexType>
					<sequence>
						<choice minOccurs="0" maxOccurs="1">
							<element name="appendixLetter" type="string"></element>
						</choice>
						<element name="appendixSubject" type="string"></element>
					</sequence>
					<attribute name="target" type="string" use="required"></attribute>
				</complexType>
			</element>
		</choice>
	</sequence>
</complexType>
```

[View the full schema file &#187;](https://github.com/cfpb/regulations-schema/blob/master/src/toc.xsd)
