---
layout: default
title: Analysis schema
---

## Analysis

### `analysis`

The `analysis` type describes the analysis of a section of the  regulation. It consists of the following elements:

1. `title`, the title of the analysis
2. one or more `analysisSection` elements

```xml
<analysis>
  <title>Section 1000.1 Authority, Purpose, and Scope</title>
  <analysisSection>
    ...
  </analysisSection>
</analysis>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Analysis">
<sequence>
  <choice minOccurs="0" maxOccurs="unbounded">
    <element ref="tns:analysisSection"></element>
  </choice>
</sequence>
</complexType>
```

---

### `analysisSection`

The `analysisSection` describes the analysis of a section of the  regulation. It consists of the following elements:

1. `title`, the title of the analysis section
2. one or more `analysisParagraph` elements
3. zero or more other `analysisSection` elements

```xml
<analysisSection>
  <title>1(c) Scope</title>
  <analysisParagraph>
    ...
  <analysisParagraph>
  <analysisSection>
    ...
  </analysisSection>
</analysisSection>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="AnalysisSection">
<sequence>
  <element name="title" type="string"></element>

  <choice minOccurs="1" maxOccurs="unbounded">
    <element ref="tns:analysisParagraph"></element>
    <element ref="tns:analysisSection"></element>
  </choice>
</sequence>
</complexType>
```

---

### `analysisParagraph`

The `anlaysisParagraph` describes a paragraph within the analysis of a regulation. This differs from the primitive `paragraph` because paragraphs within analysis are more limited in what they can express. They do not get markers, references, definitions, graphics, etc, they only contain footnotes.

`analysisParagraph` consists of the following elements:

1. one `content` element, which can contain text and zero or more `footnote` elements
2. zero or more other `analysisParagraph` elements
3. zero or more `footnote` elements
4. italicized text

```xml
<analysisParagraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<footnote ref="1">...</footnote>
<analysisParagraph>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="AnalysisParagraph" mixed="true">
  <sequence>
    <choice minOccurs="0" maxOccurs="unbounded">
      <element ref="tns:footnote"></element>
      <element name="em" type="tns:Emphasis"></element>
    </choice>
  </sequence>
</complexType>
```

---


### `footnote`

The `footnote` type defines a footnote within an `analysisParagraph`. Footnotes are strings with the following attributes:

1. `reference`, the reference number (typically) of the note.

```xml
<footnote ref="1">This is the footnote text.</footnote>
```

<span class="toggle">View schema code</span>

```xml
<complexType name="Footnote">
  <simpleContent>
    <extension base="string">
      <attribute name="ref"></attribute>
    </extension>
  </simpleContent>
</complexType>
```

---

**[View the full schema file &#187;](https://github.com/cfpb/regulations-schema/blob/master/src/analysis.xsd)**
