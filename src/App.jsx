import "./App.css";
import React from "react";
import HomePage from './Components/HomePage';
import './index.css';
import PredictiveAnalyticsPage from "./Components/PredictiveAnalyticsPage";
import NaturalLanguageProcessingPage from "./Components/NaturalLanguageProcessingPage";
import AutomatedMarketingPage from "./Components/AutomatedMarketingPage";
import DataDrivenInsightsPage from "./Components/DataDrivenInsightsPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";

import PasswordRecoveryPage from "./Components/PasswordRecoveryPage";
import ServicePlansPage from "./Components/ServicePlansPage";
import PaymentPage from "./Components/PaymentPage";






function App() {
  let Component

  switch(window.location.pathname) {


    case "/":
      Component = HomePage
      break

      case "/PredictiveAnalytics":
        Component = PredictiveAnalyticsPage
        break

        case "/NaturalLanguageProcessing":
        Component = NaturalLanguageProcessingPage
        break

        case "/AutomatedMarketing":
        Component = AutomatedMarketingPage
        break

        case "/DataDrivenInsights":
          Component = DataDrivenInsightsPage
          break
        
          case "/LoginPage":
            Component = LoginPage
            break

            case "/SignUpPage":
            Component = SignUpPage
            break

            case "/PasswordRecoveryPage":
              Component = PasswordRecoveryPage
              break

              case "/ServicePlansPage":
              Component = ServicePlansPage
              break

              case "/PaymentPage":
              Component = PaymentPage
              break
      
     


          


  }
  return (
    <div className="App">
      

      
     
      <Component />

    


    </div>
  );
}

export default App;