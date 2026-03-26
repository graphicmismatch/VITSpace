const VITSPACE_TRANSLATIONS = {
    en: {
        'page.home.title': 'VITSpace',
        'page.tools.title': 'VITSpace Tools',
        'page.data.title': 'VITSpace Data',
        'page.links.title': 'VITSpace Sources',
        'page.orbital.title': 'VITSpace Orbital Tools',
        'page.escape.title': 'VITSpace Escape Velocity Tools',
        'page.signal.title': 'VITSpace Signal Delay Tools',
        'page.rocket.title': 'VITSpace Rocket Equation Tools',
        'page.stellar.title': 'VITSpace Stellar Physics Tools',
        'page.relativity.title': 'VITSpace Relativity Tools',
        'page.apod.title': 'VITSpace Astronomy Picture Feed',
        'page.neo.title': 'VITSpace Near-Earth Objects Feed',
        'page.gibs.title': 'VITSpace GIBS Earth Feed',
        'page.epic.title': 'VITSpace EPIC Earth Feed',

        'nav.toolsPortal': 'TOOLS_PORTAL',
        'nav.dataPortal': 'DATA_PORTAL',
        'nav.sources': 'SOURCES',
        'nav.langEnglish': 'EN',
        'nav.langMarathi': 'मराठी',

        'footer.label': 'FOOTER',
        'footer.copyright': '> Copyright 2026 - Rayan Madan',

        'common.calculate': 'Calculate',
        'common.refreshFeed': 'Refresh Feed',
        'common.statusPrefix': 'Status:',
        'common.previous': 'Previous',
        'common.next': 'Next',

        'home.missionBrief': 'MISSION_BRIEF',
        'home.hero': 'VITSpace is a compact mission-control style portal for orbital calculators, propulsion tools, and live astronomy data streams.',
        'home.liveStatus': 'LIVE_STATUS',
        'home.toolPages': 'Tool Pages',
        'home.dataFeeds': 'Data Feeds',
        'home.quickAccess': 'QUICK_ACCESS',
        'home.orbitalLink': 'Orbital Calculation Tools',
        'home.escapeLink': 'Escape Velocity Tools',
        'home.signalLink': 'Signal Delay Tools',
        'home.rocketLink': 'Rocket Equation Tools',
        'home.stellarLink': 'Stellar Physics Tools',
        'home.relativityLink': 'Relativity Tools',
        'home.dataPortal': 'DATA_PORTAL',
        'home.openDataDirectory': 'Open Data Directory',
        'home.apodLink': 'Astronomy Picture Feed',
        'home.neoLink': 'Near-Earth Objects Feed',
        'home.gibsLink': 'GIBS Earth Feed',
        'home.epicLink': 'EPIC Earth Feed',

        'tools.heading': 'TOOLS_DIRECTORY',
        'tools.hero': 'Operational calculators for orbital motion, propulsion planning, communication timing, stellar physics, and relativity.',
        'tools.orbital.label': 'ORBITAL_MECHANICS',
        'tools.orbital.desc': 'Circular orbit speed and orbital period estimators.',
        'tools.gravity.label': 'GRAVITY_TOOLS',
        'tools.gravity.desc': 'Escape velocity and surface gravity calculators.',
        'tools.communication.label': 'COMMUNICATION_TOOLS',
        'tools.communication.desc': 'One-way and round-trip deep-space delay estimates.',
        'tools.propulsion.label': 'PROPULSION_TOOLS',
        'tools.propulsion.desc': 'Delta-v and propellant fraction calculators.',
        'tools.stellar.label': 'STELLAR_PHYSICS',
        'tools.stellar.desc': 'Blackbody peak wavelength, stellar luminosity, and received flux estimators.',
        'tools.relativity.label': 'RELATIVITY_TOOLS',
        'tools.relativity.desc': 'Schwarzschild radius and relativistic time-dilation calculators.',

        'data.heading': 'DATA_DIRECTORY',
        'data.hero': 'Live pages that fetch free space data and render it directly inside the portal.',
        'data.imageFeed': 'IMAGE_FEED',
        'data.imageFeedDesc': 'Loads NASA\'s Astronomy Picture of the Day with title, media, and explanation.',
        'data.objectFeed': 'OBJECT_FEED',
        'data.objectFeedDesc': 'Fetches close-approach objects and summarizes hazard state, speed, and miss distance.',
        'data.earthImagery': 'EARTH_IMAGERY',
        'data.earthImageryDesc': 'Loads daily global true-color Earth imagery from the supported GIBS service.',
        'data.earthObservation': 'EARTH_OBSERVATION',
        'data.earthObservationDesc': 'Shows the latest EPIC full-disk Earth frames and centroid coordinates.',

        'links.heading': 'SOURCE_DIRECTORY',
        'links.hero': 'Reference links for formulas and the live data feeds used in VITSpace.',
        'links.dataApis': 'DATA_APIS',
        'links.toolFormulas': 'TOOL_FORMULAS',
        'links.nasaOpenApis': 'NASA Open APIs',
        'links.nasaAuth': 'NASA API Authentication Notes',
        'links.gibsApi': 'Earthdata GIBS API',
        'links.epicApi': 'EPIC API Reference',
        'links.formula1': 'Circular orbit speed and period equations',
        'links.formula2': 'Escape velocity and surface gravity equations',
        'links.formula3': 'Signal delay and Tsiolkovsky rocket equation',

        'orbital.heading': 'CIRCULAR_ORBITS',
        'orbital.hero': 'Baseline orbital mechanics tools for circular trajectories around a planetary body.',
        'orbital.speed.label': 'SATELLITE_ORBIT_SPEED_CALCULATOR',
        'orbital.period.label': 'SATELLITE_ORBITAL_PERIOD_CALCULATOR',
        'orbital.orbitHeight': 'Orbit Height:',
        'orbital.gravitationalConstant': 'Gravitational Constant:',
        'orbital.planetaryMass': 'Planetary Mass:',
        'orbital.planetaryRadius': 'Planetary Radius:',
        'orbital.speedResult': 'Orbital Speed:',
        'orbital.periodResult': 'Orbital Period:',

        'escape.heading': 'GRAVITY_TOOLS',
        'escape.hero': 'Estimate how difficult it is to leave a planetary body and how strong its surface pull is.',
        'escape.escapeVelocityLabel': 'ESCAPE_VELOCITY_CALCULATOR',
        'escape.surfaceGravityLabel': 'SURFACE_GRAVITY_CALCULATOR',
        'escape.distanceFromCenter': 'Distance From Center:',
        'escape.escapeVelocityResult': 'Escape Velocity:',
        'escape.surfaceGravityResult': 'Surface Gravity:',

        'signal.heading': 'COMMUNICATION_LATENCY',
        'signal.hero': 'Calculate how long electromagnetic signals take to travel across mission distances.',
        'signal.oneWayLabel': 'ONE_WAY_SIGNAL_DELAY',
        'signal.roundTripLabel': 'ROUND_TRIP_SIGNAL_DELAY',
        'signal.distance': 'Distance:',
        'signal.signalSpeed': 'Signal Speed:',
        'signal.oneWayResult': 'One-Way Delay:',
        'signal.roundTripResult': 'Round-Trip Delay:',
        'signal.secondUnit': 's',
        'signal.minuteUnit': 'min',
        'signal.hourUnit': 'hr',
        'signal.dayUnit': 'days',

        'rocket.heading': 'PROPULSION_ANALYSIS',
        'rocket.hero': 'Use basic rocket-equation relationships for quick mission planning checks.',
        'rocket.deltaVLabel': 'DELTA_V_CALCULATOR',
        'rocket.propellantFractionLabel': 'PROPELLANT_FRACTION_CALCULATOR',
        'rocket.specificImpulse': 'Specific Impulse:',
        'rocket.standardGravity': 'Standard Gravity:',
        'rocket.initialMass': 'Initial Mass:',
        'rocket.finalMass': 'Final Mass:',
        'rocket.wetMass': 'Wet Mass:',
        'rocket.dryMass': 'Dry Mass:',
        'rocket.deltaVResult': 'Delta-v:',
        'rocket.propellantFractionResult': 'Propellant Fraction:',
        'rocket.deltaVError': 'Delta-v: Final mass must be smaller than initial mass.',
        'rocket.propellantFractionError': 'Propellant Fraction: Dry mass must be smaller than wet mass.',
        'rocket.propellantMass': 'Propellant Mass',

        'stellar.heading': 'STELLAR_PHYSICS',
        'stellar.hero': 'Quick astrophysics checks for blackbody emission, stellar luminosity, and received flux at distance.',
        'stellar.wienLabel': 'WIEN_PEAK_WAVELENGTH',
        'stellar.luminosityLabel': 'STELLAR_LUMINOSITY',
        'stellar.fluxLabel': 'RADIATIVE_FLUX_AT_DISTANCE',
        'stellar.temperature': 'Temperature:',
        'stellar.stellarRadius': 'Stellar Radius:',
        'stellar.effectiveTemperature': 'Effective Temperature:',
        'stellar.sourceLuminosity': 'Source Luminosity:',
        'stellar.peakResult': 'Peak Wavelength:',
        'stellar.luminosityResult': 'Luminosity:',
        'stellar.fluxResult': 'Flux:',
        'stellar.wienError': 'Peak Wavelength: Temperature must be greater than zero.',
        'stellar.luminosityError': 'Luminosity: Radius and temperature must be greater than zero.',
        'stellar.fluxError': 'Flux: Luminosity and distance must be greater than zero.',

        'relativity.heading': 'RELATIVITY_ANALYSIS',
        'relativity.hero': 'Compact calculators for relativistic motion and strong-gravity length and time scales.',
        'relativity.schwarzschildLabel': 'SCHWARZSCHILD_RADIUS',
        'relativity.specialLabel': 'SPECIAL_RELATIVITY_TIME_DILATION',
        'relativity.gravitationalLabel': 'GRAVITATIONAL_TIME_DILATION',
        'relativity.mass': 'Mass:',
        'relativity.velocity': 'Velocity:',
        'relativity.properTime': 'Proper Time:',
        'relativity.observerRadius': 'Observer Radius:',
        'relativity.coordinateTime': 'Coordinate Time:',
        'relativity.schwarzschildResult': 'Schwarzschild Radius:',
        'relativity.specialResult': 'Dilated Time:',
        'relativity.gravitationalResult': 'Local Proper Time:',
        'relativity.schwarzschildError': 'Schwarzschild Radius: Mass and constants must be greater than zero.',
        'relativity.specialError': 'Dilated Time: Velocity must be between 0 and 1 c, and proper time must be greater than zero.',
        'relativity.gravitationalError': 'Local Proper Time: All values must be greater than zero.',
        'relativity.gravitationalRadiusError': 'Local Proper Time: Observer radius must be outside the Schwarzschild radius.',
        'relativity.lorentzFactor': 'Lorentz Factor',
        'relativity.clockRate': 'Clock Rate',

        'apod.heading': 'ASTRONOMY_PICTURE_OF_THE_DAY',
        'apod.hero': 'Live image and description feed pulled directly from NASA.',
        'apod.metadata': 'FEED_METADATA',
        'apod.title': 'Title',
        'apod.date': 'Date',
        'apod.credit': 'Credit',
        'apod.statusLoading': 'Contacting API...',
        'apod.media': 'MEDIA_STREAM',
        'apod.awaitingMedia': 'Awaiting media stream...',
        'apod.explanationLabel': 'MISSION_EXPLANATION',
        'apod.loadingDescription': 'Loading description...',
        'apod.fetching': 'Fetching latest picture...',
        'apod.feedOnline': 'Feed online',
        'apod.feedUnavailable': 'FEED_UNAVAILABLE',
        'apod.descriptionUnavailable': 'The Astronomy Picture feed could not be loaded at this time.',
        'apod.mediaUnavailable': 'Media stream unavailable.',
        'apod.requestFailed': 'API request failed',
        'apod.publicDomain': 'NASA / Public Domain',

        'gibs.heading': 'GIBS_EARTH_IMAGERY',
        'gibs.hero': 'Daily Earth imagery pulled from NASA Earthdata GIBS using the MODIS Terra true-color layer.',
        'gibs.summary': 'FEED_SUMMARY',
        'gibs.layer': 'Layer',
        'gibs.imageDate': 'Image Date',
        'gibs.projection': 'Projection',
        'gibs.coverage': 'Coverage',
        'gibs.statusLoading': 'Preparing imagery request...',
        'gibs.globalFrame': 'GLOBAL_FRAME',
        'gibs.awaitingMedia': 'Awaiting Earth imagery...',
        'gibs.layerValue': 'MODIS_TERRA_TRUE_COLOR',
        'gibs.coverageValue': 'GLOBAL',
        'gibs.loadingImagery': 'Loading imagery...',
        'gibs.feedOnline': 'Feed online',
        'gibs.unavailable': 'Earth imagery unavailable for the selected date.',
        'gibs.requestFailed': 'Image request failed',
        'gibs.alt': 'NASA GIBS Earth imagery for {date}',

        'epic.heading': 'EPIC_EARTH_IMAGERY',
        'epic.hero': 'Latest full-disk Earth image metadata from NASA\'s EPIC instrument.',
        'epic.summary': 'FEED_SUMMARY',
        'epic.frameDate': 'Frame Date',
        'epic.framesLoaded': 'Frames Loaded',
        'epic.centroidLat': 'Centroid Lat',
        'epic.centroidLon': 'Centroid Lon',
        'epic.statusLoading': 'Contacting API...',
        'epic.frameLog': 'FRAME_LOG',
        'epic.loadingFeed': 'Loading EPIC imagery...',
        'epic.fetching': 'Fetching latest Earth frames...',
        'epic.feedOnline': 'Feed online',
        'epic.feedUnavailable': 'FEED_UNAVAILABLE',
        'epic.noData': 'NO_DATA',
        'epic.unavailable': 'EPIC imagery feed unavailable.',
        'epic.requestFailed': 'API request failed',
        'epic.noFrames': 'No EPIC frames were returned.',
        'epic.imageUnavailable': 'Frame image unavailable.',
        'epic.identifier': 'Identifier',
        'epic.time': 'Time',
        'epic.centroid': 'Centroid',

        'neo.heading': 'NEAR_EARTH_OBJECTS',
        'neo.hero': 'Live close-approach objects for the current three-day window.',
        'neo.summary': 'FEED_SUMMARY',
        'neo.window': 'Window',
        'neo.objectsLoaded': 'Objects Loaded',
        'neo.potentialHazards': 'Potential Hazards',
        'neo.statusLoading': 'Contacting API...',
        'neo.approachLog': 'APPROACH_LOG',
        'neo.previous': 'Previous',
        'neo.next': 'Next',
        'neo.pageInfo': 'Page {current} of {total}',
        'neo.emptyPageInfo': 'Page 0 of 0',
        'neo.loadingFeed': 'Loading close-approach objects...',
        'neo.fetching': 'Fetching close-approach objects...',
        'neo.feedOnline': 'Feed online',
        'neo.unavailable': 'Near-Earth object feed unavailable.',
        'neo.requestFailed': 'API request failed',
        'neo.noData': 'No close-approach objects were returned for this window.',
        'neo.windowRange': '{start} to {end}',
        'neo.closeApproach': 'Close Approach',
        'neo.velocity': 'Velocity',
        'neo.missDistance': 'Miss Distance',
        'neo.estimatedDiameter': 'Estimated Diameter',
        'neo.rangeBetween': '{min} km to {max} km',
        'neo.hazardStatus': 'Hazard Status',
        'neo.hazardPotential': 'POTENTIAL',
        'neo.hazardLow': 'LOW'
    },
    mr: {
        'page.home.title': 'VITSpace',
        'page.tools.title': 'VITSpace साधने',
        'page.data.title': 'VITSpace डेटा',
        'page.links.title': 'VITSpace स्रोत',
        'page.orbital.title': 'VITSpace कक्षीय साधने',
        'page.escape.title': 'VITSpace मुक्ती वेग साधने',
        'page.signal.title': 'VITSpace सिग्नल विलंब साधने',
        'page.rocket.title': 'VITSpace रॉकेट समीकरण साधने',
        'page.stellar.title': 'VITSpace तारकीय भौतिकी साधने',
        'page.relativity.title': 'VITSpace सापेक्षता साधने',
        'page.apod.title': 'VITSpace खगोलचित्र फीड',
        'page.neo.title': 'VITSpace पृथ्वीजवळील वस्तू फीड',
        'page.gibs.title': 'VITSpace GIBS पृथ्वी फीड',
        'page.epic.title': 'VITSpace EPIC पृथ्वी फीड',

        'nav.toolsPortal': 'साधन_पोर्टल',
        'nav.dataPortal': 'डेटा_पोर्टल',
        'nav.sources': 'स्रोत',
        'nav.langEnglish': 'EN',
        'nav.langMarathi': 'मराठी',

        'footer.label': 'तळटीप',
        'footer.copyright': '> कॉपीराइट 2026 - Rayan Madan',

        'common.calculate': 'गणना करा',
        'common.refreshFeed': 'फीड रीफ्रेश करा',
        'common.statusPrefix': 'स्थिती:',
        'common.previous': 'मागील',
        'common.next': 'पुढील',

        'home.missionBrief': 'मिशन_सारांश',
        'home.hero': 'VITSpace हे कक्षीय गणक, प्रणोदन साधने आणि थेट खगोलशास्त्रीय डेटा प्रवाहांसाठी तयार केलेले संक्षिप्त मिशन-कंट्रोल शैलीचे पोर्टल आहे.',
        'home.liveStatus': 'थेट_स्थिती',
        'home.toolPages': 'साधन पृष्ठे',
        'home.dataFeeds': 'डेटा फीड्स',
        'home.quickAccess': 'द्रुत_प्रवेश',
        'home.orbitalLink': 'कक्षीय गणना साधने',
        'home.escapeLink': 'मुक्ती वेग साधने',
        'home.signalLink': 'सिग्नल विलंब साधने',
        'home.rocketLink': 'रॉकेट समीकरण साधने',
        'home.stellarLink': 'तारकीय भौतिकी साधने',
        'home.relativityLink': 'सापेक्षता साधने',
        'home.dataPortal': 'डेटा_पोर्टल',
        'home.openDataDirectory': 'मुक्त डेटा निर्देशिका',
        'home.apodLink': 'खगोलचित्र फीड',
        'home.neoLink': 'पृथ्वीजवळील वस्तू फीड',
        'home.gibsLink': 'GIBS पृथ्वी फीड',
        'home.epicLink': 'EPIC पृथ्वी फीड',

        'tools.heading': 'साधन_निर्देशिका',
        'tools.hero': 'कक्षीय गती, प्रणोदन नियोजन, संप्रेषण वेळ, तारकीय भौतिकी आणि सापेक्षता यांसाठी कार्यरत गणक.',
        'tools.orbital.label': 'कक्षीय_यांत्रिकी',
        'tools.orbital.desc': 'वर्तुळाकार कक्षेतील वेग आणि कक्षीय कालावधी मोजणी.',
        'tools.gravity.label': 'गुरुत्व_साधने',
        'tools.gravity.desc': 'मुक्ती वेग आणि पृष्ठीय गुरुत्व गणक.',
        'tools.communication.label': 'संप्रेषण_साधने',
        'tools.communication.desc': 'एकमार्गी आणि दुतर्फा गहन-अंतराळ विलंब अंदाज.',
        'tools.propulsion.label': 'प्रणोदन_साधने',
        'tools.propulsion.desc': 'डेल्टा-v आणि इंधन अंश गणक.',
        'tools.stellar.label': 'तारकीय_भौतिकी',
        'tools.stellar.desc': 'ब्लॅकबॉडी शिखर तरंगलांबी, तारकीय प्रकाशमानता आणि प्राप्त फ्लक्स मोजणी.',
        'tools.relativity.label': 'सापेक्षता_साधने',
        'tools.relativity.desc': 'श्वार्झशिल्ड त्रिज्या आणि सापेक्षतावादी काल-विस्तार गणक.',

        'data.heading': 'डेटा_निर्देशिका',
        'data.hero': 'मुक्त अवकाशीय डेटा आणून तो थेट पोर्टलमध्ये दाखवणारी थेट पृष्ठे.',
        'data.imageFeed': 'प्रतिमा_फीड',
        'data.imageFeedDesc': 'NASA चे दिवसाचे खगोलचित्र शीर्षक, माध्यम आणि स्पष्टीकरणासह लोड करते.',
        'data.objectFeed': 'वस्तू_फीड',
        'data.objectFeedDesc': 'जवळून जाणाऱ्या वस्तू आणते आणि धोका स्थिती, वेग आणि चुकलेले अंतर संक्षेपित करते.',
        'data.earthImagery': 'पृथ्वी_प्रतिमा',
        'data.earthImageryDesc': 'समर्थित GIBS सेवेतून दररोजची जागतिक खरी-रंग पृथ्वी प्रतिमा लोड करते.',
        'data.earthObservation': 'पृथ्वी_निरीक्षण',
        'data.earthObservationDesc': 'नवीनतम EPIC पूर्ण-डिस्क पृथ्वी फ्रेम्स आणि केंद्र निर्देशांक दाखवते.',

        'links.heading': 'स्रोत_निर्देशिका',
        'links.hero': 'VITSpace मध्ये वापरल्या जाणाऱ्या सूत्रे आणि थेट डेटा फीड्ससाठी संदर्भ दुवे.',
        'links.dataApis': 'डेटा_API',
        'links.toolFormulas': 'साधन_सूत्रे',
        'links.nasaOpenApis': 'NASA मुक्त API',
        'links.nasaAuth': 'NASA API प्रमाणीकरण नोंदी',
        'links.gibsApi': 'Earthdata GIBS API',
        'links.epicApi': 'EPIC API संदर्भ',
        'links.formula1': 'वर्तुळाकार कक्षीय वेग आणि कालावधीची समीकरणे',
        'links.formula2': 'मुक्ती वेग आणि पृष्ठीय गुरुत्वाची समीकरणे',
        'links.formula3': 'सिग्नल विलंब आणि त्सिऑल्कोव्हस्की रॉकेट समीकरण',

        'orbital.heading': 'वर्तुळाकार_कक्षा',
        'orbital.hero': 'ग्रहीय वस्तूभोवतीच्या वर्तुळाकार मार्गांसाठी मूलभूत कक्षीय यांत्रिकी साधने.',
        'orbital.speed.label': 'उपग्रह_कक्षीय_वेग_गणक',
        'orbital.period.label': 'उपग्रह_कक्षीय_कालावधी_गणक',
        'orbital.orbitHeight': 'कक्षा उंची:',
        'orbital.gravitationalConstant': 'गुरुत्व स्थिरांक:',
        'orbital.planetaryMass': 'ग्रहमान:',
        'orbital.planetaryRadius': 'ग्रह त्रिज्या:',
        'orbital.speedResult': 'कक्षीय वेग:',
        'orbital.periodResult': 'कक्षीय कालावधी:',

        'escape.heading': 'गुरुत्व_साधने',
        'escape.hero': 'एखाद्या ग्रहाकडून सुटणे किती कठीण आहे आणि त्याचे पृष्ठीय आकर्षण किती मजबूत आहे हे मोजा.',
        'escape.escapeVelocityLabel': 'मुक्ती_वेग_गणक',
        'escape.surfaceGravityLabel': 'पृष्ठीय_गुरुत्व_गणक',
        'escape.distanceFromCenter': 'केंद्रापासून अंतर:',
        'escape.escapeVelocityResult': 'मुक्ती वेग:',
        'escape.surfaceGravityResult': 'पृष्ठीय गुरुत्व:',

        'signal.heading': 'संप्रेषण_विलंब',
        'signal.hero': 'मोहीम अंतरांवर विद्युतचुंबकीय संकेत पोहोचायला किती वेळ लागतो ते मोजा.',
        'signal.oneWayLabel': 'एकमार्गी_सिग्नल_विलंब',
        'signal.roundTripLabel': 'दुतर्फा_सिग्नल_विलंब',
        'signal.distance': 'अंतर:',
        'signal.signalSpeed': 'सिग्नल वेग:',
        'signal.oneWayResult': 'एकमार्गी विलंब:',
        'signal.roundTripResult': 'दुतर्फा विलंब:',
        'signal.secondUnit': 'से',
        'signal.minuteUnit': 'मि',
        'signal.hourUnit': 'ता',
        'signal.dayUnit': 'दिवस',

        'rocket.heading': 'प्रणोदन_विश्लेषण',
        'rocket.hero': 'जलद मोहीम नियोजन तपासांसाठी मूलभूत रॉकेट-समीकरण संबंध वापरा.',
        'rocket.deltaVLabel': 'डेल्टा_V_गणक',
        'rocket.propellantFractionLabel': 'इंधन_अंश_गणक',
        'rocket.specificImpulse': 'विशिष्ट इम्पल्स:',
        'rocket.standardGravity': 'प्रमाणित गुरुत्व:',
        'rocket.initialMass': 'प्रारंभिक मान:',
        'rocket.finalMass': 'अंतिम मान:',
        'rocket.wetMass': 'एकूण मान:',
        'rocket.dryMass': 'शुष्क मान:',
        'rocket.deltaVResult': 'डेल्टा-v:',
        'rocket.propellantFractionResult': 'इंधन अंश:',
        'rocket.deltaVError': 'डेल्टा-v: अंतिम मान प्रारंभिक मानापेक्षा कमी असणे आवश्यक आहे.',
        'rocket.propellantFractionError': 'इंधन अंश: शुष्क मान एकूण मानापेक्षा कमी असणे आवश्यक आहे.',
        'rocket.propellantMass': 'इंधन मान',

        'stellar.heading': 'तारकीय_भौतिकी',
        'stellar.hero': 'ब्लॅकबॉडी उत्सर्जन, तारकीय प्रकाशमानता आणि अंतरावरील प्राप्त फ्लक्स यांसाठी जलद खगोलभौतिकीय तपास.',
        'stellar.wienLabel': 'वीन_शिखर_तरंगलांबी',
        'stellar.luminosityLabel': 'तारकीय_प्रकाशमानता',
        'stellar.fluxLabel': 'अंतरावरील_प्रसारी_फ्लक्स',
        'stellar.temperature': 'तापमान:',
        'stellar.stellarRadius': 'तारकीय त्रिज्या:',
        'stellar.effectiveTemperature': 'प्रभावी तापमान:',
        'stellar.sourceLuminosity': 'स्रोत प्रकाशमानता:',
        'stellar.peakResult': 'शिखर तरंगलांबी:',
        'stellar.luminosityResult': 'प्रकाशमानता:',
        'stellar.fluxResult': 'फ्लक्स:',
        'stellar.wienError': 'शिखर तरंगलांबी: तापमान शून्यापेक्षा मोठे असणे आवश्यक आहे.',
        'stellar.luminosityError': 'प्रकाशमानता: त्रिज्या आणि तापमान शून्यापेक्षा मोठे असणे आवश्यक आहे.',
        'stellar.fluxError': 'फ्लक्स: प्रकाशमानता आणि अंतर शून्यापेक्षा मोठे असणे आवश्यक आहे.',

        'relativity.heading': 'सापेक्षता_विश्लेषण',
        'relativity.hero': 'सापेक्ष गती आणि प्रबळ गुरुत्वातील लांबी व वेळ मोजण्यासाठी संक्षिप्त गणक.',
        'relativity.schwarzschildLabel': 'श्वार्झशिल्ड_त्रिज्या',
        'relativity.specialLabel': 'विशेष_सापेक्षता_काल_विस्तार',
        'relativity.gravitationalLabel': 'गुरुत्वीय_काल_विस्तार',
        'relativity.mass': 'मान:',
        'relativity.velocity': 'वेग:',
        'relativity.properTime': 'स्वकाल:',
        'relativity.observerRadius': 'निरीक्षक त्रिज्या:',
        'relativity.coordinateTime': 'समन्वय वेळ:',
        'relativity.schwarzschildResult': 'श्वार्झशिल्ड त्रिज्या:',
        'relativity.specialResult': 'विस्तारित वेळ:',
        'relativity.gravitationalResult': 'स्थानिक स्वकाल:',
        'relativity.schwarzschildError': 'श्वार्झशिल्ड त्रिज्या: मान आणि स्थिरांक शून्यापेक्षा मोठे असणे आवश्यक आहे.',
        'relativity.specialError': 'विस्तारित वेळ: वेग 0 आणि 1 c यांच्या दरम्यान असावा आणि स्वकाल शून्यापेक्षा मोठा असावा.',
        'relativity.gravitationalError': 'स्थानिक स्वकाल: सर्व मूल्ये शून्यापेक्षा मोठी असणे आवश्यक आहे.',
        'relativity.gravitationalRadiusError': 'स्थानिक स्वकाल: निरीक्षक त्रिज्या श्वार्झशिल्ड त्रिज्येबाहेर असणे आवश्यक आहे.',
        'relativity.lorentzFactor': 'लॉरेन्झ गुणांक',
        'relativity.clockRate': 'घड्याळ दर',

        'apod.heading': 'दिवसाचे_खगोलचित्र',
        'apod.hero': 'NASA कडून थेट आणलेले प्रतिमा आणि वर्णन फीड.',
        'apod.metadata': 'फीड_माहिती',
        'apod.title': 'शीर्षक',
        'apod.date': 'दिनांक',
        'apod.credit': 'श्रेय',
        'apod.statusLoading': 'API शी संपर्क साधत आहे...',
        'apod.media': 'माध्यम_प्रवाह',
        'apod.awaitingMedia': 'माध्यम प्रवाहाची प्रतीक्षा...',
        'apod.explanationLabel': 'मोहिम_स्पष्टीकरण',
        'apod.loadingDescription': 'वर्णन लोड होत आहे...',
        'apod.fetching': 'नवीनतम चित्र आणत आहे...',
        'apod.feedOnline': 'फीड सक्रिय',
        'apod.feedUnavailable': 'फीड उपलब्ध नाही',
        'apod.descriptionUnavailable': 'खगोलचित्र फीड सध्या लोड करता आला नाही.',
        'apod.mediaUnavailable': 'माध्यम प्रवाह उपलब्ध नाही.',
        'apod.requestFailed': 'API विनंती अयशस्वी',
        'apod.publicDomain': 'NASA / सार्वजनिक मालकी',

        'gibs.heading': 'GIBS_पृथ्वी_प्रतिमा',
        'gibs.hero': 'MODIS Terra खरे-रंग थर वापरून NASA Earthdata GIBS मधून आणलेली दैनंदिन पृथ्वी प्रतिमा.',
        'gibs.summary': 'फीड_सारांश',
        'gibs.layer': 'थर',
        'gibs.imageDate': 'प्रतिमा दिनांक',
        'gibs.projection': 'प्रक्षेपण',
        'gibs.coverage': 'आवाका',
        'gibs.statusLoading': 'प्रतिमा विनंती तयार करत आहे...',
        'gibs.globalFrame': 'जागतिक_फ्रेम',
        'gibs.awaitingMedia': 'पृथ्वी प्रतिमेची प्रतीक्षा...',
        'gibs.layerValue': 'MODIS_TERRA_TRUE_COLOR',
        'gibs.coverageValue': 'जागतिक',
        'gibs.loadingImagery': 'प्रतिमा लोड होत आहे...',
        'gibs.feedOnline': 'फीड सक्रिय',
        'gibs.unavailable': 'निवडलेल्या दिनांकासाठी पृथ्वी प्रतिमा उपलब्ध नाही.',
        'gibs.requestFailed': 'प्रतिमा विनंती अयशस्वी',
        'gibs.alt': '{date} साठी NASA GIBS पृथ्वी प्रतिमा',

        'epic.heading': 'EPIC_पृथ्वी_प्रतिमा',
        'epic.hero': 'NASA च्या EPIC उपकरणातील नवीनतम पूर्ण-डिस्क पृथ्वी प्रतिमांची माहिती.',
        'epic.summary': 'फीड_सारांश',
        'epic.frameDate': 'फ्रेम दिनांक',
        'epic.framesLoaded': 'लोड झालेल्या फ्रेम्स',
        'epic.centroidLat': 'केंद्र अक्षांश',
        'epic.centroidLon': 'केंद्र रेखांश',
        'epic.statusLoading': 'API शी संपर्क साधत आहे...',
        'epic.frameLog': 'फ्रेम_नोंद',
        'epic.loadingFeed': 'EPIC प्रतिमा लोड होत आहेत...',
        'epic.fetching': 'नवीनतम पृथ्वी फ्रेम्स आणत आहे...',
        'epic.feedOnline': 'फीड सक्रिय',
        'epic.feedUnavailable': 'फीड उपलब्ध नाही',
        'epic.noData': 'डेटा नाही',
        'epic.unavailable': 'EPIC प्रतिमा फीड उपलब्ध नाही.',
        'epic.requestFailed': 'API विनंती अयशस्वी',
        'epic.noFrames': 'EPIC कडून कोणतीही फ्रेम परत आली नाही.',
        'epic.imageUnavailable': 'फ्रेम प्रतिमा उपलब्ध नाही.',
        'epic.identifier': 'ओळख',
        'epic.time': 'वेळ',
        'epic.centroid': 'केंद्र',

        'neo.heading': 'पृथ्वीजवळील_वस्तू',
        'neo.hero': 'सध्याच्या तीन दिवसांच्या कालमर्यादेतील थेट जवळून जाणाऱ्या वस्तू.',
        'neo.summary': 'फीड_सारांश',
        'neo.window': 'कालमर्यादा',
        'neo.objectsLoaded': 'लोड झालेल्या वस्तू',
        'neo.potentialHazards': 'संभाव्य धोके',
        'neo.statusLoading': 'API शी संपर्क साधत आहे...',
        'neo.approachLog': 'जवळीक_नोंद',
        'neo.previous': 'मागील',
        'neo.next': 'पुढील',
        'neo.pageInfo': 'पृष्ठ {current} / {total}',
        'neo.emptyPageInfo': 'पृष्ठ 0 / 0',
        'neo.loadingFeed': 'जवळून जाणाऱ्या वस्तू लोड होत आहेत...',
        'neo.fetching': 'जवळून जाणाऱ्या वस्तू आणत आहे...',
        'neo.feedOnline': 'फीड सक्रिय',
        'neo.unavailable': 'पृथ्वीजवळील वस्तू फीड उपलब्ध नाही.',
        'neo.requestFailed': 'API विनंती अयशस्वी',
        'neo.noData': 'या कालमर्यादेसाठी कोणतीही जवळून जाणारी वस्तू परत आली नाही.',
        'neo.windowRange': '{start} ते {end}',
        'neo.closeApproach': 'जवळीक वेळ',
        'neo.velocity': 'वेग',
        'neo.missDistance': 'चुकलेले अंतर',
        'neo.estimatedDiameter': 'अंदाजित व्यास',
        'neo.rangeBetween': '{min} किमी ते {max} किमी',
        'neo.hazardStatus': 'धोका स्थिती',
        'neo.hazardPotential': 'संभाव्य',
        'neo.hazardLow': 'कमी'
    }
};

