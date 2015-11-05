//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.06.13 at 10:49:44 AM CEST 
//

package net.opengis.gml;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

import org.w3._1999.xlink.ActuateType;
import org.w3._1999.xlink.ShowType;
import org.w3._1999.xlink.TypeType;

/**
 * A geometric property can either be any geometry element encapsulated in an element of this type or an XLink reference to a remote geometry element
 * (where remote includes geometry elements located elsewhere in the same document). Note that either the reference or the contained element must be
 * given, but not both or none.
 * 
 * <p>
 * Java class for GeometryPropertyType complex type.
 * 
 * <p>
 * The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GeometryPropertyType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence minOccurs="0">
 *         &lt;element ref="{http://www.opengis.net/gml}_Geometry"/>
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
@XmlType(name = "GeometryPropertyType", propOrder = { "geometry" })
public class GeometryPropertyType {

    @XmlElementRef(name = "_Geometry", namespace = "http://www.opengis.net/gml", type = JAXBElement.class)
    protected JAXBElement<? extends AbstractGeometryType> geometry;

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
     * Gets the value of the geometry property.
     * 
     * @return possible object is {@link JAXBElement }{@code <}{@link TriangulatedSurfaceType }{@code >} {@link JAXBElement }{@code <}
     *         {@link MultiSolidType }{@code >} {@link JAXBElement }{@code <}{@link MultiGeometryType }{@code >} {@link JAXBElement }{@code <}
     *         {@link PolyhedralSurfaceType }{@code >} {@link JAXBElement }{@code <}{@link AbstractGeometryType }{@code >} {@link JAXBElement }
     *         {@code <} {@link MultiPolygonType }{@code >} {@link JAXBElement }{@code <}{@link RectifiedGridType }{@code >} {@link JAXBElement }
     *         {@code <} {@link AbstractGeometricAggregateType }{@code >} {@link JAXBElement }{@code <}{@link PolygonType }{@code >}
     *         {@link JAXBElement }{@code <} {@link AbstractCurveType }{@code >} {@link JAXBElement }{@code <}{@link CompositeSurfaceType }{@code >}
     *         {@link JAXBElement }{@code <} {@link PointType }{@code >} {@link JAXBElement }{@code <}{@link AbstractSurfaceType }{@code >}
     *         {@link JAXBElement }{@code <} {@link SurfaceType }{@code >} {@link JAXBElement }{@code <}{@link CurveType }{@code >} {@link JAXBElement
     *         }{@code <}{@link LineStringType } {@code >} {@link JAXBElement }{@code <}{@link AbstractRingType }{@code >} {@link JAXBElement }
     *         {@code <}{@link OrientableSurfaceType } {@code >} {@link JAXBElement }{@code <}{@link CompositeSolidType }{@code >} {@link JAXBElement
     *         }{@code <}{@link CompositeCurveType } {@code >} {@link JAXBElement }{@code <}{@link AbstractGeometryType }{@code >} {@link JAXBElement
     *         }{@code <}{@link OrientableCurveType } {@code >} {@link JAXBElement }{@code <}{@link MultiPointType }{@code >} {@link JAXBElement }
     *         {@code <} {@link AbstractGeometricPrimitiveType }{@code >} {@link JAXBElement }{@code <}{@link GridType }{@code >} {@link JAXBElement }
     *         {@code <} {@link GeometricComplexType }{@code >} {@link JAXBElement }{@code <}{@link MultiSurfaceType }{@code >} {@link JAXBElement }
     *         {@code <} {@link AbstractSolidType }{@code >} {@link JAXBElement }{@code <}{@link MultiLineStringType }{@code >} {@link JAXBElement }
     *         {@code <} {@link SolidType }{@code >} {@link JAXBElement }{@code <}{@link TinType }{@code >} {@link JAXBElement }{@code <}
     *         {@link MultiCurveType } {@code >} {@link JAXBElement }{@code <}{@link RingType }{@code >} {@link JAXBElement }{@code <}
     *         {@link LinearRingType }{@code >}
     * 
     */
    public JAXBElement<? extends AbstractGeometryType> getGeometry() {
        return geometry;
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
     * Sets the value of the geometry property.
     * 
     * @param value allowed object is {@link JAXBElement }{@code <}{@link TriangulatedSurfaceType }{@code >} {@link JAXBElement }{@code <}
     *        {@link MultiSolidType }{@code >} {@link JAXBElement }{@code <}{@link MultiGeometryType }{@code >} {@link JAXBElement }{@code <}
     *        {@link PolyhedralSurfaceType }{@code >} {@link JAXBElement }{@code <}{@link AbstractGeometryType }{@code >} {@link JAXBElement }
     *        {@code <} {@link MultiPolygonType }{@code >} {@link JAXBElement }{@code <}{@link RectifiedGridType }{@code >} {@link JAXBElement }
     *        {@code <} {@link AbstractGeometricAggregateType }{@code >} {@link JAXBElement }{@code <}{@link PolygonType }{@code >} {@link JAXBElement
     *        }{@code <} {@link AbstractCurveType }{@code >} {@link JAXBElement }{@code <}{@link CompositeSurfaceType }{@code >} {@link JAXBElement }
     *        {@code <} {@link PointType }{@code >} {@link JAXBElement }{@code <}{@link AbstractSurfaceType }{@code >} {@link JAXBElement }{@code <}
     *        {@link SurfaceType }{@code >} {@link JAXBElement }{@code <}{@link CurveType }{@code >} {@link JAXBElement }{@code <}
     *        {@link LineStringType } {@code >} {@link JAXBElement }{@code <}{@link AbstractRingType }{@code >} {@link JAXBElement }{@code <}
     *        {@link OrientableSurfaceType } {@code >} {@link JAXBElement }{@code <}{@link CompositeSolidType }{@code >} {@link JAXBElement }{@code <}
     *        {@link CompositeCurveType }{@code >} {@link JAXBElement }{@code <}{@link AbstractGeometryType }{@code >} {@link JAXBElement }{@code <}
     *        {@link OrientableCurveType }{@code >} {@link JAXBElement }{@code <}{@link MultiPointType }{@code >} {@link JAXBElement }{@code <}
     *        {@link AbstractGeometricPrimitiveType }{@code >} {@link JAXBElement }{@code <}{@link GridType }{@code >} {@link JAXBElement }{@code <}
     *        {@link GeometricComplexType }{@code >} {@link JAXBElement }{@code <}{@link MultiSurfaceType }{@code >} {@link JAXBElement }{@code <}
     *        {@link AbstractSolidType }{@code >} {@link JAXBElement }{@code <}{@link MultiLineStringType }{@code >} {@link JAXBElement }{@code <}
     *        {@link SolidType }{@code >} {@link JAXBElement }{@code <}{@link TinType }{@code >} {@link JAXBElement }{@code <}{@link MultiCurveType }
     *        {@code >} {@link JAXBElement } {@code <}{@link RingType }{@code >} {@link JAXBElement }{@code <}{@link LinearRingType }{@code >}
     * 
     */
    public void setGeometry(JAXBElement<? extends AbstractGeometryType> value) {
        this.geometry = (value);
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
