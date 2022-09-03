const { readFileSync } = require('fs');
const { join } = require('path');
const conn = require('./connection');

const build = () => {
  const buildSQL = readFileSync(join(__dirname, 'build.sql')).toString();
  const testDataSQL = readFileSync(join(__dirname, 'testData.sql')).toString();

  return conn.query(buildSQL + testDataSQL);
};

module.exports = build;
