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
    },
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
      options: ["CORE", "Aggregation", "PreAgg", "Access", "Repeater"],
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
    },
  ],
  "Room/Shelter/OD Cabinets/TCU#1": [
    {
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
    },
  ],
};

export const checklistReadOnlyConfig = {
  "Site Information": {
    circleName: { fieldName: "Circle Name", value: "Circle A" },
    zoneName: { fieldName: "Zone Name", value: "Ghaziabad" },
    subZoneName: { fieldName: "Sub Zone Name", value: "Indrapuram" },
    siteName: { fieldName: "Site Name", value: "Strategic" },
    viSiteID: { fieldName: "VI Site ID", value: "VI001" },
    nssSiteID: { fieldName: "NSS Site ID", value: "IDUW102375" },
    latitude: { fieldName: "Latitude", value: "72.3434" },
    longitude: { fieldName: "Longitude", value: "72.1281" },
    "No. of. RAN Technologies": {
      fieldName: "No. of. RAN Technologies",
      value: "5",
    },
    "No of RAN Nodes/cabinets": {
      fieldName: "No of RAN Nodes/cabinets",
      value: "",
    },
    "No of MW IDU/Equipment": {
      fieldName: "No of MW IDU/Equipment",
      value: "7",
    },
    "No of MW Links": {
      fieldName: "No of MW Links",
      value: "",
    },
    "No of Optics equipments": {
      fieldName: "No of Optics equipments",
      value: "8",
    },
    "No of Routers": {
      fieldName: "No of Routers",
      value: "",
    },
    "No of DWDM Nodes": {
      fieldName: "No of DWDM Nodes",
      value: "3",
    },
    "No of Enterprise links": {
      fieldName: "No of Enterprise links",
      value: "",
    },
    "Visit Date": {
      fieldName: "Visit Date",
      value: "2024-06-25",
    },
    "Visit Time": {
      fieldName: "Visit Time",
      value: "14:30",
    },
  },

  "Site Check Points": {
    infrastructureProvider: { fieldName: "Infrastructure Provider", value: "" },
    ipSiteID: {
      fieldName: "Infrastructure Provider (IP) Site ID",
      value: "01",
    },
    colocated: { fieldName: "Colocated with other Op Cos?", value: "No" },
    siteType: { fieldName: "Site Type", value: "" },
    siteInfraType: { fieldName: "Site Infra Type", value: "" },
    numberOfShelters: { fieldName: "Number of Shelter/Room", value: "" },
    "Tower Type": {
      fieldName: "Tower Type",
      value: "Type A",
    },
    "Is site Access Available": {
      fieldName: "Is site Access Available",
      value: "",
    },
    "DG Available/Not": {
      fieldName: "DG Available/Not",
      value: "",
    },
    "SMPS-Rectifer configuration (Number of module)": {
      fieldName: "SMPS-Rectifer configuration (Number of module)",
      value: "4 modules",
    },
    "Physical condition of DG is good (Any leakage of diesel / External tank/DG without Battery)":
      {
        fieldName:
          "Physical condition of DG is good (Any leakage of diesel / External tank/DG without Battery)",
        value: "Good",
      },
    "Physical condition of batterybank is good (Cell bypass/different make or capacity cells)":
      {
        fieldName:
          "Physical condition of batterybank is good (Cell bypass/different make or capacity cells)",
        value: "",
      },
    "Physical condition of earthpit is good": {
      fieldName: "Physical condition of earthpit is good",
      value: "Good",
    },
    "EMF Sign Available": {
      fieldName: "EMF Sign Available",
      value: "Yes",
    },
    "Lightening arrester Installed": {
      fieldName: "Lightening arrester Installed",
      value: "Yes",
    },
    "Monsoon specific precautionary activities": {
      fieldName: "Monsoon specific precautionary activities",
      value: "Completed",
    },
  },

  "Room/Shelter/OD Cabinets/TCU#1": {
    dustFreeNoWaterSeepageNoPhysicalDamage: {
      fieldName: "Dust free, No water seepage & No Physical damage?",
      value: "Yes",
    },
    cableEntryExitSealed: {
      fieldName: "Cable entry/exit points are adequately sealed?",
      value: "",
    },
    ambientTemperature: {
      fieldName: "Ambient temperature",
      value: "25°C",
    },
    temperatureSensorLocation: {
      fieldName: "Temperature Sensor Location",
      value: "North wall",
    },
    unusedVIMaterial: {
      fieldName: "Is there any unused VI material (Equipments, cards etc)?",
      value: "No",
    },
    airConditioningFanStatus: {
      fieldName: "Air Conditioning/FAN working status?",
      value: "Working",
    },

    "Is 5 amp AC power points available on site?": {
      fieldName: "Is 5 amp AC power points available on site?",
      value: "Yes",
    },
    "Adequate Lighting available?": {
      fieldName: "Adequate Lighting available?",
      value: "Yes",
    },
    "Door conditions (Exists with proper closure)": {
      fieldName: "Door conditions (Exists with proper closure)",
      value: "Yes",
    },
    "No of Racks Available": {
      fieldName: "No of Racks Available",
      value: "4",
    },
    "Infra alarm extension from all shelter": {
      fieldName: "Infra alarm extension from all shelter",
      value: "Yes",
    },
    "TCU High Temperature & Door open alarm extension on VIL BTS": {
      fieldName: "TCU High Temperature & Door open alarm extension on VIL BTS",
      value: "Yes",
    },
    "Inter Shelter connectivity": {
      fieldName: "Inter Shelter connectivity",
      value: "Established",
    },
    "Unauthorised Power tapping by Others": {
      fieldName: "Unauthorised Power tapping by Others",
      value: "No",
    },
  },
  "Rack#1": {
    "Tx Rack - dedicated or shared": {
      fieldName: "Tx Rack - dedicated or shared",
      value: "Dedicated",
    },
    "Rack Type": {
      fieldName: "Rack Type",
      value: "Standard 19-inch",
    },
    "Equipment racks properly grouted?": {
      fieldName: "Equipment racks properly grouted?",
      value: "Yes",
    },
    "Any rusting or damage in Rack?": {
      fieldName: "Any rusting or damage in Rack?",
      value: "No",
    },
    "Power supply DCDB Working status?": {
      fieldName: "Power supply DCDB Working status?",
      value: "Operational",
    },
    "Power cables with proper gauge and free from joint/damage?": {
      fieldName: "Power cables with proper gauge and free from joint/damage?",
      value: "Yes",
    },
    "ESD straps available at site?": {
      fieldName: "ESD straps available at site?",
      value: "Yes",
    },
    "Platform Heights to avoid water seepage": {
      fieldName: "Platform Heights to avoid water seepage",
      value: "100 mm above ground level",
    },
  },
  "Equipment MW/Optics/IP/DWDM Node#1": {
    "Equipment Name/Host names": {
      fieldName: "Equipment Name/Host names",
      value: "Router A",
    },
    "Equipment ID": {
      fieldName: "Equipment ID",
      value: "EQ12345",
    },
    "Equipment Make": {
      fieldName: "Equipment Make",
      value: "Cisco",
    },
    "Equipment Model": {
      fieldName: "Equipment Model",
      value: "ASR903",
    },
    "Photographs Pre activity": {
      fieldName: "Photographs Pre activity",
      value: "Yes",
    },
    "Equipment running with Dual Source": {
      fieldName: "Equipment running with Dual Source",
      value: "Yes",
    },
    "Is Primary source connected to Critical load": {
      fieldName: "Is Primary source connected to Critical load",
      value: "Yes",
    },
    "MCB Rating for Primary Source": {
      fieldName: "MCB Rating for Primary Source",
      value: "20A",
    },
    "MCB Rating for Secondary Source": {
      fieldName: "MCB Rating for Secondary Source",
      value: "20A",
    },
    "MCBs in DCDB and SMPS along with cable size (dia)": {
      fieldName: "MCBs in DCDB and SMPS along with cable size (dia)",
      value: "DCDB: 16A MCB, SMPS: 2.5mm² cables",
    },
    "Equipment Installation quality (spacing,fixing, Ventilation etc)": {
      fieldName:
        "Equipment Installation quality (spacing,fixing, Ventilation etc)",
      value: "Good",
    },
    "Ambient temperature ?  (Based on entered values, shows Good, Not good)": {
      fieldName:
        "Ambient temperature ?  (Based on entered values, shows Good, Not good)",
      value: "Good",
    },
    "Proper Routing of cables,Patch chords(No airflow and access obstruction,)":
      {
        fieldName:
          "Proper Routing of cables,Patch chords(No airflow and access obstruction,)",
        value: "Yes",
      },
    "Labeling/Marking of Cables and Patch chords": {
      fieldName: "Labeling/Marking of Cables and Patch chords",
      value: "Yes",
    },
    "Dust/Corrosion/Water seepage impact?": {
      fieldName: "Dust/Corrosion/Water seepage impact?",
      value: "None observed",
    },
    "Is the cleaning of equipment Filters done properly?": {
      fieldName: "Is the cleaning of equipment Filters done properly?",
      value: "Yes",
    },
    "Working Condition of FANs(No abnormal Voice)": {
      fieldName: "Working Condition of FANs(No abnormal Voice)",
      value: "Normal",
    },
    "Any critical/environment alarms?": {
      fieldName: "Any critical/environment alarms?",
      value: "No alarms",
    },
    "Cleaning of Cards/FAN units ? -": {
      fieldName: "Cleaning of Cards/FAN units ? -",
      value: "Done",
    },
    "Empty slots/ports are covered with blank panels/covers?": {
      fieldName: "Empty slots/ports are covered with blank panels/covers?",
      value: "Yes",
    },
    "In case of ASR903 deflector should be installed in empty slot or there should be empty/blank slot before and after each IMA8Z cards":
      {
        fieldName:
          "In case of ASR903 deflector should be installed in empty slot or there should be empty/blank slot before and after each IMA8Z cards",
        value: "Deflector installed",
      },
    "Photographs Post activity": {
      fieldName: "Photographs Post activity",
      value: "Yes",
    },
  },
  "Work at hight- MW Hop#1": {
    "Antenna size - Near End": {
      fieldName: "Antenna size - Near End",
      value: "",
    },
    "Approved PTW available?": {
      fieldName: "Approved PTW available?",
      value: "",
    },
    "MW Antenna clamps properly mounted and marked existing alignment position with paint/ Marker? (Mark VIL and FAR end ID on the antenna)":
      {
        fieldName:
          "MW Antenna clamps properly mounted and marked existing alignment position with paint/ Marker? (Mark VIL and FAR end ID on the antenna)",
        value: "",
      },
    "Any visible damage/corrosion on the Antenna ?": {
      fieldName: "Any visible damage/corrosion on the Antenna ?",
      value: "",
    },
    "IF Cable grounded": {
      fieldName: "IF Cable grounded",
      value: "",
    },
    "IF Cable Clamped/Tied": {
      fieldName: "IF Cable Clamped/Tied",
      value: "",
    },
    "Check whether anchoring point available in MW Pole?": {
      fieldName: "Check whether anchoring point available in MW Pole?",
      value: "",
    },
    "Drip loop provided before cable entry": {
      fieldName: "Drip loop provided before cable entry",
      value: "",
    },
    "Stud rod marked with paint/ Marker and tightened properly": {
      fieldName: "Stud rod marked with paint/ Marker and tightened properly",
      value: "",
    },
    "Dual stud Rod for >= 1.2 Antenna": {
      fieldName: "Dual stud Rod for >= 1.2 Antenna",
      value: "",
    },
    "Receive Sensitivity Level": {
      fieldName: "Receive Sensitivity Level",
      value: "",
    },
    "Monsoon specific precautionary activities": {
      fieldName: "Monsoon specific precautionary activities",
      value: "",
    },
  },
  "Radio- Work At Height": {
    "PTW Available": {
      fieldName: "PTW Available",
      value: "Yes",
    },
    "Any roof edge related issue, Proper ladder with rings availability, Any loose connections etc to be verified":
      {
        fieldName:
          "Any roof edge related issue, Proper ladder with rings availability, Any loose connections etc to be verified",
        value:
          "No roof edge issues observed. Proper ladder with rings available. No loose connections found.",
      },
    "Availability of FAS system at all GBM towers": {
      fieldName: "Availability of FAS system at all GBM towers",
      value: "FAS system available at all towers",
    },
    "Active Alarms": {
      fieldName: "Active Alarms",
      value: "No active alarms",
    },
    "Proper sealing of cable entries in Cabinet": {
      fieldName: "Proper sealing of cable entries in Cabinet",
      value: "Cable entries properly sealed",
    },
    "Drip loop provided before cable entry": {
      fieldName: "Drip loop provided before cable entry",
      value: "Drip loop provided",
    },
    "LVD bypass": {
      fieldName: "LVD bypass",
      value: "LVD bypass operational",
    },
    "Power cable joints": {
      fieldName: "Power cable joints",
      value: "Power cable joints secure",
    },
    "Power cable looping near Unit & DC DB": {
      fieldName: "Power cable looping near Unit & DC DB",
      value: "Proper looping maintained",
    },
    "Ensure all the nodes connected from correct MCB rating": {
      fieldName: "Ensure all the nodes connected from correct MCB rating",
      value: "Nodes connected with correct MCB rating",
    },
    "RAT PAD availability at Fiber drop / BSC and HUB sites": {
      fieldName: "RAT PAD availability at Fiber drop / BSC and HUB sites",
      value: "RAT PAD available at all sites",
    },
    "GSM & MW Antenna Ports Weather proofing": {
      fieldName: "GSM & MW Antenna Ports Weather proofing",
      value: "Antenna ports weatherproofed",
    },
    "Proper Usage of RRU CPRI cable, ports & Maintenance doors": {
      fieldName: "Proper Usage of RRU CPRI cable, ports & Maintenance doors",
      value: "RRU CPRI cables, ports, and maintenance doors used correctly",
    },
    "Sealing of Radio ports against dust": {
      fieldName: "Sealing of Radio ports against dust",
      value: "Radio ports properly sealed",
    },
    "Cable routing properly": {
      fieldName: "Cable routing properly",
      value: "Cables routed correctly",
    },
    "RRUS - Sunshield covers installed": {
      fieldName: "RRUS - Sunshield covers installed",
      value: "Sunshield covers installed on RRUS",
    },
    "Dummy plates in unused slots": {
      fieldName: "Dummy plates in unused slots",
      value: "Dummy plates installed in unused slots",
    },
    "Proper Air Circulation ?": {
      fieldName: "Proper Air Circulation ?",
      value: "Good air circulation ensured",
    },
    "Sealing of unused ports": {
      fieldName: "Sealing of unused ports",
      value: "Unused ports sealed properly",
    },
    "Proper Earthing": {
      fieldName: "Proper Earthing",
      value: "Earthing done as per standards",
    },
  },
  "BSC Check list": {
    "Access to BSC shelter and BSC Subracks": {
      fieldName: "Access to BSC shelter and BSC Subracks",
      value: "Accessible",
    },
    "Any Major/ Minor Alarm?": {
      fieldName: "Any Major/ Minor Alarm?",
      value: "No major or minor alarms",
    },
    "BSC MCB should be more than 83A & should be properly marked": {
      fieldName: "BSC MCB should be more than 83A & should be properly marked",
      value: "MCB rated more than 83A and properly marked",
    },
    "Is there any black mark/melted portion/brownish color near or on the BSC UB0/UB1 terminals? (+ -) UB0/ (+ -) UB1, Cabinet-1/Cabinet-2 or at FAR end":
      {
        fieldName:
          "Is there any black mark/melted portion/brownish color near or on the BSC UB0/UB1 terminals? (+ -) UB0/ (+ -) UB1, Cabinet-1/Cabinet-2 or at FAR end",
        value:
          "No black marks, melted portions, or brownish discoloration observed near UB0/UB1 terminals",
      },
    "Grounding and Earth": {
      fieldName: "Grounding and Earth",
      value: "Grounding and earthing checked and verified",
    },
    "Shielded External Sync cable should be used": {
      fieldName: "Shielded External Sync cable should be used",
      value: "Shielded External Sync cable used",
    },
    "All the Fuse slots of the PDFU have Fuses in PDU Unit": {
      fieldName: "All the Fuse slots of the PDFU have Fuses in PDU Unit",
      value: "All fuse slots in PDU Unit have fuses",
    },
    "LAN cable/Optical cable labeling and routing": {
      fieldName: "LAN cable/Optical cable labeling and routing",
      value: "LAN and Optical cables labeled and routed properly",
    },
    "BSC Accessories, Spares, BSC Login tools on Laptop etc are available in BSC/Shelter":
      {
        fieldName:
          "BSC Accessories, Spares, BSC Login tools on Laptop etc are available in BSC/Shelter",
        value: "Accessories, spares, and login tools available",
      },
    "HWAT toggle switch should be in mid position": {
      fieldName: "HWAT toggle switch should be in mid position",
      value: "HWAT toggle switch set to mid position",
    },
    "Hygiene of the BSC": {
      fieldName: "Hygiene of the BSC",
      value: "BSC cleanliness maintained",
    },
    "Ensure that External Alarm of the BSC is working fine": {
      fieldName: "Ensure that External Alarm of the BSC is working fine",
      value: "External alarm of the BSC functioning properly",
    },
    "Timely BSC Backup taken locally/Remotely": {
      fieldName: "Timely BSC Backup taken locally/Remotely",
      value: "Timely backups taken both locally and remotely",
    },
    "Avoid SPOF if any": {
      fieldName: "Avoid SPOF if any",
      value: "No Single Point of Failure (SPOF) identified",
    },
    "Before leaving the BSC, FLE to ensure all services are working fine in BSC (LBS/OSS/GB/Voice/Data etc.)":
      {
        fieldName:
          "Before leaving the BSC, FLE to ensure all services are working fine in BSC (LBS/OSS/GB/Voice/Data etc.)",
        value: "All services checked and confirmed operational before leaving",
      },
  },
};
