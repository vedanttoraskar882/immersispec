export interface RoadmapPhase {
  phase: string;
  period: string;
  title: string;
  items: string[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    period: 'Months 0–12',
    title: 'Validation and MVP',
    items: [
      '30+ customer discovery interviews',
      'Target three design partners',
      'Develop the initial MVP',
      'Target three to six paid pilots',
      'Target initial SaaS conversions'
    ]
  },
  {
    phase: 'Phase 2',
    period: 'Year 2',
    title: 'Commercial Development',
    items: [
      'Target 15–30 paying organisations',
      'Develop BIM consultancy referral channels',
      'Pursue deeper ACC and Revit integrations'
    ]
  },
  {
    phase: 'Phase 3',
    period: 'Year 3',
    title: 'Business Scaling',
    items: [
      'Target 50–100 organisations',
      'Target initial enterprise accounts',
      'Develop cross-project benchmark analytics'
    ]
  },
  {
    phase: 'Phase 4',
    period: 'Years 4–5',
    title: 'International Expansion',
    items: [
      'Ireland',
      'Gulf region',
      'Australia',
      'Singapore'
    ]
  }
];

export const ROADMAP_DISCLAIMER = "All milestones are proposed development and commercial targets, subject to validation, funding and market conditions.";
