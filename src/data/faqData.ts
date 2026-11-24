export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What is ImmersiSpec Twin?',
    answer: 'ImmersiSpec Twin is a proposed BIM-linked immersive approval, specification and change-governance platform designed for UK interior fit-out and refurbishment projects. It aims to connect design reviews, commercial decisions, approvals and procurement within a structured BIM-linked workflow.'
  },
  {
    id: 'faq-02',
    question: 'Who is ImmersiSpec Twin designed for?',
    answer: 'The platform is being developed for interior design practices, design-and-build fit-out contractors, workplace and hospitality designers, developers and occupier project teams.'
  },
  {
    id: 'faq-03',
    question: 'How is ImmersiSpec Twin different from traditional VR design tools?',
    answer: 'ImmersiSpec Twin is not intended to provide visualisation alone. Its proposed innovation is a decision-governance layer connecting immersive design reviews with BIM element identity, specifications, cost allowances, approval authority and revision information.'
  },
  {
    id: 'faq-04',
    question: 'Will I need a VR headset?',
    answer: 'No. The platform is being designed to support desktop and browser-based 3D design reviews. VR headsets will be an optional way to experience the project at human scale.'
  },
  {
    id: 'faq-05',
    question: 'Will ImmersiSpec Twin replace Revit or Autodesk Construction Cloud?',
    answer: 'No. Revit and IFC will remain the sources of geometry and metadata. ImmersiSpec Twin will complement existing BIM tools by adding a structured decision-governance layer.'
  },
  {
    id: 'faq-06',
    question: 'How will design decisions be recorded?',
    answer: 'Each design decision is intended to become a structured decision object connected to a BIM element ID, specification, cost allowance, authorised approver and model revision.'
  },
  {
    id: 'faq-07',
    question: 'What happens when a BIM model changes?',
    answer: 'The proposed Revision-Drift Guard will identify model changes that affect previously approved objects and reopen the affected approvals for review.'
  },
  {
    id: 'faq-08',
    question: 'How will ImmersiSpec Twin support procurement?',
    answer: 'Approved selections are intended to be exported as procurement-ready schedules, CSV/PDF packages and BCF-style issues for Common Data Environment workflows.'
  },
  {
    id: 'faq-09',
    question: 'Will the platform use artificial intelligence?',
    answer: 'The initial MVP is intended to rely on rule-based checks, object matching and workflow logic. AI-assisted review summaries and issue ranking may be introduced during later development.'
  },
  {
    id: 'faq-10',
    question: 'How much will ImmersiSpec Twin cost?',
    answer: 'The proposed Pilot package ranges from £3,500–£7,500 per project. The Studio plan is £399 per month plus £750 onboarding. The Pro plan is £899 per month plus usage-based charges. The Enterprise plan ranges from £18,000–£60,000 per year. These prices are indicative planning assumptions to be tested during the pilot phase.'
  },
  {
    id: 'faq-11',
    question: 'Is ImmersiSpec Twin currently available?',
    answer: 'ImmersiSpec Twin is currently at the concept development and pre-MVP market validation stage. The proposed platform capabilities and pilot programme are subject to further development and validation.'
  },
  {
    id: 'faq-12',
    question: 'How can my organisation participate in a pilot?',
    answer: 'Interested organisations can complete the Request a Pilot form to express their interest in the upcoming pilot programme. Submitting the form enables our team to evaluate project compatibility, workflow scope, and alignment for early pilot participation.'
  }
];
