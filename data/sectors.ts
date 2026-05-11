export interface SectorFaq {
  q: string;
  a: string;
}

export interface Sector {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  longContent: string;
  keyNeeds: string[];
  faqs: SectorFaq[];
  relatedBlogSlugs: string[];
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
}

export const SECTORS: Sector[] = [
  {
    slug: 'schools-education',
    name: 'Schools & Education',
    icon: '🏫',
    shortDesc: 'Named driver policies, volunteer driver extensions, and Board of Trustees cover for school minibuses.',
    description: 'Schools and kura across New Zealand rely on minibuses for sports trips, cultural events, curriculum-related excursions, and daily transport. School minibus insurance requires specialist cover that accommodates named driver policies, volunteer driver extensions, and the Board of Trustees as the insured entity.',
    longContent: `School minibuses occupy a unique position in New Zealand's education system. From transporting students to Kapa Haka competitions in Hamilton to shuttling a Northland kura's first XV to an inter-school rugby fixture, the school minibus is a core operational asset — and an asset that needs specialist insurance protection.

**Why School Minibus Insurance is Different**

Standard private motor vehicle insurance explicitly excludes commercial and community passenger transport, including school operations. The moment a teacher drives students in a school-owned minibus, that journey requires a commercial motor policy with the correct use endorsement. Failing to have appropriate cover means any accident could leave the school — and individual staff members or trustees — personally exposed to uninsured liability claims.

The insured entity must also be correctly identified. Insurance should be in the name of the Board of Trustees, not the school principal or an individual staff member. The Board of Trustees is the legal entity responsible for school operations, and this distinction is critical if a claim is ever disputed. Many school policies that were set up informally years ago have this wrong.

**Driver Requirements and Volunteer Drivers**

Most school minibus policies operate on a named driver basis — all authorised drivers must be listed on the policy, including full-time staff, part-time employees, and any parent volunteers who regularly assist with transport duties. All drivers must hold a current P (Passenger) endorsement on their New Zealand driver licence, which requires a Police background check and medical assessment.

For schools that rely heavily on parent volunteers, a volunteer driver extension is an important policy feature to look for. These extensions allow unlisted drivers who meet specified criteria — typically a full licence held for a minimum number of years, no serious offences, and a current P endorsement — to drive the school minibus without being individually named. This simplifies administration significantly for schools with a rotating pool of parent helpers.

**What Activities Are Covered?**

A standard school minibus policy covers curriculum-related transport, which includes sports fixtures, cultural events, school camps, and curriculum excursions. However, operators should check whether their policy explicitly covers holiday programmes, before and after school care services, community lettings (where the community hires the minibus outside school hours), and adult education activities run by the school.

These edge cases are more common than people realise — a school that hires its minibus to a local sports club on weekends, or uses it for an evening adult literacy programme, may find that those journeys fall outside the policy's coverage unless specifically endorsed. Always disclose the full range of intended uses to your insurer or broker.

**Certificate of Fitness and Compliance**

School minibuses must hold a current Certificate of Fitness (CoF), which requires a more rigorous inspection than the standard Warrant of Fitness. CoF inspections are typically required every six months. If your school operates a vehicle with a lapsed CoF at the time of an accident, your insurer has grounds to decline the claim. Track CoF renewal dates carefully and build them into your school calendar.

**Choosing the Right Cover Level**

For most schools, comprehensive cover is the appropriate choice. School minibuses are often older vehicles — a 2005 Toyota HiAce that cost $35,000 may now have a market value of $12,000, but replacing it disrupts transport arrangements for students and staff. Agreed value cover can protect against unexpected depreciation and give budgetary certainty in the event of a total loss.

Third party fire and theft is sometimes considered for older, lower-value school minibuses. This is generally not recommended when the vehicle is used for regular student transport — the administration and operational disruption of losing the vehicle to an at-fault accident, even temporarily, usually outweighs the premium saving.

**Getting Quotes Efficiently**

The best way for a school to find appropriate, competitively priced cover is through a commercial broker who specialises in education sector insurance. Providers including NZI, Vero, and specialist underwriters offer school-specific policies with appropriate wording for Board of Trustees structures, volunteer driver requirements, and curriculum use. A broker can compare these on your behalf, review the existing policy wording for gaps, and ensure the school is correctly named as the insured entity.`,
    keyNeeds: ['Named driver policies', 'Volunteer driver extension', 'Board of Trustees as insured entity', 'Student transport cover', 'Sports and excursion use', 'Holiday programme cover'],
    faqs: [
      {
        q: 'Does the Board of Trustees need to be the named insured on a school minibus policy?',
        a: 'Yes. The Board of Trustees is the legal entity responsible for school operations, so it should be the named insured on the policy — not the principal, a staff member, or an individual trustee. Policies set up in the wrong name can cause significant complications at claim time.',
      },
      {
        q: 'Do parent volunteers who drive the school minibus need a P endorsement?',
        a: 'Yes. Any driver using a minibus in a passenger service — including volunteer parent drivers — must hold a current Passenger (P) endorsement on their New Zealand driver licence. This requires a Police background check, a medical, and a knowledge assessment through Waka Kotahi.',
      },
      {
        q: 'Is a school minibus covered for sports trips and camps?',
        a: 'Standard school minibus policies cover curriculum-related transport including sports fixtures, cultural events, and school camps. Use the minibus for activities outside the standard curriculum — holiday programmes, after-hours community hire, or adult education — may require specific endorsements. Always disclose all intended uses to your insurer.',
      },
      {
        q: 'What is a Certificate of Fitness and why does it matter for insurance?',
        a: 'A Certificate of Fitness (CoF) is a more rigorous roadworthiness inspection required for commercial passenger service vehicles, issued every six months. If your school minibus is involved in an accident with a lapsed CoF, your insurer may decline the claim on the basis that the vehicle was not in a legal, roadworthy condition.',
      },
      {
        q: 'Can we get a single policy to cover all of our school\'s vehicles?',
        a: 'Yes — if your school operates two or more minibuses or vehicles, a fleet policy can cover them all under a single policy with one renewal date and a consolidated excess structure. Fleet cover is often more cost-effective per vehicle than separate individual policies, and simplifies administration considerably.',
      },
    ],
    relatedBlogSlugs: ['school-minibus-insurance-nz', 'waka-kotahi-minibus-licence-requirements-nz', 'commercial-vs-private-minibus-insurance'],
    heroImage: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'School Minibus Insurance | Named Drivers & BOT Cover | MinibusInsurance.co.nz',
    metaDesc: 'School minibus insurance with named driver policies, volunteer driver extensions, and Board of Trustees cover. Compare NZ providers. Free quotes.',
  },
  {
    slug: 'councils-local-government',
    name: 'Councils & Local Government',
    icon: '🏛️',
    shortDesc: 'Fleet cover for council-operated minibuses — community transport, parks services, and civic operations.',
    description: 'Local councils operate minibuses across a wide range of community services — from elderly transport and disability services to parks, recreation, and civic operations. Council fleets require flexible fleet policies with any-driver cover, modified risk assessments for government entities, and often higher liability limits.',
    longContent: `New Zealand's 78 territorial and regional councils collectively operate hundreds of community-facing vehicles, including minibuses used for elderly transport, disability services, parks and recreation programmes, community education, and civic operations. The insurance requirements for council-operated minibuses differ in important ways from private sector and community operator requirements, and specialist advice is essential to ensure appropriate coverage.

**Government Entity Risk Profiles**

Councils operate under a different risk profile than commercial operators. Local government bodies are subject to the Local Government Act 2002, have audited financial reporting obligations, and carry obligations to their communities that private operators do not. Some insurers recognise this as a modified risk profile and offer government entity terms that can differ from standard commercial motor pricing.

The key implication for insurance is that the insured entity should be correctly identified as the council or territorial authority — not a department, a manager, or an individual officer. Fleet policies for council-operated vehicles typically identify the council as the legal entity and may need to reference specific legislative authorities or governance structures in the policy documentation.

**Fleet Structure and Any-Driver Policies**

Most council fleets benefit from any-driver fleet policies, which allow any employee who meets specified criteria — typically a full New Zealand driver licence, a current P endorsement for passenger-carrying vehicles, and a clean driving record — to operate any vehicle in the fleet without being individually named. This is practically important for councils where rosters change, temporary staff are common, and multiple departments may share vehicle assets.

Named driver fleet policies are also available and may be appropriate for smaller councils where the driver pool is consistent and easily managed. The trade-off is administrative — any change to the driver pool requires a policy update, and driving an unlisted driver could trigger coverage issues.

**Community Transport Services**

Many councils operate dedicated community transport services — door-to-door van services for elderly residents, disability transport, and supported transport for vulnerable community members. These services often involve modified vehicles (wheelchair ramps, restraint systems, passenger lift equipment) and carer-assisted boarding and alighting.

Modified vehicles require agreed-value assessments that reflect the cost of the modifications, not just the base vehicle value. A standard market-value policy on a wheelchair-accessible minibus will typically under-insure the vehicle because the modifications — which can cost $40,000–$80,000 — are not captured in standard vehicle market values. Ensuring the sum insured reflects the true replacement cost of a modified vehicle is critical.

**Contractor and Volunteer Operations**

Some councils contract out transport services or rely on volunteers coordinated through council-funded programmes. Where a council is organising or coordinating transport services delivered by contractors, the council may carry residual liability exposure if something goes wrong. Understanding whether the council's insurance extends to contractor operations — or whether contractors need their own cover — should be clarified with your broker.

**Liability Limits and Risk Management**

Council operations carry greater public liability exposure than typical private operators. Higher liability limits are generally appropriate for local government, reflecting both the scale of operations and the public trust responsibilities councils carry. Discuss appropriate liability limits with your adviser — standard commercial motor liability limits may be insufficient for councils operating in high-density urban environments or running large-scale community events.

**Procurement and RFP Processes**

Larger councils often procure insurance through formal tender processes. Ensuring your insurance RFP adequately specifies requirements for commercial minibus cover — including agreed value for modified vehicles, any-driver cover conditions, P endorsement compliance requirements, and liability limits — is essential to receiving comparable, appropriate quotes from the market.`,
    keyNeeds: ['Fleet cover for multiple vehicles', 'Any-driver policy options', 'Government entity risk profile', 'Community transport cover', 'High liability limits', 'Modified excess structures'],
    faqs: [
      {
        q: 'Should council minibuses be insured under a fleet policy or individually?',
        a: 'Fleet policies are almost always more appropriate for councils operating two or more vehicles. They provide a single renewal date, consolidated excess structure, any-driver cover options, and often better per-vehicle pricing. Individual policies for each vehicle create administrative complexity and potential coverage gaps.',
      },
      {
        q: 'Do council drivers need a P endorsement to drive a minibus?',
        a: 'Yes. Any driver operating a minibus in a passenger service — including council employees — must hold a current Passenger (P) endorsement. Councils should maintain records of all driver endorsements and ensure renewals are tracked as part of their fleet management programme.',
      },
      {
        q: 'How should a wheelchair-accessible council minibus be insured?',
        a: 'Modified vehicles should be insured on an agreed-value basis that includes the full replacement cost of the modifications, not just the base vehicle value. Wheelchair ramps, restraint systems, and passenger lift equipment can add $40,000–$80,000 to the cost of replacement — a standard market-value policy will significantly under-insure a WAV.',
      },
      {
        q: 'Is the council liable if a contracted transport provider has an accident?',
        a: 'This depends on the contract structure and the nature of the council\'s involvement in the service. Councils that organise, fund, or closely direct contracted transport services may carry residual liability exposure. This should be reviewed with your broker and legal adviser to ensure the council\'s own insurance appropriately addresses any contractor-related exposure.',
      },
      {
        q: 'What liability limit is appropriate for a council minibus fleet?',
        a: 'Higher liability limits than the standard commercial motor default are generally appropriate for local government. Your broker can advise on appropriate limits based on your fleet size, operational environment, and the nature of the services provided. Most specialist commercial motor policies offer liability limits from $1M to $20M+.',
      },
    ],
    relatedBlogSlugs: ['fleet-insurance-minibuses-nz', 'commercial-vs-private-minibus-insurance', 'minibus-insurance-claims-history-nz'],
    heroImage: 'https://images.pexels.com/photos/1769415/pexels-photo-1769415.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Council & Local Government Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for councils and local government — fleet cover, any-driver policies, and high liability limits. Compare NZ providers.',
  },
  {
    slug: 'commercial-transport',
    name: 'Commercial Transport',
    icon: '🚐',
    shortDesc: 'Commercial minibus operator insurance for hire and reward, shuttle services, and passenger transport operators.',
    description: 'Commercial minibus operators — shuttle services, hire and reward operators, and passenger transport businesses — have specific insurance requirements under the Land Transport Act and Passenger Service Licence conditions. Commercial policies must cover passenger liability, driver history, high annual kilometres, and often require specific policy wording for compliance.',
    longContent: `Commercial minibus operators form the backbone of New Zealand's inter-city shuttle network, airport transfer services, inter-regional passenger routes, and specialist charter operations. Whether you run a single shuttle vehicle between Nelson and Blenheim or a multi-vehicle operation connecting regional centres, your insurance needs are more demanding than those of community or school operators — and getting them right is a condition of maintaining your Passenger Service Licence.

**Transport Service Licence Compliance**

Any operator running a minibus for hire and reward in New Zealand must hold a current Transport Service Licence (TSL) issued by Waka Kotahi NZ Transport Agency. The TSL imposes ongoing obligations on operators, including maintaining appropriate vehicle insurance. Waka Kotahi does not prescribe a specific policy product, but operating without adequate insurance would be inconsistent with TSL conditions and could result in licence suspension.

Your policy must be structured to cover commercial hire and reward use — standard policies that cover "private hire" or "community use" are not sufficient for commercial operations that charge a fare or contract fee. The use endorsement on your policy must accurately reflect how the vehicle is operated.

**Passenger Liability: Your Critical Exposure**

Commercial operators carry greater passenger liability exposure than almost any other minibus operator category. You are transporting members of the public who have paid for transport, often including tourists unfamiliar with New Zealand roads and conditions, elderly passengers, and others with limited mobility. If an accident occurs, passengers can pursue compensation claims beyond what ACC covers.

Passenger liability cover is essential for commercial operators. Standard comprehensive policies include a third-party liability section, but the limit may be insufficient for a serious multi-passenger incident involving multiple claimants. Discuss appropriate liability limits with your broker — $5M or $10M limits are common for commercial passenger transport operations.

**High-Kilometre Operations**

Commercial shuttle and charter operations typically cover significantly higher annual kilometres than school or community operators. Premium calculations are partly kilometre-based, so an accurate estimate of annual kilometres is important both for premium accuracy and for ensuring you are not driving uninsured if you exceed a stated kilometre cap. Be realistic and slightly conservative in your kilometre estimates — insurers would rather you over-estimate than under-estimate.

**Driver History and Excess Loadings**

Commercial operators often employ multiple drivers with varying experience levels and driving histories. Insurers assess driver history carefully for commercial operations — any at-fault claims, traffic infringements, or licence suspensions in the past three to five years will affect underwriting. Named driver policies allow you to manage individual driver risk profiles; any-driver policies set eligibility criteria (age, licence history, P endorsement) that apply to all drivers.

An excess loading may be applied to specific drivers who have poor claims histories. Understanding how your policy handles driver-specific risk is important for fleet management — and for conversations with drivers about the financial consequences of at-fault incidents.

**Breakdown and Interruption Cover**

Commercial operators lose revenue when vehicles are off the road. Breakdown cover — either as a policy extension or separately through an organisation like AA Business — provides roadside assistance and, in some policies, a replacement vehicle while your own is under repair. For operators running time-sensitive routes (airport transfers, scheduled shuttle services), vehicle downtime has direct revenue consequences. Review whether your policy includes a replacement vehicle clause and what the wait time is for a replacement.

**Fleet Growth and Policy Flexibility**

Commercial operators often grow their fleets over time, adding vehicles as demand increases. Fleet policies that allow mid-term vehicle additions — with pro-rata premium adjustments — are more practical than individual policies that require separate inception for each new vehicle. When comparing fleet policies, check how simple it is to add a vehicle, what documentation is required, and how quickly cover commences for a newly added vehicle.`,
    keyNeeds: ['Passenger liability cover', 'Hire and reward endorsement', 'High-kilometre allowances', 'PTO licence compliance', 'Commercial driver requirements', 'Fleet discount available'],
    faqs: [
      {
        q: 'Do I need a Passenger Service Licence to operate a commercial minibus?',
        a: 'Yes. Any minibus operated for hire and reward in New Zealand requires a Transport Service Licence (TSL) from Waka Kotahi NZ Transport Agency. A Large Passenger Service Licence (LPSL) is required for vehicles carrying 13 or more passengers including the driver. Maintaining appropriate vehicle insurance is an ongoing TSL condition.',
      },
      {
        q: 'What is hire and reward insurance and why do I need it?',
        a: 'Hire and reward insurance is a commercial motor policy endorsed for operations where passengers pay a fare or contract fee. Standard private or community vehicle insurance explicitly excludes hire and reward operations. If you carry paying passengers without a hire and reward endorsement, your insurer can decline any claim arising from those journeys.',
      },
      {
        q: 'How much passenger liability cover does a commercial shuttle operator need?',
        a: 'Most specialist advisers recommend a minimum of $5M passenger liability for commercial shuttle and charter operations, with $10M or more appropriate for larger operations or those carrying international tourists. The right limit depends on fleet size, passenger volumes, and operational environment — discuss with your broker.',
      },
      {
        q: 'Can I insure multiple commercial minibuses on one policy?',
        a: 'Yes — fleet policies cover two or more vehicles under a single policy. Fleet cover is typically more cost-effective per vehicle than individual policies, with a single renewal date, consolidated excess, and often simplified claims management. Most commercial motor fleet policies also allow mid-term vehicle additions.',
      },
      {
        q: 'What happens if one of my drivers has a poor driving history?',
        a: 'Insurers assess individual driver history for commercial operations. Drivers with at-fault claims or serious traffic infringements may attract an excess loading — an additional excess applied to any claim they are involved in. In some cases, an insurer may decline to cover a specific driver. Discuss your driver pool with your broker to understand how each driver\'s history affects your policy.',
      },
    ],
    relatedBlogSlugs: ['commercial-vs-private-minibus-insurance', 'waka-kotahi-minibus-licence-requirements-nz', 'passenger-liability-insurance-nz'],
    heroImage: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Commercial Minibus Insurance | Hire & Reward Operators | MinibusInsurance.co.nz',
    metaDesc: 'Commercial minibus insurance for hire and reward, shuttle and passenger transport operators. Passenger liability and PTO compliance. Free quotes.',
  },
  {
    slug: 'tourism-travel',
    name: 'Tourism & Travel',
    icon: '🌿',
    shortDesc: 'Tourism operator minibus insurance — covering adventure tourism, guided tours, and airport transfers.',
    description: 'Tourism operators running guided tours, adventure experiences, airport transfers, and sightseeing services face unique insurance requirements. Tourism minibus policies need to account for international passengers, variable driver requirements, seasonal operation, and sometimes challenging terrain or weather conditions.',
    longContent: `New Zealand's tourism industry is one of the country's largest economic sectors, and minibuses are at the heart of it — from wine tour operators in Marlborough and Hawke's Bay to glacier transfer services in Westland, adventure tourism shuttles in Queenstown, and cultural tour operators in Rotorua. Tourism minibus insurance is a specialist area that goes well beyond standard commercial motor cover, and operators who don't understand the nuances can find themselves underinsured at critical moments.

**International Passengers and Liability Exposure**

The single biggest differentiator for tourism minibus insurance is the presence of international passengers. Tourists from the United States, Germany, Australia, or China bring with them legal frameworks that may allow compensation claims well beyond what New Zealand's ACC system covers. While ACC provides no-fault accident treatment, international visitors may pursue claims in their home jurisdictions or through travel insurance subrogation that results in claims against your operation.

Adequate liability limits are essential for tourism operators. A minimum of $5M public and passenger liability is recommended for tour operators, with $10M or more appropriate for high-volume operations or those operating in challenging environments. Some adventure tourism endorsements require specific liability minimums as a condition of the endorsement.

**Adventure Tourism Endorsements**

If your minibus is used to transport passengers to or from adventure activities — bungy jumping, skydiving, white water rafting, heli-skiing, skydiving, or off-road experiences — standard commercial motor policies may exclude losses that occur in connection with those activities. A specialist adventure tourism endorsement covers the vehicle and passenger transport operations as part of an integrated adventure tourism business.

Operators who run combination experiences — a half-day wine tour followed by a scenic helicopter flight, or a guided walk that involves minibus transfers over unsealed mountain roads — should be especially careful to disclose the full nature of their operations. A claim that arises from an off-road transfer section of an adventure experience could be declined under a policy that only covers "sealed road commercial transport."

**Seasonal and Variable Operations**

New Zealand tourism is highly seasonal, with peak demand in summer (November–March) and significantly lower demand in winter for most regions (Queenstown being the notable exception). Seasonal operators who scale up their vehicle numbers during peak season need to ensure their policy allows mid-term additions and that newly added vehicles are covered from day one.

Some operators run one or two vehicles year-round and add seasonal rentals or lease vehicles during peak periods. Check whether your policy extends to leased or hired vehicles, and whether a temporary driver who joins for the season needs to be listed before their first drive.

**Challenging Terrain and Weather Conditions**

Tourism operations in New Zealand often involve roads that general commercial motor policies may treat as unusual risks — unsealed back-country roads, alpine passes, coastal routes subject to flooding, and terrain that is genuinely challenging for large passenger vehicles. Standard policies may have exclusions or limitations for off-road use or specific road types.

If your operation involves any driving on unsealed roads, steep grades, river fords, or routes that are genuinely challenging, disclose this to your broker and insurer. Some specialist policies include off-road endorsements; others will decline cover for certain terrain types. Knowing your policy's limits before an incident is far better than discovering them after one.

**Alcohol and Winery Tour Operations**

Operators running wine tours, brewery experiences, or other alcohol-focused tourism products have a specific duty of care to ensure that passengers are safely transported to and from venues. While your minibus policy covers the vehicle and passengers, any incident in which intoxicated passengers are involved could attract additional scrutiny from insurers. Operators should have clear written policies about passenger behaviour, alcohol limits, and what happens if a passenger becomes a risk to themselves or others during a tour.

**Getting the Right Policy**

The best outcome for a tourism operator is a policy structured by an adviser who understands the sector — not a generic commercial motor policy with a tourism label attached. Providers including Ando, Gallagher, and specialist commercial underwriters have experience with New Zealand tourism operations and can structure cover that reflects your actual operation, including seasonal variability, adventure endorsements, and appropriate liability limits.`,
    keyNeeds: ['International passenger cover', 'Adventure tourism endorsements', 'Variable seasonal use', 'Multi-terrain cover', 'Airport transfer operations', 'Tourism operator liability'],
    faqs: [
      {
        q: 'Do I need special insurance for adventure tourism transfers?',
        a: 'Yes. Standard commercial motor policies may exclude losses connected to adventure tourism activities. If your minibus transfers passengers to bungy sites, heli-ski operations, white water rafting, or similar experiences, you need a specialist adventure tourism endorsement. Disclose all activities to your broker.',
      },
      {
        q: 'Are international tourists covered under my standard minibus policy?',
        a: 'Your policy covers your legal liability to passengers, including international visitors. However, standard liability limits may be insufficient given the additional claims exposure that international passengers can create, particularly from US, European, or Australian visitors. Tourism operators should carry higher liability limits — $5M minimum is generally recommended.',
      },
      {
        q: 'Can I add seasonal vehicles to my policy mid-year?',
        a: 'Yes — fleet policies allow mid-term vehicle additions with pro-rata premium adjustments. Check that cover commences immediately on addition, not from the next renewal date. Also confirm whether seasonal hire vehicles (leased or rented) can be added to your fleet policy or require separate cover.',
      },
      {
        q: 'Does my policy cover driving on unsealed roads?',
        a: 'This varies by policy. Some commercial motor policies have limitations or exclusions for unsealed road driving, back-country routes, or off-road use. If your tourism operation involves any unsealed road sections — common for wine tours, scenic transfers, and back-country experiences — disclose this fully and confirm in writing whether it is covered.',
      },
      {
        q: 'What cover do I need as a wine tour operator?',
        a: 'Wine tour operators need comprehensive commercial motor cover with passenger liability, a hire and reward endorsement, and sufficient liability limits for international passenger exposure. You should also review your duty of care policies around intoxicated passengers and ensure these are reflected in your operating procedures.',
      },
    ],
    relatedBlogSlugs: ['tourism-operator-minibus-insurance', 'passenger-liability-insurance-nz', 'waka-kotahi-minibus-licence-requirements-nz'],
    heroImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Tourism Minibus Insurance | Tour Operators & Transfer Services | MinibusInsurance.co.nz',
    metaDesc: 'Tourism minibus insurance for tour operators, adventure tourism, and airport transfers. International passenger cover. Free quotes.',
  },
  {
    slug: 'community-charitable',
    name: 'Community & Charitable',
    icon: '🤝',
    shortDesc: 'Affordable minibus insurance for community groups, churches, sports clubs, and charitable organisations.',
    description: 'Community groups, churches, sports clubs, and charitable organisations often operate minibuses on tight budgets while still needing appropriate cover. Many insurers offer modified risk assessments for not-for-profit operators, volunteer driver policies, and group discounts that can make comprehensive cover more accessible.',
    longContent: `Community and charitable organisations represent the largest single category of minibus operators in New Zealand by number — churches, sports clubs, marae, community trusts, residential support services, ethnic community associations, and dozens of other not-for-profit groups collectively operate thousands of minibuses across the country. Many of these organisations operate on tight budgets, rely on volunteers, and lack the professional governance infrastructure of commercial or government operators. This makes getting the right insurance advice especially important.

**Legal Structure and Liability**

The legal structure of your organisation significantly affects how insurance works in practice. An incorporated society or charitable trust has a separate legal identity from its members, which limits the personal liability of individual committee members or trustees if something goes wrong. An unincorporated group — a committee with no formal legal status — has no such protection, meaning individual members can be personally liable for claims.

All existing incorporated societies are required to re-register under the Incorporated Societies Act 2022. The re-registration deadline passed in April 2026, and organisations that have not re-registered may no longer have valid incorporated status. If your organisation's legal status is uncertain, this should be resolved before arranging vehicle insurance, as it affects who the policy should name as the insured entity.

**Who Should Be the Named Insured?**

The policy should name the organisation as the insured entity — the incorporated society, charitable trust, or other legal body — not the chairman, secretary, or an individual committee member. If the named individual leaves the role, the policy may not transfer automatically, creating a coverage gap.

For unincorporated groups, some insurers will cover a named group or committee. However, unincorporated status means the policy may not provide the same protection as one issued to a legal entity. If your organisation relies on a minibus regularly, incorporating under the Incorporated Societies Act 2022 is generally worth the effort and cost.

**Volunteer Driver Policies**

Almost all community organisations rely on volunteer drivers. The standard approach in commercial motor insurance — listing all named drivers — is impractical when the driver pool changes frequently and includes volunteers who may drive only a few times per year.

A volunteer driver extension is the solution. This broadens the policy to cover unlisted drivers who meet specific eligibility criteria: typically a full New Zealand driver licence, a P endorsement (for passenger service operations), and no serious traffic offences or at-fault claims within a specified period. The organisation needs to satisfy itself that volunteer drivers meet these criteria before allowing them to drive — and ideally maintain a simple register of authorised volunteers.

**Not-for-Profit Risk Profiles**

Some insurers apply modified risk assessments for not-for-profit and community operators, recognising that the nature of the operation — typically low commercial mileage, primarily local trips, community rather than commercial purpose — presents a different risk profile than commercial hire and reward operations. This can translate to better pricing than community groups might expect when approaching specialist brokers.

Being transparent about how the minibus is used — the frequency of trips, typical journey lengths, types of activities, driver pool characteristics — helps insurers assess the risk accurately and can support a more favourable premium.

**Older Vehicle Considerations**

Many community organisations operate older vehicles to keep costs down. Insuring an older minibus raises specific questions: is comprehensive cover cost-effective relative to the vehicle's value? Is an agreed value or market value assessment more appropriate? What is the true replacement cost if the vehicle is written off?

For older vehicles, third party fire and theft can be a reasonable option if the vehicle value is genuinely low. However, for community transport — particularly where vulnerable passengers are involved — having no cover for an at-fault collision means the organisation bears the full cost of repairing or replacing the vehicle. This can be financially devastating for a small community group. Many organisations that switch to third party fire and theft for cost reasons discover after an incident that the saving was not worth it.

**Getting a Quote as a Community Organisation**

Community organisations often don't know where to start with commercial vehicle insurance. The most efficient approach is to contact a broker who works with not-for-profit organisations and describe your operation clearly: what the vehicle is used for, who drives it, how often it's used, and what your budget constraints are. Gallagher NZ and several specialist brokers have genuine expertise in this sector and can match community organisations with appropriate, affordable cover.`,
    keyNeeds: ['Not-for-profit risk assessment', 'Volunteer driver policies', 'Named driver options', 'Fundraising activity cover', 'Sports event transport', 'Community group discounts'],
    faqs: [
      {
        q: 'Does a community organisation need commercial vehicle insurance for its minibus?',
        a: 'Yes. Any minibus used to carry passengers — even for non-commercial community purposes — requires a commercial motor vehicle insurance policy. Standard private vehicle insurance excludes passenger-carrying operations, even by not-for-profit organisations.',
      },
      {
        q: 'Can volunteer drivers be covered without being individually named on the policy?',
        a: 'Yes, through a volunteer driver extension. This covers unlisted drivers who meet eligibility criteria — typically a full licence, P endorsement, and clean driving record. Check the specific criteria in your policy and maintain a register of authorised volunteers who meet those criteria.',
      },
      {
        q: 'Should a church or sports club be insured as the named insured?',
        a: 'The legal entity — the incorporated society or charitable trust — should be the named insured, not an individual. If your organisation is unincorporated, consult a broker about how best to structure the policy, and consider whether incorporation is appropriate.',
      },
      {
        q: 'Can community organisations get cheaper insurance than commercial operators?',
        a: 'Some insurers apply modified risk assessments for not-for-profit operators, which can result in lower premiums than equivalent commercial operations. Low annual mileage, local trip patterns, and community purpose can all support a more favourable risk assessment. A specialist broker can identify insurers who take this approach.',
      },
      {
        q: 'What happens if our minibus is used for a fundraising event outside normal activities?',
        a: 'Activities outside the normal scope of your policy may not be covered. If your organisation plans an unusual trip — a fundraising tour, an overnight event, a multi-day excursion — notify your insurer or broker in advance. A one-off endorsement can extend cover for specific activities.',
      },
    ],
    relatedBlogSlugs: ['community-minibus-insurance-nz', 'commercial-vs-private-minibus-insurance', 'fleet-insurance-minibuses-nz'],
    heroImage: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Community & Charitable Organisation Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for community groups, churches, sports clubs and charitable organisations. Volunteer driver policies. Free quotes.',
  },
  {
    slug: 'disability-support',
    name: 'Disability Support',
    icon: '♿',
    shortDesc: 'Specialist cover for disability support providers — wheelchair access vehicles and modified minibuses.',
    description: 'Disability support providers operating modified minibuses — including wheelchair accessible vehicles, WAVs, and specially equipped transport — need specialist insurance that accounts for vehicle modifications, carer-assisted boarding, and the vulnerability of passengers. Modified vehicle values and specialist equipment require agreed-value assessments.',
    longContent: `Disability support transport is one of the most specialised and demanding sectors in the minibus insurance market. Operators run wheelchair accessible vehicles (WAVs) with hydraulic lifts or ramps, restraint systems, purpose-built passenger spaces, and specialist communication equipment. Drivers are trained in carer-assisted techniques, and passengers include some of New Zealand's most vulnerable people. Getting insurance right in this sector is not just a compliance exercise — it is a fundamental duty of care.

**Modified Vehicle Valuation**

The most critical insurance issue for disability transport operators is the correct valuation of modified vehicles. A Toyota HiAce converted to a wheelchair accessible configuration — with a rear hydraulic lift, floor track restraint system, oxygen equipment storage, and carer seating — may have cost $120,000 to replace even if the base vehicle has a market value of $25,000. A market-value policy would pay out $25,000 in the event of a total loss, leaving a $95,000 gap.

All disability transport minibuses should be insured on an agreed-value basis that reflects the full replacement cost of the vehicle including all modifications and specialist equipment. This agreed value should be reviewed annually, particularly if modifications are added or costs change. Your broker should be able to assist with a replacement cost assessment that accurately captures the true value of the vehicle.

**NASC Funding and Needs Assessment**

Many disability transport operators are partially funded through Whaikaha – Ministry of Disabled People's NASC (Needs Assessment and Service Coordination) process. MOH and Whaikaha-funded services may have specific insurance requirements set out in service contracts. Review your funding agreement carefully to identify any minimum insurance requirements — these may exceed standard commercial motor defaults, particularly for liability limits.

**Carer-Assisted Boarding and Alighting**

Disability transport involves significantly more risk during boarding and alighting than standard passenger transport. Wheelchair users, passengers with limited mobility, and passengers with complex needs require physical assistance from carers, during which incidents — such as falls, equipment failures, or passenger injury from unexpected movement — can and do occur.

Your insurance policy should cover incidents occurring during the boarding and alighting process, not just while the vehicle is in motion. Some standard commercial motor policies define covered events narrowly around the vehicle being in motion — a boarding incident where a passenger falls while being assisted onto a hydraulic lift may fall into a grey area. Clarify with your insurer or broker that your policy covers all aspects of the boarding, transport, and alighting process.

**Driver and Carer Requirements**

Disability support transport drivers typically hold specialist training beyond the standard P endorsement — including restraint system training, manual handling, and first aid. Some funding agreements require drivers to hold specific NZQAs or training credentials. While insurance policies generally require drivers to hold the correct licence and endorsement, they do not typically require sector-specific training beyond this.

Operators should maintain records of all driver training and ensure that drivers who have completed required training are the ones operating vehicles — both for service compliance reasons and to demonstrate appropriate risk management if a claim is made.

**Fleet Cover for Disability Support Organisations**

Larger disability support providers operating fleets of WAVs and adapted vehicles benefit significantly from fleet insurance policies that can accommodate the varied valuations, modification types, and cover requirements across the fleet. Fleet cover for disability transport requires careful scheduling — each vehicle's agreed value, modification details, and specific cover requirements should be recorded in the schedule.

Some disability support organisations also operate a mix of modified and standard vehicles. Fleet policies can cover both on a single schedule, with each vehicle carrying the appropriate agreed value and endorsements for its specific configuration.

**Specialist Provider Selection**

Not all commercial motor insurers have the expertise or appetite to write disability support transport policies. Gallagher Insurance NZ has specific expertise in the disability support sector and understands the operational realities of WAV fleets. Specialist brokers who work with health and disability service providers can identify insurers with appropriate policy wording and the sector knowledge to handle claims fairly and promptly.

When a disability transport vehicle is off the road following an incident, the operational consequences extend beyond transport logistics — clients may miss medical appointments, support schedules are disrupted, and vulnerable people are affected. A rapid claim response and access to a replacement vehicle are important policy features for this sector.`,
    keyNeeds: ['Wheelchair accessible vehicle cover', 'Modified vehicle agreed value', 'Specialist equipment insurance', 'Carer-assisted passenger cover', 'Disability support provider liability', 'WAV fleet policies'],
    faqs: [
      {
        q: 'How should a wheelchair accessible minibus be insured?',
        a: 'WAVs must be insured on an agreed-value basis that reflects the full replacement cost including all modifications — hydraulic lift, restraint systems, specialist fittings, and equipment. A standard market-value policy will significantly under-insure a modified vehicle. Get a replacement cost assessment annually and update the agreed value accordingly.',
      },
      {
        q: 'Are boarding and alighting incidents covered under a standard commercial motor policy?',
        a: 'Not always. Some policies define covered events narrowly around the vehicle being in motion. Disability transport involves significant risk during carer-assisted boarding and alighting. Confirm with your broker that your policy explicitly covers incidents occurring during the boarding and alighting process as well as while the vehicle is in transit.',
      },
      {
        q: 'Do my disability transport service contracts specify minimum insurance requirements?',
        a: 'Whaikaha-funded and MOH-funded service contracts often include minimum insurance requirements, particularly for liability limits. Review your funding agreements carefully and discuss these requirements with your broker to ensure your policy meets or exceeds the contracted minimums.',
      },
      {
        q: 'Can I insure a mixed fleet of WAVs and standard minibuses on one policy?',
        a: 'Yes — fleet policies can cover both modified and standard vehicles on a single schedule. Each vehicle needs to be correctly described with its agreed value and any specific endorsements. A broker with disability transport expertise can structure the fleet schedule appropriately.',
      },
      {
        q: 'What happens if a disability transport vehicle is off the road after an accident?',
        a: 'The service disruption from a WAV being off the road is significant — clients may miss medical appointments and support schedules are affected. Check whether your policy includes a replacement vehicle provision and, if so, whether the replacement vehicle meets accessibility requirements for your clients.',
      },
    ],
    relatedBlogSlugs: ['passenger-liability-insurance-nz', 'fleet-insurance-minibuses-nz', 'waka-kotahi-minibus-licence-requirements-nz'],
    heroImage: 'https://images.pexels.com/photos/6925355/pexels-photo-6925355.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Disability Support Minibus Insurance | WAV & Wheelchair Access | MinibusInsurance.co.nz',
    metaDesc: 'Disability support minibus insurance — WAV, wheelchair accessible vehicles, and modified minibuses. Specialist cover. Free quotes.',
  },
];
