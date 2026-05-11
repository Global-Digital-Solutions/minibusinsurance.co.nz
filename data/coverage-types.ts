export interface CoverageFaq {
  q: string;
  a: string;
}

export interface CoverageType {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  longContent: string;
  includes: string[];
  excludes: string[];
  faqs: CoverageFaq[];
  relatedBlogSlugs: string[];
  fromPrice: string;
  metaTitle: string;
  metaDesc: string;
}

export const COVERAGE_TYPES: CoverageType[] = [
  {
    slug: 'comprehensive',
    name: 'Comprehensive Cover',
    icon: '🛡️',
    shortDesc: 'The highest level of protection — accidental damage, theft, fire, and full third-party liability.',
    description: 'Comprehensive minibus insurance is the highest level of protection available for operators. It covers accidental damage to your vehicle, third-party liability, fire, theft, and windscreen cover. Ideal for commercial operators, schools, and community fleets where any downtime has real consequences.',
    longContent: `Comprehensive minibus insurance is the recommended cover level for the vast majority of New Zealand operators — schools, community groups, commercial fleets, disability transport providers, and tourism operators all benefit from the full protection that comprehensive cover provides. Understanding exactly what it includes, and what the limits of the cover are, helps operators make informed decisions and avoid costly surprises at claim time.

**What Comprehensive Cover Includes**

At its core, comprehensive minibus insurance covers four main categories of loss. Accidental damage covers repairs to your vehicle following a collision — whether at-fault or not-at-fault — as well as damage from events such as flooding, hail, falling objects, or fire. Third-party liability covers your legal obligation to compensate other parties for damage you cause to their property or for bodily injury. Theft and fire covers the cost of replacing or repairing your vehicle following theft, attempted theft, arson, or accidental fire. Windscreen and glass cover is typically included and covers replacement of cracked or broken glass without affecting your no-claims status, depending on the policy.

Most comprehensive policies also include a range of extensions: emergency accommodation if you are stranded far from home, towing costs, and in some cases a temporary replacement vehicle while your minibus is under repair. These extensions vary significantly between providers — checking what is included in the base comprehensive premium versus what is available at extra cost is important when comparing quotes.

**Agreed Value vs Market Value**

Comprehensive policies can be written on either an agreed value or market value basis. Under a market value policy, the payout in the event of a total loss is the insurer's assessment of what your vehicle was worth on the open market at the time of the loss — which may be significantly less than you expect, particularly for older vehicles. Under an agreed value policy, you and the insurer agree on the insured value at the time the policy is set up, and that is the amount paid in a total loss, regardless of market depreciation.

For minibuses used in active operations — particularly modified vehicles, agreed-value cover provides far greater certainty. The premium is typically slightly higher than a market-value policy, but the difference in payout for a total loss can be tens of thousands of dollars. Schools and disability transport operators with vehicles that carry both a market value and a significant modification value should always insist on agreed-value cover.

**The Role of Excess**

The excess is the amount you contribute to each claim. Standard comprehensive minibus policies have a base excess set at inception — typically $500 to $2,500 depending on the vehicle value, operator type, and driver history. Additional excesses may apply for young or inexperienced drivers, drivers with prior claims, or specific vehicle types.

Choosing a higher voluntary excess reduces the premium. For operators with clean claims histories who use their vehicles regularly and have a degree of financial resilience, a higher excess can make economic sense. For operators managing tight budgets — community groups or small schools — a lower excess provides more certainty that a claim won't trigger significant out-of-pocket costs.

**What Comprehensive Cover Does Not Include**

Even the most comprehensive policy has exclusions. Mechanical breakdown and wear and tear are always excluded — insurance covers sudden, unexpected events, not gradual deterioration. Use outside the policy's stated scope is excluded: a commercial hire and reward policy used for a private trip may still be fine, but a community group policy used for paid charter work without a hire and reward endorsement may be excluded.

Driver exclusions are another critical area. If a driver who is not listed on a named driver policy — or who doesn't meet the criteria of an any-driver policy — is at the wheel at the time of an incident, the insurer may decline the claim entirely. Ensure all regular drivers are correctly covered under the policy.

**Comparing Comprehensive Quotes**

When comparing comprehensive quotes, look beyond the premium. Check the excess level, the scope of included extensions, whether agreed value or market value is offered, the insurer's financial strength rating, and the claims process. New Zealand's major commercial motor insurers — NZI, Vero, and specialist brokers — all offer comprehensive policies with varying features. An independent adviser can compare policy wording, not just price, and identify the option that provides the best overall value for your operation.`,
    includes: ['Accidental damage', 'Third-party property damage', 'Third-party bodily injury', 'Fire and theft', 'Windscreen and glass', 'Towing costs', 'Emergency accommodation', 'Replacement vehicle (where included)'],
    excludes: ['Mechanical breakdown', 'Wear and tear', 'Unlisted drivers (named driver policies)', 'Use outside stated policy scope', 'Pre-existing damage'],
    faqs: [
      {
        q: 'Is comprehensive cover worth it for an older minibus?',
        a: 'It depends on the vehicle\'s value and how critical it is to your operation. If the minibus is central to your activities — a school\'s only transport vehicle, a community group\'s lifeline — comprehensive cover protects against the disruption and replacement cost of losing it to an at-fault accident. If it is a low-value, non-essential vehicle, third party fire and theft may be sufficient.',
      },
      {
        q: 'What is the difference between agreed value and market value?',
        a: 'An agreed value policy pays the pre-agreed insured sum in a total loss, regardless of market depreciation. A market value policy pays what the insurer assesses the vehicle was worth at the time of loss. For minibuses with modifications or high operational value, agreed value provides far greater certainty.',
      },
      {
        q: 'Does comprehensive cover include passenger liability?',
        a: 'Most comprehensive policies include third-party liability but passenger liability (covering claims from your own passengers) is often a separate add-on or endorsement. Ask your broker whether passenger liability is included and what the limit is — it is particularly important for schools, commercial operators, and disability transport providers.',
      },
      {
        q: 'What happens if an unlisted driver has an accident?',
        a: 'Under a named driver policy, if an unlisted driver is at the wheel at the time of an accident, the insurer may decline the claim. Under an any-driver policy, any driver who meets the stated eligibility criteria is covered. Ensure all regular drivers are correctly covered under your policy type.',
      },
      {
        q: 'Can I reduce my premium by choosing a higher excess?',
        a: 'Yes. Increasing your voluntary excess reduces the base premium. This can be a good strategy for operators with clean claims histories and financial resilience to cover the higher excess if a claim occurs. However, community groups or schools with tight budgets should weigh the premium saving against the out-of-pocket risk.',
      },
    ],
    relatedBlogSlugs: ['complete-guide-minibus-insurance-nz', 'minibus-insurance-costs-nz', 'comparing-minibus-insurance-providers-nz'],
    fromPrice: 'From $1,200/year',
    metaTitle: 'Comprehensive Minibus Insurance | Compare & Get Quotes | MinibusInsurance.co.nz',
    metaDesc: 'Comprehensive minibus insurance — accidental damage, fire, theft, and full third-party liability. Compare NZ providers and get a free quote.',
  },
  {
    slug: 'third-party-fire-theft',
    name: 'Third Party Fire & Theft',
    icon: '🔥',
    shortDesc: 'Mid-tier cover protecting against third-party claims plus fire and theft of your vehicle.',
    description: 'Third party, fire and theft cover is a popular mid-tier option for operators with older vehicles or lower asset values who still want protection against fire, theft, and third-party liability claims. Does not cover accidental damage to your own vehicle.',
    longContent: `Third party fire and theft insurance is the mid-tier option in the NZ commercial minibus insurance market — sitting between comprehensive cover and the bare minimum of third party only. It protects against your liability to others plus two specific risks to your own vehicle: fire and theft. Understanding where it is appropriate, and where its limitations become a liability, helps operators make an informed decision.

**What Third Party Fire and Theft Covers**

The third-party liability section of this policy covers your legal obligation to compensate other parties if your minibus causes damage to their property or injures them. In a collision where your driver is at fault, third-party cover pays to repair the other vehicle, compensates other parties for property damage, and covers legal defence and third-party injury claims. This section is the same as a comprehensive policy's third-party liability component.

The fire and theft component covers the cost of replacing or repairing your vehicle if it is stolen or damaged by fire. This protects against two of the most financially significant total-loss events — a vehicle stolen and not recovered, or one destroyed by fire. Towing following a fire or theft incident is typically included.

What it does not cover is accidental damage to your own vehicle. If your driver collides with a pole, another vehicle, or a roadside hazard and your minibus is damaged, the repair cost is entirely your responsibility. For a minibus worth $15,000, a significant collision could cost $5,000–$12,000 in repairs — potentially more than a year's premium differential between third party fire and theft and comprehensive.

**When Third Party Fire and Theft Makes Sense**

Third party fire and theft is most appropriate when the vehicle's market value is genuinely low — typically under $8,000–$10,000 — and when the operator has the financial capacity to absorb the cost of accidental damage without claims. It is also appropriate for backup vehicles that are rarely used, or vehicles approaching end-of-life where the operator is comfortable absorbing the risk of damage.

It is less appropriate when the vehicle is in regular operational use, when the operator cannot easily absorb an unexpected repair bill, or when the vehicle carries a significant modification value (such as wheelchair equipment) that would not be captured by the basic theft/fire sum insured.

**Third Party Liability: Not Minimum Cover**

A common misconception is that third party fire and theft represents the minimum commercially responsible level of cover. In practice, for any operator carrying passengers — regardless of whether it is commercial or community — third party liability cover is the essential baseline. It protects you from the potentially unlimited financial exposure of a claim by another party injured in an accident where your driver was at fault.

Without at least third party liability cover, a single serious accident could result in claims that dwarf the vehicle's value and threaten the financial viability of the organisation. This is why third party only and third party fire and theft are rarely appropriate for active passenger-carrying operations — the savings on own-vehicle damage cover are real, but they need to be weighed against the financial risk of an uninsured repair.

**Calculating the True Cost Comparison**

When deciding between comprehensive and third party fire and theft, calculate the expected annual premium difference, then estimate the probability and expected cost of an accidental damage event over the policy period. If the premium saving over three years is $1,500 and there is a reasonable probability of a $5,000+ repair in that period, the economics typically favour comprehensive. A broker can help you run this calculation for your specific vehicle and operation.`,
    includes: ['Third-party property damage', 'Third-party bodily injury', 'Fire damage (own vehicle)', 'Theft and attempted theft', 'Towing after fire or theft'],
    excludes: ['Accidental damage to own vehicle', 'Flood damage', 'Hail damage', 'Collision damage (own vehicle)', 'Mechanical breakdown'],
    faqs: [
      {
        q: 'Does third party fire and theft cover my vehicle if I hit another car?',
        a: 'Third party fire and theft covers the damage you cause to the other vehicle (third-party liability). It does not cover the damage to your own minibus from the collision. If you want your own vehicle repaired following a collision, you need comprehensive cover.',
      },
      {
        q: 'Is third party fire and theft suitable for a school minibus?',
        a: 'Generally not recommended for active school use. If the vehicle is in regular service and the school cannot easily absorb a large repair bill, comprehensive cover provides better protection. Third party fire and theft is more appropriate for low-value, rarely used, or backup vehicles.',
      },
      {
        q: 'Is flood damage covered under third party fire and theft?',
        a: 'No — flood damage is typically only covered under comprehensive policies. Third party fire and theft covers fire and theft of your vehicle, not weather-related damage. If your operation is in a flood-prone area, comprehensive cover is important.',
      },
      {
        q: 'Can I switch from third party fire and theft to comprehensive mid-policy?',
        a: 'Usually yes, subject to the insurer\'s terms. You may need to pay a premium adjustment for the remainder of the policy period. Contact your broker to request the change — it can typically be done quickly with a policy endorsement.',
      },
      {
        q: 'What is the typical annual cost difference between comprehensive and third party fire and theft?',
        a: 'The premium difference varies by vehicle value, operator type, and driver history. For a 12-seater minibus worth $15,000, the difference is typically $400–$800 per year. Given the potential cost of an uninsured repair, most operators find the difference justifies the upgrade to comprehensive.',
      },
    ],
    relatedBlogSlugs: ['minibus-insurance-costs-nz', 'complete-guide-minibus-insurance-nz', 'commercial-vs-private-minibus-insurance'],
    fromPrice: 'From $600/year',
    metaTitle: 'Third Party Fire & Theft Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Third party fire and theft minibus insurance — protect against third-party claims, fire and theft. Compare NZ providers. Free quotes.',
  },
  {
    slug: 'third-party-only',
    name: 'Third Party Only',
    icon: '⚖️',
    shortDesc: 'The minimum legal requirement — covers damage or injury you cause to others.',
    description: 'Third party only is the minimum level of motor vehicle insurance available and covers damage or injury that your minibus causes to other people or their property. It does not cover damage to your own vehicle. Suitable only for very low-value vehicles where comprehensive cover is uneconomical.',
    longContent: `Third party only insurance is the minimum level of motor vehicle cover available in New Zealand. For commercial minibus operators carrying passengers, it represents the absolute floor of legal protection — and in most practical cases, it is not sufficient on its own for passenger-carrying operations. Understanding what it covers, what it doesn't, and when it might be appropriate helps operators make responsible decisions.

**What Third Party Only Covers**

Third party only cover provides liability protection for damage or injury you cause to other people or their property. If your driver is at fault in an accident and damages another vehicle, third party cover pays to repair or replace that vehicle. If the accident causes injury to the other driver or passengers in the other vehicle, third party cover pays for associated claims up to the policy limit.

It also covers legal defence costs — if the other party pursues a civil claim, your insurer will defend the claim and pay any awarded damages, up to the liability limit.

This is the full scope of what third party only covers. It provides no cover for your own vehicle — not for collision damage, theft, fire, flood, hail, or any other event that damages your own asset.

**Third Party Only and Passenger-Carrying Operations**

For passenger-carrying operations, third party only creates a significant protection gap. It does not include passenger liability cover (claims from your own passengers), and it provides no protection for the vehicle itself. If the vehicle is essential to your operation — which it almost always is — losing it to an at-fault accident with no vehicle cover creates major operational and financial consequences.

Most advisers recommend against third party only for any active passenger transport operation. The premium saving is typically modest relative to the risk exposure, and the reputational and operational consequences of an uninsured total loss are severe.

**When Third Party Only May Be Appropriate**

The narrow circumstances where third party only might be appropriate: a very low-value vehicle (under $3,000 market value) that is rarely used, where the operator has the financial capacity to absorb a total loss, and where the vehicle is not essential to operations. An older minibus kept as a backup that is driven only a few times per year might fit this profile.

Even then, the absence of fire and theft cover means a vehicle stored in a yard is at risk with no protection. Most operators who consider third party only end up concluding that at least third party fire and theft is a better risk balance.

**Not-at-Fault Accidents and Third Party Only**

One source of confusion is the not-at-fault scenario. If another driver causes an accident that damages your minibus, you may be able to recover costs from their insurer — but only if the other driver is insured and their liability can be established. In New Zealand, where approximately 15–20% of vehicles are uninsured, there is a real risk of being hit by an uninsured driver with no recovery option. A comprehensive policy removes this dependency by covering your own vehicle regardless of fault.

**Liability Limits**

Third party only policies have a stated liability limit — the maximum amount the insurer will pay for a single incident. For commercial minibus operations, standard third party limits may be insufficient if a serious multi-vehicle accident results in significant property damage and injury claims. Ensuring the liability limit is appropriate for the scale and risk of your operation is important even for operators who choose the minimum cover level.`,
    includes: ['Third-party property damage', 'Third-party bodily injury liability', 'Legal defence costs', 'Court-awarded damages (to liability limit)'],
    excludes: ['Own vehicle damage (any cause)', 'Fire and theft of own vehicle', 'Passenger liability', 'Flood and weather damage', 'Mechanical breakdown'],
    faqs: [
      {
        q: 'Is third party only sufficient for a community minibus?',
        a: 'No — third party only provides no cover for your own vehicle and no passenger liability protection. For any active passenger-carrying operation, at least third party fire and theft (ideally comprehensive) is recommended. The premium saving is typically not worth the risk exposure.',
      },
      {
        q: 'What happens if an uninsured driver hits my minibus and I have third party only?',
        a: 'Third party only covers damage you cause to others. If an uninsured driver damages your vehicle, you have no insurance claim available — you would need to pursue the other driver personally, which may be difficult or impossible. A comprehensive policy covers your vehicle regardless of the other driver\'s insurance status.',
      },
      {
        q: 'What are the liability limits on a third party only policy?',
        a: 'Liability limits vary by policy and insurer. Standard commercial vehicle policies typically offer limits from $1M to $5M or more. For passenger-carrying operations, ensure the liability limit is appropriate for the potential scale of a serious incident — especially if international tourists or multiple passengers are involved.',
      },
      {
        q: 'Can I add passenger liability to a third party only policy?',
        a: 'Some insurers offer passenger liability as an add-on to third party only policies. If you are carrying passengers in any capacity, passenger liability cover is strongly recommended. However, upgrading to at least third party fire and theft or comprehensive is usually a more cost-effective overall approach.',
      },
      {
        q: 'Is third party only cover a legal requirement for minibuses?',
        a: 'New Zealand does not mandate a specific level of insurance for motor vehicles, but operating without adequate insurance is legally and financially irresponsible. For commercial operators, maintaining adequate insurance is also a condition of a Transport Service Licence.',
      },
    ],
    relatedBlogSlugs: ['commercial-vs-private-minibus-insurance', 'complete-guide-minibus-insurance-nz', 'minibus-insurance-costs-nz'],
    fromPrice: 'From $350/year',
    metaTitle: 'Third Party Only Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Third party only minibus insurance — minimum cover for NZ operators. Compare providers and get a free quote.',
  },
  {
    slug: 'fleet-cover',
    name: 'Fleet Cover',
    icon: '🚌',
    shortDesc: 'Insure multiple minibuses under a single policy — ideal for schools, councils, and operators with 2+ vehicles.',
    description: 'Fleet insurance allows you to insure two or more minibuses under a single policy, often at a reduced per-vehicle premium. Fleet policies can be comprehensive or third-party and typically include a single renewal date, single excess, and consolidated claims management.',
    longContent: `Fleet minibus insurance is the most efficient solution for any organisation operating two or more vehicles. From a two-minibus school fleet to a 15-vehicle council transport operation, fleet cover provides administrative simplicity, better per-vehicle pricing, and a more consistent claims experience than managing separate individual policies. Here is what New Zealand operators need to know.

**When Fleet Cover Makes Sense**

Fleet policies are available for as few as two vehicles with most commercial motor insurers, though the largest pricing advantages typically emerge at three or more vehicles, with substantial fleet discounts available at five or more. If your organisation owns, operates, or is responsible for two or more minibuses — even if they are different makes, ages, or configurations — a fleet policy is almost certainly the better approach.

The administrative case alone is compelling. Instead of managing separate renewal dates, separate premium payments, separate policy documents, and separate claims contacts for each vehicle, a fleet policy consolidates everything. One renewal date, one invoice, one excess structure, one insurer relationship.

**Named Driver vs Any Driver Fleet Policies**

The choice between named driver and any driver fleet policies is one of the most important structural decisions for fleet operators.

Under a named driver fleet policy, each vehicle's schedule lists specific approved drivers. Only those listed drivers are covered when operating that vehicle. Adding new drivers requires a policy update. This structure works well for small organisations with a stable, known driver pool — a school with five consistent staff drivers, or a community transport service with a fixed roster.

Under an any driver fleet policy, any driver who meets specified eligibility criteria — typically a minimum age (often 25+), a full New Zealand driver licence held for a minimum period, a current P endorsement, and no serious traffic or insurance history — can drive any vehicle without being individually named. This is the more practical solution for larger organisations with rotating rosters, seasonal staff, or volunteer programmes.

Any driver policies are generally priced higher than named driver equivalents, but the administrative flexibility and coverage certainty they provide is worth the premium for most larger operators.

**Single Excess and Claims Management**

One of the most valuable features of a fleet policy is the single excess structure. Instead of separate excesses for each vehicle, a fleet policy typically applies one excess per incident — regardless of which vehicle or vehicles are involved. For organisations that have multiple vehicles in a single accident (rare but possible), this can significantly limit out-of-pocket costs.

Claims management is also consolidated — one adjuster, one claims contact, one process across the fleet. For large operators with vehicle fleets, this simplification has genuine administrative value.

**Fleet Schedules and Mid-Term Changes**

Fleet policies maintain a schedule — a list of all insured vehicles with their agreed values, registration numbers, and any specific endorsements. Adding a vehicle mid-term is typically straightforward: notify the insurer or broker, provide the vehicle details and agreed value, and cover commences from the date of addition with a pro-rata premium adjustment for the remainder of the policy period.

Keeping the fleet schedule current is a critical responsibility of fleet operators. An unreported vehicle — one that was added to the fleet without being added to the policy — may not be covered at claim time. Build a process into your vehicle acquisition workflow to notify your broker whenever a vehicle is added or removed from the fleet.

**Discount Structures**

Fleet discounts are typically applied as a percentage reduction on the per-vehicle premium, increasing as the fleet grows. A 5-vehicle fleet might attract a 10–15% discount per vehicle compared to individual policies; a 15-vehicle fleet might attract 20–25% or more, depending on the insurer and the fleet's claims history. The fleet's overall claims experience — the ratio of claims paid to premiums received over the fleet lifetime — directly influences the discount offered at renewal.

Maintaining a low claims frequency across the fleet is the most effective way to secure and retain fleet discounts long-term. Driver training programmes, proactive vehicle maintenance, and clear incident reporting procedures all contribute to better claims experience.`,
    includes: ['2+ vehicles under one policy', 'Single renewal date', 'Single excess per incident', 'Named or any-driver options', 'Fleet pricing discounts', 'Mid-term vehicle additions', 'Consolidated claims management'],
    excludes: ['Mechanical breakdown', 'Wear and tear', 'Unlisted drivers (under named driver policies)', 'Drivers not meeting any-driver criteria', 'Vehicles not listed on the fleet schedule'],
    faqs: [
      {
        q: 'How many vehicles do I need to qualify for fleet insurance?',
        a: 'Most commercial motor insurers offer fleet policies for two or more vehicles. The largest pricing discounts typically start at three or five vehicles. Even a two-vehicle fleet benefits from the administrative simplicity of a single policy.',
      },
      {
        q: 'Can I mix vehicle types on a fleet policy?',
        a: 'Yes. Fleet policies can typically cover different makes, models, ages, and configurations on a single schedule. Wheelchair accessible vehicles and standard minibuses can both be included, with each vehicle carrying its own agreed value and any specific endorsements.',
      },
      {
        q: 'What is the difference between a named driver and any driver fleet policy?',
        a: 'Named driver policies list specific approved drivers per vehicle — only those listed are covered. Any driver policies allow any driver meeting stated criteria (age, licence type, clean record) to drive any fleet vehicle. Any driver policies are more administratively flexible and better suited to organisations with large or rotating driver pools.',
      },
      {
        q: 'How do I add a new vehicle to the fleet mid-policy?',
        a: 'Contact your broker or insurer and provide the new vehicle\'s details: registration, make, model, year, agreed value, and any modifications. Cover typically commences from the date of notification, with a pro-rata premium adjustment. Build this step into your vehicle acquisition process.',
      },
      {
        q: 'Does fleet cover reduce my premium compared to individual policies?',
        a: 'For three or more vehicles, fleet cover is typically less expensive per vehicle than equivalent individual policies. The discount reflects both the administrative efficiency for the insurer and the fleet\'s overall risk profile. Discounts increase with fleet size and improve with a strong claims history.',
      },
    ],
    relatedBlogSlugs: ['fleet-insurance-minibuses-nz', 'minibus-insurance-costs-nz', 'minibus-insurance-claims-history-nz'],
    fromPrice: 'From $900/vehicle/year',
    metaTitle: 'Minibus Fleet Insurance | Cover Multiple Vehicles | MinibusInsurance.co.nz',
    metaDesc: 'Minibus fleet insurance for NZ operators with 2+ vehicles. Single policy, fleet discounts, flexible driver options. Get a free quote.',
  },
  {
    slug: 'passenger-liability',
    name: 'Passenger Liability',
    icon: '👥',
    shortDesc: 'Specific cover for legal liability to passengers injured while in or boarding your minibus.',
    description: 'Passenger liability insurance covers your legal liability to passengers who are injured while travelling in, boarding, or alighting from your minibus. While ACC covers most treatment costs, passengers may still be able to claim for additional damages in some circumstances.',
    longContent: `Passenger liability insurance is one of the most commonly misunderstood cover types in the New Zealand minibus insurance market. Many operators assume that ACC — New Zealand's no-fault accident compensation scheme — fully covers any passenger injuries. While ACC is comprehensive in many respects, it does not cover all potential claims, and understanding the gaps is essential for operators who carry passengers regularly.

**What ACC Covers and What It Doesn't**

The Accident Compensation Corporation provides no-fault cover for physical injuries arising from accidents in New Zealand. ACC pays for medical treatment, rehabilitation, and a portion (80%) of lost income for injured people, including vehicle passengers. For most injuries — a broken arm, whiplash, a soft tissue injury — ACC provides the primary financial support without any need to prove fault or pursue the operator.

However, ACC does not cover everything. Pain and suffering claims are not covered — ACC focuses on economic loss, not general damages. Property damage sustained by passengers (personal belongings damaged in an accident) is not covered. Psychological injury that is not directly connected to a physical accident event may have limited ACC coverage. In exceptional cases, passengers may have additional civil claims beyond what ACC covers, particularly for catastrophic injuries or losses.

**When Passenger Liability Becomes Critical**

The situations where passenger liability cover becomes critically important are the edge cases that most operators hope will never occur: a serious accident involving multiple injured passengers, an incident involving a passenger with pre-existing conditions that are worsened by an accident, property damage claims for expensive items, or scenarios where the passenger or their family pursues legal action arguing negligence beyond what ACC addresses.

For commercial operators, tourism operators carrying international visitors, and disability support providers, these edge cases carry real financial exposure. International tourists may pursue claims in their home jurisdictions. Disability transport passengers are more vulnerable and injuries may be more severe. Commercial operators face higher scrutiny given the paid nature of the service.

**Passenger Liability as an Add-On**

In many comprehensive minibus policies, passenger liability is included as part of the third-party liability section — but at a limit that may be insufficient for serious multi-passenger incidents. Some policies include it explicitly; others require a specific passenger liability endorsement or a separate stand-alone passenger liability policy.

Operators should not assume that their comprehensive cover's stated liability limit applies equally to all passenger injury scenarios. Review the policy wording with your broker to identify the specific passenger liability limit and whether it can be increased.

**Recommended Limits by Operator Type**

Schools and community operators: a minimum of $1M passenger liability, ideally $2M–$5M. Commercial shuttle and charter operators: $5M minimum, with $10M recommended for high-volume or tourism operations. Disability support providers: $5M–$10M, reflecting the vulnerability of passengers and the potential severity of claims. Tourism operators carrying international visitors: $10M minimum, given the additional claims exposure from overseas jurisdictions.

These are starting-point recommendations — your broker may advise differently based on your specific operation, and the cost of increasing liability limits is often modest relative to the additional protection provided.

**Boarding and Alighting: The Often-Overlooked Exposure**

Passenger injuries during boarding and alighting are a significant real-world risk that is sometimes under-covered. An elderly passenger who falls while boarding, a wheelchair user who is injured during a carer-assisted lift malfunction, or a student who is hurt getting on or off a step — all of these are passenger liability events that occur while the vehicle is stationary.

Some standard commercial motor policies define "in use" narrowly to mean while the vehicle is in motion. A boarding or alighting incident could fall outside this definition and outside the passenger liability cover. Confirm with your broker that the policy explicitly covers passenger liability during boarding and alighting as well as while the vehicle is moving.`,
    includes: ['Passenger injury claims (in transit)', 'Boarding and alighting incidents', 'Legal defence costs', 'Court-awarded damages', 'Settlement costs', 'Property damage claims (passenger belongings)'],
    excludes: ['Injuries covered in full by ACC', 'Pre-existing conditions unrelated to the incident', 'Wilful misconduct by passengers', 'Incidents outside policy scope'],
    faqs: [
      {
        q: 'Does ACC mean I don\'t need passenger liability insurance?',
        a: 'No. While ACC covers most physical injury treatment and lost income, it does not cover pain and suffering, property damage to passenger belongings, or some civil claims that exceed ACC\'s scope. Passenger liability insurance covers your legal exposure for claims that ACC does not fully address.',
      },
      {
        q: 'Is passenger liability included in my comprehensive policy?',
        a: 'Some comprehensive policies include a passenger liability section; others require a specific endorsement. Check your policy wording for the explicit passenger liability limit. If it is absent or insufficient for your operation type, ask your broker to add or increase it.',
      },
      {
        q: 'How much passenger liability cover do I need?',
        a: 'The appropriate limit depends on your operation. Schools and community groups: $1M–$5M. Commercial operators and tourism operators: $5M–$10M. Disability transport and high-risk operations: $10M+. Your broker can recommend the right limit for your specific circumstances.',
      },
      {
        q: 'Are international tourists covered under my passenger liability policy?',
        a: 'Your policy covers your legal liability in New Zealand. However, international visitors may pursue claims under their home jurisdiction\'s legal frameworks, potentially creating larger claims than domestic passengers. Tourism operators should carry higher limits to account for this additional exposure.',
      },
      {
        q: 'Does passenger liability cover incidents during boarding and alighting?',
        a: 'It should, but not all policies explicitly state this. Check the policy wording to confirm that passenger liability applies during boarding and alighting, not just when the vehicle is in motion. This is particularly important for disability transport operators.',
      },
    ],
    relatedBlogSlugs: ['passenger-liability-insurance-nz', 'commercial-vs-private-minibus-insurance', 'tourism-operator-minibus-insurance'],
    fromPrice: 'From $400/year',
    metaTitle: 'Passenger Liability Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Passenger liability insurance for minibus operators — protect against injury claims from passengers. Compare NZ providers. Free quotes.',
  },
  {
    slug: 'agreed-value',
    name: 'Agreed Value Cover',
    icon: '💰',
    shortDesc: 'Insure your minibus for a pre-agreed sum — guaranteed payout regardless of market depreciation.',
    description: 'Agreed value cover allows you to insure your minibus for a specific sum agreed between you and the insurer at the time the policy is set up. In the event of a total loss, you receive the agreed value regardless of what the market value is at that time.',
    longContent: `Agreed value cover is a feature of commercial motor insurance that provides financial certainty in the event of a total loss — a vehicle that is written off following a collision, fire, or theft. Understanding how it works, when it is appropriate, and how to set the right agreed value helps operators avoid one of the most common and costly errors in minibus insurance: discovering that a market-value policy pays out far less than expected.

**How Agreed Value Works**

When you take out an agreed value policy, you and the insurer agree at the outset on the sum insured for the vehicle. This agreed value is endorsed on the policy. If the vehicle is subsequently written off — declared a total loss by the insurer following an incident — the insurer pays the agreed value in full, less any applicable excess.

The key difference from a market value policy is certainty. A market value policy pays what the insurer assesses the vehicle was worth on the open market at the time of loss. If the vehicle has depreciated significantly, or if the insurer's market assessment is conservative, the payout may be considerably less than the operator expected — and potentially less than the replacement cost.

**The Problem with Market Value Policies for Minibuses**

Minibuses depreciate at different rates to standard cars. An older HiAce or Mitsubishi Rosa used for school transport may have a low market value but remains fully operational and cost more in maintenance and upkeep to keep at that standard. A replacement will cost the operator far more than the market write-off payout.

More significantly, modified minibuses — wheelchair accessible vehicles, vehicles with fitted seating configurations, tourism vehicles with roof racks and specialist fittings — carry modification costs that are invisible in standard market value assessments. A base vehicle worth $20,000 with $60,000 in wheelchair accessibility modifications has a true replacement cost of $80,000, but a market value assessment may yield only $20,000–$25,000.

**Setting the Right Agreed Value**

The agreed value should reflect the true replacement cost of the vehicle — not just its current market value. For standard minibuses, this means checking current dealer prices for equivalent vehicles at the same specification, age, and condition. For modified vehicles, it means adding the full cost of modifications to the base vehicle replacement cost.

Agreed values should be reviewed annually. Minibus values fluctuate, replacement parts availability changes, and modification costs change over time. Setting an agreed value and leaving it unchanged for three years may result in under-insurance if costs have increased.

**Agreed Value and Fleet Policies**

Fleet policies can include agreed values for each vehicle in the fleet schedule. Each vehicle's agreed value should be individually assessed — a five-year-old HiAce will have a different agreed value than a three-year-old WAV, and each should reflect the true cost of replacing that specific asset.

When onboarding a fleet to a new insurer, providing a detailed fleet register with the replacement cost assessment for each vehicle helps the insurer accurately set agreed values and avoids underinsurance disputes at claim time.

**New Vehicles vs Older Vehicles**

For new or near-new minibuses, agreed value cover is particularly valuable because it protects against the sharp depreciation that occurs in the first few years of a vehicle's life. A brand-new minibus purchased for $95,000 might have a market value of $65,000 two years later — but the agreed value set at inception still pays $95,000 (less any policy-level depreciation adjustments agreed at inception).

For older vehicles with genuinely low market values, the premium difference between market value and agreed value cover narrows, and the decision becomes less financially significant. But for any vehicle with modifications, equipment, or specialist fittings, agreed value is almost always the right choice regardless of age.`,
    includes: ['Agreed payout on total loss', 'No depreciation deductions at claim', 'Pre-agreed sum set at inception', 'Annual review option', 'Covers modification value when agreed'],
    excludes: ['Agreed value does not apply to partial loss repairs', 'Modifications not disclosed at inception', 'Annual value not reviewed — may result in under-insurance if costs increase'],
    faqs: [
      {
        q: 'Why is agreed value better than market value for a minibus?',
        a: 'Market value fluctuates with depreciation and market conditions, meaning a write-off payout may be significantly less than you expect. Agreed value provides certainty — you know exactly what you will receive in a total loss. For modified vehicles, agreed value captures the full replacement cost including modifications.',
      },
      {
        q: 'How do I set the right agreed value for my minibus?',
        a: 'The agreed value should reflect the current replacement cost — what it would cost to buy an equivalent vehicle today. For modified vehicles, include the cost of modifications. Check current dealer prices for comparable vehicles and discuss the appropriate agreed value with your broker annually.',
      },
      {
        q: 'Does agreed value cover apply to repairs as well as total loss?',
        a: 'No. Agreed value applies specifically to total loss payouts. Partial loss claims (repairs to a damaged vehicle) are handled on the basis of actual repair costs, regardless of the agreed value. The agreed value only determines the payout when the vehicle is written off.',
      },
      {
        q: 'Is agreed value cover more expensive than market value?',
        a: 'The premium for agreed value cover is typically slightly higher than market value, as the insurer is committing to a known, higher payout in a total loss scenario. However, the premium difference is usually modest, and the financial certainty it provides — especially for modified or high-value vehicles — is well worth the cost.',
      },
      {
        q: 'What happens if I don\'t review my agreed value annually?',
        a: 'If your agreed value falls below the true replacement cost, you may be under-insured. Conversely, if vehicle values fall and you don\'t adjust, you may be paying for more cover than necessary. Reviewing the agreed value at each annual renewal is good practice and something your broker should prompt you to do.',
      },
    ],
    relatedBlogSlugs: ['complete-guide-minibus-insurance-nz', 'minibus-insurance-costs-nz', 'fleet-insurance-minibuses-nz'],
    fromPrice: 'From $1,400/year',
    metaTitle: 'Agreed Value Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Agreed value minibus insurance — guaranteed payout on total loss, no depreciation deductions. Compare NZ providers. Free quotes.',
  },
];
