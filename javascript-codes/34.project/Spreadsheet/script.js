const spreadsheetContainer = document.getElementById('spreadsheet-container');
const exportBtn = document.getElementById('export-btn');
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Cell {
  constructor(isHeader, disabled, data, row, column, rowName, columnName, active = false) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

exportBtn.onclick = () => {
  // console.log('spreadsheet: ', spreadsheet);
  let csv = '';
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i == 0) continue;

    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(',') + '\r\n';
  }
  // console.log('csv: ', csv);

  const csvObj = new Blob(['\ufeff' + csv]); // ['\ufeff' + csv] : 인코딩 방식을 명시해서 한글 깨짐을 방지한다
  const csvUrl = URL.createObjectURL(csvObj);
  console.log('csvUrl: ', csvUrl);

  const a = document.createElement('a');
  a.href = csvUrl;
  a.download = 'Spreadsheet File Name.csv';
  a.click();
}

initSpreadsheet();

function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++){
      let cellData = '';
      let isHeader = false;
      let disabled = false;

      // if (i !== 0 && j == 0) {
      //   cellData = i;
      // }

      // if (i === 0 && j !== 0) {
      //   cellData = j;
      // }

      // 모든 row 첫 번째 컬럼에 숫자 넣기
      if (i === 0) {
        cellData = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }

      // 첫 번째 row의 모든 컬럼에 알파벳 넣기
      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }

      // 첫 번째 row의 컬럼은 "";
      if (!cellData) {
        cellData = '';
      }

      const rowName = i;
      const columnName = alphabets[j - 1];

      const cell = new Cell(isHeader, disabled, cellData, i, j, rowName, columnName, false);
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  
  drawSheet();
  // console.log('spreadsheet: ', spreadsheet);
}

function createCell(cell) {
  const cellEl = document.createElement('input');
  cellEl.className = 'cell';
  cellEl.id = `cell_${cell.row}${cell.column}`;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;
  
  if (cell.isHeader) {
    cellEl.classList.add('header');
  }

  cellEl.onclick = () => handleCellClick(cell);

  // input 변경될 때 cell data 수정
  cellEl.onchange= (e) => {handleOnChange(e.target.value,cell)}
  return cellEl;
}

function handleOnChange(data, cell) {
  cell.data = data;
}

function handleCellClick(cell) {
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);

  clearHeaderActiveState(); // active 초기화
  columnHeaderEl.classList.add('active');
  rowHeaderEl.classList.add('active');

  document.querySelector('#cell-status').innerHTML = cell.columnName + cell.rowName;
}

function clearHeaderActiveState() {
  const activedHeaders = document.querySelectorAll('.active');
  activedHeaders.forEach((header) => {
    header.classList.remove('active');
  });
}

function getElFromRowCol(row, col) {
  return document.getElementById(`cell_${row}${col}`);
}

function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++){
    const rowContainerEl = document.createElement('div');
    rowContainerEl.className = 'cell-row';
     
    for (let j = 0; j < spreadsheet[i].length; j++){
      const cell = spreadsheet[i][j];
      rowContainerEl.append(createCell(cell));
    }

    spreadsheetContainer.append(rowContainerEl);
  }
}
