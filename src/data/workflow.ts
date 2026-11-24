export interface WorkflowStep {
  stepNumber: string;
  code: string;
  heading: string;
  description: string;
  visualElements: string[];
  reconnectsTo?: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: '01',
    code: 'INGEST',
    heading: 'Import the BIM Model',
    description: 'The project\'s Revit or IFC model is intended to be converted into a lightweight 3D representation while maintaining stable identifiers for rooms, types and components.',
    visualElements: ['Revit / IFC file', 'BIM model', 'Stable object IDs', 'Lightweight 3D representation']
  },
  {
    stepNumber: '02',
    code: 'REVIEW',
    heading: 'Explore the Space',
    description: 'Clients, designers and contractors will review the project through guided human-scale walkthroughs using browser-based 3D, desktop devices or optional VR headsets. Compare finishes and FF&E options within the context of the proposed space.',
    visualElements: ['Interior room visualisation', 'Material samples', 'Furniture options', 'Cost difference indicators']
  },
  {
    stepNumber: '03',
    code: 'DECIDE',
    heading: 'Capture Structured Decisions',
    description: 'Every selected option becomes a decision object connected to the relevant BIM element, specification, cost delta, model revision and approval state.',
    visualElements: ['Decision ID', 'BIM element ID', 'Specification', 'Cost allowance', 'Decision owner']
  },
  {
    stepNumber: '04',
    code: 'APPROVE',
    heading: 'Authorised Sign-Off',
    description: 'The appropriate stakeholder reviews the decision according to predefined approval roles and financial thresholds. A signed decision receipt is intended to capture the relevant visual context, specification, cost and approver.',
    visualElements: ['Authorised approver', 'Approval matrix', 'Decision receipt', 'Approval status']
  },
  {
    stepNumber: '05',
    code: 'EXPORT',
    heading: 'Prepare Procurement Information',
    description: 'Approved selections are intended to be exported into procurement-ready schedules, CSV/PDF packages and BCF-style issues for CDE workflows.',
    visualElements: ['Procurement schedule', 'CSV', 'PDF', 'CDE', 'ACC workflow']
  },
  {
    stepNumber: '06',
    code: 'PROTECT',
    heading: 'Detect Revision Drift',
    description: 'When a subsequent BIM model revision affects an approved object, the Revision-Drift Guard will identify the affected decision and reopen it for review.',
    visualElements: ['Model revision comparison', 'Changed object', 'Reopened approval', 'Notification indicator'],
    reconnectsTo: 'DECIDE & APPROVE'
  }
];

export const WORKFLOW_CLOSING = "Every decision is intended to stay connected to the BIM object it governs, from initial design review to project handover.";
