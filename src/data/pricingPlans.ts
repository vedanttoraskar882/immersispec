export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  additionalCharge?: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pilot',
    name: 'Pilot',
    price: '£3,500–£7,500',
    billingPeriod: 'Per project',
    description: 'A proposed paid pilot package for organisations interested in evaluating ImmersiSpec Twin within a defined project workflow.',
    features: [
      'Model setup',
      'One immersive review workflow',
      'Decision register',
      'Export package'
    ],
    ctaText: 'Request a Pilot',
    highlighted: false
  },
  {
    id: 'studio',
    name: 'Studio',
    price: '£399',
    billingPeriod: '/month',
    additionalCharge: '+ £750 onboarding',
    description: 'A proposed subscription for interior design practices and smaller project teams.',
    features: [
      'Up to 5 active projects',
      '10 reviewers',
      'Revit connector',
      'Decision log'
    ],
    ctaText: 'Register Interest',
    highlighted: true
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '£899',
    billingPeriod: '/month',
    additionalCharge: '+ usage-based charges',
    description: 'A proposed subscription for growing design and fit-out organisations managing multiple active projects.',
    features: [
      'Up to 20 active projects',
      'Cost/specification integrations',
      'Approval roles',
      'Analytics'
    ],
    ctaText: 'Register Interest',
    highlighted: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '£18,000–£60,000',
    billingPeriod: '/year',
    description: 'A proposed enterprise package for larger organisations requiring advanced controls and tailored integration capabilities.',
    features: [
      'Single Sign-On (SSO)',
      'API',
      'Private workspaces',
      'Portfolio controls',
      'Custom integrations'
    ],
    ctaText: 'Enquire About Enterprise',
    highlighted: false
  }
];

export const PRICING_DISCLAIMER = "All prices are indicative commercial planning assumptions and are subject to validation during the pilot phase. Final commercial terms will be agreed before participation.";