const VITSPACE_LANGUAGE_KEY = 'vitspace-language';
const VITSPACE_DEFAULT_LANGUAGE = 'mr';
const VITSPACE_INTERNAL_PATHS = new Set([
    'index.html',
    'toolsDirectory.html',
    'dataDirectory.html',
    'links.html',
    'orbitalCalculationTools.html',
    'escapeVelocityTools.html',
    'signalDelayTools.html',
    'rocketEquationTools.html',
    'stellarPhysicsTools.html',
    'relativityTools.html',
    'apodData.html',
    'neoData.html',
    'gibsEarthData.html',
    'epicData.html'
]);

function interpolateTranslation(template, variables) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
        return Object.prototype.hasOwnProperty.call(variables, key) ? variables[key] : `{${key}}`;
    });
}

function getLanguageFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const language = params.get('lang');
        return language && VITSPACE_TRANSLATIONS[language] ? language : null;
    } catch (error) {
        return null;
    }
}

function getStoredLanguage() {
    let savedLanguage = null;

    try {
        savedLanguage = window.localStorage.getItem(VITSPACE_LANGUAGE_KEY);
    } catch (error) {
        savedLanguage = null;
    }

    return savedLanguage && VITSPACE_TRANSLATIONS[savedLanguage] ? savedLanguage : VITSPACE_DEFAULT_LANGUAGE;
}

