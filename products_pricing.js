const defaultTiers = [
  { up_to: 5000, price: 0 },
  { up_to: 10000, price: 0 },
  { up_to: 25000, price: 0 },
  { up_to: 50000, price: 0 },
  { up_to: Infinity, price: 0 },
];

const products = {
  "/api/v3/bankverification/consumer": {
    description: "Consumer Bank Verification",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/v1/bankverification/consumer": {
    description: "Consumer Bank Verification",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/kyc/verification": {
    description: "Know Your Customer (KYC) Verification",
    tiers: [
    { up_to: 5000, price: 3.0 },
    { up_to: 10000, price: 2.7825 },
    { up_to: 25000, price: 2.580769 },
    { up_to: 50000, price: 2.393663 },
    { up_to: Infinity, price: 2.220122 }
    ]
  },
  "/api/consumer/expresstrace": {
    description: "Express Consumer Trace",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/consumer/expresstrace/pdfreport": {
    description: "Consumer trace PDF report (second call)",
    tiers: [
    { up_to: 5000, price: 3.0 },
    { up_to: 10000, price: 2.7825 },
    { up_to: 25000, price: 2.580769 },
    { up_to: 50000, price: 2.393663 },
    { up_to: Infinity, price: 2.220122 }
    ]
  },
  "/api/v2/consumertrace": {
    description: "Full Consumer Trace",
    tiers: [
    { up_to: 5000, price: 12.0 },
    { up_to: 10000, price: 11.13 },
    { up_to: 25000, price: 10.323075 },
    { up_to: 50000, price: 9.574652 },
    { up_to: Infinity, price: 8.88049 }
    ]
  },
  "/api/liveidphotoverification": {
    description: "Live ID Photo Verification",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/v2/idphotoverification": {
    description: "Basic ID Verification (real-time DoHA)",
    tiers: [
    { up_to: 5000, price: 4.0 },
    { up_to: 10000, price: 3.71 },
    { up_to: 25000, price: 3.441025 },
    { up_to: 50000, price: 3.191551 },
    { up_to: Infinity, price: 2.960163 }
    ]
  },
  "/api/v3/idverification": {
    description: "ID Verification",
    tiers: [
    { up_to: 5000, price: 3.0 },
    { up_to: 10000, price: 2.7825 },
    { up_to: 25000, price: 2.580769 },
    { up_to: 50000, price: 2.393663 },
    { up_to: Infinity, price: 2.220122 }
    ]
  },
  "/api/consumertrace": {
    description: "Consumer Trace",
    tiers: [
    { up_to: 5000, price: 51.0 },
    { up_to: 10000, price: 47.3025 },
    { up_to: 25000, price: 43.873069 },
    { up_to: 50000, price: 40.692271 },
    { up_to: Infinity, price: 37.742082 }
    ]
  },
  "/api/idverification": {
    description: "ID Verification",
    tiers: [
    { up_to: 5000, price: 51.0 },
    { up_to: 10000, price: 47.3025 },
    { up_to: 25000, price: 43.873069 },
    { up_to: 50000, price: 40.692271 },
    { up_to: Infinity, price: 37.742082 }
    ]
  },
  "/api/searchphonenumber": {
    description: "Search Phone Number",
    tiers: [
    { up_to: 5000, price: 38.0 },
    { up_to: 10000, price: 35.245 },
    { up_to: 25000, price: 32.689737 },
    { up_to: 50000, price: 30.319732 },
    { up_to: Infinity, price: 28.121551 }
    ]
  },
  "/api/realtimeidverification": {
    description: "Real-time ID Verification",
    tiers: [
    { up_to: 5000, price: 33.0 },
    { up_to: 10000, price: 30.6075 },
    { up_to: 25000, price: 28.388456 },
    { up_to: 50000, price: 26.330293 },
    { up_to: Infinity, price: 24.421347 }
    ]
  },
  "/api/v2/idverification": {
    description: "Non-SA ID Verification (NG, KE, GH, ZM, UG)",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/bankstatement/liquidity": {
    description: "Liquidity Score",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/bankstatement/risk": {
    description: "Risk Score",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/bankstatement/behavioral-risk": {
    description: "Behavioural Risk Score",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/bankstatement/transactions": {
    description: "Transactions",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/bankstatement/upload": {
    description: "Bank statement upload",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/v3/bankverification/business": {
    description: "Basic bank account verification - SA only",
    tiers: [
    { up_to: 5000, price: 5.0 },
    { up_to: 10000, price: 4.6375 },
    { up_to: 25000, price: 4.301281 },
    { up_to: 50000, price: 3.989438 },
    { up_to: Infinity, price: 3.700204 }
    ]
  },
  "/api/kyb/verification": {
    description: "Know Your Business (KYB) Verification",
    tiers: [
    { up_to: 5000, price: 76.0 },
    { up_to: 10000, price: 70.49 },
    { up_to: 25000, price: 65.379475 },
    { up_to: 50000, price: 60.639463 },
    { up_to: Infinity, price: 56.243102 }
    ]
  },
  "/enterprise/basicinformation": {
    description: "Company basic information",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/companydirectors": {
    description: "Company directors",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/efilinghistory": {
    description: "Efilinghistory",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/officeaddresses": {
    description: "Company Office Address",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/companyprofile": {
    description: "Company Profile",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/directorprofile": {
    description: "Director Verification",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/enterprise/directorverification": {
    description: "Director Profile",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/v1/bankverification": {
    description: "Bank Verification",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/commercial/businesssearch": {
    description: "Transunion Business Search",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/businessdetails": {
    description: "Business Details",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/v2/fullbusinessdetails": {
    description: "Global Business Details",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/v2/searchcompanies": {
    description: "Global Company Search",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/v2/searchdirector": {
    description: "Directorship global search",
    tiers: [
    { up_to: 5000, price: 15.0 },
    { up_to: 10000, price: 13.9125 },
    { up_to: 25000, price: 12.903844 },
    { up_to: 50000, price: 11.968315 },
    { up_to: Infinity, price: 11.100612 }
    ]
  },
  "/api/searchdirector": {
    description: "Search Director",
    tiers: [
    { up_to: 5000, price: 76.0 },
    { up_to: 10000, price: 70.49 },
    { up_to: 25000, price: 65.379475 },
    { up_to: 50000, price: 60.639463 },
    { up_to: Infinity, price: 56.243102 }
    ]
  },
  "/api/v2/businessdetails": {
    description: "Global Business Details",
    tiers: [
    { up_to: 5000, price: 103.0 },
    { up_to: 10000, price: 95.5325 },
    { up_to: 25000, price: 88.606394 },
    { up_to: 50000, price: 82.18243 },
    { up_to: Infinity, price: 76.224204 }
    ]
  },
  "/api/commercial/transunionreport": {
    description: "TransUnion Commercial Credit Report",
    tiers: [
    { up_to: 5000, price: 199.0 },
    { up_to: 10000, price: 184.5725 },
    { up_to: 25000, price: 171.190994 },
    { up_to: 50000, price: 158.779647 },
    { up_to: Infinity, price: 147.268122 }
    ]
  },
  "/api/commercial/transunionreportpdf": {
    description: "TransUnion Commercial Credit Report PDF",
    tiers: [
    { up_to: 5000, price: 199.0 },
    { up_to: 10000, price: 184.5725 },
    { up_to: 25000, price: 171.190994 },
    { up_to: 50000, price: 158.779647 },
    { up_to: Infinity, price: 147.268122 }
    ]
  },
  "/api/consumer/transunionreport": {
    description: "TransUnion Consumer Credit Report",
    tiers: [
    { up_to: 5000, price: 48.0 },
    { up_to: 10000, price: 44.52 },
    { up_to: 25000, price: 41.2923 },
    { up_to: 50000, price: 38.298608 },
    { up_to: Infinity, price: 35.521959 }
    ]
  },
  "/api/consumer/transunionreportpdf": {
    description: "TransUnion Consumer Credit Report PDF",
    tiers: [
    { up_to: 5000, price: 48.0 },
    { up_to: 10000, price: 44.52 },
    { up_to: 25000, price: 41.2923 },
    { up_to: 50000, price: 38.298608 },
    { up_to: Infinity, price: 35.521959 }
    ]
  },
  "/api/transunionreport": {
    description: "Commercial Credit Report (second call)",
    tiers: [
    { up_to: 5000, price: 506.0 },
    { up_to: 10000, price: 469.315 },
    { up_to: 25000, price: 435.289663 },
    { up_to: 50000, price: 403.731162 },
    { up_to: Infinity, price: 374.460653 }
    ]
  },
  "/api/v2/transunionverification": {
    description: "Transunion Commercial Verification",
    tiers: [
    { up_to: 5000, price: 582.0 },
    { up_to: 10000, price: 539.805 },
    { up_to: 25000, price: 500.669137 },
    { up_to: 50000, price: 464.370625 },
    { up_to: Infinity, price: 430.703755 }
    ]
  },
  "/api/transunionverification": {
    description: "Commercial Search/ Transunion Verification",
    tiers: [
    { up_to: 5000, price: 76.0 },
    { up_to: 10000, price: 70.49 },
    { up_to: 25000, price: 65.379475 },
    { up_to: 50000, price: 60.639463 },
    { up_to: Infinity, price: 56.243102 }
    ]
  },
  "/api/consumerexperianreport": {
    description: "Consumer Experian Credit Report",
    tiers: [
    { up_to: 5000, price: 266.0 },
    { up_to: 10000, price: 246.715 },
    { up_to: 25000, price: 228.828162 },
    { up_to: 50000, price: 212.238121 },
    { up_to: Infinity, price: 196.850857 }
    ]
  },
  "/api/expresscreditscore": {
    description: "expressCreditScore / Express Consumer Credit Score",
    tiers: [
    { up_to: 5000, price: 30.0 },
    { up_to: 10000, price: 27.825 },
    { up_to: 25000, price: 25.807688 },
    { up_to: 50000, price: 23.93663 },
    { up_to: Infinity, price: 22.201224 }
    ]
  },
  "/api/commercial/amlpep": {
    description: "Commercial AML/PEP",
    tiers: [
    { up_to: 5000, price: 2.0 },
    { up_to: 10000, price: 1.855 },
    { up_to: 25000, price: 1.720512 },
    { up_to: 50000, price: 1.595775 },
    { up_to: Infinity, price: 1.480082 }
    ]
  },
  "/api/consumer/hawks": {
    description: "Consumer Hawks",
    tiers: [
    { up_to: 5000, price: 6.0 },
    { up_to: 10000, price: 5.565 },
    { up_to: 25000, price: 5.161537 },
    { up_to: 50000, price: 4.787326 },
    { up_to: Infinity, price: 4.440245 }
    ]
  },
  "/api/v3/amlpep": {
    description: "Consumer AML/PEP",
    tiers: [
    { up_to: 5000, price: 2.0 },
    { up_to: 10000, price: 1.855 },
    { up_to: 25000, price: 1.720512 },
    { up_to: 50000, price: 1.595775 },
    { up_to: Infinity, price: 1.480082 }
    ]
  },
  "/api/v2/amlpep": {
    description: "Global Consumer AML/PEP",
    tiers: [
    { up_to: 5000, price: 9.0 },
    { up_to: 10000, price: 8.3475 },
    { up_to: 25000, price: 7.742306 },
    { up_to: 50000, price: 7.180989 },
    { up_to: Infinity, price: 6.660367 }
    ]
  },
};
