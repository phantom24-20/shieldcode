// src/pages/Terms.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 40px;
  color: #fff;
  background: linear-gradient(to bottom right, #0d0d0d, #1a1a1a);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff8a00;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #e52e71;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
`;

const Terms = () => {
  return (
    <Container>
      <Title>Terms and Conditions</Title>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing or using any services provided by Shield Code Technology, you agree to be bound by these Terms and Conditions. If you do not agree, you may not access or use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Services Offered</SectionTitle>
        <Paragraph>
          Shield Code Technology provides web development, mobile app development, UI/UX design, e-commerce solutions, consulting, hosting, and related digital services. All project scopes and deliverables will be mutually agreed upon in writing before commencement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Client Responsibilities</SectionTitle>
        <Paragraph>
          Clients must provide accurate, complete project requirements, content, and necessary access to ensure successful delivery. Delay in providing materials or feedback may result in project delays or additional costs.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Payment Terms</SectionTitle>
        <Paragraph>
          A percentage-based advance is required before the project begins.<br />
          Remaining payments are due as per the agreed milestones or after project delivery.<br />
          Late payments may attract penalties or service suspension.<br />
          All fees are non-refundable unless otherwise stated in writing.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Intellectual Property Rights</SectionTitle>
        <Paragraph>
          All intellectual property created during the project (e.g., source code, designs) remains the property of Shield Code Technology until full payment is received. Upon payment, ownership transfers to the client unless otherwise agreed.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Confidentiality</SectionTitle>
        <Paragraph>
          Both parties agree to maintain confidentiality of all proprietary or sensitive information shared during the project. Shield Code Technology will not disclose client data to third parties without consent.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Revisions and Changes</SectionTitle>
        <Paragraph>
          We provide a limited number of revisions (typically 2–3) as part of the package. Additional changes outside the scope or after delivery may incur extra charges.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Limitation of Liability</SectionTitle>
        <Paragraph>
          Shield Code Technology is not liable for any direct or indirect damages arising from the use or inability to use the services provided, including data loss or system failure.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Termination</SectionTitle>
        <Paragraph>
          Either party may terminate the agreement with written notice. If terminated early by the client, the client is responsible for payment for all completed work up to that point.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Governing Law</SectionTitle>
        <Paragraph>
          These Terms are governed by the laws of [Your Country/State]. Any disputes will be subject to the jurisdiction of courts in [City, Country].
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Changes to Terms</SectionTitle>
        <Paragraph>
          Shield Code Technology reserves the right to update these Terms and Conditions at any time. Changes will be posted on our website or communicated directly to clients.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Terms;
