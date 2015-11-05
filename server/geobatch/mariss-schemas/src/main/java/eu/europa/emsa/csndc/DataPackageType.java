//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.06.13 at 10:49:44 AM CEST 
//

package eu.europa.emsa.csndc;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * <p>
 * Java class for DataPackageType complex type.
 * 
 * <p>
 * The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DataPackageType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://www.emsa.europa.eu/csndc}packageInfo"/>
 *         &lt;element ref="{http://www.emsa.europa.eu/csndc}eoProduct"/>
 *         &lt;choice>
 *           &lt;element ref="{http://www.emsa.europa.eu/csndc}oilSpills" minOccurs="0"/>
 *           &lt;sequence>
 *             &lt;element ref="{http://www.emsa.europa.eu/csndc}detectedShips" minOccurs="0"/>
 *             &lt;element ref="{http://www.emsa.europa.eu/csndc}sarDerivedData" minOccurs="0"/>
 *           &lt;/sequence>
 *           &lt;element ref="{http://www.emsa.europa.eu/csndc}qualityNotification" minOccurs="0"/>
 *           &lt;element ref="{http://www.emsa.europa.eu/csndc}qualityReport" minOccurs="0"/>
 *           &lt;element ref="{http://www.emsa.europa.eu/csndc}processRequest" minOccurs="0"/>
 *         &lt;/choice>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DataPackageType", propOrder = { "packageInfo", "eoProduct", "oilSpills",
        "detectedShips", "sarDerivedData", "qualityNotification", "qualityReport",
        "processRequest" })
public class DataPackageType {

    @XmlElement(required = true)
    protected PackageInfoType packageInfo;

    @XmlElement(required = true)
    protected EOProductType eoProduct;

    protected OilSpillsType oilSpills;

    protected DetectedShipsType detectedShips;

    protected SARDerivedDataType sarDerivedData;

    protected QualityType qualityNotification;

    protected QualityType qualityReport;

    protected ProcessRequestType processRequest;

    /**
     * Description of the package content in terms of Detected Ships found (if any).
     * 
     * @return possible object is {@link DetectedShipsType }
     * 
     */
    public DetectedShipsType getDetectedShips() {
        return detectedShips;
    }

    /**
     * References of the EO product contained in the package if any.Only one EO product is expected in a package.
     * 
     * @return possible object is {@link EOProductType }
     * 
     */
    public EOProductType getEoProduct() {
        return eoProduct;
    }

    /**
     * Description of the package content in terms of OS found/processed (if any).
     * 
     * @return possible object is {@link OilSpillsType }
     * 
     */
    public OilSpillsType getOilSpills() {
        return oilSpills;
    }

    /**
     * Package info
     * 
     * @return possible object is {@link PackageInfoType }
     * 
     */
    public PackageInfoType getPackageInfo() {
        return packageInfo;
    }

    /**
     * Description of the process request contained in the package if any. Only one process request file is supposed to be present in a single
     * package.
     * 
     * @return possible object is {@link ProcessRequestType }
     * 
     */
    public ProcessRequestType getProcessRequest() {
        return processRequest;
    }

    /**
     * Description of the image quality notification info contained in the package if any. Only one quality notification file is supposed to be
     * present in a single package.
     * 
     * @return possible object is {@link QualityType }
     * 
     */
    public QualityType getQualityNotification() {
        return qualityNotification;
    }

    /**
     * Description of the quality report contained in the package if any. Only one quality report file is supposed to be present in a single package.
     * 
     * @return possible object is {@link QualityType }
     * 
     */
    public QualityType getQualityReport() {
        return qualityReport;
    }

    /**
     * Description of the package content in terms of SAR derived data.
     * 
     * @return possible object is {@link SARDerivedDataType }
     * 
     */
    public SARDerivedDataType getSarDerivedData() {
        return sarDerivedData;
    }

    /**
     * Sets the value of the detectedShips property.
     * 
     * @param value allowed object is {@link DetectedShipsType }
     * 
     */
    public void setDetectedShips(DetectedShipsType value) {
        this.detectedShips = value;
    }

    /**
     * Sets the value of the eoProduct property.
     * 
     * @param value allowed object is {@link EOProductType }
     * 
     */
    public void setEoProduct(EOProductType value) {
        this.eoProduct = value;
    }

    /**
     * Sets the value of the oilSpills property.
     * 
     * @param value allowed object is {@link OilSpillsType }
     * 
     */
    public void setOilSpills(OilSpillsType value) {
        this.oilSpills = value;
    }

    /**
     * Sets the value of the packageInfo property.
     * 
     * @param value allowed object is {@link PackageInfoType }
     * 
     */
    public void setPackageInfo(PackageInfoType value) {
        this.packageInfo = value;
    }

    /**
     * Sets the value of the processRequest property.
     * 
     * @param value allowed object is {@link ProcessRequestType }
     * 
     */
    public void setProcessRequest(ProcessRequestType value) {
        this.processRequest = value;
    }

    /**
     * Sets the value of the qualityNotification property.
     * 
     * @param value allowed object is {@link QualityType }
     * 
     */
    public void setQualityNotification(QualityType value) {
        this.qualityNotification = value;
    }

    /**
     * Sets the value of the qualityReport property.
     * 
     * @param value allowed object is {@link QualityType }
     * 
     */
    public void setQualityReport(QualityType value) {
        this.qualityReport = value;
    }

    /**
     * Sets the value of the sarDerivedData property.
     * 
     * @param value allowed object is {@link SARDerivedDataType }
     * 
     */
    public void setSarDerivedData(SARDerivedDataType value) {
        this.sarDerivedData = value;
    }

}
