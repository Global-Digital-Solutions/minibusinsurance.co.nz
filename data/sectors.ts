export interface Sector {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  keyNeeds: string[];
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
    keyNeeds: ['Named driver policies', 'Volunteer driver extension', 'Board of Trustees as insured entity', 'Student transport cover', 'Sports and excursion use', 'Holiday programme cover'],
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
    keyNeeds: ['Fleet cover for multiple vehicles', 'Any-driver policy options', 'Government entity risk profile', 'Community transport cover', 'High liability limits', 'Modified excess structures'],
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
    keyNeeds: ['Passenger liability cover', 'Hire and reward endorsement', 'High-kilometre allowances', 'PTO licence compliance', 'Commercial driver requirements', 'Fleet discount available'],
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
    keyNeeds: ['International passenger cover', 'Adventure tourism endorsements', 'Variable seasonal use', 'Multi-terrain cover', 'Airport transfer operations', 'Tourism operator liability'],
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
    keyNeeds: ['Not-for-profit risk assessment', 'Volunteer driver policies', 'Named driver options', 'Fundraising activity cover', 'Sports event transport', 'Community group discounts'],
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
    keyNeeds: ['Wheelchair accessible vehicle cover', 'Modified vehicle agreed value', 'Specialist equipment insurance', 'Carer-assisted passenger cover', 'Disability support provider liability', 'WAV fleet policies'],
    heroImage: 'https://images.pexels.com/photos/6925355/pexels-photo-6925355.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop',
    metaTitle: 'Disability Support Minibus Insurance | WAV & Wheelchair Access | MinibusInsurance.co.nz',
    metaDesc: 'Disability support minibus insurance — WAV, wheelchair accessible vehicles, and modified minibuses. Specialist cover. Free quotes.',
  },
];
