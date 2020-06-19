const mc = require('./01Myclass')
const nu  = require('../05Module/01myUtil')

const cust1 = new mc.getHuman('john',25);
cust1.info();
const cust2 = new mc.getHuman('bobby');
cust2.info();