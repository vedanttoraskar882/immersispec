export interface PlatformModule {
  id: string;
  number: string;
  name: string;
  iconName: 'Boxes' | 'ShieldCheck' | 'Layers3' | 'GitCompare' | 'FileCheck' | 'Clock' | 'LayoutDashboard' | 'Gauge' | 'FileOutput';
  description: string;
  intendedBenefit: string;
  badge?: string;
}

export const platformModules: PlatformModule[] = [
  {
    id: 'module-01',
    number: '01',
    name: 'BIM-Linked Decision Objects',
    iconName: 'Boxes',
    description: 'Each design decision will be captured as a structured decision object linked to its BIM element ID, specification fields, cost allowance, authorised approver and model revision.',
    intendedBenefit: 'Transforms informal design comments into traceable, auditable project information.'
  },
  {
    id: 'module-02',
    number: '02',
    name: 'Role-Based Approval Matrix',
    iconName: 'ShieldCheck',
    description: 'Define which stakeholders are authorised to approve specific design decisions. Predefined cost thresholds will support automatic escalation to the relevant decision-maker.',
    intendedBenefit: 'Improves approval accountability and clarifies who is responsible for each sign-off.'
  },
  {
    id: 'module-03',
    number: '03',
    name: 'Option Switching at Human Scale',
    iconName: 'Layers3',
    description: 'Allow clients, designers and contractors to compare finishes, furniture, fixtures and equipment within a human-scale 3D or optional VR environment while viewing associated cost differences.',
    intendedBenefit: 'Helps stakeholders understand the visual and commercial implications of choices before committing to them.'
  },
  {
    id: 'module-04',
    number: '04',
    name: 'Revision-Drift Guard',
    iconName: 'GitCompare',
    description: 'Identify BIM model changes that affect previously approved objects. Affected decisions will be flagged and reopened for authorised review.',
    intendedBenefit: 'Helps prevent approvals from silently becoming outdated when project models change.'
  },
  {
    id: 'module-05',
    number: '05',
    name: 'Signed Decision Receipt',
    iconName: 'FileCheck',
    description: 'Capture a tamper-evident snapshot of the visual context, specification, associated cost and authorised approver at the moment of sign-off.',
    intendedBenefit: 'Supports a reliable approval history and provides evidence for resolving project disputes.'
  },
  {
    id: 'module-06',
    number: '06',
    name: 'Last-Responsible-Moment Alerts',
    iconName: 'Clock',
    description: 'Use supplier lead times and the project programme to calculate the latest responsible date by which a design decision should be completed.',
    intendedBenefit: 'Helps teams identify time-sensitive decisions before outstanding approvals affect procurement.'
  },
  {
    id: 'module-07',
    number: '07',
    name: 'Room Completeness Score',
    iconName: 'LayoutDashboard',
    description: 'Display the proportion of required decisions that are approved, pending or missing for individual project rooms.',
    intendedBenefit: 'Provides project directors with clearer visibility of room-level readiness before tender.'
  },
  {
    id: 'module-08',
    number: '08',
    name: 'Decision Integrity Index',
    iconName: 'Gauge',
    description: 'A proposed proprietary scoring mechanism designed to evaluate decision age, dependencies, cost exposure, revision drift and supplier lead times. The mechanism will prioritise decisions that may present a higher risk of downstream rework.',
    intendedBenefit: 'Helps project teams focus on commercially significant and time-sensitive decisions.'
  },
  {
    id: 'module-09',
    number: '09',
    name: 'Procurement-Ready Export',
    iconName: 'FileOutput',
    description: 'Convert approved project selections into procurement-ready schedules, CSV/PDF outputs and BCF-style issues for Common Data Environment workflows.',
    intendedBenefit: 'Connects the approval process with the specifications and selections used for procurement.'
  }
];
