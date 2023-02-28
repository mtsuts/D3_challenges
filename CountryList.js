const countryData = [
    {
      "countryCode": "AD",
      "latitude": "42.546245",
      "longitude": "1.601554",
      "countryName": "Andorra"
    },
    {
      "countryCode": "AE",
      "latitude": "23.424076",
      "longitude": "53.847818",
      "countryName": "United Arab Emirates"
    },
    {
      "countryCode": "AF",
      "latitude": "33.93911",
      "longitude": "67.709953",
      "countryName": "Afghanistan"
    },
    {
      "countryCode": "AG",
      "latitude": "17.060816",
      "longitude": "-61.796428",
      "countryName": "Antigua and Barbuda"
    },
    {
      "countryCode": "AI",
      "latitude": "18.220554",
      "longitude": "-63.068615",
      "countryName": "Anguilla"
    },
    {
      "countryCode": "AL",
      "latitude": "41.153332",
      "longitude": "20.168331",
      "countryName": "Albania"
    },
    {
      "countryCode": "AM",
      "latitude": "40.069099",
      "longitude": "45.038189",
      "countryName": "Armenia"
    },
    {
      "countryCode": "AN",
      "latitude": "12.226079",
      "longitude": "-69.060087",
      "countryName": "Netherlands Antilles"
    },
    {
      "countryCode": "AO",
      "latitude": "-11.202692",
      "longitude": "17.873887",
      "countryName": "Angola"
    },
    {
      "countryCode": "AQ",
      "latitude": "-75.250973",
      "longitude": "-0.071389",
      "countryName": "Antarctica"
    },
    {
      "countryCode": "AR",
      "latitude": "-38.416097",
      "longitude": "-63.616672",
      "countryName": "Argentina"
    },
    {
      "countryCode": "AS",
      "latitude": "-14.270972",
      "longitude": "-170.132217",
      "countryName": "American Samoa"
    },
    {
      "countryCode": "AT",
      "latitude": "47.516231",
      "longitude": "14.550072",
      "countryName": "Austria"
    },
    {
      "countryCode": "AU",
      "latitude": "-25.274398",
      "longitude": "133.775136",
      "countryName": "Australia"
    },
    {
      "countryCode": "AW",
      "latitude": "12.52111",
      "longitude": "-69.968338",
      "countryName": "Aruba"
    },
    {
      "countryCode": "AZ",
      "latitude": "40.143105",
      "longitude": "47.576927",
      "countryName": "Azerbaijan"
    },
    {
      "countryCode": "BA",
      "latitude": "43.915886",
      "longitude": "17.679076",
      "countryName": "Bosnia and Herzegovina"
    },
    {
      "countryCode": "BB",
      "latitude": "13.193887",
      "longitude": "-59.543198",
      "countryName": "Barbados"
    },
    {
      "countryCode": "BD",
      "latitude": "23.684994",
      "longitude": "90.356331",
      "countryName": "Bangladesh"
    },
    {
      "countryCode": "BE",
      "latitude": "50.503887",
      "longitude": "4.469936",
      "countryName": "Belgium"
    },
    {
      "countryCode": "BF",
      "latitude": "12.238333",
      "longitude": "-1.561593",
      "countryName": "Burkina Faso"
    },
    {
      "countryCode": "BG",
      "latitude": "42.733883",
      "longitude": "25.48583",
      "countryName": "Bulgaria"
    },
    {
      "countryCode": "BH",
      "latitude": "25.930414",
      "longitude": "50.637772",
      "countryName": "Bahrain"
    },
    {
      "countryCode": "BI",
      "latitude": "-3.373056",
      "longitude": "29.918886",
      "countryName": "Burundi"
    },
    {
      "countryCode": "BJ",
      "latitude": "9.30769",
      "longitude": "2.315834",
      "countryName": "Benin"
    },
    {
      "countryCode": "BM",
      "latitude": "32.321384",
      "longitude": "-64.75737",
      "countryName": "Bermuda"
    },
    {
      "countryCode": "BN",
      "latitude": "4.535277",
      "longitude": "114.727669",
      "countryName": "Brunei"
    },
    {
      "countryCode": "BO",
      "latitude": "-16.290154",
      "longitude": "-63.588653",
      "countryName": "Bolivia"
    },
    {
      "countryCode": "BR",
      "latitude": "-14.235004",
      "longitude": "-51.92528",
      "countryName": "Brazil"
    },
    {
      "countryCode": "BS",
      "latitude": "25.03428",
      "longitude": "-77.39628",
      "countryName": "Bahamas"
    },
    {
      "countryCode": "BT",
      "latitude": "27.514162",
      "longitude": "90.433601",
      "countryName": "Bhutan"
    },
    {
      "countryCode": "BV",
      "latitude": "-54.423199",
      "longitude": "3.413194",
      "countryName": "Bouvet Island"
    },
    {
      "countryCode": "BW",
      "latitude": "-22.328474",
      "longitude": "24.684866",
      "countryName": "Botswana"
    },
    {
      "countryCode": "BY",
      "latitude": "53.709807",
      "longitude": "27.953389",
      "countryName": "Belarus"
    },
    {
      "countryCode": "BZ",
      "latitude": "17.189877",
      "longitude": "-88.49765",
      "countryName": "Belize"
    },
    {
      "countryCode": "CA",
      "latitude": "56.130366",
      "longitude": "-106.346771",
      "countryName": "Canada"
    },
    {
      "countryCode": "CC",
      "latitude": "-12.164165",
      "longitude": "96.870956",
      "countryName": "Cocos [Keeling] Islands"
    },
    {
      "countryCode": "CD",
      "latitude": "-4.038333",
      "longitude": "21.758664",
      "countryName": "Congo [DRC]"
    },
    {
      "countryCode": "CF",
      "latitude": "6.611111",
      "longitude": "20.939444",
      "countryName": "Central African Republic"
    },
    {
      "countryCode": "CG",
      "latitude": "-0.228021",
      "longitude": "15.827659",
      "countryName": "Congo [Republic]"
    },
    {
      "countryCode": "CH",
      "latitude": "46.818188",
      "longitude": "8.227512",
      "countryName": "Switzerland"
    },
    {
      "countryCode": "CI",
      "latitude": "7.539989",
      "longitude": "-5.54708",
      "countryName": "Côte d'Ivoire"
    },
    {
      "countryCode": "CK",
      "latitude": "-21.236736",
      "longitude": "-159.777671",
      "countryName": "Cook Islands"
    },
    {
      "countryCode": "CL",
      "latitude": "-35.675147",
      "longitude": "-71.542969",
      "countryName": "Chile"
    },
    {
      "countryCode": "CM",
      "latitude": "7.369722",
      "longitude": "12.354722",
      "countryName": "Cameroon"
    },
    {
      "countryCode": "CN",
      "latitude": "35.86166",
      "longitude": "104.195397",
      "countryName": "China"
    },
    {
      "countryCode": "CO",
      "latitude": "4.570868",
      "longitude": "-74.297333",
      "countryName": "Colombia"
    },
    {
      "countryCode": "CR",
      "latitude": "9.748917",
      "longitude": "-83.753428",
      "countryName": "Costa Rica"
    },
    {
      "countryCode": "CU",
      "latitude": "21.521757",
      "longitude": "-77.781167",
      "countryName": "Cuba"
    },
    {
      "countryCode": "CV",
      "latitude": "16.002082",
      "longitude": "-24.013197",
      "countryName": "Cape Verde"
    },
    {
      "countryCode": "CX",
      "latitude": "-10.447525",
      "longitude": "105.690449",
      "countryName": "Christmas Island"
    },
    {
      "countryCode": "CY",
      "latitude": "35.126413",
      "longitude": "33.429859",
      "countryName": "Cyprus"
    },
    {
      "countryCode": "CZ",
      "latitude": "49.817492",
      "longitude": "15.472962",
      "countryName": "Czech Republic"
    },
    {
      "countryCode": "DE",
      "latitude": "51.165691",
      "longitude": "10.451526",
      "countryName": "Germany"
    },
    {
      "countryCode": "DJ",
      "latitude": "11.825138",
      "longitude": "42.590275",
      "countryName": "Djibouti"
    },
    {
      "countryCode": "DK",
      "latitude": "56.26392",
      "longitude": "9.501785",
      "countryName": "Denmark"
    },
    {
      "countryCode": "DM",
      "latitude": "15.414999",
      "longitude": "-61.370976",
      "countryName": "Dominica"
    },
    {
      "countryCode": "DO",
      "latitude": "18.735693",
      "longitude": "-70.162651",
      "countryName": "Dominican Republic"
    },
    {
      "countryCode": "DZ",
      "latitude": "28.033886",
      "longitude": "1.659626",
      "countryName": "Algeria"
    },
    {
      "countryCode": "EC",
      "latitude": "-1.831239",
      "longitude": "-78.183406",
      "countryName": "Ecuador"
    },
    {
      "countryCode": "EE",
      "latitude": "58.595272",
      "longitude": "25.013607",
      "countryName": "Estonia"
    },
    {
      "countryCode": "EG",
      "latitude": "26.820553",
      "longitude": "30.802498",
      "countryName": "Egypt"
    },
    {
      "countryCode": "EH",
      "latitude": "24.215527",
      "longitude": "-12.885834",
      "countryName": "Western Sahara"
    },
    {
      "countryCode": "ER",
      "latitude": "15.179384",
      "longitude": "39.782334",
      "countryName": "Eritrea"
    },
    {
      "countryCode": "ES",
      "latitude": "40.463667",
      "longitude": "-3.74922",
      "countryName": "Spain"
    },
    {
      "countryCode": "ET",
      "latitude": "9.145",
      "longitude": "40.489673",
      "countryName": "Ethiopia"
    },
    {
      "countryCode": "FI",
      "latitude": "61.92411",
      "longitude": "25.748151",
      "countryName": "Finland"
    },
    {
      "countryCode": "FJ",
      "latitude": "-16.578193",
      "longitude": "179.414413",
      "countryName": "Fiji"
    },
    {
      "countryCode": "FK",
      "latitude": "-51.796253",
      "longitude": "-59.523613",
      "countryName": "Falkland Islands [Islas Malvinas]"
    },
    {
      "countryCode": "FM",
      "latitude": "7.425554",
      "longitude": "150.550812",
      "countryName": "Micronesia"
    },
    {
      "countryCode": "FO",
      "latitude": "61.892635",
      "longitude": "-6.911806",
      "countryName": "Faroe Islands"
    },
    {
      "countryCode": "FR",
      "latitude": "46.227638",
      "longitude": "2.213749",
      "countryName": "France"
    },
    {
      "countryCode": "GA",
      "latitude": "-0.803689",
      "longitude": "11.609444",
      "countryName": "Gabon"
    },
    {
      "countryCode": "GB",
      "latitude": "55.378051",
      "longitude": "-3.435973",
      "countryName": "United Kingdom"
    },
    {
      "countryCode": "GD",
      "latitude": "12.262776",
      "longitude": "-61.604171",
      "countryName": "Grenada"
    },
    {
      "countryCode": "GE",
      "latitude": "42.315407",
      "longitude": "43.356892",
      "countryName": "Georgia"
    },
    {
      "countryCode": "GF",
      "latitude": "3.933889",
      "longitude": "-53.125782",
      "countryName": "French Guiana"
    },
    {
      "countryCode": "GG",
      "latitude": "49.465691",
      "longitude": "-2.585278",
      "countryName": "Guernsey"
    },
    {
      "countryCode": "GH",
      "latitude": "7.946527",
      "longitude": "-1.023194",
      "countryName": "Ghana"
    },
    {
      "countryCode": "GI",
      "latitude": "36.137741",
      "longitude": "-5.345374",
      "countryName": "Gibraltar"
    },
    {
      "countryCode": "GL",
      "latitude": "71.706936",
      "longitude": "-42.604303",
      "countryName": "Greenland"
    },
    {
      "countryCode": "GM",
      "latitude": "13.443182",
      "longitude": "-15.310139",
      "countryName": "Gambia"
    },
    {
      "countryCode": "GN",
      "latitude": "9.945587",
      "longitude": "-9.696645",
      "countryName": "Guinea"
    },
    {
      "countryCode": "GP",
      "latitude": "16.995971",
      "longitude": "-62.067641",
      "countryName": "Guadeloupe"
    },
    {
      "countryCode": "GQ",
      "latitude": "1.650801",
      "longitude": "10.267895",
      "countryName": "Equatorial Guinea"
    },
    {
      "countryCode": "GR",
      "latitude": "39.074208",
      "longitude": "21.824312",
      "countryName": "Greece"
    },
    {
      "countryCode": "GS",
      "latitude": "-54.429579",
      "longitude": "-36.587909",
      "countryName": "South Georgia and the South Sandwich Islands"
    },
    {
      "countryCode": "GT",
      "latitude": "15.783471",
      "longitude": "-90.230759",
      "countryName": "Guatemala"
    },
    {
      "countryCode": "GU",
      "latitude": "13.444304",
      "longitude": "144.793731",
      "countryName": "Guam"
    },
    {
      "countryCode": "GW",
      "latitude": "11.803749",
      "longitude": "-15.180413",
      "countryName": "Guinea-Bissau"
    },
    {
      "countryCode": "GY",
      "latitude": "4.860416",
      "longitude": "-58.93018",
      "countryName": "Guyana"
    },
    {
      "countryCode": "GZ",
      "latitude": "31.354676",
      "longitude": "34.308825",
      "countryName": "Gaza Strip"
    },
    {
      "countryCode": "HK",
      "latitude": "22.396428",
      "longitude": "114.109497",
      "countryName": "Hong Kong"
    },
    {
      "countryCode": "HM",
      "latitude": "-53.08181",
      "longitude": "73.504158",
      "countryName": "Heard Island and McDonald Islands"
    },
    {
      "countryCode": "HN",
      "latitude": "15.199999",
      "longitude": "-86.241905",
      "countryName": "Honduras"
    },
    {
      "countryCode": "HR",
      "latitude": "45.1",
      "longitude": "15.2",
      "countryName": "Croatia"
    },
    {
      "countryCode": "HT",
      "latitude": "18.971187",
      "longitude": "-72.285215",
      "countryName": "Haiti"
    },
    {
      "countryCode": "HU",
      "latitude": "47.162494",
      "longitude": "19.503304",
      "countryName": "Hungary"
    },
    {
      "countryCode": "ID",
      "latitude": "-0.789275",
      "longitude": "113.921327",
      "countryName": "Indonesia"
    },
    {
      "countryCode": "IE",
      "latitude": "53.41291",
      "longitude": "-8.24389",
      "countryName": "Ireland"
    },
    {
      "countryCode": "IL",
      "latitude": "31.046051",
      "longitude": "34.851612",
      "countryName": "Israel"
    },
    {
      "countryCode": "IM",
      "latitude": "54.236107",
      "longitude": "-4.548056",
      "countryName": "Isle of Man"
    },
    {
      "countryCode": "IN",
      "latitude": "20.593684",
      "longitude": "78.96288",
      "countryName": "India"
    },
    {
      "countryCode": "IO",
      "latitude": "-6.343194",
      "longitude": "71.876519",
      "countryName": "British Indian Ocean Territory"
    },
    {
      "countryCode": "IQ",
      "latitude": "33.223191",
      "longitude": "43.679291",
      "countryName": "Iraq"
    },
    {
      "countryCode": "IR",
      "latitude": "32.427908",
      "longitude": "53.688046",
      "countryName": "Iran"
    },
    {
      "countryCode": "IS",
      "latitude": "64.963051",
      "longitude": "-19.020835",
      "countryName": "Iceland"
    },
    {
      "countryCode": "IT",
      "latitude": "41.87194",
      "longitude": "12.56738",
      "countryName": "Italy"
    },
    {
      "countryCode": "JE",
      "latitude": "49.214439",
      "longitude": "-2.13125",
      "countryName": "Jersey"
    },
    {
      "countryCode": "JM",
      "latitude": "18.109581",
      "longitude": "-77.297508",
      "countryName": "Jamaica"
    },
    {
      "countryCode": "JO",
      "latitude": "30.585164",
      "longitude": "36.238414",
      "countryName": "Jordan"
    },
    {
      "countryCode": "JP",
      "latitude": "36.204824",
      "longitude": "138.252924",
      "countryName": "Japan"
    },
    {
      "countryCode": "KE",
      "latitude": "-0.023559",
      "longitude": "37.906193",
      "countryName": "Kenya"
    },
    {
      "countryCode": "KG",
      "latitude": "41.20438",
      "longitude": "74.766098",
      "countryName": "Kyrgyzstan"
    },
    {
      "countryCode": "KH",
      "latitude": "12.565679",
      "longitude": "104.990963",
      "countryName": "Cambodia"
    },
    {
      "countryCode": "KI",
      "latitude": "-3.370417",
      "longitude": "-168.734039",
      "countryName": "Kiribati"
    },
    {
      "countryCode": "KM",
      "latitude": "-11.875001",
      "longitude": "43.872219",
      "countryName": "Comoros"
    },
    {
      "countryCode": "KN",
      "latitude": "17.357822",
      "longitude": "-62.782998",
      "countryName": "Saint Kitts and Nevis"
    },
    {
      "countryCode": "KP",
      "latitude": "40.339852",
      "longitude": "127.510093",
      "countryName": "North Korea"
    },
    {
      "countryCode": "KR",
      "latitude": "35.907757",
      "longitude": "127.766922",
      "countryName": "South Korea"
    },
    {
      "countryCode": "KW",
      "latitude": "29.31166",
      "longitude": "47.481766",
      "countryName": "Kuwait"
    },
    {
      "countryCode": "KY",
      "latitude": "19.513469",
      "longitude": "-80.566956",
      "countryName": "Cayman Islands"
    },
    {
      "countryCode": "KZ",
      "latitude": "48.019573",
      "longitude": "66.923684",
      "countryName": "Kazakhstan"
    },
    {
      "countryCode": "LA",
      "latitude": "19.85627",
      "longitude": "102.495496",
      "countryName": "Laos"
    },
    {
      "countryCode": "LB",
      "latitude": "33.854721",
      "longitude": "35.862285",
      "countryName": "Lebanon"
    },
    {
      "countryCode": "LC",
      "latitude": "13.909444",
      "longitude": "-60.978893",
      "countryName": "Saint Lucia"
    },
    {
      "countryCode": "LI",
      "latitude": "47.166",
      "longitude": "9.555373",
      "countryName": "Liechtenstein"
    },
    {
      "countryCode": "LK",
      "latitude": "7.873054",
      "longitude": "80.771797",
      "countryName": "Sri Lanka"
    },
    {
      "countryCode": "LR",
      "latitude": "6.428055",
      "longitude": "-9.429499",
      "countryName": "Liberia"
    },
    {
      "countryCode": "LS",
      "latitude": "-29.609988",
      "longitude": "28.233608",
      "countryName": "Lesotho"
    },
    {
      "countryCode": "LT",
      "latitude": "55.169438",
      "longitude": "23.881275",
      "countryName": "Lithuania"
    },
    {
      "countryCode": "LU",
      "latitude": "49.815273",
      "longitude": "6.129583",
      "countryName": "Luxembourg"
    },
    {
      "countryCode": "LV",
      "latitude": "56.879635",
      "longitude": "24.603189",
      "countryName": "Latvia"
    },
    {
      "countryCode": "LY",
      "latitude": "26.3351",
      "longitude": "17.228331",
      "countryName": "Libya"
    },
    {
      "countryCode": "MA",
      "latitude": "31.791702",
      "longitude": "-7.09262",
      "countryName": "Morocco"
    },
    {
      "countryCode": "MC",
      "latitude": "43.750298",
      "longitude": "7.412841",
      "countryName": "Monaco"
    },
    {
      "countryCode": "MD",
      "latitude": "47.411631",
      "longitude": "28.369885",
      "countryName": "Moldova"
    },
    {
      "countryCode": "ME",
      "latitude": "42.708678",
      "longitude": "19.37439",
      "countryName": "Montenegro"
    },
    {
      "countryCode": "MG",
      "latitude": "-18.766947",
      "longitude": "46.869107",
      "countryName": "Madagascar"
    },
    {
      "countryCode": "MH",
      "latitude": "7.131474",
      "longitude": "171.184478",
      "countryName": "Marshall Islands"
    },
    {
      "countryCode": "MK",
      "latitude": "41.608635",
      "longitude": "21.745275",
      "countryName": "Macedonia [FYROM]"
    },
    {
      "countryCode": "ML",
      "latitude": "17.570692",
      "longitude": "-3.996166",
      "countryName": "Mali"
    },
    {
      "countryCode": "MM",
      "latitude": "21.913965",
      "longitude": "95.956223",
      "countryName": "Myanmar [Burma]"
    },
    {
      "countryCode": "MN",
      "latitude": "46.862496",
      "longitude": "103.846656",
      "countryName": "Mongolia"
    },
    {
      "countryCode": "MO",
      "latitude": "22.198745",
      "longitude": "113.543873",
      "countryName": "Macau"
    },
    {
      "countryCode": "MP",
      "latitude": "17.33083",
      "longitude": "145.38469",
      "countryName": "Northern Mariana Islands"
    },
    {
      "countryCode": "MQ",
      "latitude": "14.641528",
      "longitude": "-61.024174",
      "countryName": "Martinique"
    },
    {
      "countryCode": "MR",
      "latitude": "21.00789",
      "longitude": "-10.940835",
      "countryName": "Mauritania"
    },
    {
      "countryCode": "MS",
      "latitude": "16.742498",
      "longitude": "-62.187366",
      "countryName": "Montserrat"
    },
    {
      "countryCode": "MT",
      "latitude": "35.937496",
      "longitude": "14.375416",
      "countryName": "Malta"
    },
    {
      "countryCode": "MU",
      "latitude": "-20.348404",
      "longitude": "57.552152",
      "countryName": "Mauritius"
    },
    {
      "countryCode": "MV",
      "latitude": "3.202778",
      "longitude": "73.22068",
      "countryName": "Maldives"
    },
    {
      "countryCode": "MW",
      "latitude": "-13.254308",
      "longitude": "34.301525",
      "countryName": "Malawi"
    },
    {
      "countryCode": "MX",
      "latitude": "23.634501",
      "longitude": "-102.552784",
      "countryName": "Mexico"
    },
    {
      "countryCode": "MY",
      "latitude": "4.210484",
      "longitude": "101.975766",
      "countryName": "Malaysia"
    },
    {
      "countryCode": "MZ",
      "latitude": "-18.665695",
      "longitude": "35.529562",
      "countryName": "Mozambique"
    },
    {
      "countryCode": "NA",
      "latitude": "-22.95764",
      "longitude": "18.49041",
      "countryName": "Namibia"
    },
    {
      "countryCode": "NC",
      "latitude": "-20.904305",
      "longitude": "165.618042",
      "countryName": "New Caledonia"
    },
    {
      "countryCode": "NE",
      "latitude": "17.607789",
      "longitude": "8.081666",
      "countryName": "Niger"
    },
    {
      "countryCode": "NF",
      "latitude": "-29.040835",
      "longitude": "167.954712",
      "countryName": "Norfolk Island"
    },
    {
      "countryCode": "NG",
      "latitude": "9.081999",
      "longitude": "8.675277",
      "countryName": "Nigeria"
    },
    {
      "countryCode": "NI",
      "latitude": "12.865416",
      "longitude": "-85.207229",
      "countryName": "Nicaragua"
    },
    {
      "countryCode": "NL",
      "latitude": "52.132633",
      "longitude": "5.291266",
      "countryName": "Netherlands"
    },
    {
      "countryCode": "NO",
      "latitude": "60.472024",
      "longitude": "8.468946",
      "countryName": "Norway"
    },
    {
      "countryCode": "NP",
      "latitude": "28.394857",
      "longitude": "84.124008",
      "countryName": "Nepal"
    },
    {
      "countryCode": "NR",
      "latitude": "-0.522778",
      "longitude": "166.931503",
      "countryName": "Nauru"
    },
    {
      "countryCode": "NU",
      "latitude": "-19.054445",
      "longitude": "-169.867233",
      "countryName": "Niue"
    },
    {
      "countryCode": "NZ",
      "latitude": "-40.900557",
      "longitude": "174.885971",
      "countryName": "New Zealand"
    },
    {
      "countryCode": "OM",
      "latitude": "21.512583",
      "longitude": "55.923255",
      "countryName": "Oman"
    },
    {
      "countryCode": "PA",
      "latitude": "8.537981",
      "longitude": "-80.782127",
      "countryName": "Panama"
    },
    {
      "countryCode": "PE",
      "latitude": "-9.189967",
      "longitude": "-75.015152",
      "countryName": "Peru"
    },
    {
      "countryCode": "PF",
      "latitude": "-17.679742",
      "longitude": "-149.406843",
      "countryName": "French Polynesia"
    },
    {
      "countryCode": "PG",
      "latitude": "-6.314993",
      "longitude": "143.95555",
      "countryName": "Papua New Guinea"
    },
    {
      "countryCode": "PH",
      "latitude": "12.879721",
      "longitude": "121.774017",
      "countryName": "Philippines"
    },
    {
      "countryCode": "PK",
      "latitude": "30.375321",
      "longitude": "69.345116",
      "countryName": "Pakistan"
    },
    {
      "countryCode": "PL",
      "latitude": "51.919438",
      "longitude": "19.145136",
      "countryName": "Poland"
    },
    {
      "countryCode": "PM",
      "latitude": "46.941936",
      "longitude": "-56.27111",
      "countryName": "Saint Pierre and Miquelon"
    },
    {
      "countryCode": "PN",
      "latitude": "-24.703615",
      "longitude": "-127.439308",
      "countryName": "Pitcairn Islands"
    },
    {
      "countryCode": "PR",
      "latitude": "18.220833",
      "longitude": "-66.590149",
      "countryName": "Puerto Rico"
    },
    {
      "countryCode": "PS",
      "latitude": "31.952162",
      "longitude": "35.233154",
      "countryName": "Palestinian Territories"
    },
    {
      "countryCode": "PT",
      "latitude": "39.399872",
      "longitude": "-8.224454",
      "countryName": "Portugal"
    },
    {
      "countryCode": "PW",
      "latitude": "7.51498",
      "longitude": "134.58252",
      "countryName": "Palau"
    },
    {
      "countryCode": "PY",
      "latitude": "-23.442503",
      "longitude": "-58.443832",
      "countryName": "Paraguay"
    },
    {
      "countryCode": "QA",
      "latitude": "25.354826",
      "longitude": "51.183884",
      "countryName": "Qatar"
    },
    {
      "countryCode": "RE",
      "latitude": "-21.115141",
      "longitude": "55.536384",
      "countryName": "Réunion"
    },
    {
      "countryCode": "RO",
      "latitude": "45.943161",
      "longitude": "24.96676",
      "countryName": "Romania"
    },
    {
      "countryCode": "RS",
      "latitude": "44.016521",
      "longitude": "21.005859",
      "countryName": "Serbia"
    },
    {
      "countryCode": "RU",
      "latitude": "61.52401",
      "longitude": "105.318756",
      "countryName": "Russia"
    },
    {
      "countryCode": "RW",
      "latitude": "-1.940278",
      "longitude": "29.873888",
      "countryName": "Rwanda"
    },
    {
      "countryCode": "SA",
      "latitude": "23.885942",
      "longitude": "45.079162",
      "countryName": "Saudi Arabia"
    },
    {
      "countryCode": "SB",
      "latitude": "-9.64571",
      "longitude": "160.156194",
      "countryName": "Solomon Islands"
    },
    {
      "countryCode": "SC",
      "latitude": "-4.679574",
      "longitude": "55.491977",
      "countryName": "Seychelles"
    },
    {
      "countryCode": "SD",
      "latitude": "12.862807",
      "longitude": "30.217636",
      "countryName": "Sudan"
    },
    {
      "countryCode": "SE",
      "latitude": "60.128161",
      "longitude": "18.643501",
      "countryName": "Sweden"
    },
    {
      "countryCode": "SG",
      "latitude": "1.352083",
      "longitude": "103.819836",
      "countryName": "Singapore"
    },
    {
      "countryCode": "SH",
      "latitude": "-24.143474",
      "longitude": "-10.030696",
      "countryName": "Saint Helena"
    },
    {
      "countryCode": "SI",
      "latitude": "46.151241",
      "longitude": "14.995463",
      "countryName": "Slovenia"
    },
    {
      "countryCode": "SJ",
      "latitude": "77.553604",
      "longitude": "23.670272",
      "countryName": "Svalbard and Jan Mayen"
    },
    {
      "countryCode": "SK",
      "latitude": "48.669026",
      "longitude": "19.699024",
      "countryName": "Slovakia"
    },
    {
      "countryCode": "SL",
      "latitude": "8.460555",
      "longitude": "-11.779889",
      "countryName": "Sierra Leone"
    },
    {
      "countryCode": "SM",
      "latitude": "43.94236",
      "longitude": "12.457777",
      "countryName": "San Marino"
    },
    {
      "countryCode": "SN",
      "latitude": "14.497401",
      "longitude": "-14.452362",
      "countryName": "Senegal"
    },
    {
      "countryCode": "SO",
      "latitude": "5.152149",
      "longitude": "46.199616",
      "countryName": "Somalia"
    },
    {
      "countryCode": "SR",
      "latitude": "3.919305",
      "longitude": "-56.027783",
      "countryName": "Suriname"
    },
    {
      "countryCode": "ST",
      "latitude": "0.18636",
      "longitude": "6.613081",
      "countryName": "São Tomé and Príncipe"
    },
    {
      "countryCode": "SV",
      "latitude": "13.794185",
      "longitude": "-88.89653",
      "countryName": "El Salvador"
    },
    {
      "countryCode": "SY",
      "latitude": "34.802075",
      "longitude": "38.996815",
      "countryName": "Syria"
    },
    {
      "countryCode": "SZ",
      "latitude": "-26.522503",
      "longitude": "31.465866",
      "countryName": "Swaziland"
    },
    {
      "countryCode": "TC",
      "latitude": "21.694025",
      "longitude": "-71.797928",
      "countryName": "Turks and Caicos Islands"
    },
    {
      "countryCode": "TD",
      "latitude": "15.454166",
      "longitude": "18.732207",
      "countryName": "Chad"
    },
    {
      "countryCode": "TF",
      "latitude": "-49.280366",
      "longitude": "69.348557",
      "countryName": "French Southern Territories"
    },
    {
      "countryCode": "TG",
      "latitude": "8.619543",
      "longitude": "0.824782",
      "countryName": "Togo"
    },
    {
      "countryCode": "TH",
      "latitude": "15.870032",
      "longitude": "100.992541",
      "countryName": "Thailand"
    },
    {
      "countryCode": "TJ",
      "latitude": "38.861034",
      "longitude": "71.276093",
      "countryName": "Tajikistan"
    },
    {
      "countryCode": "TK",
      "latitude": "-8.967363",
      "longitude": "-171.855881",
      "countryName": "Tokelau"
    },
    {
      "countryCode": "TL",
      "latitude": "-8.874217",
      "longitude": "125.727539",
      "countryName": "Timor-Leste"
    },
    {
      "countryCode": "TM",
      "latitude": "38.969719",
      "longitude": "59.556278",
      "countryName": "Turkmenistan"
    },
    {
      "countryCode": "TN",
      "latitude": "33.886917",
      "longitude": "9.537499",
      "countryName": "Tunisia"
    },
    {
      "countryCode": "TO",
      "latitude": "-21.178986",
      "longitude": "-175.198242",
      "countryName": "Tonga"
    },
    {
      "countryCode": "TR",
      "latitude": "38.963745",
      "longitude": "35.243322",
      "countryName": "Turkey"
    },
    {
      "countryCode": "TT",
      "latitude": "10.691803",
      "longitude": "-61.222503",
      "countryName": "Trinidad and Tobago"
    },
    {
      "countryCode": "TV",
      "latitude": "-7.109535",
      "longitude": "177.64933",
      "countryName": "Tuvalu"
    },
    {
      "countryCode": "TW",
      "latitude": "23.69781",
      "longitude": "120.960515",
      "countryName": "Taiwan"
    },
    {
      "countryCode": "TZ",
      "latitude": "-6.369028",
      "longitude": "34.888822",
      "countryName": "Tanzania"
    },
    {
      "countryCode": "UA",
      "latitude": "48.379433",
      "longitude": "31.16558",
      "countryName": "Ukraine"
    },
    {
      "countryCode": "UG",
      "latitude": "1.373333",
      "longitude": "32.290275",
      "countryName": "Uganda"
    },
    {
      "countryCode": "UM",
      "latitude": "",
      "longitude": "",
      "countryName": "U.S. Minor Outlying Islands"
    },
    {
      "countryCode": "US",
      "latitude": "37.09024",
      "longitude": "-95.712891",
      "countryName": "United States"
    },
    {
      "countryCode": "UY",
      "latitude": "-32.522779",
      "longitude": "-55.765835",
      "countryName": "Uruguay"
    },
    {
      "countryCode": "UZ",
      "latitude": "41.377491",
      "longitude": "64.585262",
      "countryName": "Uzbekistan"
    },
    {
      "countryCode": "VA",
      "latitude": "41.902916",
      "longitude": "12.453389",
      "countryName": "Vatican City"
    },
    {
      "countryCode": "VC",
      "latitude": "12.984305",
      "longitude": "-61.287228",
      "countryName": "Saint Vincent and the Grenadines"
    },
    {
      "countryCode": "VE",
      "latitude": "6.42375",
      "longitude": "-66.58973",
      "countryName": "Venezuela"
    },
    {
      "countryCode": "VG",
      "latitude": "18.420695",
      "longitude": "-64.639968",
      "countryName": "British Virgin Islands"
    },
    {
      "countryCode": "VI",
      "latitude": "18.335765",
      "longitude": "-64.896335",
      "countryName": "U.S. Virgin Islands"
    },
    {
      "countryCode": "VN",
      "latitude": "14.058324",
      "longitude": "108.277199",
      "countryName": "Vietnam"
    },
    {
      "countryCode": "VU",
      "latitude": "-15.376706",
      "longitude": "166.959158",
      "countryName": "Vanuatu"
    },
    {
      "countryCode": "WF",
      "latitude": "-13.768752",
      "longitude": "-177.156097",
      "countryName": "Wallis and Futuna"
    },
    {
      "countryCode": "WS",
      "latitude": "-13.759029",
      "longitude": "-172.104629",
      "countryName": "Samoa"
    },
    {
      "countryCode": "XK",
      "latitude": "42.602636",
      "longitude": "20.902977",
      "countryName": "Kosovo"
    },
    {
      "countryCode": "YE",
      "latitude": "15.552727",
      "longitude": "48.516388",
      "countryName": "Yemen"
    },
    {
      "countryCode": "YT",
      "latitude": "-12.8275",
      "longitude": "45.166244",
      "countryName": "Mayotte"
    },
    {
      "countryCode": "ZA",
      "latitude": "-30.559482",
      "longitude": "22.937506",
      "countryName": "South Africa"
    },
    {
      "countryCode": "ZM",
      "latitude": "-13.133897",
      "longitude": "27.849332",
      "countryName": "Zambia"
    },
    {
      "countryCode": "ZW",
      "latitude": "-19.015438",
      "longitude": "29.154857",
      "countryName": "Zimbabwe"
    }
  ]
  
  /* Latitude: 12.4157952, Longitude: -86.8777984 */