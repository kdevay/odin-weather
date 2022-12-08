# odin-weather
Weather Forecast App

- search for a specific location to get the weather
- toggle Fahrenheit / Celsius

style
- change the look of the page based on the weather 

OOO
- console.log() the weather data for that location
- return an object with only the data requires for the app
- create form for users' location input
- display the data on page
- add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.

OpenWeather - relevant documentation excerpts
- API call:
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial

- sample response:
        base: "stations"
        clouds:
            all: 75
        cod: 200
        coord:
            lat: 29.9508
            lon: -90.0757
        main:
            feels_like: 75.52
            humidity: 75
            pressure: 1016
            temp: 74.82
            temp_max: 77
            temp_min: 71.06
        weather: 
            Array(0):
                    {
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                    }
            length: 1
        wind:                                       
            deg: 190            
            speed: 12.66

Attributions:
- translating wind from degree to cardinal directions: 
    http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm


var list = [
		{code: 'AF', name: 'Afghanistan'},
		{code: 'AX', name: 'Åland Islands'},
		{code: 'AL', name: 'Albania'},
		{code: 'DZ', name: 'Algeria'},
		{code: 'AS', name: 'American Samoa'},
		{code: 'AD', name: 'Andorra'},
		{code: 'AO', name: 'Angola'},
		{code: 'AI', name: 'Anguilla'},
		{code: 'AQ', name: 'Antarctica'},
		{code: 'AG', name: 'Antigua and Barbuda'},
		{code: 'AR', name: 'Argentina'},
		{code: 'AM', name: 'Armenia'},
		{code: 'AW', name: 'Aruba'},
		{code: 'AU', name: 'Australia'},
		{code: 'AT', name: 'Austria'},
		{code: 'AZ', name: 'Azerbaijan'},
		{code: 'BS', name: 'Bahamas'},
		{code: 'BH', name: 'Bahrain'},
		{code: 'BD', name: 'Bangladesh'},
		{code: 'BB', name: 'Barbados'},
		{code: 'BY', name: 'Belarus'},
		{code: 'BE', name: 'Belgium'},
		{code: 'BZ', name: 'Belize'},
		{code: 'BJ', name: 'Benin'},
		{code: 'BM', name: 'Bermuda'},
		{code: 'BT', name: 'Bhutan'},
		{code: 'BO', name: 'Bolivia (Plurinational State of)'},
		{code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba'},
		{code: 'BA', name: 'Bosnia and Herzegovina'},
		{code: 'BW', name: 'Botswana'},
		{code: 'BV', name: 'Bouvet Island'},
		{code: 'BR', name: 'Brazil'},
		{code: 'IO', name: 'British Indian Ocean Territory'},
		{code: 'BN', name: 'Brunei Darussalam'},
		{code: 'BG', name: 'Bulgaria'},
		{code: 'BF', name: 'Burkina Faso'},
		{code: 'BI', name: 'Burundi'},
		{code: 'CV', name: 'Cabo Verde'},
		{code: 'KH', name: 'Cambodia'},
		{code: 'CM', name: 'Cameroon'},
		{code: 'CA', name: 'Canada'},
		{code: 'KY', name: 'Cayman Islands'},
		{code: 'CF', name: 'Central African Republic'},
		{code: 'TD', name: 'Chad'},
		{code: 'CL', name: 'Chile'},
		{code: 'CN', name: 'China'},
		{code: 'CX', name: 'Christmas Island'},
		{code: 'CC', name: 'Cocos (Keeling) Islands'},
		{code: 'CO', name: 'Colombia'},
		{code: 'KM', name: 'Comoros'},
		{code: 'CG', name: 'Congo'},
		{code: 'CD', name: 'Congo (Democratic Republic of the)'},
		{code: 'CK', name: 'Cook Islands'},
		{code: 'CR', name: 'Costa Rica'},
		{code: 'CI', name: 'Côte d\'Ivoire'},
		{code: 'HR', name: 'Croatia'},
		{code: 'CU', name: 'Cuba'},
		{code: 'CW', name: 'Curaçao'},
		{code: 'CY', name: 'Cyprus'},
		{code: 'CZ', name: 'Czech Republic'},
		{code: 'DK', name: 'Denmark'},
		{code: 'DJ', name: 'Djibouti'},
		{code: 'DM', name: 'Dominica'},
		{code: 'DO', name: 'Dominican Republic'},
		{code: 'EC', name: 'Ecuador'},
		{code: 'EG', name: 'Egypt'},
		{code: 'SV', name: 'El Salvador'},
		{code: 'GQ', name: 'Equatorial Guinea'},
		{code: 'ER', name: 'Eritrea'},
		{code: 'EE', name: 'Estonia'},
		{code: 'ET', name: 'Ethiopia'},
		{code: 'FK', name: 'Falkland Islands (Malvinas)'},
		{code: 'FO', name: 'Faroe Islands'},
		{code: 'FJ', name: 'Fiji (Republic of)'},
		{code: 'FI', name: 'Finland'},
		{code: 'FR', name: 'France'},
		{code: 'GF', name: 'French Guiana'},
		{code: 'PF', name: 'French Polynesia'},
		{code: 'TF', name: 'French Southern Territories'},
		{code: 'GA', name: 'Gabon'},
		{code: 'GM', name: 'Gambia'},
		{code: 'GE', name: 'Georgia'},
		{code: 'DE', name: 'Germany'},
		{code: 'GH', name: 'Ghana'},
		{code: 'GI', name: 'Gibraltar'},
		{code: 'GR', name: 'Greece'},
		{code: 'GL', name: 'Greenland'},
		{code: 'GD', name: 'Grenada'},
		{code: 'GP', name: 'Guadeloupe'},
		{code: 'GU', name: 'Guam'},
		{code: 'GT', name: 'Guatemala'},
		{code: 'GG', name: 'Guernsey'},
		{code: 'GN', name: 'Guinea'},
		{code: 'GW', name: 'Guinea-Bissau'},
		{code: 'GY', name: 'Guyana'},
		{code: 'HT', name: 'Haiti'},
		{code: 'HM', name: 'Heard Island and McDonald Islands'},
		{code: 'VA', name: 'Holy See'},
		{code: 'HN', name: 'Honduras'},
		{code: 'HK', name: 'Hong Kong'},
		{code: 'HU', name: 'Hungary'},
		{code: 'IS', name: 'Iceland'},
		{code: 'IN', name: 'India'},
		{code: 'ID', name: 'Indonesia'},
		{code: 'IR', name: 'Iran (Islamic Republic of)'},
		{code: 'IQ', name: 'Iraq'},
		{code: 'IE', name: 'Ireland'},
		{code: 'IM', name: 'Isle of Man'},
		{code: 'IL', name: 'Israel'},
		{code: 'IT', name: 'Italy'},
		{code: 'JM', name: 'Jamaica'},
		{code: 'JP', name: 'Japan'},
		{code: 'JE', name: 'Jersey'},
		{code: 'JO', name: 'Jordan'},
		{code: 'KZ', name: 'Kazakhstan'},
		{code: 'KE', name: 'Kenya'},
		{code: 'KI', name: 'Kiribati'},
		{code: 'KP', name: 'Korea (Democratic People\'s Republic of)'},
		{code: 'KR', name: 'Korea (Republic of)'},
		{code: 'KW', name: 'Kuwait'},
		{code: 'KG', name: 'Kyrgyzstan'},
		{code: 'LA', name: 'Lao People\'s Democratic Republic'},
		{code: 'LV', name: 'Latvia'},
		{code: 'LB', name: 'Lebanon'},
		{code: 'LS', name: 'Lesotho'},
		{code: 'LR', name: 'Liberia'},
		{code: 'LY', name: 'Libya'},
		{code: 'LI', name: 'Liechtenstein'},
		{code: 'LT', name: 'Lithuania'},
		{code: 'LU', name: 'Luxembourg'},
		{code: 'MO', name: 'Macao'},
		{code: 'MK', name: 'Macedonia (the former Yugoslav Republic of)'},
		{code: 'MG', name: 'Madagascar'},
		{code: 'MW', name: 'Malawi'},
		{code: 'MY', name: 'Malaysia'},
		{code: 'MV', name: 'Maldives'},
		{code: 'ML', name: 'Mali'},
		{code: 'MT', name: 'Malta'},
		{code: 'MH', name: 'Marshall Islands'},
		{code: 'MQ', name: 'Martinique'},
		{code: 'MR', name: 'Mauritania'},
		{code: 'MU', name: 'Mauritius'},
		{code: 'YT', name: 'Mayotte'},
		{code: 'MX', name: 'Mexico'},
		{code: 'FM', name: 'Micronesia (Federated States of)'},
		{code: 'MD', name: 'Moldova (Republic of)'},
		{code: 'MC', name: 'Monaco'},
		{code: 'MN', name: 'Mongolia'},
		{code: 'ME', name: 'Montenegro'},
		{code: 'MS', name: 'Montserrat'},
		{code: 'MA', name: 'Morocco'},
		{code: 'MZ', name: 'Mozambique'},
		{code: 'MM', name: 'Myanmar'},
		{code: 'NA', name: 'Namibia'},
		{code: 'NR', name: 'Nauru'},
		{code: 'NP', name: 'Nepal'},
		{code: 'NL', name: 'Netherlands'},
		{code: 'NC', name: 'New Caledonia'},
		{code: 'NZ', name: 'New Zealand'},
		{code: 'NI', name: 'Nicaragua'},
		{code: 'NE', name: 'Niger'},
		{code: 'NG', name: 'Nigeria'},
		{code: 'NU', name: 'Niue'},
		{code: 'NF', name: 'Norfolk Island'},
		{code: 'MP', name: 'Northern Mariana Islands'},
		{code: 'NO', name: 'Norway'},
		{code: 'OM', name: 'Oman'},
		{code: 'PK', name: 'Pakistan'},
		{code: 'PW', name: 'Palau'},
		{code: 'PS', name: 'Palestine, State of'},
		{code: 'PA', name: 'Panama'},
		{code: 'PG', name: 'Papua New Guinea'},
		{code: 'PY', name: 'Paraguay'},
		{code: 'PE', name: 'Peru'},
		{code: 'PH', name: 'Philippines'},
		{code: 'PN', name: 'Pitcairn'},
		{code: 'PL', name: 'Poland'},
		{code: 'PT', name: 'Portugal'},
		{code: 'PR', name: 'Puerto Rico'},
		{code: 'QA', name: 'Qatar'},
		{code: 'RE', name: 'Réunion'},
		{code: 'RO', name: 'Romania'},
		{code: 'RU', name: 'Russian Federation'},
		{code: 'RW', name: 'Rwanda'},
		{code: 'BL', name: 'Saint Barthélemy'},
		{code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha'},
		{code: 'KN', name: 'Saint Kitts and Nevis'},
		{code: 'LC', name: 'Saint Lucia'},
		{code: 'MF', name: 'Saint Martin (French part)'},
		{code: 'PM', name: 'Saint Pierre and Miquelon'},
		{code: 'VC', name: 'Saint Vincent and the Grenadines'},
		{code: 'WS', name: 'Samoa'},
		{code: 'SM', name: 'San Marino'},
		{code: 'ST', name: 'Sao Tome and Principe'},
		{code: 'SA', name: 'Saudi Arabia'},
		{code: 'SN', name: 'Senegal'},
		{code: 'RS', name: 'Serbia'},
		{code: 'SC', name: 'Seychelles'},
		{code: 'SL', name: 'Sierra Leone'},
		{code: 'SG', name: 'Singapore'},
		{code: 'SX', name: 'Sint Maarten (Dutch part)'},
		{code: 'SK', name: 'Slovakia'},
		{code: 'SI', name: 'Slovenia'},
		{code: 'SB', name: 'Solomon Islands'},
		{code: 'SO', name: 'Somalia'},
		{code: 'ZA', name: 'South Africa'},
		{code: 'GS', name: 'South Georgia and the South Sandwich Islands'},
		{code: 'SS', name: 'South Sudan'},
		{code: 'ES', name: 'Spain'},
		{code: 'LK', name: 'Sri Lanka'},
		{code: 'SD', name: 'Sudan'},
		{code: 'SR', name: 'Suriname'},
		{code: 'SJ', name: 'Svalbard and Jan Mayen'},
		{code: 'SZ', name: 'Swaziland'},
		{code: 'SE', name: 'Sweden'},
		{code: 'CH', name: 'Switzerland'},
		{code: 'SY', name: 'Syrian Arab Republic'},
		{code: 'TW', name: 'Taiwan, Province of China'},
		{code: 'TJ', name: 'Tajikistan'},
		{code: 'TZ', name: 'Tanzania, United Republic of'},
		{code: 'TH', name: 'Thailand'},
		{code: 'TL', name: 'Timor-Leste'},
		{code: 'TG', name: 'Togo'},
		{code: 'TK', name: 'Tokelau'},
		{code: 'TO', name: 'Tonga'},
		{code: 'TT', name: 'Trinidad and Tobago'},
		{code: 'TN', name: 'Tunisia'},
		{code: 'TR', name: 'Turkey'},
		{code: 'TM', name: 'Turkmenistan'},
		{code: 'TC', name: 'Turks and Caicos Islands'},
		{code: 'TV', name: 'Tuvalu'},
		{code: 'UG', name: 'Uganda'},
		{code: 'UA', name: 'Ukraine'},
		{code: 'AE', name: 'United Arab Emirates'},
		{code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland'},
		{code: 'US', name: 'United States of America'},
		{code: 'UM', name: 'United States Minor Outlying Islands'},
		{code: 'UY', name: 'Uruguay'},
		{code: 'UZ', name: 'Uzbekistan'},
		{code: 'VU', name: 'Vanuatu'},
		{code: 'VE', name: 'Venezuela (Bolivarian Republic of)'},
		{code: 'VN', name: 'Vietnam'},
		{code: 'VG', name: 'Virgin Islands (British)'},
		{code: 'VI', name: 'Virgin Islands (U.S.)'},
		{code: 'WF', name: 'Wallis and Futuna'},
		{code: 'EH', name: 'Western Sahara'},
		{code: 'YE', name: 'Yemen'},
		{code: 'ZM', name: 'Zambia'},
		{code: 'ZW', name: 'Zimbabwe'}
	];

code: 'AF'
code: 'AX'
code: 'AL'
code: 'DZ'
code: 'AS'
code: 'AD'
code: 'AO'
code: 'AI'
code: 'AQ'
code: 'AG'
code: 'AR'
code: 'AM'
code: 'AW'
code: 'AU'
code: 'AT'
code: 'AZ'
code: 'BS'
code: 'BH'
code: 'BD'
code: 'BB'
code: 'BY'
code: 'BE'
code: 'BZ'
code: 'BJ'
code: 'BM'
code: 'BT'
code: 'BO'
code: 'BQ'
code: 'BA'
code: 'BW'
code: 'BV'
code: 'BR'
code: 'IO'
code: 'BN'
code: 'BG'
code: 'BF'
code: 'BI'
code: 'CV'
code: 'KH'
code: 'CM'
code: 'CA'
code: 'KY'
code: 'CF'
code: 'TD'
code: 'CL'
code: 'CN'
code: 'CX'
code: 'CC'
code: 'CO'
code: 'KM'
code: 'CG'
code: 'CD'
code: 'CK'
code: 'CR'
code: 'CI'
code: 'HR'
code: 'CU'
code: 'CW'
code: 'CY'
code: 'CZ'
code: 'DK'
code: 'DJ'
code: 'DM'
code: 'DO'
code: 'EC'
code: 'EG'
code: 'SV'
code: 'GQ'
code: 'ER'
code: 'EE'
code: 'ET'
code: 'FK'
code: 'FO'
code: 'FJ'
code: 'FI'
code: 'FR'
code: 'GF'
code: 'PF'
code: 'TF'
code: 'GA'
code: 'GM'
code: 'GE'
code: 'DE'
code: 'GH'
code: 'GI'
code: 'GR'
code: 'GL'
code: 'GD'
code: 'GP'
code: 'GU'
code: 'GT'
code: 'GG'
code: 'GN'
code: 'GW'
code: 'GY'
code: 'HT'
code: 'HM'
code: 'VA'
code: 'HN'
code: 'HK'
code: 'HU'
code: 'IS'
code: 'IN'
code: 'ID'
code: 'IR'
code: 'IQ'
code: 'IE'
code: 'IM'
code: 'IL'
code: 'IT'
code: 'JM'
code: 'JP'
code: 'JE'
code: 'JO'
code: 'KZ'
code: 'KE'
code: 'KI'
code: 'KP'
code: 'KR'
code: 'KW'
code: 'KG'
code: 'LA'
code: 'LV'
code: 'LB'
code: 'LS'
code: 'LR'
code: 'LY'
code: 'LI'
code: 'LT'
code: 'LU'
code: 'MO'
code: 'MK'
code: 'MG'
code: 'MW'
code: 'MY'
code: 'MV'
code: 'ML'
code: 'MT'
code: 'MH'
code: 'MQ'
code: 'MR'
code: 'MU'
code: 'YT'
code: 'MX'
code: 'FM'
code: 'MD'
code: 'MC'
code: 'MN'
code: 'ME'
code: 'MS'
code: 'MA'
code: 'MZ'
code: 'MM'
code: 'NA'
code: 'NR'
code: 'NP'
code: 'NL'
code: 'NC'
code: 'NZ'
code: 'NI'
code: 'NE'
code: 'NG'
code: 'NU'
code: 'NF'
code: 'MP'
code: 'NO'
code: 'OM'
code: 'PK'
code: 'PW'
code: 'PS'
code: 'PA'
code: 'PG'
code: 'PY'
code: 'PE'
code: 'PH'
code: 'PN'
code: 'PL'
code: 'PT'
code: 'PR'
code: 'QA'
code: 'RE'
code: 'RO'
code: 'RU'
code: 'RW'
code: 'BL'
code: 'SH'
code: 'KN'
code: 'LC'
code: 'MF'
code: 'PM'
code: 'VC'
code: 'WS'
code: 'SM'
code: 'ST'
code: 'SA'
code: 'SN'
code: 'RS'
code: 'SC'
code: 'SL'
code: 'SG'
code: 'SX'
code: 'SK'
code: 'SI'
code: 'SB'
code: 'SO'
code: 'ZA'
code: 'GS'
code: 'SS'
code: 'ES'
code: 'LK'
code: 'SD'
code: 'SR'
code: 'SJ'
code: 'SZ'
code: 'SE'
code: 'CH'
code: 'SY'
code: 'TW'
code: 'TJ'
code: 'TZ'
code: 'TH'
code: 'TL'
code: 'TG'
code: 'TK'
code: 'TO'
code: 'TT'
code: 'TN'
code: 'TR'
code: 'TM'
code: 'TC'
code: 'TV'
code: 'UG'
code: 'UA'
code: 'AE'
code: 'GB'
code: 'US'
code: 'UM'
code: 'UY'
code: 'UZ'
code: 'VU'
code: 'VE'
code: 'VN'
code: 'VG'
code: 'VI'
code: 'WF'
code: 'EH'
code: 'YE'
code: 'ZM'
code: 'ZW'
'Afghanistan'
'Åland Islands'
'Albania'
'Algeria'
'American Samoa'
'Andorra'
'Angola'
'Anguilla'
'Antarctica'
'Antigua and Barbuda'
'Argentina'
'Armenia'
'Aruba'
'Australia'
'Austria'
'Azerbaijan'
'Bahamas'
'Bahrain'
'Bangladesh'
'Barbados'
'Belarus'
'Belgium'
'Belize'
'Benin'
'Bermuda'
'Bhutan'
'Bolivia (Plurinational State of)'
'Bonaire, Sint Eustatius and Saba'
'Bosnia and Herzegovina'
'Botswana'
'Bouvet Island'
'Brazil'
'British Indian Ocean Territory'
'Brunei Darussalam'
'Bulgaria'
'Burkina Faso'
'Burundi'
'Cabo Verde'
'Cambodia'
'Cameroon'
'Canada'
'Cayman Islands'
'Central African Republic'
'Chad'
'Chile'
'China'
'Christmas Island'
'Cocos (Keeling) Islands'
'Colombia'
'Comoros'
'Congo'
'Congo (Democratic Republic of the)'
'Cook Islands'
'Costa Rica'
'Côte d\'Ivoire'
'Croatia'
'Cuba'
'Curaçao'
'Cyprus'
'Czech Republic'
'Denmark'
'Djibouti'
'Dominica'
'Dominican Republic'
'Ecuador'
'Egypt'
'El Salvador'
'Equatorial Guinea'
'Eritrea'
'Estonia'
'Ethiopia'
'Falkland Islands (Malvinas)'
'Faroe Islands'
'Fiji (Republic of)'
'Finland'
'France'
'French Guiana'
'French Polynesia'
'French Southern Territories'
'Gabon'
'Gambia'
'Georgia'
'Germany'
'Ghana'
'Gibraltar'
'Greece'
'Greenland'
'Grenada'
'Guadeloupe'
'Guam'
'Guatemala'
'Guernsey'
'Guinea'
'Guinea-Bissau'
'Guyana'
'Haiti'
'Heard Island and McDonald Islands'
'Holy See'
'Honduras'
'Hong Kong'
'Hungary'
'Iceland'
'India'
'Indonesia'
'Iran (Islamic Republic of)'
'Iraq'
'Ireland'
'Isle of Man'
'Israel'
'Italy'
'Jamaica'
'Japan'
'Jersey'
'Jordan'
'Kazakhstan'
'Kenya'
'Kiribati'
'Korea (Democratic People\'s Republic of)'
'Korea (Republic of)'
'Kuwait'
'Kyrgyzstan'
'Lao People\'s Democratic Republic'
'Latvia'
'Lebanon'
'Lesotho'
'Liberia'
'Libya'
'Liechtenstein'
'Lithuania'
'Luxembourg'
'Macao'
'Macedonia (the former Yugoslav Republic of)'
'Madagascar'
'Malawi'
'Malaysia'
'Maldives'
'Mali'
'Malta'
'Marshall Islands'
'Martinique'
'Mauritania'
'Mauritius'
'Mayotte'
'Mexico'
'Micronesia (Federated States of)'
'Moldova (Republic of)'
'Monaco'
'Mongolia'
'Montenegro'
'Montserrat'
'Morocco'
'Mozambique'
'Myanmar'
'Namibia'
'Nauru'
'Nepal'
'Netherlands'
'New Caledonia'
'New Zealand'
'Nicaragua'
'Niger'
'Nigeria'
'Niue'
'Norfolk Island'
'Northern Mariana Islands'
'Norway'
'Oman'
'Pakistan'
'Palau'
'Palestine, State of'
'Panama'
'Papua New Guinea'
'Paraguay'
'Peru'
'Philippines'
'Pitcairn'
'Poland'
'Portugal'
'Puerto Rico'
'Qatar'
'Réunion'
'Romania'
'Russian Federation'
'Rwanda'
'Saint Barthélemy'
'Saint Helena, Ascension and Tristan da Cunha'
'Saint Kitts and Nevis'
'Saint Lucia'
'Saint Martin (French part)'
'Saint Pierre and Miquelon'
'Saint Vincent and the Grenadines'
'Samoa'
'San Marino'
'Sao Tome and Principe'
'Saudi Arabia'
'Senegal'
'Serbia'
'Seychelles'
'Sierra Leone'
'Singapore'
'Sint Maarten (Dutch part)'
'Slovakia'
'Slovenia'
'Solomon Islands'
'Somalia'
'South Africa'
'South Georgia and the South Sandwich Islands'
'South Sudan'
'Spain'
'Sri Lanka'
'Sudan'
'Suriname'
'Svalbard and Jan Mayen'
'Swaziland'
'Sweden'
'Switzerland'
'Syrian Arab Republic'
'Taiwan, Province of China'
'Tajikistan'
'Tanzania, United Republic of'
'Thailand'
'Timor-Leste'
'Togo'
'Tokelau'
'Tonga'
'Trinidad and Tobago'
'Tunisia'
'Turkey'
'Turkmenistan'
'Turks and Caicos Islands'
'Tuvalu'
'Uganda'
'Ukraine'
'United Arab Emirates'
'United Kingdom of Great Britain and Northern Ireland'
'United States of America'
'United States Minor Outlying Islands'
'Uruguay'
'Uzbekistan'
'Vanuatu'
'Venezuela (Bolivarian Republic of)'
'Vietnam'
'Virgin Islands (British)'
'Virgin Islands (U.S.)'
'Wallis and Futuna'
'Western Sahara'
'Yemen'
'Zambia'
'Zimbabwe