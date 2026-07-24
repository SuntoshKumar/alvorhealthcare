const fs = require('fs');
const path = require('path');

const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'categories.json'), 'utf-8'));

const therapeuticCategories = [
  "cardiovascular", "neurology", "gastroenterology", "respiratory",
  "anti-infective", "pain-management", "endocrinology", "dermatology",
  "oncology", "psychiatry",
];

const compositions = [
  "Paracetamol 500mg", "Ibuprofen 400mg", "Amoxicillin 500mg", "Omeprazole 20mg",
  "Metformin 500mg", "Atorvastatin 20mg", "Amlodipine 5mg", "Losartan 50mg",
  "Cetirizine 10mg", "Vitamin D3 1000 IU", "Vitamin B12 500"]