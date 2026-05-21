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
    <div className="bg-white min-h-screen text-gray-900 font-sans antialiased selection:bg-black selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        {/* We keep the darker sections as contrasting thematic blocks below the fold, updating their paddings to flow well from the light hero */}
        <div className="mt-32">
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
