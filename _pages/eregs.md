---
layout: default
title: eRegs/RegsML schema
---

## eRegs/RegsML


`eregs.xsd` is the main file that defines the RegsML schema. It serves mostly to include other files that define various parts of the schema and defines the top-level regulation element.

<span class="toggle">View schema code</span>

```xml
  <include schemaLocation="primitives.xsd"></include>
  <include schemaLocation="preamble.xsd"></include>
  <include schemaLocation="toc.xsd"></include>
  <include schemaLocation="part.xsd"></include>
```

---

**The regulation consists of three elements:**

1. The `FDSys` tag which contains information pertinent to the federal register.
2. The `preamble` tag which contains some descriptive information about the reg.
3. At least one part.

```xml
<fdsys>
  <cfrTitleNum>12</cfrTitleNum>
  <cfrTitleText>Banks and Banking</cfrTitleText>
  <volume>8</volume>
  <date>2012-01-01</date>
  <originalDate>2012-01-01</originalDate>
  <title>ALTERNATIVE MORTGAGE TRANSACTION PARITY (REGULATION D)</title>
</fdsys>
<preamble>
  <agency>Consumer Financial Protection Bureau</agency>
  <cfr>
    <title>12</title>
    <section>1004</section>
  </cfr>
  <depdoc>[Docket No. CFPB-2011-0004]</depdoc>
  <rin>RIN 3170-AA04</rin>
  <summary>
    <header>SUMMARY:</header>
    <content>
      ...
    </content>
  </summary>
  <effectiveDate>2011-07-22</effectiveDate>
</preamble>
<part partNumber="1004">
  <content>
    ...
  </content>
</part>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Regulation">
	<sequence>
		<element name="fdsys" type="tns:FDSys"></element>
		<element name="preamble" type="tns:Preamble"></element>
  	<choice minOccurs="1" maxOccurs="unbounded">
  		<element ref="tns:part"></element>
  	</choice>
	</sequence>
</complexType>
```

---

The regulation element enforces the following constraints:

1. IDs of definitions must be unique.
2. Labels of paragraphs must be unique.
3. Labels of sections must be unique.
4. Labels of subparts must be unique.
5. Labels of appendices must be unique.
6. Labels of appendix sections must be unique.

<span class="toggle">View schema code</span>

```xml
<element name="regulation" type="tns:Regulation">
	<unique name="unique-def-id">
		<selector xpath=".//tns:def"></selector>
		<field xpath="@def-id"></field>
	</unique>
	<unique name="unique-par-label">
		<selector xpath=".//tns:paragraph|.//tns:section|.//tns:subpart|.//tns:appendix|.//tns:appendixSection"></selector>
		<field xpath="@label"></field>
	</unique>
</element>
```

---

[View the full schema file &#187;](https://github.com/cfpb/regulations-schema/blob/master/src/eregs.xsd)
