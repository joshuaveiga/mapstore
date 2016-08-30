//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.06.13 at 10:49:44 AM CEST 
//

package net.opengis.gml;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlList;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

import org.w3._1999.xlink.ActuateType;
import org.w3._1999.xlink.ShowType;
import org.w3._1999.xlink.TypeType;

/**
 * Metadata about the rangeSet. Definition of record structure. This is required if the rangeSet is encoded in a DataBlock. We use a gml:_Value with
 * empty values as a map of the composite value structure.
 * 
 * <p>
 * Java class for RangeParametersType complex type.
 * 
 * <p>
 * The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RangeParametersType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence minOccurs="0">
 *         &lt;group ref="{http://www.opengis.net/gml}ValueObject"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{http://www.opengis.net/gml}AssociationAttributeGroup"/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RangeParametersType", propOrder = { "_boolean", "category", "quantity", "count",
        "booleanList", "categoryList", "quantityList", "countList", "categoryExtent",
        "quantityExtent", "countExtent", "compositeValue" })
public class RangeParametersType {

    @XmlElement(name = "Boolean")
    protected Boolean _boolean;

    @XmlElement(name = "Category")
    protected CodeType category;

    @XmlElement(name = "Quantity")
    protected MeasureType quantity;

    @XmlElement(name = "Count")
    protected BigInteger count;

    @XmlList
    @XmlElement(name = "BooleanList")
    protected List<String> booleanList;

    @XmlElement(name = "CategoryList")
    protected CodeOrNullListType categoryList;

    @XmlElement(name = "QuantityList")
    protected MeasureOrNullListType quantityList;

    @XmlList
    @XmlElement(name = "CountList")
    protected List<String> countList;

    @XmlElement(name = "CategoryExtent")
    protected CategoryExtentType categoryExtent;

    @XmlElement(name = "QuantityExtent")
    protected QuantityExtentType quantityExtent;

    @XmlList
    @XmlElement(name = "CountExtent")
    protected List<String> countExtent;

    @XmlElementRef(name = "CompositeValue", namespace = "http://www.opengis.net/gml", type = JAXBElement.class)
    protected JAXBElement<? extends CompositeValueType> compositeValue;

    @XmlAttribute(namespace = "http://www.opengis.net/gml")
    @XmlSchemaType(name = "anyURI")
    protected String remoteSchema;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected TypeType type;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected String href;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected String role;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected String arcrole;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected String title;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected ShowType show;

    @XmlAttribute(namespace = "http://www.w3.org/1999/xlink")
    protected ActuateType actuate;

    /**
     * Gets the value of the actuate property.
     * 
     * @return possible object is {@link ActuateType }
     * 
     */
    public ActuateType getActuate() {
        return actuate;
    }

    /**
     * Gets the value of the arcrole property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getArcrole() {
        return arcrole;
    }

    /**
     * Gets the value of the booleanList property.
     * 
     * <p>
     * This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make to the returned list will be
     * present inside the JAXB object. This is why there is not a <CODE>set</CODE> method for the booleanList property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * 
     * <pre>
     * getBooleanList().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list {@link String }
     * 
     * 
     */
    public List<String> getBooleanList() {
        if (booleanList == null) {
            booleanList = new ArrayList<String>();
        }
        return this.booleanList;
    }

    /**
     * Gets the value of the category property.
     * 
     * @return possible object is {@link CodeType }
     * 
     */
    public CodeType getCategory() {
        return category;
    }

    /**
     * Gets the value of the categoryExtent property.
     * 
     * @return possible object is {@link CategoryExtentType }
     * 
     */
    public CategoryExtentType getCategoryExtent() {
        return categoryExtent;
    }

    /**
     * Gets the value of the categoryList property.
     * 
     * @return possible object is {@link CodeOrNullListType }
     * 
     */
    public CodeOrNullListType getCategoryList() {
        return categoryList;
    }

    /**
     * Gets the value of the compositeValue property.
     * 
     * @return possible object is {@link JAXBElement }{@code <}{@link ValueArrayType }{@code >} {@link JAXBElement }{@code <}{@link CompositeValueType
     *         } {@code >}
     * 
     */
    public JAXBElement<? extends CompositeValueType> getCompositeValue() {
        return compositeValue;
    }

    /**
     * Gets the value of the count property.
     * 
     * @return possible object is {@link BigInteger }
     * 
     */
    public BigInteger getCount() {
        return count;
    }

    /**
     * Gets the value of the countExtent property.
     * 
     * <p>
     * This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make to the returned list will be
     * present inside the JAXB object. This is why there is not a <CODE>set</CODE> method for the countExtent property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * 
     * <pre>
     * getCountExtent().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list {@link String }
     * 
     * 
     */
    public List<String> getCountExtent() {
        if (countExtent == null) {
            countExtent = new ArrayList<String>();
        }
        return this.countExtent;
    }

    /**
     * Gets the value of the countList property.
     * 
     * <p>
     * This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make to the returned list will be
     * present inside the JAXB object. This is why there is not a <CODE>set</CODE> method for the countList property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * 
     * <pre>
     * getCountList().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list {@link String }
     * 
     * 
     */
    public List<String> getCountList() {
        if (countList == null) {
            countList = new ArrayList<String>();
        }
        return this.countList;
    }

    /**
     * Gets the value of the href property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getHref() {
        return href;
    }

    /**
     * Gets the value of the quantity property.
     * 
     * @return possible object is {@link MeasureType }
     * 
     */
    public MeasureType getQuantity() {
        return quantity;
    }

    /**
     * Gets the value of the quantityExtent property.
     * 
     * @return possible object is {@link QuantityExtentType }
     * 
     */
    public QuantityExtentType getQuantityExtent() {
        return quantityExtent;
    }

    /**
     * Gets the value of the quantityList property.
     * 
     * @return possible object is {@link MeasureOrNullListType }
     * 
     */
    public MeasureOrNullListType getQuantityList() {
        return quantityList;
    }

    /**
     * Gets the value of the remoteSchema property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getRemoteSchema() {
        return remoteSchema;
    }

    /**
     * Gets the value of the role property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getRole() {
        return role;
    }

    /**
     * Gets the value of the show property.
     * 
     * @return possible object is {@link ShowType }
     * 
     */
    public ShowType getShow() {
        return show;
    }

    /**
     * Gets the value of the title property.
     * 
     * @return possible object is {@link String }
     * 
     */
    public String getTitle() {
        return title;
    }

    /**
     * Gets the value of the type property.
     * 
     * @return possible object is {@link TypeType }
     * 
     */
    public TypeType getType() {
        if (type == null) {
            return TypeType.SIMPLE;
        } else {
            return type;
        }
    }

    /**
     * Gets the value of the boolean property.
     * 
     * @return possible object is {@link Boolean }
     * 
     */
    public Boolean isBoolean() {
        return _boolean;
    }

    /**
     * Sets the value of the actuate property.
     * 
     * @param value allowed object is {@link ActuateType }
     * 
     */
    public void setActuate(ActuateType value) {
        this.actuate = value;
    }

    /**
     * Sets the value of the arcrole property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setArcrole(String value) {
        this.arcrole = value;
    }

    /**
     * Sets the value of the boolean property.
     * 
     * @param value allowed object is {@link Boolean }
     * 
     */
    public void setBoolean(Boolean value) {
        this._boolean = value;
    }

    /**
     * Sets the value of the category property.
     * 
     * @param value allowed object is {@link CodeType }
     * 
     */
    public void setCategory(CodeType value) {
        this.category = value;
    }

    /**
     * Sets the value of the categoryExtent property.
     * 
     * @param value allowed object is {@link CategoryExtentType }
     * 
     */
    public void setCategoryExtent(CategoryExtentType value) {
        this.categoryExtent = value;
    }

    /**
     * Sets the value of the categoryList property.
     * 
     * @param value allowed object is {@link CodeOrNullListType }
     * 
     */
    public void setCategoryList(CodeOrNullListType value) {
        this.categoryList = value;
    }

    /**
     * Sets the value of the compositeValue property.
     * 
     * @param value allowed object is {@link JAXBElement }{@code <}{@link ValueArrayType }{@code >} {@link JAXBElement }{@code <}
     *        {@link CompositeValueType }{@code >}
     * 
     */
    public void setCompositeValue(JAXBElement<? extends CompositeValueType> value) {
        this.compositeValue = (value);
    }

    /**
     * Sets the value of the count property.
     * 
     * @param value allowed object is {@link BigInteger }
     * 
     */
    public void setCount(BigInteger value) {
        this.count = value;
    }

    /**
     * Sets the value of the href property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setHref(String value) {
        this.href = value;
    }

    /**
     * Sets the value of the quantity property.
     * 
     * @param value allowed object is {@link MeasureType }
     * 
     */
    public void setQuantity(MeasureType value) {
        this.quantity = value;
    }

    /**
     * Sets the value of the quantityExtent property.
     * 
     * @param value allowed object is {@link QuantityExtentType }
     * 
     */
    public void setQuantityExtent(QuantityExtentType value) {
        this.quantityExtent = value;
    }

    /**
     * Sets the value of the quantityList property.
     * 
     * @param value allowed object is {@link MeasureOrNullListType }
     * 
     */
    public void setQuantityList(MeasureOrNullListType value) {
        this.quantityList = value;
    }

    /**
     * Sets the value of the remoteSchema property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setRemoteSchema(String value) {
        this.remoteSchema = value;
    }

    /**
     * Sets the value of the role property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setRole(String value) {
        this.role = value;
    }

    /**
     * Sets the value of the show property.
     * 
     * @param value allowed object is {@link ShowType }
     * 
     */
    public void setShow(ShowType value) {
        this.show = value;
    }

    /**
     * Sets the value of the title property.
     * 
     * @param value allowed object is {@link String }
     * 
     */
    public void setTitle(String value) {
        this.title = value;
    }

    /**
     * Sets the value of the type property.
     * 
     * @param value allowed object is {@link TypeType }
     * 
     */
    public void setType(TypeType value) {
        this.type = value;
    }

}