const env = require('./config');

Object.keys(env);

const http = require('http');
const express = require('express');

http.createServer(express());
