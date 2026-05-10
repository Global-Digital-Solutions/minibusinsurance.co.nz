export interface CoverageType {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  includes: string[];
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
    includes: ['Accidental damage', 'Third-party liability', 'Fire and theft', 'Windscreen cover', 'Passenger liability (optional add-on)', 'Replacement vehicle'],
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
    includes: ['Third-party property damage', 'Third-party bodily injury', 'Fire damage', 'Theft and attempted theft', 'Towing after fire or theft'],
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
    includes: ['Third-party property damage', 'Third-party bodily injury', 'Legal defence costs', 'Emergency towing (limited)'],
    fromPrice: 'From $350/year',
    metaTitle: 'Third Party Only Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Third party only minibus insurance — minimum cover for NZ operators. Compare providers and get a free quote.',
  },
  {
    slug: 'fleet-cover',
    name: 'Fleet Cover',
    icon: '🚌',
    shortDesc: 'Insure multiple minibuses under a single policy — ideal for schools, councils, and operators with 2+ vehicles.',
    description: 'Fleet insurance allows you to insure two or more minibuses under a single policy, often at a reduced per-vehicle premium. Fleet policies can be comprehensive or third-party and typically include a single renewal date, single excess, and consolidated claims management — reducing administration significantly for operators with multiple vehicles.',
    includes: ['2+ vehicles on one policy', 'Single renewal date', 'Consolidated excess', 'Named or any-driver options', 'Fleet discounts available', 'Comprehensive or third-party cover'],
    fromPrice: 'From $900/vehicle/year',
    metaTitle: 'Minibus Fleet Insurance | Cover Multiple Vehicles | MinibusInsurance.co.nz',
    metaDesc: 'Minibus fleet insurance for NZ operators with 2+ vehicles. Single policy, fleet discounts, flexible driver options. Get a free quote.',
  },
  {
    slug: 'passenger-liability',
    name: 'Passenger Liability',
    icon: '👥',
    shortDesc: 'Specific cover for legal liability to passengers injured while in or boarding your minibus.',
    description: 'Passenger liability insurance covers your legal liability to passengers who are injured while travelling in, boarding, or alighting from your minibus. While ACC covers most treatment costs, passengers may still be able to claim for additional damages in some circumstances. This cover is particularly important for commercial operators and schools.',
    includes: ['Passenger injury claims', 'Boarding/alighting incidents', 'Legal defence costs', 'Court-awarded damages', 'Settlement costs'],
    fromPrice: 'From $400/year',
    metaTitle: 'Passenger Liability Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Passenger liability insurance for minibus operators — protect against injury claims from passengers. Compare NZ providers. Free quotes.',
  },
  {
    slug: 'agreed-value',
    name: 'Agreed Value Cover',
    icon: '💰',
    shortDesc: 'Insure your minibus for a pre-agreed sum — guaranteed payout regardless of market depreciation.',
    description: 'Agreed value cover allows you to insure your minibus for a specific sum agreed between you and the insurer at the time the policy is set up. In the event of a total loss, you receive the agreed value regardless of what the market value is at that time. Particularly valuable for newer, modified, or specialty vehicles.',
    includes: ['Guaranteed agreed payout', 'No depreciation deductions', 'Pre-agreed sum at inception', 'Total loss certainty', 'Suitable for new and specialist vehicles'],
    fromPrice: 'From $1,400/year',
    metaTitle: 'Agreed Value Minibus Insurance | MinibusInsurance.co.nz',
    metaDesc: 'Agreed value minibus insurance — guaranteed payout on total loss, no depreciation deductions. Compare NZ providers. Free quotes.',
  },
];
