/*const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! ppppp');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/


/*const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.get('/sum', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('يرجى إرسال قيم صالحة لـ a و b');
  }

  const sum = a + b;

  res.json({ sum: sum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/
const express = require('express');
const app = express();
const port = 3000;
const xlsx = require('xlsx');
const fs = require('fs');
const cors = require('cors');
app.use(cors());

const workbook = xlsx.readFile('data.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

app.get('/GET', (req, res) => {
  const a = req.query.a;  // قيمة a من الاستعلام
  const b = req.query.b;  // قيمة b من الاستعلام

  if (!a || !b) {
    return res.status(400).send('يرجى إرسال قيم صالحة لـ a و b');
  }
  const filteredData = data.filter(row => row["First Name"] === a);

  res.json({ filteredData: filteredData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
