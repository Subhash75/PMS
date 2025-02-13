export const checklistConfig = {
    "Site Information": [
      {
        id: 1,
        field_slug: "circleName",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Name of Circle",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 2,
        field_slug: "zoneName",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Name of Zone",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 3,
        field_slug: "subZoneName",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Name of Sub Zone",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 4,
        field_slug: "siteName",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Name of Site",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 5,
        field_slug: "viSiteID",
        field_type: "TEXT",
        field_length: 100,
        field_name: "VI Site ID",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 6,
        field_slug: "nssSiteID",
        field_type: "TEXT",
        field_length: 100,
        field_name: "NSS Site ID",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 7,
        field_slug: "latitude",
        field_type: "TEXT",
        field_length: 50,
        field_name: "Latitude",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 8,
        field_slug: "longitude",
        field_type: "TEXT",
        field_length: 50,
        field_name: "Longitude",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      }
    ],
    "Site Check Points": [
      {
        id: 9,
        field_slug: "infrastructureProvider",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Infrastructure Provider",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 10,
        field_slug: "ipSiteID",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Infrastructure Provider (IP) Site ID",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 11,
        field_slug: "colocated",
        field_type: "BOOLEAN",
        field_length: 1,
        field_name: "Colocated with other Op Cos?",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "BOOLEAN",
      },
      {
        id: 12,
        field_slug: "siteType",
        field_type: "SELECT",
        field_length: 50,
        field_name: "Site Type",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "SELECT",
        options: ["CORE", "Aggregation", "PreAgg", "Access", "Repeater"]
      },
      {
        id: 13,
        field_slug: "siteInfraType",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Site Infra Type",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 14,
        field_slug: "numberOfShelters",
        field_type: "NUMBER",
        field_length: 10,
        field_name: "Number of Shelter/Room",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "NUMBER",
      }
    ],
    "Room/Shelter/OD Cabinets/TCU#1": [{
        id: 15,
        field_slug: "dustFreeNoWaterSeepageNoPhysicalDamage",
        field_type: "BOOLEAN",
        field_length: 1,
        field_name: "Dust free, No water seepage & No Physical damage?",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "BOOLEAN",
      },
      {
        id: 16,
        field_slug: "cableEntryExitSealed",
        field_type: "BOOLEAN",
        field_length: 1,
        field_name: "Cable entry/exit points are adequately sealed?",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "BOOLEAN",
      },
      {
        id: 17,
        field_slug: "ambientTemperature",
        field_type: "NUMBER",
        field_length: 10,
        field_name: "Ambient temperature",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "NUMBER",
      },
      {
        id: 18,
        field_slug: "temperatureSensorLocation",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Temperature Sensor Location",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      },
      {
        id: 19,
        field_slug: "unusedVIMaterial",
        field_type: "BOOLEAN",
        field_length: 1,
        field_name: "Is there any unused VI material (Equipments, cards etc)?",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "BOOLEAN",
      },
      {
        id: 20,
        field_slug: "airConditioningFanStatus",
        field_type: "TEXT",
        field_length: 100,
        field_name: "Air Conditioning/FAN working status?",
        is_mandatory: "Y",
        is_editable: "Y",
        validation_group: "TEXT",
      }]
  };
  
