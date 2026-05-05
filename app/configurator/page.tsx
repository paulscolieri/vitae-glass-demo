import type { Metadata } from "next";
import ConfiguratorWizard from "@/components/configurator/ConfiguratorWizard";
import BenefitsAccordion from "@/components/configurator/BenefitsAccordion";

export const metadata: Metadata = {
  title: "Build Your Own — Vitae Glass",
  description: "Configure your custom modular piece. Choose your mouthpiece, percolator, base, and connector.",
};

export default function ConfiguratorPage() {
  return (
    <>
      <ConfiguratorWizard />
      <BenefitsAccordion />
    </>
  );
}