function getPreferredLanguage() {
    return getLanguageFromUrl() || getStoredLanguage();
}

let currentLanguage = getPreferredLanguage();

function translate(key, variables = {}) {
    const languageTable = VITSPACE_TRANSLATIONS[currentLanguage] || VITSPACE_TRANSLATIONS.en;
    const fallbackTable = VITSPACE_TRANSLATIONS.en;
    const template = languageTable[key] || fallbackTable[key] || key;
    return interpolateTranslation(template, variables);
}

function applyTranslations() {
    document.documentElement.setAttribute('data-i18n-ready', 'false');
    document.documentElement.lang = currentLanguage;

    const titleKey = document.body ? document.body.dataset.titleKey : '';
    if (titleKey) {
        document.title = translate(titleKey);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
        element.innerHTML = translate(element.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-lang-switch]').forEach(function (button) {
        const isActive = button.dataset.langSwitch === currentLanguage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    updateInternalLinks();
    document.documentElement.setAttribute('data-i18n-ready', 'true');
}

function buildLanguageUrl(href, language) {
    try {
        const url = new URL(href, window.location.href);
        const pathname = url.pathname.split('/').pop();

        if (!VITSPACE_INTERNAL_PATHS.has(pathname)) {
            return href;
        }

        url.searchParams.set('lang', language);
        return url.href;
    } catch (error) {
        return href;
    }
}

function updateInternalLinks() {
    document.querySelectorAll('a[href]').forEach(function (link) {
        const href = link.getAttribute('href');

        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return;
        }

        link.href = buildLanguageUrl(href, currentLanguage);
    });
}

function setLanguage(language) {
    if (!VITSPACE_TRANSLATIONS[language]) {
        return;
    }

    currentLanguage = language;

    try {
        window.localStorage.setItem(VITSPACE_LANGUAGE_KEY, language);
    } catch (error) {
        // Ignore storage failures so the static site still works under file:// or strict privacy settings.
    }

    applyTranslations();

    try {
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set('lang', language);
        window.history.replaceState({}, '', nextUrl.href);
    } catch (error) {
        // Ignore URL rewrite failures.
    }

    document.dispatchEvent(new CustomEvent('vitspace:languagechange', {
        detail: {
            language
        }
    }));
}

document.addEventListener('click', function (event) {
    const button = event.target.closest('[data-lang-switch]');
    if (!button) {
        return;
    }

    setLanguage(button.dataset.langSwitch);
});

window.VITSPACE_I18N = {
    applyTranslations,
    getLanguage: function () {
        return currentLanguage;
    },
    getLocale: function () {
        return currentLanguage === 'mr' ? 'mr-IN' : 'en-US';
    },
    setLanguage,
    t: translate
};

applyTranslations();
