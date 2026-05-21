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
    <div className="bg-black min-h-screen text-slate-50 font-sans antialiased selection:bg-[#00F2DC] selection:text-black scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="mt-16 sm:mt-32">
          <ProblemSolutionSection />
          <FeaturesSection />
          <BeforeAfterSection />
          <SocialProofSection />
          <FinalCTASection />
        </div>
      </main>
    </div>
  );
}
