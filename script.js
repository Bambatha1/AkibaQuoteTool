
// =========================
// Tiered Pricing Catalog (generated)
// =========================
const defaultTiers = [
  { up_to: 5000, price: 0 },
  { up_to: 10000, price: 0 },
  { up_to: 25000, price: 0 },
  { up_to: 50000, price: 0 },
  { up_to: Infinity, price: 0 },
];

const planFees = {
  starter: 40000,
  growth: 75000,
  enterprise: 120000,
};

const decisionPrices = {
  starter: 0.35,
  growth: 0.55,
  enterprise: 0.8,
};

const products = {
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
  "/api/v4/idverification": {
    description: "Basic ID verification (SA only)",
    tiers: [
    { up_to: 5000, price: 3.0 },
    { up_to: 10000, price: 2.7825 },
    { up_to: 25000, price: 2.580769 },
    { up_to: 50000, price: 2.393663 },
    { up_to: Infinity, price: 2.220122 }
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
};


// =========================
// Helpers & Engine
// =========================
function money(amount, currency = "ZAR") {
  const symbol = currency === "USD" ? "$" : "R";
  const formatted = Number(amount || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
}

function getUnitPrice(endpoint, volume) {
  const cfg = products[endpoint];
  const tiers = cfg?.tiers || defaultTiers;
  for (const t of tiers) {
    if (volume <= t.up_to) return t.price;
  }
  return tiers[tiers.length - 1].price;
}

// Build product list from products object (preserve a deterministic order)
const productList = Object.entries(products).map(([endpoint, obj]) => [endpoint, obj.description]);

function createProductSelect() {
  const sel = document.createElement("select");
  sel.className = "product-select";
  sel.required = true;
  // Sort by description then endpoint
  productList.sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
  productList.forEach(([endpoint, desc]) => {
    const opt = document.createElement("option");
    opt.value = endpoint;
    opt.textContent = `${endpoint} – ${desc}`;
    sel.appendChild(opt);
  });
  return sel;
}

function createNumberInput(min = 0, value = "") {
  const inp = document.createElement("input");
  inp.type = "number";
  inp.min = String(min);
  if (value !== "") inp.value = value;
  inp.required = true;
  return inp;
}

function recalcAll() {
  const currency = document.getElementById("currency").value;
  const plan = document.getElementById("plan")?.value || "starter";
  const apiOnly = document.getElementById("apiOnly")?.checked || false;
  const decisionVol = Number(document.getElementById("decisionVolume")?.value || 0);
  const contractMonths = Number(document.getElementById("contractMonths")?.value || 0);
  const rows = Array.from(document.querySelectorAll("#lineItemsBody tr"));

  let subtotal = 0;

  rows.forEach((row) => {
    const productSel = row.querySelector("select.product-select");
    const volumeInp = row.querySelector("input.volume");
    const monthsInp = row.querySelector("input.months");
    const unitCell = row.querySelector(".unitPrice");
    const monthlyCell = row.querySelector(".monthlyCost");
    const lineTotalCell = row.querySelector(".lineTotal");

    const endpoint = productSel.value;
    const volume = Number(volumeInp.value || 0);
    const months = Number(monthsInp.value || 0);

    const unit = getUnitPrice(endpoint, volume);
    const monthly = unit * volume;
    const lineTotal = monthly * months;

    unitCell.textContent = money(unit, currency);
    monthlyCell.textContent = money(monthly, currency);
    lineTotalCell.textContent = money(lineTotal, currency);

    subtotal += lineTotal;
  });

  const platformMonthly = planFees[plan];
  const decisionUnit = decisionPrices[plan];
  const platformTotal = apiOnly ? 0 : platformMonthly * contractMonths;
  const decisionMonthly = decisionUnit * decisionVol;
  const decisionTotal = decisionMonthly * contractMonths;
  subtotal += platformTotal + decisionTotal;

  const applyVAT = document.getElementById("applyVAT").checked;
  const vatRate = Number(document.getElementById("vatRate").value || 0) / 100;
  const vat = applyVAT ? subtotal * vatRate : 0;
  const total = subtotal + vat;

  document.getElementById("subtotalDisplay").textContent = money(subtotal, currency);
  document.getElementById("vatDisplay").textContent = money(vat, currency);
  document.getElementById("grandTotalDisplay").textContent = money(total, currency);

  return {
    subtotal,
    vat,
    total,
    currency,
    plan,
    apiOnly,
    contractMonths,
    platformMonthly,
    platformTotal,
    decisionUnit,
    decisionVolume: decisionVol,
    decisionTotal,
  };
}

function addLineRow(preset = {}) {
  const tbody = document.getElementById("lineItemsBody");
  const tr = document.createElement("tr");

  const tdProd = document.createElement("td");
  const prodSel = createProductSelect();
  if (preset.endpoint && products[preset.endpoint]) prodSel.value = preset.endpoint;
  tdProd.appendChild(prodSel);

  const tdVol = document.createElement("td");
  const volInp = createNumberInput(1, preset.volume ?? "");
  volInp.className = "volume";
  volInp.placeholder = "e.g. 12000";
  tdVol.appendChild(volInp);

  const tdUnit = document.createElement("td");
  tdUnit.className = "unitPrice";
  tdUnit.textContent = money(0);

  const tdMonthly = document.createElement("td");
  tdMonthly.className = "monthlyCost";
  tdMonthly.textContent = money(0);

  const tdMonths = document.createElement("td");
  const monthsInp = createNumberInput(1, preset.months ?? 12);
  monthsInp.className = "months";
  tdMonths.appendChild(monthsInp);

  const tdLineTotal = document.createElement("td");
  tdLineTotal.className = "lineTotal";
  tdLineTotal.textContent = money(0);

  const tdRemove = document.createElement("td");
  const rmBtn = document.createElement("button");
  rmBtn.type = "button";
  rmBtn.className = "remove-btn";
  rmBtn.textContent = "Remove";
  rmBtn.addEventListener("click", () => { tr.remove(); recalcAll(); });
  tdRemove.appendChild(rmBtn);

  tr.appendChild(tdProd);
  tr.appendChild(tdVol);
  tr.appendChild(tdUnit);
  tr.appendChild(tdMonthly);
  tr.appendChild(tdMonths);
  tr.appendChild(tdLineTotal);
  tr.appendChild(tdRemove);

  tbody.appendChild(tr);

  [prodSel, volInp, monthsInp].forEach((el) => el.addEventListener("input", recalcAll));

  recalcAll();
}

function renderQuoteHTML(totals) {
  const company = document.getElementById("company").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const industry = document.getElementById("industry").value;
  const preparedBy = document.getElementById("preparedBy").value;
  const quoteDate = document.getElementById("quoteDate").value;
  const quoteNumber = document.getElementById("quoteNumber").value;
  const notes = document.getElementById("generalNotes").value;
  const currency = totals.currency;

  const rows = Array.from(document.querySelectorAll("#lineItemsBody tr")).map((row) => {
    const endpoint = row.querySelector("select").value;
    const desc = products[endpoint]?.description || "";
    const volume = Number(row.querySelector("input.volume").value || 0);
    const months = Number(row.querySelector("input.months").value || 0);
    const unit = getUnitPrice(endpoint, volume);
    const monthly = unit * volume;
    const lineTotal = monthly * months;
    return { endpoint, desc, volume, months, unit, monthly, lineTotal };
  });

  if (!totals.apiOnly) {
    rows.push({
      endpoint: "Platform Fee",
      desc: `Monthly Platform Fee (${totals.plan})`,
      volume: "-",
      months: totals.contractMonths,
      unit: totals.platformMonthly,
      monthly: totals.platformMonthly,
      lineTotal: totals.platformTotal,
    });
  }

  if (totals.decisionVolume > 0) {
    rows.push({
      endpoint: "Decisions",
      desc: "Per Decision Pricing",
      volume: totals.decisionVolume,
      months: totals.contractMonths,
      unit: totals.decisionUnit,
      monthly: totals.decisionUnit * totals.decisionVolume,
      lineTotal: totals.decisionTotal,
    });
  }

  const linesHTML = rows.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><div><strong>${r.endpoint}</strong><br/><span>${r.desc}</span></div></td>
      <td style="text-align:right;">${r.volume}</td>
      <td style="text-align:right;">${money(r.unit, currency)}</td>
      <td style="text-align:right;">${money(r.monthly, currency)}</td>
      <td style="text-align:right;">${r.months}</td>
      <td style="text-align:right;">${money(r.lineTotal, currency)}</td>
    </tr>`).join("");

  const vatRate = document.getElementById("applyVAT").checked
    ? Number(document.getElementById("vatRate").value || 0)
    : 0;

  return `
    <div style="font-family: Arial, sans-serif; color:#111;">
      <h2 style="color:#20335b; margin:0 0 8px;">Quotation</h2>
      <p style="margin:0 0 16px; color:#374151;">Quote #: <strong>${quoteNumber || "TBD"}</strong> &nbsp;|&nbsp; Date: <strong>${quoteDate || ""}</strong></p>

      <table style="width:100%; border-collapse: collapse; margin-bottom: 16px; font-size: 12px;">
        <tr>
          <td style="width:50%; vertical-align:top;">
            <h3 style="color:#20335b; margin:0 0 8px; font-size: 16px;">Customer</h3>
            <p style="margin: 0 0 4px;"><strong>${company}</strong></p>
            <p style="margin: 0 0 4px;">${contact}</p>
            <p style="margin: 0 0 4px;">${email}</p>
            <p style="margin: 0 0 4px;">Industry: ${industry}</p>
          </td>
          <td style="width:50%; vertical-align:top;">
            <h3 style="color:#20335b; margin:0 0 8px; font-size: 16px;">Prepared By</h3>
            <p style="margin: 0 0 4px;">${preparedBy}</p>
            <p style="margin: 0 0 4px;">Akiba Digital</p>
          </td>
        </tr>
      </table>

      <table style="width:100%; border-collapse: collapse; font-size: 12px;">
        <thead>
          <tr style="background:#f3f4f6;">
            <th style="text-align:left; padding:8px; border:1px solid #e5e7eb;">#</th>
            <th style="text-align:left; padding:8px; border:1px solid #e5e7eb;">Product</th>
            <th style="text-align:right; padding:8px; border:1px solid #e5e7eb;">Volume / mo</th>
            <th style="text-align:right; padding:8px; border:1px solid #e5e7eb;">Unit</th>
            <th style="text-align:right; padding:8px; border:1px solid #e5e7eb;">Monthly</th>
            <th style="text-align:right; padding:8px; border:1px solid #e5e7eb;">Months</th>
            <th style="text-align:right; padding:8px; border:1px solid #e5e7eb;">Line Total</th>
          </tr>
        </thead>
        <tbody>${linesHTML}</tbody>
      </table>

      <table style="width: 50%; margin-left:auto; border-collapse: collapse; font-size: 12px;">
        <tr>
          <td style="padding:8px; border:1px solid #e5e7eb;">Subtotal</td>
          <td style="padding:8px; border:1px solid #e5e7eb; text-align:right;">${money(totals.subtotal, currency)}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #e5e7eb;">VAT (${vatRate.toFixed(2)}%)</td>
          <td style="padding:8px; border:1px solid #e5e7eb; text-align:right;">${money(totals.vat, currency)}</td>
        </tr>
        <tr style="background:#111827; color:#fff; font-weight:600;">
          <td style="padding:8px; border:1px solid #111827;">Total Contract Value</td>
          <td style="padding:8px; border:1px solid #111827; text-align:right;">${money(totals.total, currency)}</td>
        </tr>
      </table>

      ${notes ? `<div style="margin-top:16px; font-size:12px;"><strong>Notes:</strong><br/>${notes.replace(/\n/g, "<br/>")}</div>` : ""}

      <p style="margin-top:24px; font-size:11px; color:#6b7280;">Pricing is based on graduated per-call unit pricing with a discount applied at each higher tier. Actual billing reflects metered usage per endpoint and contracted terms. Additional data provider fees may apply for specific reports or jurisdictions.</p>
    </div>`;
}

function downloadQuoteAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const img = new Image();
  img.src = "akiba_logo.png";
  img.onload = () => {
    doc.addImage(img, "PNG", 36, 20, 100, 40); // adjust size and position as needed
    doc.html(window.latestQuoteHTML || document.getElementById("quoteResult").innerHTML, {
      x: 36,
      y: 70, // adjust to provide space for the logo
      width: 523,
      windowWidth: 1024,
      callback: function (doc) {
        doc.save("Akiba_Quote.pdf");
      }
    });
  };
}

window.addEventListener("DOMContentLoaded", () => {
  const qd = document.getElementById("quoteDate");
  if (qd && !qd.value) qd.value = new Date().toISOString().slice(0, 10);

  document.getElementById("addLineBtn").addEventListener("click", () => addLineRow());
  addLineRow();

  ["currency", "applyVAT", "vatRate", "plan", "apiOnly", "decisionVolume", "contractMonths"].forEach((id) => {
    const el = document.getElementById(id);
    el.addEventListener("input", recalcAll);
    el.addEventListener("change", recalcAll);
  });

  document.getElementById("quoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const totals = recalcAll();
    const html = renderQuoteHTML(totals);
    document.getElementById("quoteResult").innerHTML = html;
    document.getElementById("downloadBtn").style.display = "inline-block";
    window.latestQuoteHTML = html;
  });

  document.getElementById("downloadBtn").addEventListener("click", downloadQuoteAsPDF);
});
