# OSCMS - Powered Air Purifying Respirators (PAPR)

---

# The Problem:

- [Source Interview](https://docs.google.com/document/d/1z7laOQVwt7IMlkoEnKB8dmXo-s_ytuRpLZAG7_KQ0jg/edit?usp=sharing) *note: CAPR is a registered trademark version of PAPR, references to CAPR in the interview notes should be taken as referring to PAPRs in general.
- **Quote: “Current CAPR (PAPR) systems are awkward and difficult to use, and there aren’t enough of them to deal with the outbreak. Something lighter and quickly mass-producible would be ideal.”**
- Covid-19 can be as small as .125 microns when an aerosolized particle. ([Citation A8](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4369385/)) [(citation A1)](https://www.who.int/news-room/commentaries/detail/modes-of-transmission-of-virus-causing-covid-19-implications-for-ipc-precaution-recommendations)
- N-95s only filter out 95% of particles in the .1-.3 micron range ([Citation A3](https://www.tandfonline.com/doi/pdf/10.1080/15428119891010389?needAccess=true))
- PAPRs have a higher filtration efficiency if used with HEPA filters, and offer head/face protection as well, but PAPRs are in short supply

# Current Global Resources:

Many hospitals have some PAPR units for use when fit testing of N-95s can not be done and/or for certain higher risk activities. Facilities generally do not have many PAPRs and their use is not widespread, as is indicated in the excerpt below.

“More than 85 percent of hospital managers and unit managers who participated said their facilities had PAPRs available for use when employees needed them, with only 10 percent or fewer saying they did not know if PAPRs were available. In contrast, nearly 30 percent of the health care workers themselves—those working closest to the patient bedside—did not know whether PAPRs were available for use in their facility. Furthermore, nearly 40 percent of health care workers did not know what would happen at their facility if an employee could not be successfully fit tested for a respirator. More than 40 percent of health care workers did not know whether their program evaluations included a determination of whether respirators were being properly maintained. In each case, health care workers reported much more uncertainty about the respiratory protection program than did hospital managers or unit managers.”

Excerpt from Board on Health Sciences Policy; Institute of Medicine. The Use and Effectiveness of Powered Air Purifying Respirators in Health Care: Workshop Summary. Washington (DC): National Academies Press (US); 2015 May 7. 3, Why, Where, and How PAPRs Are Being Used in Healthcare. Available from: [https://www.ncbi.nlm.nih.gov/books/NBK294225/](https://www.ncbi.nlm.nih.gov/books/NBK294225/) 

# Worst Case Expectation:

During aerosol generating procedures health care staff are at heightened risk of exposure to Covid-19 (cite). Best case scenario when PAPRs are not available or in use is that N-95s will filter out 95% of the .125 micron sized COVID-19 aerosol particles [(Citation A12)](https://www.tandfonline.com/doi/pdf/10.1080/15428119891010389?needAccess=true). If PAPRs are not available for widespread use during high risk procedures [(CDC list of high risk procedures)](https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-risk-assesment-hcp.html) healthcare workers will be exposed to unsafe levels of COVID-19 particles when wearing N-95s, or extremely unsafe levels when wearing sub N-95 respiratory protection or no protection at all.

# Engineering Requirements: (citations needed as batch for section)

A tight fitting (mask) PAPR must have an airflow of 115 liters per a minute and a loose fitting (hood) PAPR must have an airflow of 170 per a minute. ([Citation A6](https://www.ncbi.nlm.nih.gov/books/NBK294223))

Air escaping the PAPR does not have to be filtered, though that is a desirable option that has been looked into before.([Citation A6](https://www.ncbi.nlm.nih.gov/books/NBK294223))

Filtration for the PAPR must be HEPA / MERV 17 or above. This will give above 99.9% filtration at the .1 to .3 micron level.

A community built paper PAPR should be able pass the OSHA respirator fit test ([link](https://www.osha.gov/video/respiratory_protection/fittesting.html)) or best analog that can be done in the field. The air intake must be fully sealed, as even minor cracks at the negative pressure end can drastically reduce the filtration efficiency and render the protection of using a PAPR null.

As many parts as possible should be protected by the filter, ideally air will enter through the filter and only filtered air will come into contact with the motor assembly. Placing casing and tubing inside the PAPR/ gown reduces contamination of hard to sterilize parts.

One of the advantages of a PAPR approach to providing filtered air to health care workers is that materials used on the positive air pressure side of the device do not have to be perfectly sealed.([Citation A6](https://www.ncbi.nlm.nih.gov/books/NBK294223)) It is necessary and expected that air is allowed to escape from the PAPR hood/gown to allow for the continued flow of fresh filtered air in and to prevent the flow of air into any part of the PAPR hood/gown except for through the filter.

PAPRs need to be able to be used at the highest airflow setting for four hours continuously under normal conditions ([Citation A6](https://www.ncbi.nlm.nih.gov/books/NBK294223)). However, longer use times are desirable during the COVID-19 crisis as it is to be expected that many staff will need to use PAPRs during their entire shifts rather than just for a single patient/procedure.

PAPRs should use easy to source/charge batteries. If possible PAPRs should include low voltage and/or low air flow warning that is audible/visible to the user and to people nearby to prevent unexpected reductions in airflow and possible CO2 poisoning or exposure to COVID-19 due to an emergency removal of PPE.

# Assembly/Fabrication Requirements:

Sewing, 3d printing or other similar fabrication, and soldering of electrical components will be necessary for production.

# Projects/Resources:

- PAPR
    - [PAPR Use in Healthcare](http://nationalacademies.org/hmd/~/media/Files/Activity%20Files/PublicHealth/PPEinWorkplace/2014-AUG-7/Larry%20Green.pdf) 2014
    - [Powered Air-Purifying Respirators](https://en.wikipedia.org/wiki/Powered_air-purifying_respirator) (PAPR)
    - [Current PAPR standards](https://www.ncbi.nlm.nih.gov/books/NBK294223/)

# Reviewed Designs:

*This section is for product designs (links to instructions or downloadable packages) that have been reviewed and approved by medical professionals. When adding a design to this list, please include the (approximate) date of approval, the group or organization that reviewed it, and any modifications they recommend.*
