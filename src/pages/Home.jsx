import Hero from "../components/Hero";
import Features from "../components/Features";
import Chains from "../components/Chains";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Chains />
      <CTA />
    </Layout>
  );
}
