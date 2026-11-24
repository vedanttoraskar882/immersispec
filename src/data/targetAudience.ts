export interface CustomerSegment {
  id: string;
  name: string;
  badge?: string;
  iconName: 'Palette' | 'HardHat' | 'Building2' | 'Briefcase';
  coreChallenges: string[];
  proposedValue: string;
}

export const customerSegments: CustomerSegment[] = [
  {
    id: 'segment-01',
    name: 'Interior Design Practices',
    badge: 'Primary Initial Market',
    iconName: 'Palette',
    coreChallenges: [
      'Repeated client revision cycles',
      'Unclear sign-off on furniture and finishes',
      'Fragmented approval documentation'
    ],
    proposedValue: 'Faster and more structured client approvals, clearer specification records and a differentiated digital design service.'
  },
  {
    id: 'segment-02',
    name: 'Design-and-Build Fit-Out Contractors',
    iconName: 'HardHat',
    coreChallenges: [
      'Late design changes',
      'Site queries',
      'Construction variations',
      'Disputes over agreed specifications'
    ],
    proposedValue: 'Improved approval traceability and reduced exposure to downstream project changes.'
  },
  {
    id: 'segment-03',
    name: 'Workplace and Hospitality Designers',
    iconName: 'Building2',
    coreChallenges: [
      'Multiple stakeholder requirements',
      'Repeated room standards',
      'Complex furniture and material selections'
    ],
    proposedValue: 'Structured multi-party approvals at room and repeatable specification-kit level.'
  },
  {
    id: 'segment-04',
    name: 'Developers and Occupier Project Teams',
    iconName: 'Briefcase',
    coreChallenges: [
      'Limited visibility of approval readiness',
      'Unclear status across project packages',
      'Commercial exposure to changes'
    ],
    proposedValue: 'Improved decision visibility, change control and structured project handover records.'
  }
];

export const primaryBuyers = {
  title: 'Built for Project Decision-Makers',
  roles: [
    { title: 'Digital Design Leads', desc: 'Seeking seamless spatial sign-off without manual specification tracking.' },
    { title: 'BIM Managers', desc: 'Protecting model integrity and preventing revision drift across trades.' },
    { title: 'Client-Side Project Directors', desc: 'Requiring commercial transparency, budget governance, and audit trails.' }
  ],
  description: 'The initial commercial focus is mid-sized UK design and fit-out organisations, particularly firms with approximately 50–300 employees. These organisations frequently manage complex design decisions and may benefit from more structured digital approval workflows.'
};

export interface ComparisonRow {
  capability: string;
  traditional: string;
  proposed: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    capability: 'Immersive Design Review',
    traditional: 'Visual presentation and collaboration',
    proposed: 'Structured spatial decisions linked to BIM objects'
  },
  {
    capability: 'Client Approval',
    traditional: 'Emails, PDFs and approval portals',
    proposed: 'Role-based, model-linked commercial approvals'
  },
  {
    capability: 'Specification Management',
    traditional: 'Separate material and FF&E schedules',
    proposed: 'Decisions connected to specification and cost'
  },
  {
    capability: 'Model Revision',
    traditional: 'Manual checking of previous approvals',
    proposed: 'Revision-aware reopening of affected decisions'
  },
  {
    capability: 'Procurement',
    traditional: 'Separate schedule preparation',
    proposed: 'Procurement-ready approved decision exports'
  }
];
