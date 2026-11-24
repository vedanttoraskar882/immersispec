import React from 'react';
import { 
  Database, 
  Glasses, 
  Network, 
  FileCheck2, 
  FolderOutput, 
  ArrowDown, 
  Layers, 
  Tag, 
  Coins, 
  UserCheck, 
  History, 
  Truck 
} from 'lucide-react';

export const ProposedSolution: React.FC = () => {
  const connectionItems = [
    { label: 'BIM Element Identity', icon: Layers, detail: 'Unique GUID & IFC component mapping' },
    { label: 'Design Options', icon: Tag, detail: 'Visual options linked to object context' },
    { label: 'Material Specification', icon: Tag, detail: 'NBS & bespoke finish parameters' },
    { label: 'Cost Allowance', icon: Coins, detail: 'Budget baseline & cost delta impact' },
    { label: 'Approval Authority', icon: UserCheck, detail: 'Role-based sign-off thresholds' },
    { label: 'Model Revision', icon: History, detail: 'Tracking against authoritative geometry' },
    { label: 'Procurement Information', icon: Truck, detail: 'Lead times & supplier packages' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subsection Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A044]/15 text-[#102748] border border-[#C5A044]/30">
            The Proposed Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#102748] tracking-tight">
            One Connected Decision-Governance Layer
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            ImmersiSpec Twin is being developed to connect the moment a design decision is made with the BIM element, specification, commercial information and authorised stakeholder responsible for that decision.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="bg-[#F8F9FC] rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm max-w-5xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
              Conceptual Information Flow &amp; Governance Bridge
            </span>
          </div>

          {/* Vertical Stepped Architecture Diagram */}
          <div className="space-y-4 max-w-3xl mx-auto">
            
            {/* Layer 1: Authoritative Models */}
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#102748]/5 text-[#102748] flex items-center justify-center border border-[#102748]/10">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-[#64748B]">Layer 01 // Geometry &amp; Metadata</div>
                  <h3 className="text-base font-bold text-[#102748]">Revit / IFC Models</h3>
                  <p className="text-xs text-[#64748B]">Source of authoring truth, architectural geometry and spatial coordinates</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#F8F9FC] text-[11px] font-mono text-[#102748] rounded border border-[#E2E8F0] self-start sm:self-auto">
                Model Source
              </span>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-1 text-[#C5A044]">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 2: Spatial Review */}
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#C5A044]/10 text-[#C5A044] flex items-center justify-center border border-[#C5A044]/20">
                  <Glasses className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-[#64748B]">Layer 02 // Spatial Context</div>
                  <h3 className="text-base font-bold text-[#102748]">Immersive Web 3D / VR Review</h3>
                  <p className="text-xs text-[#64748B]">Human-scale browser and headset exploration of finishes, lighting, and FF&amp;E</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#F8F9FC] text-[11px] font-mono text-[#102748] rounded border border-[#E2E8F0] self-start sm:self-auto">
                Human Scale
              </span>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-1 text-[#C5A044]">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 3: The Innovation - Core Governance Layer */}
            <div className="bg-[#102748] text-white rounded-xl p-6 border-2 border-[#C5A044] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A044]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C5A044] text-[#102748] flex items-center justify-center font-bold">
                    <Network className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8D5A5]">Core Platform Engine</div>
                    <h3 className="text-lg font-bold text-white">ImmersiSpec Twin Decision-Governance Layer</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-[#0F1C32] border border-[#C5A044]/40 text-[#E8D5A5] text-xs font-bold font-mono self-start md:self-auto">
                  Decision Integrity
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#E2E8F0]/90 mb-5 leading-relaxed">
                Connects 3D spatial choices directly to BIM object parameters, financial budgets, sign-off hierarchies, and active model versions.
              </p>

              {/* 7 Interconnected Decision Elements Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2 border-t border-white/10">
                {connectionItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="bg-[#0F1C32]/90 rounded-lg p-2.5 border border-white/10 flex items-center gap-2">
                      <ItemIcon className="w-4 h-4 text-[#C5A044] flex-shrink-0" />
                      <div className="truncate">
                        <div className="text-xs font-medium text-white truncate">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-1 text-[#C5A044]">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 4: Structured Approvals */}
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-[#64748B]">Layer 04 // Audit &amp; Control</div>
                  <h3 className="text-base font-bold text-[#102748]">Structured Approvals and Specifications</h3>
                  <p className="text-xs text-[#64748B]">Signed decision receipts, role-based governance logs and room completeness tracking</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#F8F9FC] text-[11px] font-mono text-[#102748] rounded border border-[#E2E8F0] self-start sm:self-auto">
                Auditable Log
              </span>
            </div>

            {/* Connector */}
            <div className="flex justify-center my-1 text-[#C5A044]">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 5: Procurement & CDE */}
            <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <FolderOutput className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-[#64748B]">Layer 05 // Delivery Handover</div>
                  <h3 className="text-base font-bold text-[#102748]">Procurement and CDE Export</h3>
                  <p className="text-xs text-[#64748B]">Direct export to schedules, CSV/PDF packages, and BCF issues into Common Data Environments</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#F8F9FC] text-[11px] font-mono text-[#102748] rounded border border-[#E2E8F0] self-start sm:self-auto">
                Tender Ready
              </span>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-center">
            <p className="text-xs text-[#64748B]">
              Revit and IFC remain the sources of geometry and metadata. ImmersiSpec Twin provides the decision-governance layer above these existing workflows.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
