import { Home } from "./pages/home";
import { ServicesHub } from "./pages/services/hub";
import { ServicesBuild } from "./pages/services/build";
import { ServicesProduct } from "./pages/services/product";
import { ServicesConsulting } from "./pages/services/consulting";
import { ServicesAi } from "./pages/services/ai";
import { ServicesGuidedDeployment } from "./pages/services/guided-deployment";
import { ServicesHubspotAudit } from "./pages/services/hubspot-audit";
import { ServicesHubspotArchitecture } from "./pages/services/hubspot-architecture";
import { ServicesHubspotImplementation } from "./pages/services/hubspot-implementation";
import { ServicesHubspotMigration } from "./pages/services/hubspot-migration";
import { ServicesHubspotOptimisation } from "./pages/services/hubspot-optimisation";
import { ServicesHubspotVsSalesforce } from "./pages/services/hubspot-vs-salesforce";
import { ServicesEnterpriseHubspot } from "./pages/services/enterprise-hubspot";
import { Advisory } from "./pages/advisory";
import { OperatorCircle } from "./pages/advisory/operator-circle";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Styleguide } from "./pages/styleguide";
import { ResourcesIndex } from "./pages/resources/index";
import { CaseStudies } from "./pages/resources/case-studies";
import { CaseStudyDetail } from "./pages/resources/case-study-detail";
import { Blog } from "./pages/resources/blog";
import { BlogPost } from "./pages/resources/blog-post";
import { MeetingBookingPage } from "./pages/meetings";
import NotFound from "./pages/not-found";
import { Switch, Route } from "wouter";
import { Layout } from "./components/layout/Layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { PopupProvider } from "@/components/popups/PopupProvider";
import { PopupRoot } from "@/components/popups/PopupRoot";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/muloo-hub" component={ServicesHub} />
        <Route path="/muloo-hub/architecture" component={ServicesHubspotArchitecture} />
        <Route path="/muloo-hub/hubspot-architecture" component={ServicesHubspotArchitecture} />
        <Route path="/muloo-hub/enterprise-hubspot" component={ServicesEnterpriseHubspot} />
        <Route path="/muloo-hub/hubspot-vs-salesforce" component={ServicesHubspotVsSalesforce} />
        <Route path="/muloo-hub/hubspot-audit" component={ServicesHubspotAudit} />
        <Route path="/muloo-hub/hubspot-implementation" component={ServicesHubspotImplementation} />
        <Route path="/muloo-hub/hubspot-migration" component={ServicesHubspotMigration} />
        <Route path="/muloo-hub/salesforce-to-hubspot-migration" component={ServicesHubspotMigration} />
        <Route path="/muloo-hub/hubspot-optimisation" component={ServicesHubspotOptimisation} />
        <Route path="/services/hub" component={ServicesHub} />
        <Route path="/services/build" component={ServicesBuild} />
        <Route path="/services/product" component={ServicesProduct} />
        <Route path="/services/consulting" component={ServicesConsulting} />
        <Route path="/services/ai" component={ServicesAi} />
        <Route path="/muloo-hub/guided-deployment" component={ServicesGuidedDeployment} />
        <Route path="/services/guided-deployment" component={ServicesGuidedDeployment} />
        <Route path="/advisory/operator-circle" component={OperatorCircle} />
        <Route path="/advisory" component={Advisory} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/contact/book/:person" component={MeetingBookingPage} />
        <Route path="/meetings/:person" component={MeetingBookingPage} />
        <Route path="/styleguide" component={Styleguide} />

        <Route path="/resources" component={ResourcesIndex} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/:id" component={CaseStudyDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopupProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
        <PopupRoot />
      </PopupProvider>
    </QueryClientProvider>
  );
}

export default App;
