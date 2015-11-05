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
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;

/**
 * This type encapsulates various dynamic properties of moving objects (points, lines, regions). It is useful for dealing with features whose geometry
 * or topology changes over time.
 * 
 * <p>
 * Java class for MovingObjectStatusType complex type.
 * 
 * <p>
 * The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MovingObjectStatusType">
 *   &lt;complexContent>
 *     &lt;extension base="{http://www.opengis.net/gml}AbstractTimeSliceType">
 *       &lt;sequence>
 *         &lt;element ref="{http://www.opengis.net/gml}location"/>
 *         &lt;element name="speed" type="{http://www.opengis.net/gml}MeasureType" minOccurs="0"/>
 *         &lt;element name="bearing" type="{http://www.opengis.net/gml}DirectionPropertyType" minOccurs="0"/>
 *         &lt;element name="acceleration" type="{http://www.opengis.net/gml}MeasureType" minOccurs="0"/>
 *         &lt;element name="elevation" type="{http://www.opengis.net/gml}MeasureType" minOccurs="0"/>
 *         &lt;element ref="{http://www.opengis.net/gml}status" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MovingObjectStatusType", propOrder = { "location", "speed", "bearing",
        "acceleration", "elevation", "status" })
public class MovingObjectStatusType extends AbstractTimeSliceType {

    @XmlElementRef(name = "location", namespace = "http://www.opengis.net/gml", type = JAXBElement.class)
    protected JAXBElement<? extends LocationPropertyType> location;

    protected MeasureType speed;

    protected DirectionPropertyType bearing;

    protected MeasureType acceleration;

    protected MeasureType elevation;

    protected StringOrRefType status;

    /**
     * Gets the value of the acceleration property.
     * 
     * @return possible object is {@link MeasureType }
     * 
     */
    public MeasureType getAcceleration() {
        return acceleration;
    }

    /**
     * Gets the value of the bearing property.
     * 
     * @return possible object is {@link DirectionPropertyType }
     * 
     */
    public DirectionPropertyType getBearing() {
        return bearing;
    }

    /**
     * Gets the value of the elevation property.
     * 
     * @return possible object is {@link MeasureType }
     * 
     */
    public MeasureType getElevation() {
        return elevation;
    }

    /**
     * Gets the value of the location property.
     * 
     * @return possible object is {@link JAXBElement }{@code <}{@link PriorityLocationPropertyType }{@code >} {@link JAXBElement }{@code <}
     *         {@link LocationPropertyType }{@code >}
     * 
     */
    public JAXBElement<? extends LocationPropertyType> getLocation() {
        return location;
    }

    /**
     * Gets the value of the speed property.
     * 
     * @return possible object is {@link MeasureType }
     * 
     */
    public MeasureType getSpeed() {
        return speed;
    }

    /**
     * Gets the value of the status property.
     * 
     * @return possible object is {@link StringOrRefType }
     * 
     */
    public StringOrRefType getStatus() {
        return status;
    }

    /**
     * Sets the value of the acceleration property.
     * 
     * @param value allowed object is {@link MeasureType }
     * 
     */
    public void setAcceleration(MeasureType value) {
        this.acceleration = value;
    }

    /**
     * Sets the value of the bearing property.
     * 
     * @param value allowed object is {@link DirectionPropertyType }
     * 
     */
    public void setBearing(DirectionPropertyType value) {
        this.bearing = value;
    }

    /**
     * Sets the value of the elevation property.
     * 
     * @param value allowed object is {@link MeasureType }
     * 
     */
    public void setElevation(MeasureType value) {
        this.elevation = value;
    }

    /**
     * Sets the value of the location property.
     * 
     * @param value allowed object is {@link JAXBElement }{@code <}{@link PriorityLocationPropertyType }{@code >} {@link JAXBElement }{@code <}
     *        {@link LocationPropertyType }{@code >}
     * 
     */
    public void setLocation(JAXBElement<? extends LocationPropertyType> value) {
        this.location = (value);
    }

    /**
     * Sets the value of the speed property.
     * 
     * @param value allowed object is {@link MeasureType }
     * 
     */
    public void setSpeed(MeasureType value) {
        this.speed = value;
    }

    /**
     * Sets the value of the status property.
     * 
     * @param value allowed object is {@link StringOrRefType }
     * 
     */
    public void setStatus(StringOrRefType value) {
        this.status = value;
    }

}
