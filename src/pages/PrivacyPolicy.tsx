import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — WipeSwipe'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Privacy Policy for WipeSwipe, the brutally fast camera roll cleaner for iOS. Learn how we protect your data and privacy.')
    }
    window.scrollTo(0, 0)
    return () => {
      document.title = 'WipeSwipe - Clean Your Camera Roll'
    }
  }, [])

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#0c0c0c',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)
        `,
        fontFamily: "'Space Mono', monospace",
        color: '#f0f0e8',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      `}</style>

      {/* Header */}
      <header className="px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-[#f0f0e8] no-underline text-sm tracking-[0.2em] uppercase hover:text-[#1E90FF] transition-colors"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          &larr; BACK TO HOME
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-16">
        {/* Title */}
        <section className="py-12 md:py-20">
          <h1
            className="leading-[0.9] tracking-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: '#f0f0e8',
            }}
          >
            PRIVACY
          </h1>
          <h1
            className="leading-[0.9] tracking-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: '#f0f0e8',
            }}
          >
            POLICY
          </h1>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase opacity-40">
            Updated: February 7, 2026
          </p>
        </section>

        {/* Introduction */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <p className="text-sm md:text-base leading-relaxed opacity-70 mb-6">
            We respect your privacy and are committed to protecting your personal data. Here&apos;s what you need to know about how we protect your privacy:
          </p>
          <ul className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
            <li className="pl-4 border-l-2 border-[#1E90FF]">Your photos never leave your device&mdash;WipeSwipe works entirely on your phone. We never upload, access, or store your photos on any external servers.</li>
            <li className="pl-4 border-l-2 border-[#1E90FF]">Free users see occasional ads&mdash;we use Google AdMob to show non-intrusive native ads. Premium subscribers are not shown ads. The Google Mobile Ads SDK may initialize on app startup for service readiness. On iOS, we request App Tracking Transparency (ATT). If you allow tracking, AdMob may use your device advertising identifier (IDFA) for ad personalization.</li>
            <li className="pl-4 border-l-2 border-[#1E90FF]">Authentication is minimal&mdash;we use Clerk for secure sign-in, storing only what&apos;s essential for your account.</li>
            <li className="pl-4 border-l-2 border-[#1E90FF]">You&apos;re in control&mdash;you decide which photos to keep or delete. Nothing is permanently removed without your explicit confirmation.</li>
            <li className="pl-4 border-l-2 border-[#1E90FF]">Local-first by design&mdash;all sorting, progress, and swipe decisions are stored on your device.</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed opacity-70 mt-6">
            This privacy policy explains how we handle your personal data when you use WipeSwipe (the &quot;App&quot;) and tells you about your privacy rights and how the law protects you.
          </p>
        </section>

        {/* Section 01 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">01</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              IMPORTANT INFORMATION AND WHO WE ARE
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Purpose of This Privacy Policy</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; We only collect and use your data when it&apos;s necessary&mdash;whether to provide you with services, comply with the law, protect your rights, or meet our business obligations. We&apos;ll always be transparent about how we handle your data.
              </div>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>This privacy policy explains how WipeSwipe processes your personal data through your use of our App, including any data you may provide when creating an account or using our features.</p>
                <p>Our App is designed to help you organize and declutter your photo library through an intuitive swipe-based interface. All photo processing happens locally on your device&mdash;we never access, view, upload, or store your photos on our servers.</p>
                <p>It is important that you read this privacy policy together with any other notices we may provide when collecting or processing personal data, so you are fully aware of how and why we use your data.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Data Controller</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; WipeSwipe is responsible for keeping your data safe. We use industry-standard security for authentication, but your photos and swipe decisions remain private on your device.
              </div>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>WipeSwipe is the data controller responsible for the personal data described in this privacy policy.</p>
                <p>If you have any questions about this privacy policy, including any requests to exercise your legal rights in relation to your personal data, please contact us:</p>
                <p><strong className="text-[#f0f0e8]">Email:</strong> <a href="mailto:james.britt@wipeswipes.com" className="text-[#1E90FF] hover:underline">james.britt@wipeswipes.com</a></p>
                <p>You have the right to make a complaint at any time to the relevant data protection authority in your jurisdiction. We would, however, appreciate the opportunity to address your concerns before you approach a regulator&mdash;please contact us first.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Changes to This Privacy Policy</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We keep our privacy policy under regular review. Any updates will be posted on this page. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Third-Party Links</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>Our App may include links to third-party websites, services, or applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party services and are not responsible for their privacy statements. We encourage you to read the privacy policy of every service you interact with.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">02</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              THE DATA WE COLLECT ABOUT YOU
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Types of Data</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; We collect basic account information (like your email) when you sign up. Your photos never leave your device&mdash;all decisions and preferences are stored locally. We may collect anonymous usage data to improve the app.
              </div>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Identity Data</strong> includes your email address and authentication identifiers from email/password or Sign in with Apple (via Clerk). If you use Sign in with Apple, we receive limited profile information (such as name and email) based on your Apple permissions.</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Contact Data</strong> includes the email address you use to create your account or sign in.</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Technical Data</strong> includes your device type, operating system version, and app version to help maintain service reliability.</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Usage Data</strong> includes anonymous, aggregated information about how you interact with the app (e.g., features used, session duration). This data cannot identify you personally and helps us understand how to improve WipeSwipe.</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Subscription Data</strong> includes your subscription status (active, expired, or cancelled) and subscription tier. For signed-in users, we send a Clerk user identifier to RevenueCat to sync subscriptions across devices. Guest users use an anonymous RevenueCat app user identifier. We never receive or store your payment card details&mdash;all payment processing is handled securely by Apple&apos;s App Store.</p>
                <p>We also collect, use and share <strong className="text-[#f0f0e8]">Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.</p>
                <p>We do not directly collect any <strong className="text-[#f0f0e8]">Special Categories of Personal Data</strong> about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). We do not collect any information about criminal convictions and offences.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Advertising Data (Free Users Only)</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>If you use WipeSwipe as a free user, we display occasional native ads through Google AdMob. In this context, AdMob may collect:</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Device Advertising Identifier</strong> &mdash; Your device&apos;s advertising ID (IDFA on iOS) may be collected to serve relevant ads. On iOS 14.5+, you&apos;ll be asked for permission through App Tracking Transparency before this identifier is accessed.</p>
                <p><strong className="text-[#f0f0e8]">&ndash; Ad Interaction Data</strong> &mdash; Information about ads you view or interact with, used to measure ad performance and improve ad relevance.</p>
                <p><strong className="text-[#f0f0e8]">Premium subscribers are not shown ads.</strong> The Google Mobile Ads SDK may initialize on app startup for service readiness.</p>
                <p><strong className="text-[#f0f0e8]">EU Users:</strong> If you&apos;re in the European Union, you&apos;ll see a consent form (via Google&apos;s User Messaging Platform) before personalized ads are shown, allowing you to accept or decline personalized advertising in compliance with GDPR.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">What We Do NOT Collect</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p><strong className="text-[#f0f0e8]">Your photos and videos</strong> &mdash; We never upload, access, or store your media files on our servers. All photos remain on your device.</p>
                <p><strong className="text-[#f0f0e8]">Location data</strong> &mdash; WipeSwipe does not request or use your location.</p>
                <p><strong className="text-[#f0f0e8]">Contacts or address book</strong> &mdash; We never access your contacts.</p>
                <p><strong className="text-[#f0f0e8]">Browsing history</strong> &mdash; We do not track your activity outside the app.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Third-Party Authentication</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>When you sign up or sign in using email/password or Sign in with Apple (via Clerk), we use Clerk as our authentication provider. These services share limited profile information with us (typically name and email) according to your permissions. We do not receive or store your passwords from these services.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">If You Fail to Provide Personal Data</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with our services).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">03</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              HOW IS YOUR PERSONAL DATA COLLECTED
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Collection Methods</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We use different methods to collect personal data from and about you including through:</p>
                <p><strong className="text-[#f0f0e8]">&mdash; Direct interactions.</strong> You may provide us with Identity and Contact Data when you:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create an account using email/password or Sign in with Apple (via Clerk)</li>
                  <li>Contact us for support via email</li>
                  <li>Subscribe to our communications or marketing updates</li>
                </ul>
                <p><strong className="text-[#f0f0e8]">&mdash; On-device storage.</strong> When you use WipeSwipe, certain data is stored locally on your device and never transmitted to our servers:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your photo library metadata (filenames, dates, dimensions) used to display and organize photos within the app</li>
                  <li>Your swipe decisions (kept/discarded) and review progress</li>
                  <li>App preferences and settings</li>
                  <li>Authentication session tokens and selected sensitive settings (stored in iOS Keychain via SecureStore)</li>
                </ul>
                <p><strong className="text-[#f0f0e8]">&mdash; Third-party authentication services.</strong> When you sign in using email/password or Sign in with Apple (via Clerk), our authentication provider (Clerk) may collect limited Identity Data to verify your account. Clerk&apos;s data handling is governed by their privacy policy.</p>
                <p><strong className="text-[#f0f0e8]">&mdash; Subscription service providers.</strong> When you subscribe to WipeSwipe Pro, our subscription management provider (RevenueCat) processes your subscription through Apple&apos;s App Store. For signed-in users, we send a Clerk user identifier to RevenueCat to sync subscriptions across devices. Guest users use an anonymous RevenueCat app user identifier. We never see or store your payment details&mdash;all payment processing is handled by Apple.</p>
                <p><strong className="text-[#f0f0e8]">&mdash; Automated technologies.</strong> On iOS, we request App Tracking Transparency (ATT). If you allow tracking, AdMob may use your device advertising identifier (IDFA) for ad personalization.</p>
                <p><strong className="text-[#f0f0e8]">&mdash; Advertising SDK (free users only).</strong> If you&apos;re a free user, Google AdMob may collect device identifiers and ad interaction data to serve and measure ad performance. You can opt out of personalized ads through your device settings (Settings &rarr; Privacy &rarr; Tracking on iOS). Premium subscribers are not shown ads. The Google Mobile Ads SDK may initialize on app startup for service readiness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">04</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              HOW WE USE YOUR PERSONAL DATA
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Legal Basis</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <p>&ndash; Where we need to perform the contract we are about to enter into or have entered into with you.</p>
                <p>&ndash; Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</p>
                <p>&ndash; Where we need to comply with a legal obligation.</p>
                <p>Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Purposes for Which We Will Use Your Personal Data</h3>
              <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-70">
                <div>
                  <p className="mb-2"><strong className="text-[#f0f0e8]">1. To register you as a new user</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-[#f0f0e8]">Type of data:</strong> Identity (email address) and Contact data</li>
                    <li><strong className="text-[#f0f0e8]">Lawful basis:</strong> Performance of a contract with you</li>
                    <li><strong className="text-[#f0f0e8]">How it works:</strong> When you sign up for WipeSwipe using email/password or Sign in with Apple (via Clerk), our authentication provider (Clerk) collects and stores your email address to create and manage your account. Your authentication tokens are stored securely on your device.</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-[#f0f0e8]">2. To operate and provide our Services</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-[#f0f0e8]">Type of data:</strong> Technical data (device type, app version) and Usage data (app interactions, preferences)</li>
                    <li><strong className="text-[#f0f0e8]">Lawful basis:</strong> Performance of a contract with you; Necessary for our legitimate interests (to deliver and improve our services)</li>
                    <li><strong className="text-[#f0f0e8]">How it works:</strong> WipeSwipe accesses your device&apos;s photo library with your explicit permission to display photos for sorting. Your photos never leave your device&mdash;all processing happens locally. Sensitive tokens and some settings are stored in SecureStore. Non-sensitive operational data (for example synced asset metadata, consent flags, and usage counters) is stored in AsyncStorage.</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-[#f0f0e8]">3. To manage our relationship with you</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-[#f0f0e8]">Type of data:</strong> Identity and Contact data</li>
                    <li><strong className="text-[#f0f0e8]">Lawful basis:</strong> Performance of a contract with you; Necessary to comply with a legal obligation; Necessary for our legitimate interests (to keep our records updated)</li>
                    <li><strong className="text-[#f0f0e8]">How it works:</strong> We may use your email address to notify you about important changes to our terms or privacy policy, service disruptions, or security issues affecting your account.</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2"><strong className="text-[#f0f0e8]">4. To improve our Services and user experience</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-[#f0f0e8]">Type of data:</strong> Anonymous Technical and Usage data</li>
                    <li><strong className="text-[#f0f0e8]">Lawful basis:</strong> Necessary for our legitimate interests (to understand how users interact with the app, identify issues, and develop improvements)</li>
                    <li><strong className="text-[#f0f0e8]">How it works:</strong> We do not currently use a dedicated first-party analytics or crash-reporting SDK in this app build.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">05</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              DISCLOSURES OF YOUR PERSONAL DATA
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Who We Share Data With</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; We may share your data with trusted partners who help us run our business (like authentication providers or professional advisers) or when required by law. Your photos never leave your device, and any partners we work with are bound by strict confidentiality and security rules.
              </div>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>When required for the purposes stated above, we may share your personal data with:</p>
                <p><strong className="text-[#f0f0e8]">1. Authentication service providers</strong> &mdash; We use Clerk to manage user accounts and authentication. Clerk processes your identity data (such as email address and name) solely to provide secure sign-in functionality. Clerk is bound by their own privacy policy and data protection obligations.</p>
                <p><strong className="text-[#f0f0e8]">2. Subscription management provider</strong> &mdash; We use RevenueCat to manage subscriptions and in-app purchases. For signed-in users, we send a Clerk user identifier to RevenueCat to sync subscriptions across devices. Guest users use an anonymous RevenueCat app user identifier. RevenueCat does not receive your payment card details. RevenueCat&apos;s data handling is governed by their privacy policy.</p>
                <p><strong className="text-[#f0f0e8]">3. Professional advisers</strong> &mdash; including lawyers, accountants, auditors, and insurers who provide us with legal, financial, or insurance services.</p>
                <p><strong className="text-[#f0f0e8]">4. Government authorities and regulators</strong> &mdash; such as tax authorities, law enforcement, or data protection regulators in applicable jurisdictions, when required by law or to protect our legal rights.</p>
                <p><strong className="text-[#f0f0e8]">5. Advertising provider (free users only)</strong> &mdash; We use Google AdMob to display native ads to free users. AdMob may collect device advertising identifiers and ad interaction data to serve relevant ads and measure ad performance. AdMob&apos;s data practices are governed by Google&apos;s privacy policy. Premium subscribers are not shown ads. The Google Mobile Ads SDK may initialize on app startup for service readiness.</p>
                <p><strong className="text-[#f0f0e8]">6. App analytics and crash reporting</strong> &mdash; We do not currently use a dedicated first-party analytics or crash-reporting SDK in this app build.</p>
                <p><strong className="text-[#f0f0e8]">7. Third parties in business transfers</strong> &mdash; If WipeSwipe is sold, merged, or transfers assets to another company, your personal data may be transferred to the new owners. They would be required to use your data in accordance with this privacy policy. We will notify you of any such change.</p>
                <p className="mt-4"><strong className="text-[#f0f0e8]">Important:</strong> Your photos, swipe decisions, and library data are stored only on your device and are never uploaded to our servers or shared with any third party.</p>
                <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">06</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              DATA SECURITY
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">How We Protect Your Data</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; We take your data security seriously. Your photos never leave your device, and we use industry-standard security measures to protect any personal information we do collect. If a data breach occurs, we&apos;ll inform you and the relevant authorities as required.
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Your Photos Stay Private</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>WipeSwipe operates on a privacy-first model. Your photos and videos are accessed locally on your device using the native media library and are never uploaded, transmitted, or stored on our servers. All photo decisions (keep, delete, organize) happen entirely on your device.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Authentication Security</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We use Clerk, a trusted third-party authentication provider, to securely manage your account. When you sign in using email/password or Sign in with Apple (via Clerk):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your credentials are handled directly by Clerk and Apple for Sign in with Apple</li>
                  <li>We never see or store your passwords</li>
                  <li>Authentication tokens are stored securely on your device using encrypted storage (SecureStore)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Local Data Protection</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We store sensitive tokens and some settings in SecureStore. We store non-sensitive operational data (for example synced asset metadata, consent flags, and usage counters) in AsyncStorage.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sensitive authentication session tokens and selected security settings (SecureStore)</li>
                  <li>Non-sensitive app preferences and counters (AsyncStorage)</li>
                  <li>Synced asset metadata and consent flags (AsyncStorage)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Access Controls</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We limit access to any personal data we collect to those employees, contractors, and service providers who have a legitimate business need. They are bound by confidentiality obligations and are only permitted to process your data according to our instructions.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Breach Response</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We have procedures in place to handle any suspected personal data breach. Should a breach occur that affects your personal data, we will notify you and any applicable regulatory authority where legally required to do so.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07 */}
        <section className="pb-12 mb-12 border-b border-[#f0f0e8]/10">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">07</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              DATA RETENTION
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">How Long Will You Use My Personal Data For?</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; Your photos and swipe decisions stay on your device&mdash;we never store them. Account data is retained only while your account is active or as required by law. You&apos;re in full control.
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">On-Device Data</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>All photo-related data&mdash;including your swipe decisions, kept/discarded lists, session progress, and app preferences&mdash;are stored exclusively on your device. <strong className="text-[#f0f0e8]">We never upload or retain your photos or decisions on our servers.</strong> This data persists on your device until you:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Clear the app&apos;s storage or cache</li>
                  <li>Uninstall WipeSwipe</li>
                  <li>Sign out (which clears authentication tokens)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Account Data</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>If you create an account with WipeSwipe (via email/password or Sign in with Apple (via Clerk)), we retain your account information (such as your email address and authentication credentials) only for as long as your account remains active. We may retain certain data for a longer period in the event of a complaint, to comply with legal obligations, or if we reasonably believe there is a prospect of litigation.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Retention Criteria</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>To determine appropriate retention periods, we consider:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The nature and sensitivity of the data</li>
                  <li>The potential risk of harm from unauthorized use or disclosure</li>
                  <li>The purposes for which we process your data and whether those purposes can be achieved through other means</li>
                  <li>Applicable legal, regulatory, and accounting requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Anonymized Data</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We do not currently use a dedicated first-party analytics or crash-reporting SDK in this app build.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Deleting Your Data</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>You can delete your on-device data at any time by:</p>
                <p><strong className="text-[#f0f0e8]">1. Signing out</strong> &mdash; Settings &rarr; Account &rarr; Sign Out (clears authentication tokens)</p>
                <p><strong className="text-[#f0f0e8]">2. Deleting and reinstalling the app</strong> &mdash; Removes locally stored operational data</p>
                <p><strong className="text-[#f0f0e8]">3. Uninstalling the app</strong> &mdash; Removes all locally stored data</p>
                <p className="mt-4">You can delete your account in-app from Settings &gt; Delete Account. You may also request deletion by email at <a href="mailto:james.britt@wipeswipes.com" className="text-[#1E90FF] hover:underline">james.britt@wipeswipes.com</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 08 */}
        <section className="pb-12">
          <div className="mb-8">
            <span className="text-[#1E90FF] text-xs tracking-[0.3em] font-bold">08</span>
            <h2
              className="mt-2 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              YOUR LEGAL RIGHTS
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Your Rights Under Data Protection Laws</h3>
              <div className="border-l-2 border-[#f0f0e8]/20 pl-4 mb-4 text-xs opacity-50 italic">
                <span className="text-[#1E90FF] not-italic font-bold">in short</span> &mdash; You have rights to access, correct, delete, restrict, transfer, or object to how we use your data. You can also withdraw your consent at any time. We&apos;ll handle your requests promptly, and there&apos;s no fee unless the request is excessive.
              </div>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These rights are described in detail below.</p>
                <p><strong className="text-[#f0f0e8]">Request access</strong> to your personal data (commonly known as a &quot;data subject access request&quot;). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</p>
                <p><strong className="text-[#f0f0e8]">Request correction</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>
                <p><strong className="text-[#f0f0e8]">Request erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing, where we may have processed your information unlawfully, or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be communicated to you at the time of your request.</p>
                <p><strong className="text-[#f0f0e8]">Object to processing</strong> of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</p>
                <p><strong className="text-[#f0f0e8]">Request restriction of processing</strong> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>If you want us to establish the data&apos;s accuracy.</li>
                  <li>Where our use of the data is unlawful but you do not want us to erase it.</li>
                  <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims.</li>
                  <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                </ul>
                <p><strong className="text-[#f0f0e8]">Request the transfer</strong> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>
                <p><strong className="text-[#f0f0e8]">Withdraw consent at any time</strong> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>
                <p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">What We May Need From You</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">Time Limit to Respond</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1E90FF] mb-4 font-bold">How to Exercise Your Rights</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed opacity-70">
                <p>To exercise any of your rights, please contact us at:</p>
                <p><strong className="text-[#f0f0e8]">Email:</strong> <a href="mailto:james.britt@wipeswipes.com" className="text-[#1E90FF] hover:underline">james.britt@wipeswipes.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-8 border-t border-[#f0f0e8]/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.2em] opacity-40">
          <p>&copy; {new Date().getFullYear()} WIPESWIPE</p>
          <div className="flex gap-4 items-center">
            <a href="mailto:james.britt@wipeswipes.com" className="text-[#f0f0e8] hover:text-[#1E90FF] transition-colors no-underline">CONTACT</a>
            <span className="opacity-30">|</span>
            <Link to="/" className="text-[#f0f0e8] hover:text-[#1E90FF] transition-colors no-underline">HOME</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
