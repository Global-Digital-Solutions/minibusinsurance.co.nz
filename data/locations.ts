export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  operatorTypes: string[];
  metaTitle: string;
  metaDesc: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: 'auckland',
    name: 'Auckland',
    region: 'Auckland',
    description: 'Auckland is home to the largest concentration of commercial minibus operators in New Zealand — from school transport providers and community health services to tourism shuttles and disability support organisations. With high traffic density, longer commute distances, and a diverse range of operator types, Auckland minibus operators face unique risk profiles that specialist insurers account for in their underwriting.',
    operatorTypes: ['School transport', 'Community health services', 'Tourism shuttles', 'Airport transfers', 'Disability support', 'Corporate fleets'],
    metaTitle: 'Minibus Insurance Auckland | Compare & Get Quotes | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Auckland operators — schools, community groups, commercial fleets. Compare NZI, Vero, Ando and more. Free quotes from licensed advisers.',
  },
  {
    slug: 'wellington',
    name: 'Wellington',
    region: 'Wellington',
    description: 'Wellington\'s compact urban geography and strong public sector presence creates a distinct minibus insurance market. Government agencies, educational institutions, and community organisations dominate operator types. Wellington\'s hilly terrain and challenging weather can affect risk assessments, and advisers familiar with the region can help operators find appropriate cover at competitive rates.',
    operatorTypes: ['Government agencies', 'Educational institutions', 'Community organisations', 'Tourism operators', 'Disability services', 'Corporate transport'],
    metaTitle: 'Minibus Insurance Wellington | Schools, Community & Fleet | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Wellington operators — government, schools, tourism and community groups. Licensed advisers. Free quotes from leading NZ providers.',
  },
  {
    slug: 'christchurch',
    name: 'Christchurch',
    region: 'Canterbury',
    description: 'Christchurch and the wider Canterbury region has seen significant growth in community transport following the earthquakes of 2010–2011. Disability support services, aged care providers, and schools are major minibus operators in the region. The flat terrain and well-maintained road network make Canterbury an attractive risk profile for insurers, often resulting in competitive premiums.',
    operatorTypes: ['Disability support services', 'Aged care providers', 'Schools and kura', 'Tourism operators', 'Community groups', 'Event transport'],
    metaTitle: 'Minibus Insurance Christchurch | Canterbury Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Christchurch and Canterbury operators. Schools, aged care, disability services and commercial fleets. Free quotes from licensed advisers.',
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'Waikato',
    description: 'Hamilton is the commercial hub of the Waikato and serves as a transport centre for the wider region. Schools, community organisations, and rural tourism operators are significant minibus users. The agricultural economy also drives demand for worker transport, which requires specific endorsements for hire and reward operations.',
    operatorTypes: ['Schools and kura', 'Community organisations', 'Rural tourism', 'Worker transport', 'Sports clubs', 'Healthcare providers'],
    metaTitle: 'Minibus Insurance Hamilton | Waikato Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Hamilton and Waikato operators. Schools, community groups, tourism and worker transport. Free quotes from licensed NZ advisers.',
  },
  {
    slug: 'tauranga',
    name: 'Tauranga',
    region: 'Bay of Plenty',
    description: 'Tauranga and the Bay of Plenty has one of New Zealand\'s fastest-growing populations, driving demand for community transport, school buses, and tourism operators. The region\'s popularity as a tourist destination and retirement destination creates a mix of commercial and community minibus operators with varying insurance needs.',
    operatorTypes: ['Tourism operators', 'Retirement and aged care', 'Schools', 'Community transport', 'Corporate shuttles', 'Event hire'],
    metaTitle: 'Minibus Insurance Tauranga | Bay of Plenty Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Tauranga and Bay of Plenty operators. Tourism, aged care, schools and community fleets. Free quotes from licensed advisers.',
  },
  {
    slug: 'dunedin',
    name: 'Dunedin',
    region: 'Otago',
    description: 'Dunedin\'s large student population and significant tourism industry create a diverse minibus insurance market. The University of Otago and Otago Polytechnic are major institutional operators. Tourism operators running scenic tours in the region also require specialist cover. Dunedin\'s hilly terrain is factored into risk assessments by experienced underwriters.',
    operatorTypes: ['Student and university transport', 'Tourism and scenic tours', 'Schools', 'Community organisations', 'Sports clubs', 'Healthcare providers'],
    metaTitle: 'Minibus Insurance Dunedin | Otago Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Dunedin and Otago operators. Student transport, tourism, schools and community groups. Free quotes from licensed NZ advisers.',
  },
  {
    slug: 'queenstown',
    name: 'Queenstown',
    region: 'Otago',
    description: 'Queenstown is a world-renowned tourism destination with one of the highest concentrations of hire and reward minibus operators in New Zealand. Tourism shuttles, airport transfers, adventure tourism transport, and ski field operators all require specialist commercial cover with passenger liability extensions. Queenstown operators typically face higher premiums reflecting the commercial nature of their operations.',
    operatorTypes: ['Tourism shuttles', 'Airport transfers', 'Adventure tourism transport', 'Ski field operators', 'Wine tour operators', 'Luxury transfer services'],
    metaTitle: 'Minibus Insurance Queenstown | Tourism & Hire Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Queenstown tourism and hire operators. Airport transfers, adventure tours and ski shuttles. Specialist commercial cover. Free quotes.',
  },
  {
    slug: 'palmerston-north',
    name: 'Palmerston North',
    region: 'Manawatū-Whanganui',
    description: 'Palmerston North is home to Massey University and several polytechnics, making student transport a significant part of the local minibus market. Community health services, disability support, and schools are also major operators. The Manawatū-Whanganui region\'s agricultural economy supports demand for worker transport with appropriate commercial endorsements.',
    operatorTypes: ['Student transport', 'Community health', 'Disability support', 'Schools', 'Agricultural worker transport', 'Sports organisations'],
    metaTitle: 'Minibus Insurance Palmerston North | Manawatū Operators | MinibusInsurance.co.nz',
    metaDesc: 'Minibus insurance for Palmerston North and Manawatū operators. Student transport, community health and schools. Free quotes from licensed advisers.',
  },
];
