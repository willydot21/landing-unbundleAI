import Layout from "./layout";
import ActionHero from "../components/landing/hero";
import Blueprints from "../components/landing/prints";
import { type IPrint } from "../components/landing/prints/print-card";

const prints = [
  {title: 'E-commerce', description: "Complete breakdown of Shopify's checkout process including payment gateway integration", version: 'v1.2', iconName: 'cart' as IPrint['iconName']},
  {title: 'SaaS Dashboard', description: "Architecture analysis of Linear's issue tracking system and real-time sync engine", version: 'v2.0', iconName: 'dash' as IPrint['iconName']},
  {title: 'Ride Share', description: "Pricing alghorithm and driver matching logic summary for location-based services.", version: 'v1.0', iconName: 'ride' as IPrint['iconName']},
];

export default function Home(){
  return (
    <Layout>
      <ActionHero/>
      <hr className="text-gray-300"/>
      <Blueprints prints={prints}/>
    </Layout>
  )
}