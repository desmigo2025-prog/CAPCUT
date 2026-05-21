/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-slate-50 font-sans antialiased selection:bg-[#00F2DC] selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <BeforeAfterSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
