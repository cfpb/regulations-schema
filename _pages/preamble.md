---
layout: default
title: Preamble schema
---

## Preamble

The `preamble` to a regulation contains descriptive information about the regulation. It consists of the following elements:

1. `agency`, a string that identifies the agency which issued the regulation
2. `cfr`, a complex element that supports the following sub-elements:
  1. `title`, an integer identifying the CFR title containing the regulation
  2. `section`, an integer identifying the CFR section containing the regulation
3. `effectiveDate`, the date on which the regulation takes effect

<span class="toggle">View schema code</span>

```xml
<complexType name="Preamble">
	<sequence>
		<element name="agency" type="string"></element>
		<element name="cfr">
			<complexType>
				<sequence>
					<element name="title" type="int"></element>
					<element name="section" type="int"></element>
				</sequence>
			</complexType>
		</element>
<!-- 			<element name="depdoc" type="string"></element> -->
<!-- 			<element name="rin" type="string"></element> -->
<!-- 			<element name="summary"> -->
<!-- 				<complexType> -->
<!-- 					<sequence> -->
<!-- 						<element name="header" type="string"></element> -->
<!-- 						<element name="content" type="string"></element> -->
<!-- 					</sequence> -->
<!-- 				</complexType> -->
<!-- 			</element> -->
		<element name="effectiveDate" type="date"></element>
	</sequence>
</complexType>
```

[View the full schema file](https://github.com/cfpb/regulations-schema/blob/master/src/preamble.xsd)
