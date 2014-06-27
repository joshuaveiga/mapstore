//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.06.13 at 10:49:44 AM CEST 
//


package net.opengis.ows._1;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * Valid domain (or allowed set of values) of one quantity, with needed metadata but without a quantity name or identifier. 
 * 
 * <p>Java class for UnNamedDomainType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UnNamedDomainType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;group ref="{http://www.opengis.net/ows/1.1}PossibleValues"/>
 *         &lt;element ref="{http://www.opengis.net/ows/1.1}DefaultValue" minOccurs="0"/>
 *         &lt;element ref="{http://www.opengis.net/ows/1.1}Meaning" minOccurs="0"/>
 *         &lt;element ref="{http://www.opengis.net/ows/1.1}DataType" minOccurs="0"/>
 *         &lt;group ref="{http://www.opengis.net/ows/1.1}ValuesUnit" minOccurs="0"/>
 *         &lt;element ref="{http://www.opengis.net/ows/1.1}Metadata" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UnNamedDomainType", propOrder = {
    "allowedValues",
    "anyValue",
    "noValues",
    "valuesReference",
    "defaultValue",
    "meaning",
    "dataType",
    "uom",
    "referenceSystem",
    "metadata"
})
@XmlSeeAlso({
    DomainType.class
})
public class UnNamedDomainType {

    @XmlElement(name = "AllowedValues")
    protected AllowedValues allowedValues;
    @XmlElement(name = "AnyValue")
    protected AnyValue anyValue;
    @XmlElement(name = "NoValues")
    protected NoValues noValues;
    @XmlElement(name = "ValuesReference")
    protected ValuesReference valuesReference;
    @XmlElement(name = "DefaultValue")
    protected ValueType defaultValue;
    @XmlElement(name = "Meaning")
    protected DomainMetadataType meaning;
    @XmlElement(name = "DataType")
    protected DomainMetadataType dataType;
    @XmlElement(name = "UOM")
    protected DomainMetadataType uom;
    @XmlElement(name = "ReferenceSystem")
    protected DomainMetadataType referenceSystem;
    @XmlElement(name = "Metadata")
    protected List<MetadataType> metadata;

    /**
     * Gets the value of the allowedValues property.
     * 
     * @return
     *     possible object is
     *     {@link AllowedValues }
     *     
     */
    public AllowedValues getAllowedValues() {
        return allowedValues;
    }

    /**
     * Sets the value of the allowedValues property.
     * 
     * @param value
     *     allowed object is
     *     {@link AllowedValues }
     *     
     */
    public void setAllowedValues(AllowedValues value) {
        this.allowedValues = value;
    }

    /**
     * Gets the value of the anyValue property.
     * 
     * @return
     *     possible object is
     *     {@link AnyValue }
     *     
     */
    public AnyValue getAnyValue() {
        return anyValue;
    }

    /**
     * Sets the value of the anyValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link AnyValue }
     *     
     */
    public void setAnyValue(AnyValue value) {
        this.anyValue = value;
    }

    /**
     * Gets the value of the noValues property.
     * 
     * @return
     *     possible object is
     *     {@link NoValues }
     *     
     */
    public NoValues getNoValues() {
        return noValues;
    }

    /**
     * Sets the value of the noValues property.
     * 
     * @param value
     *     allowed object is
     *     {@link NoValues }
     *     
     */
    public void setNoValues(NoValues value) {
        this.noValues = value;
    }

    /**
     * Gets the value of the valuesReference property.
     * 
     * @return
     *     possible object is
     *     {@link ValuesReference }
     *     
     */
    public ValuesReference getValuesReference() {
        return valuesReference;
    }

    /**
     * Sets the value of the valuesReference property.
     * 
     * @param value
     *     allowed object is
     *     {@link ValuesReference }
     *     
     */
    public void setValuesReference(ValuesReference value) {
        this.valuesReference = value;
    }

    /**
     * Optional default value for this quantity, which should be included when this quantity has a default value. 
     * 
     * @return
     *     possible object is
     *     {@link ValueType }
     *     
     */
    public ValueType getDefaultValue() {
        return defaultValue;
    }

    /**
     * Sets the value of the defaultValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link ValueType }
     *     
     */
    public void setDefaultValue(ValueType value) {
        this.defaultValue = value;
    }

    /**
     * Meaning metadata should be referenced or included for each quantity. 
     * 
     * @return
     *     possible object is
     *     {@link DomainMetadataType }
     *     
     */
    public DomainMetadataType getMeaning() {
        return meaning;
    }

    /**
     * Sets the value of the meaning property.
     * 
     * @param value
     *     allowed object is
     *     {@link DomainMetadataType }
     *     
     */
    public void setMeaning(DomainMetadataType value) {
        this.meaning = value;
    }

    /**
     * This data type metadata should be referenced or included for each quantity. 
     * 
     * @return
     *     possible object is
     *     {@link DomainMetadataType }
     *     
     */
    public DomainMetadataType getDataType() {
        return dataType;
    }

    /**
     * Sets the value of the dataType property.
     * 
     * @param value
     *     allowed object is
     *     {@link DomainMetadataType }
     *     
     */
    public void setDataType(DomainMetadataType value) {
        this.dataType = value;
    }

    /**
     * Identifier of unit of measure of this set of values. Should be included then this set of values has units (and not a more complete reference system). 
     * 
     * @return
     *     possible object is
     *     {@link DomainMetadataType }
     *     
     */
    public DomainMetadataType getUOM() {
        return uom;
    }

    /**
     * Sets the value of the uom property.
     * 
     * @param value
     *     allowed object is
     *     {@link DomainMetadataType }
     *     
     */
    public void setUOM(DomainMetadataType value) {
        this.uom = value;
    }

    /**
     * Identifier of reference system used by this set of values. Should be included then this set of values has a reference system (not just units). 
     * 
     * @return
     *     possible object is
     *     {@link DomainMetadataType }
     *     
     */
    public DomainMetadataType getReferenceSystem() {
        return referenceSystem;
    }

    /**
     * Sets the value of the referenceSystem property.
     * 
     * @param value
     *     allowed object is
     *     {@link DomainMetadataType }
     *     
     */
    public void setReferenceSystem(DomainMetadataType value) {
        this.referenceSystem = value;
    }

    /**
     * Optional unordered list of other metadata about this quantity. A list of required and optional other metadata elements for this quantity should be specified in the Implementation Specification for this service. Gets the value of the metadata property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the metadata property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getMetadata().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link MetadataType }
     * 
     * 
     */
    public List<MetadataType> getMetadata() {
        if (metadata == null) {
            metadata = new ArrayList<MetadataType>();
        }
        return this.metadata;
    }

}